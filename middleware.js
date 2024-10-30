// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    // Check if user is authenticated by checking for a token in cookies
    const token = request.cookies.get('token')?.value;
    console.log(token);

    // If no token is found, redirect to the login page
    if (!token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Continue to the requested page if authenticated
    return NextResponse.next();
}

// Apply the middleware to specific routes
export const config = {
    matcher: ['/admin/:path*'],  // Only apply middleware to routes under /admin
};
