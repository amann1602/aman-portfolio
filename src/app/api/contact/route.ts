import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  try {
    const { name, email, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return NextResponse.json({ error: 'Subject is required' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    /**
     * Optional External Email Service Integration (e.g. Resend, SendGrid, Nodemailer)
     * Controlled safely via server-side environment variables without exposing secrets to client.
     */
    const emailServiceApiKey = process.env.EMAIL_SERVICE_API_KEY;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'amaninamdar7775@gmail.com';

    if (emailServiceApiKey) {
      // In production with API key configured, dispatch email via external provider
      // Example: await resend.emails.send(...)
      console.log(`[Contact API] Dispatching message from ${email} to ${recipientEmail}`);
    } else {
      // Graceful local logging mode when API keys are not yet configured in development
      console.log('[Contact API] Form Submission Received:', {
        name,
        email,
        subject,
        messageLength: message.length,
        timestamp: new Date().toISOString()
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully'
    });
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your message' },
      { status: 500 }
    );
  }
}
