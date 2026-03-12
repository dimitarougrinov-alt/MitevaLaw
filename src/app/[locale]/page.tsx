import type { Metadata } from 'next';
import { getTranslations, getMessages } from 'next-intl/server';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PolicyIcon from '@mui/icons-material/Policy';
import BiotechIcon from '@mui/icons-material/Biotech';
import BalanceIcon from '@mui/icons-material/Balance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NavButton from '@/components/ui/NavButton';
import AnimateIn from '@/components/ui/AnimateIn';
import HeroSection from '@/components/home/HeroSection';
import PhotoContextGrid from '@/components/home/PhotoContextGrid';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.hero' });
  return {
    title: 'Ani Miteva – Attorney at Law',
    description: t('essence'),
  };
}

const practiceIcons = [GavelIcon, AccountBalanceIcon, PolicyIcon, BiotechIcon, BalanceIcon, AccountBalanceWalletIcon];
const practiceKeys = ['tax', 'financial', 'admin', 'bioethics', 'conflict', 'confiscation'] as const;
const practiceCardAccents = ['#5299C8', '#3A78A8', '#6BB8D8', '#4E9B8A', '#8A7EB8', '#B87E7E'];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const messages = await getMessages({ locale });
  const aboutCredentials = ((messages as any).home?.about?.credentials ?? []) as string[];

  return (
    <>
      {/* ── HERO ── */}
      <HeroSection
        overline={t('hero.overline')}
        title={t('hero.title')}
        essence={t('hero.essence')}
        cta={t('hero.cta')}
        ctaSecondary={t('hero.ctaSecondary')}
      />

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
      <Box sx={{ py: { xs: 10, md: 18 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <AnimateIn>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">

            {/* Photo column */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: 'relative' }}>

                {/* Decorative offset frame */}
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    top: 18,
                    left: -14,
                    width: '82%',
                    height: '88%',
                    border: '1px solid rgba(82,153,200,0.35)',
                    borderRadius: '2px',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />

                {/* Photo */}
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 320, sm: 420, md: 520 },
                    borderRadius: '2px',
                    overflow: 'hidden',
                    zIndex: 1,
                    boxShadow: '0 20px 60px rgba(27,48,80,0.12)',
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

                {/* Refined name caption */}
                <Box
                  sx={{
                    mt: 2.5,
                    pl: 2,
                    borderLeft: '2px solid #5299C8',
                  }}
                >
                  <Typography
                    sx={{
                      display: 'block',
                      color: '#1B3050',
                      letterSpacing: '0.14em',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-dm-sans)',
                      textTransform: 'uppercase',
                      lineHeight: 1.6,
                    }}
                  >
                    Ani Miteva
                  </Typography>
                  <Typography
                    sx={{
                      display: 'block',
                      color: '#3E577A',
                      letterSpacing: '0.08em',
                      fontSize: '0.62rem',
                      fontFamily: 'var(--font-dm-sans)',
                      textTransform: 'uppercase',
                      lineHeight: 1.6,
                    }}
                  >
                    Attorney at Law · Ph.D. LL.M
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Text column */}
            <Grid size={{ xs: 12, md: 7 }}>

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
                    width: 24,
                    height: 1,
                    bgcolor: 'secondary.main',
                    flexShrink: 0,
                  },
                }}
              >
                {t('about.overline')}
              </Typography>

              {/* Body paragraph in italic Cormorant */}
              <Typography
                sx={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: { xs: '1.2rem', md: '1.35rem' },
                  lineHeight: 1.7,
                  color: 'text.primary',
                  fontStyle: 'italic',
                  mb: 4,
                  pl: 2.5,
                  borderLeft: '2px solid rgba(82,153,200,0.4)',
                }}
              >
                {t('about.body')}
              </Typography>

              {/* Credentials — elegant divided list */}
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 4 }}>
                {aboutCredentials.map((item, i) => (
                  <Box
                    component="li"
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      py: 1.25,
                      borderBottom: '1px solid rgba(200,214,232,0.55)',
                      ...(i === 0 && { borderTop: '1px solid rgba(200,214,232,0.55)' }),
                    }}
                  >
                    <Box
                      sx={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        bgcolor: 'secondary.main',
                        flexShrink: 0,
                        opacity: 0.7,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: '1.1rem',
                        lineHeight: 1.5,
                        color: 'text.primary',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

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

      {/* ── PRACTICE + QUOTE (MERGED SPLIT) ── */}
      <Box sx={{ overflow: 'hidden' }}>
        <Grid container sx={{ alignItems: 'stretch' }}>

          {/* ── LEFT: atmospheric photo + quote ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative', minHeight: { xs: 360, md: '100%' }, overflow: 'hidden' }}>
              {/* Photo */}
              <Image
                src="/images/ani-1.jpg"
                alt="Адв. д-р Ани Митева"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                unoptimized
              />

              {/* Dark gradient overlay – heavy at bottom for text legibility */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(10,20,38,0.97) 0%, rgba(22,40,66,0.65) 45%, rgba(27,48,80,0.22) 100%)',
                  zIndex: 1,
                }}
              />

              {/* Subtle topographic texture over photo */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.045,
                  backgroundImage: `
                    repeating-linear-gradient(
                      -35deg,
                      transparent,
                      transparent 48px,
                      #5299C8 48px,
                      #5299C8 49px
                    )
                  `,
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />

              {/* Quote block pinned to bottom */}
              <AnimateIn
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: { xs: 4, md: 5 },
                  zIndex: 2,
                }}
              >
                {/* Accent lines */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 3 }}>
                  <Box sx={{ width: 32, height: '1px', bgcolor: 'rgba(82,153,200,0.75)' }} />
                  <Box sx={{ width: 14, height: '1px', bgcolor: 'rgba(239,243,248,0.25)' }} />
                </Box>

                {/* Decorative quotation mark */}
                <Typography
                  aria-hidden
                  sx={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: { xs: '3.5rem', md: '5rem' },
                    lineHeight: 0.6,
                    color: 'rgba(82,153,200,0.3)',
                    mb: 1.5,
                    display: 'block',
                  }}
                >
                  "
                </Typography>

                <Typography
                  sx={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: { xs: '1.55rem', sm: '1.8rem', md: '2rem' },
                    fontWeight: 400,
                    lineHeight: 1.32,
                    fontStyle: 'italic',
                    color: '#EFF3F8',
                    mb: 2.5,
                  }}
                >
                  {t('practice.quote')}
                </Typography>

                {/* Attribution */}
                <Typography
                  component="p"
                  variant="overline"
                  sx={{
                    color: 'rgba(82,153,200,0.65)',
                    letterSpacing: '0.22em',
                    fontSize: '0.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&::before': {
                      content: '""',
                      display: 'inline-block',
                      width: 16,
                      height: 1,
                      bgcolor: 'rgba(82,153,200,0.5)',
                      flexShrink: 0,
                    },
                  }}
                >
                  {t('hero.overline')}
                </Typography>
              </AnimateIn>
            </Box>
          </Grid>

          {/* ── RIGHT: practice content on white ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                py: { xs: 7, md: 11 },
                px: { xs: 4, md: 7 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: '1px',
                  bgcolor: 'rgba(200,214,232,0.6)',
                  display: { xs: 'none', md: 'block' },
                },
              }}
            >
              <AnimateIn>
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
                <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
                  {t('practice.subtitle')}
                </Typography>
              </AnimateIn>

              {/* 2 × 2 card grid */}
              <Grid container spacing={2} sx={{ mb: 5 }}>
                {practiceKeys.map((key, i) => {
                  const Icon = practiceIcons[i];
                  return (
                    <Grid key={key} size={{ xs: 12, sm: 6 }}>
                      <AnimateIn delay={i * 75}>
                        <Box
                          sx={{
                            p: 3,
                            height: '100%',
                            bgcolor: '#FAFBFD',
                            border: '1px solid #C8D6E8',
                            borderLeft: `3px solid ${practiceCardAccents[i]}`,
                            borderRadius: '2px',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              boxShadow: `0 8px 28px rgba(27,48,80,0.09)`,
                              transform: 'translateY(-3px)',
                              borderColor: practiceCardAccents[i],
                              borderLeftColor: practiceCardAccents[i],
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              bgcolor: `${practiceCardAccents[i]}14`,
                              border: `1px solid ${practiceCardAccents[i]}38`,
                              borderRadius: '2px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 2,
                              color: practiceCardAccents[i],
                              transition: 'all 0.2s ease',
                              '.MuiBox-root:hover &': {
                                bgcolor: `${practiceCardAccents[i]}22`,
                              },
                            }}
                          >
                            <Icon sx={{ fontSize: 18 }} />
                          </Box>
                          <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem', fontWeight: 600 }}>
                            {t(`practice.${key}.title`)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.72 }}>
                            {t(`practice.${key}.description`)}
                          </Typography>
                        </Box>
                      </AnimateIn>
                    </Grid>
                  );
                })}
              </Grid>

              <NavButton href="/practice" variant="outlined" color="primary" size="large">
                {tCommon('learnMore')}
              </NavButton>
            </Box>
          </Grid>

        </Grid>
      </Box>

      {/* ── PHOTO CONTEXT GRID ── */}
      <PhotoContextGrid
        items={[
          {
            src: '/images/mountain-peaks.jpg',
            alt: 'Alpine mountain peaks',
            overline: t('photoGrid.mountains.overline'),
            title: t('photoGrid.mountains.title'),
            subtitle: t('photoGrid.mountains.subtitle'),
            accentColor: '#7BBFE0',
          },
          {
            src: '/images/law-library.jpg',
            alt: 'Law library',
            overline: t('photoGrid.library.overline'),
            title: t('photoGrid.library.title'),
            subtitle: t('photoGrid.library.subtitle'),
            accentColor: '#C9A96A',
          },
          {
            src: '/images/sofia-university.jpg',
            alt: 'Sofia University',
            overline: t('photoGrid.university.overline'),
            title: t('photoGrid.university.title'),
            subtitle: t('photoGrid.university.subtitle'),
            accentColor: '#9ECFE8',
          },
        ]}
      />

      {/* ── CTA BANNER ── */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Mountain photo background */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
          }}
        >
          <Image
            src="/images/mountain-peaks.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 65%' }}
            unoptimized
          />
        </Box>

        {/* Deep navy overlay */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(160deg, rgba(11,22,40,0.92) 0%, rgba(27,48,80,0.85) 50%, rgba(16,32,56,0.92) 100%)',
            zIndex: 1,
          }}
        />

        {/* Colour shimmer overlay */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              radial-gradient(ellipse 55% 80% at 85% 50%, rgba(82,153,200,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 45% 60% at 15% 50%, rgba(42,75,117,0.3) 0%, transparent 60%)
            `,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="md" sx={{ px: { xs: 3, md: 5 }, position: 'relative', textAlign: 'center', zIndex: 3 }}>
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
