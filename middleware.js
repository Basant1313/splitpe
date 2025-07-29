import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';


// we are protecting this because if the user is not logged in and we go any of this route then its throw 404 error we don't want this so we want us it re-route us to home page if the user is not logged in
const isProtectedRoute = createRouteMatcher(
  [
    "/dashboard(.*)",
    "/expenses(.*)",
    "/contacts(.*)",
    "/groups(.*)",
    "/person(.*)",
    "/settlements(.*)",

  ]
);

export default clerkMiddleware(async(auth , req)=> {
    const {userId} = await auth()

    if(!userId && isProtectedRoute(req)){
      const {redirectToSignIn} = await auth();
      return redirectToSignIn();
    }

    return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};