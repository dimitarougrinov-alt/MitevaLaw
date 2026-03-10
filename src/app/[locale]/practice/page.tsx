import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PolicyIcon from '@mui/icons-material/Policy';
import BiotechIcon from '@mui/icons-material/Biotech';
import CheckIcon from '@mui/icons-material/Check';
import NavButton from '@/components/ui/NavButton';
import AnimateIn from '@/components/ui/AnimateIn';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'practice.hero' });
  return { title: t('title'), description: t('subtitle') };
}

const areas = [
  { key: 'tax', Icon: GavelIcon },
  { key: 'financial', Icon: AccountBalanceIcon },
  { key: 'admin', Icon: PolicyIcon },
  { key: 'bioethics', Icon: BiotechIcon },
] as const;

export default async function PracticePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'practice' });
  const tContact = await getTranslations({ locale, namespace: 'common' });

  return (
    <>
      {/* ── PAGE HERO ── */}
      <Box
        sx={{
          bgcolor: '#1B3050',
          pt: { xs: 10, md: 14 },
          pb: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              radial-gradient(ellipse 60% 80% at 100% 50%, rgba(82,153,200,0.08) 0%, transparent 55%),
              radial-gradient(ellipse 40% 60% at 0% 50%, rgba(42,75,117,0.4) 0%, transparent 55%)
            `,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 }, position: 'relative' }}>
          <Typography
            component="p"
            variant="overline"
            sx={{
              color: 'secondary.main',
              letterSpacing: '0.22em',
              mb: 2.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              '&::before': {
                content: '""',
                display: 'inline-block',
                width: 24,
                height: 1,
                bgcolor: 'secondary.main',
                flexShrink: 0,
              },
            }}
          >
            {t('hero.overline')}
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              fontWeight: 400,
              color: '#EFF3F8',
              lineHeight: 1.1,
              mb: 2,
              letterSpacing: '-0.01em',
            }}
          >
            {t('hero.title')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(239,243,248,0.65)', maxWidth: 520 }}>
            {t('hero.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* ── PRACTICE AREAS ── */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {areas.map(({ key, Icon }, i) => {
              const items = t.raw(`${key}.items`) as string[];
              return (
                <AnimateIn key={key} delay={i * 60}>
                <Box
                  sx={{
                    py: { xs: 7, md: 10 },
                    borderBottom: '1px solid #C8D6E8',
                    '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
                  }}
                >
                  <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
                    {/* Number + icon */}
                    <Grid size={{ xs: 12, md: 1 }}>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, alignItems: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-cormorant), serif',
                            fontSize: '3rem',
                            fontWeight: 300,
                            color: 'secondary.main',
                            lineHeight: 1,
                            opacity: 0.6,
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </Typography>
                      </Box>
                    </Grid>

                    {/* Title + desc */}
                    <Grid size={{ xs: 12, md: 5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            border: '1px solid #C8D6E8',
                            borderRadius: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'primary.main',
                          }}
                        >
                          <Icon sx={{ fontSize: 18 }} />
                        </Box>
                      </Box>
                      <Typography variant="h3" sx={{ mb: 2.5, lineHeight: 1.2 }}>
                        {t(`${key}.title`)}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
                        {t(`${key}.description`)}
                      </Typography>
                    </Grid>

                    {/* Items list */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
                        {items.map((item, j) => (
                          <Box
                            component="li"
                            key={j}
                            sx={{
                              py: 1.75,
                              borderBottom: '1px solid #C8D6E8',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
                            }}
                          >
                            <CheckIcon
                              sx={{
                                fontSize: 14,
                                color: 'secondary.main',
                                flexShrink: 0,
                              }}
                            />
                            <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.5 }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                </AnimateIn>
              );
            })}
          </Box>

          {/* CTA */}
          <Box sx={{ mt: 10, p: { xs: 4, md: 7 }, bgcolor: '#EFF3F8', border: '1px solid #C8D6E8', borderRadius: '2px', textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 2, lineHeight: 1.2 }}>
              {t('cta.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 440, mx: 'auto' }}>
              {t('cta.body')}
            </Typography>
            <NavButton href="/contact" variant="contained" color="primary" size="large">
              {tContact('contactCta')}
            </NavButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
