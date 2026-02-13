import { readFile } from 'fs/promises';
import path from 'path';

interface Subscriber {
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
}

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

/**
 * Get all active subscribers
 */
export async function getActiveSubscribers(): Promise<Subscriber[]> {
  try {
    const data = await readFile(SUBSCRIBERS_FILE, 'utf-8');
    const subscribers: Subscriber[] = JSON.parse(data);
    return subscribers.filter(sub => sub.status === 'active');
  } catch (error) {
    console.error('Error reading subscribers:', error);
    return [];
  }
}

/**
 * Notify subscribers about a new blog post
 * @param blogPost - Blog post details
 * @returns Promise with notification results
 */
export async function notifySubscribers(blogPost: {
  title: string;
  excerpt?: string;
  url: string;
  publishedAt?: string;
}) {
  try {
    const response = await fetch('/api/newsletter/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blogPost: {
          ...blogPost,
          publishedAt: blogPost.publishedAt || new Date().toISOString(),
        },
        apiKey: process.env.NOTIFICATION_API_KEY,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send notifications');
    }

    return await response.json();
  } catch (error) {
    console.error('Error notifying subscribers:', error);
    throw error;
  }
}

/**
 * Generate email template for blog post notification
 */
export function generateBlogNotificationEmail(
  blogPost: {
    title: string;
    excerpt?: string;
    url: string;
    publishedAt?: string;
  },
  subscriberEmail: string
): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://gotogreen.tech';
  const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(subscriberEmail)}`;

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <!-- Header -->
            <tr>
              <td style="background: linear-gradient(135deg, #0F3D23 0%, #6EA843 100%); color: white; padding: 40px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px;">🚀 New from GoToGreen</h1>
              </td>
            </tr>
            
            <!-- Content -->
            <tr>
              <td style="padding: 40px;">
                <h2 style="color: #0F3D23; margin-top: 0; font-size: 24px;">${blogPost.title}</h2>
                <p style="color: #5F6B63; font-size: 16px; line-height: 1.8;">
                  ${blogPost.excerpt || 'Check out our latest insights on technology and innovation.'}
                </p>
                
                <table cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                  <tr>
                    <td style="border-radius: 6px; background-color: #6EA843;">
                      <a href="${blogPost.url}" style="display: inline-block; padding: 14px 28px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 16px;">
                        Read Full Article →
                      </a>
                    </td>
                  </tr>
                </table>
                
                ${blogPost.publishedAt ? `
                <p style="color: #999; font-size: 14px; margin-top: 20px;">
                  Published on ${new Date(blogPost.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                ` : ''}
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td style="background-color: #f7f9f7; padding: 30px; text-align: center; border-top: 1px solid #e5e5e5;">
                <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">
                  Thank you for being a valued subscriber!
                </p>
                <p style="margin: 0; color: #999; font-size: 12px;">
                  <a href="${unsubscribeUrl}" style="color: #6EA843; text-decoration: none;">Unsubscribe</a> from these emails
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}
