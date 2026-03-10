import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PolicyIcon from '@mui/icons-material/Policy';
import BiotechIcon from '@mui/icons-material/Biotech';
import NavButton from '@/components/ui/NavButton';
import AnimateIn from '@/components/ui/AnimateIn';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.hero' });
  return {
    title: 'Ani Miteva – Attorney at Law',
    description: t('essence'),
  };
}

const practiceIcons = [GavelIcon, AccountBalanceIcon, PolicyIcon, BiotechIcon];
const practiceKeys = ['tax', 'financial', 'admin', 'bioethics'] as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <>
      {/* ── HERO ── */}
      <Box
        sx={{
          bgcolor: '#EFF3F8',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 10, md: 14 },
          pb: { xs: 12, md: 20 },
        }}
      >
        {/* Topographic background lines */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.035,
            backgroundImage: `
              repeating-linear-gradient(
                -35deg,
                transparent,
                transparent 48px,
                #1B3050 48px,
                #1B3050 49px
              )
            `,
            pointerEvents: 'none',
          }}
        />
        {/* Gradient overlays */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              radial-gradient(ellipse 70% 80% at 5% 50%, rgba(27,48,80,0.05) 0%, transparent 55%),
              radial-gradient(ellipse 50% 60% at 90% 15%, rgba(82,153,200,0.06) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
          }}
        />
        {/* Corner accent */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: { xs: 32, md: 56 },
            right: { xs: 20, md: 72 },
            width: { xs: 50, md: 80 },
            height: { xs: 50, md: 80 },
            borderRight: '1px solid rgba(27,48,80,0.13)',
            borderBottom: '1px solid rgba(27,48,80,0.13)',
            pointerEvents: 'none',
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: { xs: 24, md: 48 },
            left: { xs: 20, md: 72 },
            width: { xs: 40, md: 64 },
            height: { xs: 40, md: 64 },
            borderLeft: '1px solid rgba(27,48,80,0.1)',
            borderTop: '1px solid rgba(27,48,80,0.1)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 }, position: 'relative' }}>
          <Grid container alignItems="center" spacing={{ xs: 6, md: 10 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              {/* Overline */}
              <Typography
                component="p"
                variant="overline"
                sx={{
                  color: 'secondary.main',
                  letterSpacing: '0.22em',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  '&::before': {
                    content: '""',
                    display: 'inline-block',
                    width: 28,
                    height: 1,
                    bgcolor: 'secondary.main',
                    flexShrink: 0,
                  },
                }}
              >
                {t('hero.overline')}
              </Typography>

              {/* Main headline */}
              <Typography
                component="h1"
                sx={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4rem', lg: '4.75rem' },
                  fontWeight: 400,
                  lineHeight: { xs: 1.1, md: 1.06 },
                  letterSpacing: '-0.02em',
                  color: 'text.primary',
                  mb: 4,
                  whiteSpace: 'pre-line',
                }}
              >
                {t('hero.title')}
              </Typography>

              {/* Divider line */}
              <Box sx={{ width: 40, height: '1px', bgcolor: 'secondary.main', mb: 4, opacity: 0.7 }} />

              {/* Essence tagline */}
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', mb: 5, maxWidth: 460, lineHeight: 1.8, fontStyle: 'italic', fontFamily: 'var(--font-cormorant), serif', fontSize: '1.25rem' }}
              >
                {t('hero.essence')}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <NavButton
                  
                  href="/contact"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  {t('hero.cta')}
                </NavButton>
                <NavButton
                  
                  href="/practice"
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  {t('hero.ctaSecondary')}
                </NavButton>
              </Box>
            </Grid>

            {/* Hero photo */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 340, sm: 420, md: 560 },
                }}
              >
                {/* Decorative gold border offset */}
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    right: -8,
                    bottom: -8,
                    border: '1px solid',
                    borderColor: 'secondary.main',
                    opacity: 0.4,
                    borderRadius: '2px',
                    pointerEvents: 'none',
                  }}
                />
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    height: '100%',
                    border: '1px solid #C8D6E8',
                  }}
                >
                  <Image
                    src="/images/ani-2.jpg"
                    alt="Адв. д-р Ани Митева"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    priority
                    unoptimized
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── CREDENTIALS STRIP ── */}
      <Box
        sx={{
          bgcolor: '#1B3050',
          py: { xs: 5, md: 6 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <Grid container spacing={{ xs: 4, md: 0 }} justifyContent="space-around" alignItems="center">
            {[
              { num: t('credentials.years'), label: t('credentials.yearsLabel') },
              { num: t('credentials.publications'), label: t('credentials.publicationsLabel') },
              { num: null, label: t('credentials.uniLabel') },
              { num: null, label: t('credentials.sakLabel') },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 6, md: 3 }}>
                <AnimateIn delay={i * 100} sx={{ textAlign: 'center' }}>
                  {item.num && (
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: { xs: '2.5rem', md: '3.25rem' },
                        fontWeight: 400,
                        color: 'secondary.main',
                        lineHeight: 1,
                        mb: 0.75,
                      }}
                    >
                      {item.num}
                    </Typography>
                  )}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(239,243,248,0.65)',
                      fontSize: item.num ? '0.8rem' : '0.875rem',
                      letterSpacing: item.num ? '0.06em' : '0.02em',
                      fontWeight: item.num ? 400 : 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                </AnimateIn>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── ABOUT SNIPPET ── */}
      <Box sx={{ py: { xs: 10, md: 18 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <AnimateIn>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            {/* Photo */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 300, sm: 380, md: 460 },
                  borderRadius: '2px',
                  overflow: 'hidden',
                  border: '1px solid #C8D6E8',
                }}
              >
                <Image
                  src="/images/ani-3.jpg"
                  alt="Адв. д-р Ани Митева"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  unoptimized
                />
              </Box>
            </Grid>

            {/* Text */}
            <Grid size={{ xs: 12, md: 7 }}>
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
                {t('about.overline')}
              </Typography>
              <Typography variant="h2" sx={{ mb: 3.5, lineHeight: 1.12 }}>
                {t('about.title')}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.85, maxWidth: 520 }}>
                {t('about.body')}
              </Typography>
              <NavButton
                
                href="/about"
                variant="outlined"
                color="primary"
                size="large"
              >
                {t('about.link')}
              </NavButton>
            </Grid>
          </Grid>
          </AnimateIn>
        </Container>
      </Box>

      {/* ── PRACTICE AREAS ── */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#EFF3F8', position: 'relative', overflow: 'hidden' }}>
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.025,
            backgroundImage: `
              repeating-linear-gradient(
                -35deg,
                transparent,
                transparent 48px,
                #1B3050 48px,
                #1B3050 49px
              )
            `,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 }, position: 'relative' }}>
          <AnimateIn>
          <Box sx={{ mb: { xs: 7, md: 10 }, maxWidth: 520 }}>
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
              {t('practice.overline')}
            </Typography>
            <Typography variant="h2" sx={{ mb: 2, lineHeight: 1.1 }}>
              {t('practice.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('practice.subtitle')}
            </Typography>
          </Box>
          </AnimateIn>

          <Grid container spacing={2}>
            {practiceKeys.map((key, i) => {
              const Icon = practiceIcons[i];
              return (
                <Grid key={key} size={{ xs: 12, sm: 6, md: 3 }}>
                  <AnimateIn delay={i * 80}>
                  <Box
                    sx={{
                      p: 3.5,
                      height: '100%',
                      bgcolor: 'background.paper',
                      border: '1px solid #C8D6E8',
                      borderRadius: '2px',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        boxShadow: '0 8px 32px rgba(27,48,80,0.09)',
                        transform: 'translateY(-4px)',
                        borderColor: 'rgba(82,153,200,0.4)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        border: '1px solid #C8D6E8',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                        color: 'primary.main',
                        transition: 'border-color 0.2s ease',
                        '.MuiBox-root:hover &': {
                          borderColor: 'secondary.main',
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: 20 }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                      {t(`practice.${key}.title`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {t(`practice.${key}.description`)}
                    </Typography>
                  </Box>
                  </AnimateIn>
                </Grid>
              );
            })}
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <NavButton  href="/practice" variant="outlined" color="primary" size="large">
              {tCommon('learnMore')}
            </NavButton>
          </Box>
        </Container>
      </Box>

      {/* ── CTA BANNER ── */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: '#1B3050',
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
              radial-gradient(ellipse 50% 80% at 90% 50%, rgba(82,153,200,0.1) 0%, transparent 60%),
              radial-gradient(ellipse 40% 60% at 10% 50%, rgba(42,75,117,0.5) 0%, transparent 60%)
            `,
            pointerEvents: 'none',
          }}
        />
        {/* Mountain silhouette */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: { xs: 200, md: 360 },
            height: { xs: 120, md: 200 },
            opacity: 0.05,
            pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 360 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 200 L120 60 L180 110 L240 30 L360 200' fill='%23EFF3F8'/%3E%3C/svg%3E")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
          }}
        />
        <Container maxWidth="md" sx={{ px: { xs: 3, md: 5 }, position: 'relative', textAlign: 'center' }}>
          <AnimateIn>
          <Typography
            sx={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: { xs: '2.25rem', md: '3.5rem' },
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#EFF3F8',
              mb: 5,
              letterSpacing: '-0.01em',
            }}
          >
            {t('cta.title')}
          </Typography>
          <NavButton
            
            href="/contact"
            variant="outlined"
            size="large"
            sx={{
              color: '#EFF3F8',
              borderColor: 'rgba(239,243,248,0.45)',
              borderWidth: '1.5px',
              '&:hover': {
                borderColor: '#EFF3F8',
                borderWidth: '1.5px',
                bgcolor: 'rgba(239,243,248,0.07)',
              },
            }}
          >
            {t('cta.button')}
          </NavButton>
          </AnimateIn>
        </Container>
      </Box>
    </>
  );
}
