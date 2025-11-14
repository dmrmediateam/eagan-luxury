import { NextResponse } from 'next/server';
import { sendContactFormEmail, type ContactFormData } from '@/lib/email';
// import { sendContactFormToZapier } from '@/lib/zapier'; // UNCOMMENT to enable Zapier

/**
 * Contact Form API Route
 * Handles form submissions from ContactForm component
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic XSS prevention)
    const sanitizedData: ContactFormData = {
      name: body.name.trim().substring(0, 100),
      email: body.email.trim().toLowerCase().substring(0, 100),
      phone: body.phone?.trim().substring(0, 20) || '',
      message: body.message.trim().substring(0, 5000),
    };

    // Send email via SendGrid
    try {
      await sendContactFormEmail(sanitizedData);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    // ========================================
    // ZAPIER INTEGRATION (COMMENTED OUT)
    // Uncomment the following lines to enable Zapier webhook
    // ========================================
    /*
    try {
      const zapierResult = await sendContactFormToZapier(sanitizedData);
      if (!zapierResult.success) {
        console.warn('Zapier webhook failed (non-blocking):', zapierResult.error);
      }
    } catch (zapierError) {
      // Zapier failures are non-blocking - log but don't fail the request
      console.warn('Zapier webhook error (non-blocking):', zapierError);
    }
    */

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS handler for CORS preflight
 */
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}


