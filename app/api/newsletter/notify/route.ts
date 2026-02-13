import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import emailjs from '@emailjs/nodejs';

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

interface BlogPost {
  title: string;
  excerpt: string;
  url: string;
  publishedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const { blogPost, apiKey } = await request.json();

    // Simple API key validation
    if (apiKey !== process.env.NOTIFICATION_API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (!blogPost || !blogPost.title || !blogPost.url) {
      return NextResponse.json(
        { error: 'Blog post details are required' },
        { status: 400 }
      );
    }

    const subscribers = await getSubscribers();
    const activeSubscribers = subscribers.filter(sub => sub.status === 'active');

    if (activeSubscribers.length === 0) {
      return NextResponse.json(
        { message: 'No active subscribers to notify', count: 0 },
        { status: 200 }
      );
    }

    console.log(`📧 New blog post notification:`);
    console.log(`Title: ${blogPost.title}`);
    console.log(`Sending to ${activeSubscribers.length} subscribers`);
    
    // Send emails using EmailJS
    const emailPromises = activeSubscribers.map(async (subscriber) => {
      try {
        await emailjs.send(
          process.env.EMAILJS_SERVICE_ID!,
          process.env.EMAILJS_TEMPLATE_ID!,
          {
            email: subscriber.email,
            to_name: subscriber.email.split('@')[0],
            blog_title: blogPost.title,
            blog_excerpt: blogPost.excerpt || 'Check out our latest blog post!',
            blog_url: blogPost.url,
            published_date: new Date(blogPost.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }),
            unsubscribe_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletter/unsubscribe?email=${encodeURIComponent(subscriber.email)}`,
          },
          {
            publicKey: process.env.EMAILJS_PUBLIC_KEY!,
            privateKey: process.env.EMAILJS_PRIVATE_KEY!,
          }
        );
        
        console.log(`  ✓ ${subscriber.email}`);
        return { email: subscriber.email, status: 'sent' };
      } catch (error) {
        console.error(`  ✗ ${subscriber.email}:`, error);
        return { email: subscriber.email, status: 'failed', error };
      }
    });

    const results = await Promise.all(emailPromises);
    const successCount = results.filter(r => r.status === 'sent').length;
    const failedCount = results.filter(r => r.status === 'failed').length;

    return NextResponse.json({
      message: `Sent ${successCount} notifications successfully`,
      total: activeSubscribers.length,
      success: successCount,
      failed: failedCount,
      details: results,
    });
  } catch (error) {
    console.error('Notification error:', error);
    return NextResponse.json(
      { error: 'Failed to send notifications' },
      { status: 500 }
    );
  }
}
