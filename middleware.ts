import { NextRequest, NextResponse } from 'next/server';
import db from './lib/db';

export async function middleware(request: NextRequest) {
  const isLoggedIn = await db.isAuthenticated(request.cookies as any);

  if (request.nextUrl.pathname && request.nextUrl.pathname === '/login') {
    // If the user is trying to access the login page
    if (isLoggedIn) {
      // If logged in, redirect to '/'
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else {
    // For all other pages (excluding /login)
    if (!isLoggedIn) {
      // If not logged in, redirect to '/login'
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Add your desired path patterns to the matcher array
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

