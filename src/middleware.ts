import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Only rewrite for non-static files and non-API routes
  if (
    !url.pathname.startsWith('/_next') &&
    !url.pathname.startsWith('/api') &&
    !url.pathname.startsWith('/public')
  ) {
    // Clean the hostname by removing port
    const cleanHostname = hostname.split(':')[0];

    console.log(cleanHostname, 'cleanHostname');

    // Rewrite to the tenant route
    url.pathname = `/tenant/${cleanHostname}${url.pathname}`;

    console.log(url.pathname, 'url.pathname');

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
