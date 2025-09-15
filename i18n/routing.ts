import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { CookieConstants } from '@utils/cookies';
import { Locales } from '@utils/locales';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Locales.LOCALES,

  // Used when no locale matches
  defaultLocale: Locales.DEFAULT_LOCALE,
  localeCookie: {
    name: CookieConstants.PORTFOLIO_LOCALE,
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
