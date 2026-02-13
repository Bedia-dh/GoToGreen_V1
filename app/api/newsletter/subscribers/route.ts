import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

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

export async function GET(request: NextRequest) {
  try {
    const subscribers = await getSubscribers();
    const activeSubscribers = subscribers.filter(sub => sub.status === 'active');

    return NextResponse.json({
      total: activeSubscribers.length,
      subscribers: activeSubscribers.map(sub => ({
        email: sub.email,
        subscribedAt: sub.subscribedAt,
      })),
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}
