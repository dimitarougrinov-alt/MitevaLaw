import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['bg', 'en'],
  defaultLocale: 'bg',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/about': {
      bg: '/za-mene',
      en: '/about',
    },
    '/practice': {
      bg: '/praktiki',
      en: '/practice',
    },
    '/academic': {
      bg: '/akademichna-deynost',
      en: '/academic-activity',
    },
    '/contact': {
      bg: '/kontakti',
      en: '/contact',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
