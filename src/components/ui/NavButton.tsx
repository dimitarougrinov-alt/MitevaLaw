'use client';

import Button from '@mui/material/Button';
import { Link } from '@/i18n/navigation';
import type { ComponentProps } from 'react';

type NavButtonProps = Omit<ComponentProps<typeof Button>, 'component' | 'href'> & {
  href: ComponentProps<typeof Link>['href'];
};

export default function NavButton({ href, children, ...props }: NavButtonProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Button component={Link as any} href={href as any} {...props}>
      {children}
    </Button>
  );
}
