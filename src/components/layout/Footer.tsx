'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const t = useTranslations('nav');
  const tf = useTranslations('footer');

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1B3050',
        color: 'rgba(239,243,248,0.88)',
        pt: { xs: 8, md: 12 },
        pb: { xs: 5, md: 7 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <MuiLink component={Link} href="/" underline="none" sx={{ display: 'inline-block', mb: 3 }}>
              <Logo color="#EFF3F8" size="md" />
            </MuiLink>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(239,243,248,0.55)',
                lineHeight: 1.8,
                maxWidth: 320,
                mb: 3,
                fontStyle: 'italic',
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '1rem',
              }}
            >
              {tf('tagline')}
            </Typography>
          </Grid>

          {/* Nav columns */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="overline"
              sx={{ color: 'rgba(239,243,248,0.38)', display: 'block', mb: 2.5, letterSpacing: '0.16em' }}
            >
              {t('practice')}
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {([
                { href: '/practice', label: t('practice') },
                { href: '/academic', label: t('academic') },
              ] as const).map(({ href, label }) => (
                <li key={href}>
                  <MuiLink
                    component={Link}
                    href={href}
                    underline="none"
                    sx={{
                      color: 'rgba(239,243,248,0.60)',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      transition: 'color 0.15s ease',
                      '&:hover': { color: '#EFF3F8' },
                    }}
                  >
                    {label}
                  </MuiLink>
                </li>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography
              variant="overline"
              sx={{ color: 'rgba(239,243,248,0.38)', display: 'block', mb: 2.5, letterSpacing: '0.16em' }}
            >
              Info
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {([
                { href: '/about', label: t('about') },
                { href: '/contact', label: t('contact') },
              ] as const).map(({ href, label }) => (
                <li key={href}>
                  <MuiLink
                    component={Link}
                    href={href}
                    underline="none"
                    sx={{
                      color: 'rgba(239,243,248,0.60)',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      transition: 'color 0.15s ease',
                      '&:hover': { color: '#EFF3F8' },
                    }}
                  >
                    {label}
                  </MuiLink>
                </li>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            mt: { xs: 7, md: 10 },
            pt: 3,
            borderTop: '1px solid rgba(239,243,248,0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { sm: 'center' },
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(239,243,248,0.32)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Ani Miteva. {tf('copyright')}
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(239,243,248,0.32)', fontSize: '0.8rem' }}>
            {tf('location')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
