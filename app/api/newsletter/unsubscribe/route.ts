import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import { newsletterRateLimit, getClientIP } from '@/lib/rate-limit';

interface Subscriber {
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
}

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const data = await readFile(SUBSCRIBERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function saveSubscribers(subscribers: Subscriber[]): Promise<void> {
  await writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const clientIP = getClientIP(request);
    if (!newsletterRateLimit.isAllowed(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const subscribers = await getSubscribers();
    const subscriber = subscribers.find(sub => sub.email.toLowerCase() === email.toLowerCase());

    if (!subscriber) {
      return NextResponse.json(
        { error: 'Email not found in our subscriber list' },
        { status: 404 }
      );
    }

    if (subscriber.status === 'unsubscribed') {
      return NextResponse.json(
        { message: 'You are already unsubscribed from our newsletter' },
        { status: 200 }
      );
    }

    // Update status to unsubscribed
    subscriber.status = 'unsubscribed';
    await saveSubscribers(subscribers);

    return NextResponse.json(
      { message: 'Successfully unsubscribed. We\'re sorry to see you go!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { error: 'Failed to process unsubscribe request' },
      { status: 500 }
    );
  }
}
