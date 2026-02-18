import { NextRequest, NextResponse } from 'next/server';
import { newsletterRateLimit, getClientIP } from '@/lib/rate-limit';
import emailjs from '@emailjs/nodejs';

interface Subscriber {
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
}

// For local development only - won't work on Vercel
const subscribersCache: Subscriber[] = [];

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
    console.error('Failed to send admin notification:', error);
    throw error; // Re-throw to ensure we know if notification fails
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

    // Check in-memory cache (for development) - production relies on email notifications
    const existingSubscriber = subscribersCache.find(sub => sub.email.toLowerCase() === email.toLowerCase());

    if (existingSubscriber && existingSubscriber.status === 'active') {
      return NextResponse.json(
        { error: 'This email is already subscribed to our newsletter' },
        { status: 409 }
      );
    }

    // Add to cache (memory only - for current session)
    const newSubscriber: Subscriber = {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      status: 'active',
    };

    subscribersCache.push(newSubscriber);

    // Send admin notification - this is the permanent record on production
    try {
      await sendAdminNotification(email, existingSubscriber ? true : false);
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      return NextResponse.json(
        { error: 'Failed to complete subscription. Please try again.' },
        { status: 500 }
      );
    }

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
