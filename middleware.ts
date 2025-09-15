import { routing } from '@i18n/routing';
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|img|api|favicon.ico|fonts).*)', '/', '/(es|en|pt)/:path*', '/(es|en|pt)/robots.txt'],
};
