'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { routing, type Locale } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(next: Locale) {
    router.replace(pathname, { locale: next });
  }

  return (
    <ButtonGroup size="small" variant="text" sx={{ ml: 1 }}>
      {routing.locales.map((loc) => (
        <Button
          key={loc}
          onClick={() => handleChange(loc)}
          sx={{
            fontWeight: locale === loc ? 600 : 400,
            color: locale === loc ? 'primary.main' : 'text.secondary',
            minWidth: 36,
            px: 0.5,
            fontSize: '0.8125rem',
            letterSpacing: '0.08em',
          }}
        >
          {loc.toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  );
}
