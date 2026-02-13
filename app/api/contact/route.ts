import { NextRequest, NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Send email via EmailJS
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_CONTACT_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      console.error('Missing EmailJS configuration for contact form');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 500 }
      );
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        email: 'badiidh125@gmail.com',
        to_name: 'GoToGreen Team',
        from_name: body.name,
        from_email: body.email,
        company: body.company || 'Not specified',
        service_interest: body.service || 'Not specified',
        message: body.message,
        reply_to: body.email,
      },
      {
        publicKey,
        privateKey,
      }
    );

    console.log(`✓ Contact form submission from ${body.name} (${body.email})`);

    return NextResponse.json(
      { message: 'Your message has been sent successfully. We will get back to you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 500 }
    );
  }
}
