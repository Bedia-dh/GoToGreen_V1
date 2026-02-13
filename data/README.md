# Newsletter Subscribers Data

This directory contains the newsletter subscribers data.

**subscribers.json** - Stores email subscriptions with the following structure:

```json
[
  {
    "email": "user@example.com",
    "subscribedAt": "2026-01-28T10:00:00.000Z",
    "status": "active"
  }
]
```

## Status Values

- `active` - Currently subscribed and receiving updates
- `unsubscribed` - Previously subscribed but opted out

## API Endpoints

### Subscribe to Newsletter

**POST** `/api/newsletter/subscribe`

```json
{
  "email": "user@example.com"
}
```

### Get Subscribers (Admin)

**GET** `/api/newsletter/subscribers`

Returns list of all active subscribers with their subscription dates.
