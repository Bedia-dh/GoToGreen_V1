import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import path from 'path';
import { newsletterRateLimit, getClientIP } from '@/lib/rate-limit';
import emailjs from '@emailjs/nodejs';

interface Subscriber {
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
}

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await mkdir(dataDir, { recursive: true });
  } catch (error) {
    // Directory already exists
  }
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const data = await readFile(SUBSCRIBERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function saveSubscribers(subscribers: Subscriber[]): Promise<void> {
  await ensureDataDirectory();
  await writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function sendAdminNotification(subscriberEmail: string, isResubscription = false): Promise<void> {
  try {
    const subscriberName = subscriberEmail.split('@')[0];
    const subscriptionDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_SUBSCRIPTION_NOTIFICATION_TEMPLATE_ID!,
      {
        subscriber_email: subscriberEmail,
        subscriber_name: subscriberName,
        subscription_date: subscriptionDate,
        subscription_type: isResubscription ? 'Resubscription' : 'New Subscription',
        admin_email: process.env.ADMIN_NOTIFICATION_EMAIL || process.env.CONTACT_RECIPIENT_EMAIL,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      }
    );
  } catch (error) {
    // Don't throw error - subscription should still succeed even if notification fails
  }
}
    


export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const clientIP = getClientIP(request);
    if (!newsletterRateLimit.isAllowed(clientIP)) {
      return NextResponse.json(
        { error: 'Too many subscription attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const { email } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Get existing subscribers
    const subscribers = await getSubscribers();

    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email.toLowerCase() === email.toLowerCase());

    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter' },
          { status: 409 }
        );
      } else {
        // Reactivate unsubscribed user
        existingSubscriber.status = 'active';
        existingSubscriber.subscribedAt = new Date().toISOString();
        await saveSubscribers(subscribers);
        
        // Send admin notification for resubscription
        await sendAdminNotification(email, true);
        
        return NextResponse.json(
          { message: 'Welcome back! You have been resubscribed to our newsletter.' },
          { status: 200 }
        );
      }
    }

    // Add new subscriber
    const newSubscriber: Subscriber = {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      status: 'active',
    };

    subscribers.push(newSubscriber);
    await saveSubscribers(subscribers);

    // Send admin notification for new subscription
    await sendAdminNotification(email, false);

    return NextResponse.json(
      { message: 'Successfully subscribed! You will receive updates about our latest blog posts.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your subscription. Please try again.' },
      { status: 500 }
    );
  }
}
