# Newsletter Subscription Email Template Configuration

## Overview

This document contains the enhanced email template for admin notifications when users subscribe to the GoToGreen newsletter. Configure this template in your EmailJS service using the template ID: `template_subscription_notify`

## Enhanced Email Template HTML

Create this template in your EmailJS service dashboard:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Newsletter Subscription</title>
  </head>
  <body
    style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9f7; color: #1e1e1e;"
  >
    <div
      style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
    >
      <!-- Header -->
      <div
        style="background: linear-gradient(135deg, #0F3D23 0%, #6EA843 100%); padding: 30px 20px; text-align: center;"
      >
        <h1
          style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);"
        >
          🎉 New Newsletter Subscription
        </h1>
        <p
          style="color: #ffffff; margin: 15px 0 0 0; font-size: 16px; opacity: 0.9;"
        >
          GoToGreen Newsletter Alert
        </p>
      </div>

      <!-- Main Content -->
      <div style="padding: 40px 30px;">
        <!-- Subscription Alert -->
        <div
          style="background-color: #f7f9f7; border-left: 4px solid #6EA843; padding: 20px 25px; margin-bottom: 30px; border-radius: 0 8px 8px 0;"
        >
          <h2
            style="color: #0F3D23; margin: 0 0 15px 0; font-size: 22px; font-weight: 600;"
          >
            {{subscription_type}} Alert
          </h2>
          <p
            style="margin: 0; font-size: 16px; line-height: 1.6; color: #5F6B63;"
          >
            A user has subscribed to the GoToGreen newsletter.
          </p>
        </div>

        <!-- Subscriber Details -->
        <div
          style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 25px; margin-bottom: 30px;"
        >
          <h3
            style="color: #0F3D23; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;"
          >
            📋 Subscriber Information
          </h3>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td
                style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; width: 120px; font-weight: 600; color: #374151;"
              >
                Email:
              </td>
              <td
                style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6EA843; font-weight: 600;"
              >
                {{subscriber_email}}
              </td>
            </tr>
            <tr>
              <td
                style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;"
              >
                Name:
              </td>
              <td
                style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1e1e1e;"
              >
                {{subscriber_name}}
              </td>
            </tr>
            <tr>
              <td
                style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;"
              >
                Date:
              </td>
              <td
                style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1e1e1e;"
              >
                {{subscription_date}}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: 600; color: #374151;">
                Type:
              </td>
              <td style="padding: 12px 0; color: #1e1e1e;">
                <span
                  style="background-color: #6EA843; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 600;"
                >
                  {{subscription_type}}
                </span>
              </td>
            </tr>
          </table>
        </div>

        <!-- Action Items -->
        <div
          style="background: linear-gradient(135deg, #f7f9f7 0%, #e8f4e8 100%); border-radius: 12px; padding: 25px; margin-bottom: 30px;"
        >
          <h3
            style="color: #0F3D23; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;"
          >
            🚀 Next Steps
          </h3>
          <ul
            style="margin: 0; padding-left: 20px; color: #5F6B63; line-height: 1.8;"
          >
            <li>Subscriber added to active mailing list</li>
            <li>Will receive future blog post notifications</li>
            <li>Consider following up with a welcome sequence</li>
            <li>Monitor engagement metrics in newsletter analytics</li>
          </ul>
        </div>

        <!-- Stats Section -->
        <div
          style="text-align: center; padding: 20px; background-color: #f8fafc; border-radius: 8px; margin-bottom: 20px;"
        >
          <p style="margin: 0; font-size: 14px; color: #6b7280;">
            📊 This notification was automatically generated by the GoToGreen
            Newsletter System
          </p>
        </div>
      </div>

      <!-- Footer -->
      <div
        style="background-color: #0F3D23; padding: 25px 30px; text-align: center;"
      >
        <p style="color: #ffffff; margin: 0; font-size: 14px; opacity: 0.8;">
          © 2026 GoToGreen - Technology Solutions for Sustainable Growth
        </p>
        <p style="color: #6EA843; margin: 10px 0 0 0; font-size: 13px;">
          Automated Newsletter Management System
        </p>
      </div>
    </div>

    <!-- Mobile Responsiveness -->
    <style>
      @media only screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          padding: 0 10px !important;
        }
        .content {
          padding: 20px !important;
        }
        h1 {
          font-size: 24px !important;
        }
        h2 {
          font-size: 20px !important;
        }
        h3 {
          font-size: 16px !important;
        }
        table td {
          display: block !important;
          width: 100% !important;
          border: none !important;
          padding: 8px 0 !important;
        }
        table td:first-child {
          font-weight: 600 !important;
          color: #374151 !important;
        }
      }
    </style>
  </body>
</html>
```

## Template Variables

Configure these variables in your EmailJS template:

| Variable Name           | Description                             | Example Value                          |
| ----------------------- | --------------------------------------- | -------------------------------------- |
| `{{subscriber_email}}`  | The email address of the new subscriber | `user@example.com`                     |
| `{{subscriber_name}}`   | Extracted username from email           | `user`                                 |
| `{{subscription_date}}` | Formatted subscription timestamp        | `February 18, 2026, 2:30 PM`           |
| `{{subscription_type}}` | Type of subscription action             | `New Subscription` or `Resubscription` |
| `{{admin_email}}`       | Recipient admin email                   | `admin@gotogreen.tn`                   |

## EmailJS Service Configuration

1. **Service ID**: `service_xvx65rp` (existing)
2. **Template ID**: `template_subscription_notify` (new template)
3. **Public Key**: `nQ9rNhu53WteGyoFt` (existing)
4. **Private Key**: `AX1PF8RNBkReyYZMnLr0Z` (existing)

## Setup Instructions

1. **Create New Template in EmailJS**:
   - Go to your EmailJS dashboard
   - Navigate to Email Templates
   - Click "Create New Template"
   - Set Template ID as: `template_subscription_notify`
   - Copy and paste the HTML template above
   - Configure the template variables listed above

2. **Test the Template**:
   - Use the EmailJS template tester
   - Verify all variables render correctly
   - Test on both desktop and mobile views

3. **Environment Configuration**:
   - The template ID is already added to `.env.local`
   - Admin notification email is configured
   - No additional environment setup needed

## Features

✅ **Professional Design**: Clean, branded email template with GoToGreen colors
✅ **Responsive Layout**: Optimized for desktop and mobile devices  
✅ **Rich Information**: Comprehensive subscriber details and metadata
✅ **Action Items**: Clear next steps for admin follow-up
✅ **Automatic Tracking**: Integration with existing newsletter system
✅ **Error Handling**: Graceful fallback if notification fails
✅ **Resubscription Detection**: Different messaging for returning subscribers

## Security & Privacy

- Admin notifications do not expose sensitive user data
- Email addresses are the only personal information transmitted
- Notifications are sent only to configured admin emails
- Rate limiting prevents notification spam

## Monitoring & Analytics

The system automatically logs:

- Successful subscription notifications
- Failed notification attempts
- Subscription vs resubscription events
- Newsletter growth metrics

Check server logs for notification status and troubleshooting.
