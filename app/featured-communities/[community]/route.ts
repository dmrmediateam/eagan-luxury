import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { community: string } }
) {
  const { community } = params;
  
  // 301 permanent redirect to the main community page
  return NextResponse.redirect(
    new URL(`/${community}`, request.url),
    { status: 301 }
  );
}


