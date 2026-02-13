# Newsletter System Configuration

## Quick Setup with EmailJS (Recommended)

EmailJS is the simplest way to get started - **free for up to 200 emails/month** and no backend server configuration required!

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new Email Service (Gmail, Outlook, etc.)
4. Create an Email Template

### Step 2: Create Email Template

In EmailJS dashboard, create a template with these variables:

- `{{to_email}}` - Recipient email
- `{{to_name}}` - Recipient name
- `{{blog_title}}` - Blog post title
- `{{blog_excerpt}}` - Blog excerpt
- `{{blog_url}}` - Blog post URL
- `{{published_date}}` - Publication date
- `{{unsubscribe_url}}` - Unsubscribe link

**Example Template:**

```html
Subject: 🚀 New Blog Post: {{blog_title}} Hello {{to_name}}, We've just
published a new blog post on GoToGreen! Title: {{blog_title}} {{blog_excerpt}}
Read the full article: {{blog_url}} Published: {{published_date}} --- Don't want
to receive these emails? Unsubscribe: {{unsubscribe_url}}
```

### Step 3: Configure Environment Variables

Add to your `.env.local`:

```env
# Newsletter Configuration
NOTIFICATION_API_KEY=your-secure-random-key-here
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# EmailJS Configuration
EMAILJS_SERVICE_ID=service_xxxxxxx
EMAILJS_TEMPLATE_ID=template_xxxxxxx
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key
```

Get these values from your EmailJS dashboard:

- Service ID: In "Email Services" section
- Template ID: In "Email Templates" section
- Public Key: In "Account" → "API Keys"
- Private Key: In "Account" → "API Keys"

### Step 4: Test It!

```bash
curl -X POST http://localhost:3000/api/newsletter/notify \
  -H "Content-Type: application/json" \
  -d '{
    "apiKey": "your-notification-api-key",
    "blogPost": {
      "title": "Test Blog Post",
      "excerpt": "This is a test notification",
      "url": "https://gotogreen.tech/blog/test",
      "publishedAt": "2026-01-28T10:00:00.000Z"
    }
  }'
```

## Environment Variables

Add these to your `.env.local` file:

```env
# Newsletter Configuration
NOTIFICATION_API_KEY=your-secure-random-key-here
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# EmailJS (Recommended - Simple & Free)
EMAILJS_SERVICE_ID=service_xxxxxxx
EMAILJS_TEMPLATE_ID=template_xxxxxxx
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key
```

## API Endpoints

### 1. Subscribe to Newsletter

```bash
POST /api/newsletter/subscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Responses:**

- `201` - Successfully subscribed
- `400` - Invalid email
- `409` - Already subscribed
- `500` - Server error

### 2. Unsubscribe from Newsletter

```bash
POST /api/newsletter/unsubscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Responses:**

- `200` - Successfully unsubscribed
- `404` - Email not found
- `500` - Server error

### 3. Get All Subscribers (Admin)

```bash
GET /api/newsletter/subscribers
```

**Response:**

```json
{
  "total": 10,
  "subscribers": [
    {
      "email": "user@example.com",
      "subscribedAt": "2026-01-28T10:00:00.000Z"
    }
  ]
}
```

### 4. Notify Subscribers (Admin)

```bash
POST /api/newsletter/notify
Content-Type: application/json

{
  "apiKey": "your-notification-api-key",
  "blogPost": {
    "title": "New Blog Post Title",
    "excerpt": "Brief description of the post",
    "url": "https://gotogreen.tech/blog/post-slug",
    "publishedAt": "2026-01-28T10:00:00.000Z"
  }

```

## Usage Examples

### Notify Subscribers When Publishing a Blog Post

```typescript
import { notifySubscribers } from "@/lib/newsletter";

// After publishing a blog post
await notifySubscribers({
  title: "Getting Started with Next.js 16",
  excerpt: "Learn the latest features and improvements in Next.js 16",
  url: "https://gotogreen.tech/blog/nextjs-16-guide",
  publishedAt: new Date().toISOString(),
});
```

### Get Active Subscribers Count

```typescript
import { getActiveSubscribers } from "@/lib/newsletter";

const subscribers = await getActiveSubscribers();
console.log(`Total subscribers: ${subscribers.length}`);
```

## Email Service Integration

### Option 1: SendGrid

Install the package:

```bash
npm install @sendgrid/mail
```

Update `/api/newsletter/notify/route.ts`:

```typescript
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In the notify function
await sgMail.send({
  to: subscriber.email,
  from: "newsletter@gotogreen.tech",
  subject: `New Blog Post: ${blogPost.title}`,
  html: generateEmailTemplate(blogPost, subscriber.email),
});
```

### Option 2: Resend

Install the package:

```bash
npm install resend
```

Update `/api/newsletter/notify/route.ts`:

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// In the notify function
await resend.emails.send({
  from: "GoToGreen <newsletter@gotogreen.tech>",
  to: subscriber.email,
  subject: `New Blog Post: ${blogPost.title}`,
  html: generateEmailTemplate(blogPost, subscriber.email),
});
```

## Testing

### Test Subscription

```bash
curl -X POST http://localhost:3000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### Test Notification

```bash
curl -X POST http://localhost:3000/api/newsletter/notify \
  -H "Content-Type: application/json" \
  -d '{
    "apiKey": "your-api-key",
    "blogPost": {
      "title": "Test Post",
      "excerpt": "This is a test",
      "url": "https://example.com/test",
      "publishedAt": "2026-01-28T10:00:00.000Z"
    }
  }'
```

## Security Notes

1. **API Key Protection**: Store `NOTIFICATION_API_KEY` securely in environment variables
2. **Rate Limiting**: Consider adding rate limiting to prevent abuse
3. **Email Validation**: The system validates email format before storage
4. **GDPR Compliance**: Unsubscribe link included in all emails
5. **Data Storage**: Currently using JSON file - consider migrating to database for production

## Production Checklist

- [ ] Set up email service provider (SendGrid/Resend/Mailchimp)
- [ ] Configure domain authentication for emails
- [ ] Add rate limiting to API endpoints
- [ ] Set up monitoring for failed email deliveries
- [ ] Implement email queue for large subscriber lists
- [ ] Add analytics tracking for email opens/clicks
- [ ] Create admin dashboard for subscriber management
- [ ] Set up automated testing for email templates
- [ ] Configure backup for subscriber data
- [ ] Add CAPTCHA to subscription form (optional)
