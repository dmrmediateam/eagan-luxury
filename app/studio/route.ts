import { NextResponse } from 'next/server';

export async function GET() {
  // Redirect to Sanity Studio hosted by Sanity
  return NextResponse.redirect(
    'https://eagan-luxury.sanity.studio',
    { status: 307 }
  );
}


