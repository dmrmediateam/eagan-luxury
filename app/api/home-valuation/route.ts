import { NextResponse } from 'next/server';
import { sendHomeValuationEmail, type HomeValuationData } from '@/lib/email';
// import { sendHomeValuationToZapier } from '@/lib/zapier'; // UNCOMMENT to enable Zapier

/**
 * Home Valuation API Route
 * Handles form submissions from HomeValuation component
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body: HomeValuationData = await request.json();

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'propertyType'];
    const missingFields = requiredFields.filter(field => !body[field as keyof HomeValuationData]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
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

    // Validate ZIP code format (basic US ZIP)
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(body.zipCode)) {
      return NextResponse.json(
        { error: 'Invalid ZIP code format. Please use format: 12345 or 12345-6789' },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic XSS prevention)
    const sanitizedData: HomeValuationData = {
      firstName: body.firstName.trim().substring(0, 50),
      lastName: body.lastName.trim().substring(0, 50),
      email: body.email.trim().toLowerCase().substring(0, 100),
      phone: body.phone.trim().substring(0, 20),
      address: body.address.trim().substring(0, 200),
      city: body.city.trim().substring(0, 100),
      state: body.state.trim().substring(0, 2).toUpperCase(),
      zipCode: body.zipCode.trim().substring(0, 10),
      propertyType: body.propertyType.trim(),
      bedrooms: body.bedrooms?.trim() || '',
      bathrooms: body.bathrooms?.trim() || '',
      squareFeet: body.squareFeet?.trim() || '',
      yearBuilt: body.yearBuilt?.trim() || '',
      message: body.message?.trim().substring(0, 5000) || '',
    };

    // Send email via SendGrid
    try {
      await sendHomeValuationEmail(sanitizedData);
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
      const zapierResult = await sendHomeValuationToZapier(sanitizedData);
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
        message: 'Thank you for your home valuation request. Cheryl will contact you within 24 hours with a comprehensive market analysis.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Home valuation API error:', error);
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


