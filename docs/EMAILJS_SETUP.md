# EmailJS Setup Guide for GoToGreen Newsletter

## Why EmailJS?

✅ **Free** - Up to 200 emails/month  
✅ **Simple** - No backend server configuration  
✅ **Quick** - Set up in 5 minutes  
✅ **Reliable** - Works with Gmail, Outlook, and more

## Step-by-Step Setup

### 1. Create EmailJS Account

1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service

1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (Recommended for testing)
   - Outlook
   - Yahoo
   - Custom SMTP
4. Follow the connection instructions
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

**Template Name:** Blog Notification

**Subject Line:**

```
🚀 New from GoToGreen: {{blog_title}}
```

**Content (HTML):**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #0f3d23 0%, #6ea843 100%);
        color: white;
        padding: 30px;
        text-align: center;
        border-radius: 8px;
      }
      .content {
        background: #ffffff;
        padding: 30px;
      }
      .button {
        display: inline-block;
        padding: 12px 24px;
        background: #6ea843;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        margin: 20px 0;
      }
      .footer {
        text-align: center;
        padding: 20px;
        color: #666;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🚀 New Blog Post from GoToGreen</h1>
      </div>
      <div class="content">
        <p>Hello {{to_name}},</p>
        <h2>{{blog_title}}</h2>
        <p>{{blog_excerpt}}</p>
        <a href="{{blog_url}}" class="button">Read Full Article →</a>
        <p><small>Published on {{published_date}}</small></p>
      </div>
      <div class="footer">
        <p>Thank you for being a valued subscriber!</p>
        <p>
          <small><a href="{{unsubscribe_url}}">Unsubscribe</a></small>
        </p>
      </div>
    </div>
  </body>
</html>
```

4. In "Settings", set:
   - **To Email:** `{{to_email}}`
   - Leave other fields as default
5. Click "Save"
6. Copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get API Keys

1. Go to "Account" → "General"
2. Find your **Public Key** (starts with a long string)
3. Go to "Account" → "API Keys"
4. Create a new **Private Key** if you don't have one
5. Copy both keys

### 5. Configure Your Project

Create/edit `.env.local` in your project root:

```env
# Newsletter API Protection
NOTIFICATION_API_KEY=my-secure-random-key-12345

# Base URL (update for production)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# EmailJS Configuration
EMAILJS_SERVICE_ID=service_abc123
EMAILJS_TEMPLATE_ID=template_xyz789
EMAILJS_PUBLIC_KEY=your_public_key_here
EMAILJS_PRIVATE_KEY=your_private_key_here
```

### 6. Test Your Setup

1. Start your dev server:

```bash
npm run dev
```

2. Subscribe to the newsletter from your website footer

3. Test sending a notification:

```bash
curl -X POST http://localhost:3000/api/newsletter/notify \
  -H "Content-Type: application/json" \
  -d '{
    "apiKey": "my-secure-random-key-12345",
    "blogPost": {
      "title": "Getting Started with Next.js",
      "excerpt": "Learn the basics of Next.js in this comprehensive guide.",
      "url": "http://localhost:3000/blog/nextjs-guide",
      "publishedAt": "2026-01-28T10:00:00.000Z"
    }
  }'
```

4. Check your email inbox!

## Troubleshooting

### Emails Not Sending

1. **Check Service Connection**
   - Go to EmailJS Dashboard → Email Services
   - Make sure your service is "Active"
   - Test the connection

2. **Verify Template Variables**
   - Ensure all variables match: `{{to_email}}`, `{{blog_title}}`, etc.
   - Check for typos

3. **Check Rate Limits**
   - Free plan: 200 emails/month
   - Check your usage in dashboard

4. **Review Logs**
   - Check terminal for error messages
   - Look for `console.log` outputs showing sent/failed emails

### Gmail Specific Issues

If using Gmail:

1. Enable "Less secure app access" OR
2. Use App Passwords (recommended)
3. Allow EmailJS in your Google Account settings

## Production Checklist

Before going live:

- [ ] Update `NEXT_PUBLIC_BASE_URL` to your production domain
- [ ] Generate a secure `NOTIFICATION_API_KEY`
- [ ] Test emails from production environment
- [ ] Set up email monitoring in EmailJS dashboard
- [ ] Consider upgrading EmailJS plan if needed (>200 emails/month)
- [ ] Add your domain to EmailJS allowed domains
- [ ] Test unsubscribe functionality

## EmailJS Dashboard

Monitor your emails:

- **Dashboard** → See send statistics
- **Email Logs** → View sent emails and failures
- **Usage** → Track monthly quota

## Upgrading

Free plan limits:

- 200 emails/month
- 2 email templates
- 1 user

Paid plans start at $7/month for:

- 1,000 emails/month
- Unlimited templates
- Priority support

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: support@emailjs.com
- GoToGreen Issues: Check your project's GitHub issues
