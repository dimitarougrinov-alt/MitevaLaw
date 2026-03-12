import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AnimateIn from '@/components/ui/AnimateIn';
import PageHero from '@/components/layout/PageHero';
import PublicationsList, { type Publication } from '@/components/academic/PublicationsList';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'academic.hero' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function AcademicPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'academic' });

  const publicationItems = t.raw('publications.list') as Publication[];
  const teachingItems = t.raw('teaching.items') as Array<{
    institution: string;
    role: string;
    period: string;
    courses: string;
    photo?: string;
  }>;

  return (
    <>
      <PageHero
        overline={t('hero.overline')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        bgSrc="/images/sofia-university.jpg"
        bgPosition="center 35%"
      />

      {/* ── TEACHING ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: '#EFF3F8', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle topographic texture */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.025,
            backgroundImage: `repeating-linear-gradient(-35deg, transparent, transparent 48px, #1B3050 48px, #1B3050 49px)`,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 }, position: 'relative' }}>
          <AnimateIn>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 8 }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  bgcolor: 'rgba(82,153,200,0.1)',
                  border: '1px solid rgba(82,153,200,0.3)',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'secondary.main',
                }}
              >
                <MenuBookIcon sx={{ fontSize: 19 }} />
              </Box>
              <Typography variant="h3" sx={{ lineHeight: 1 }}>
                {t('teaching.title')}
              </Typography>
            </Box>
          </AnimateIn>

          <Grid container spacing={2}>
            {teachingItems.map((item, i) => (
              <Grid key={i} size={{ xs: 12, md: 6 }}>
                <AnimateIn delay={i * 80}>
                  <Box
                    sx={{
                      height: '100%',
                      bgcolor: 'background.paper',
                      border: '1px solid #C8D6E8',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        boxShadow: '0 8px 32px rgba(27,48,80,0.1)',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    {item.photo && (
                      <Box sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                        <Image
                          src={item.photo}
                          alt={item.institution}
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                          unoptimized
                        />
                        <Box
                          aria-hidden
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom, rgba(9,18,32,0.2) 0%, rgba(9,18,32,0.6) 100%)',
                          }}
                        />
                      </Box>
                    )}
                    <Box sx={{ p: 3.5, borderTop: `3px solid #5299C8` }}>
                      <Typography
                        variant="overline"
                        sx={{ color: 'secondary.main', letterSpacing: '0.1em', mb: 1.5, display: 'block' }}
                      >
                        {item.period}
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 1, lineHeight: 1.35 }}>
                        {item.institution}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 500, mb: 1.5 }}>
                        {item.role}
                      </Typography>
                      <Box sx={{ height: '1px', bgcolor: '#C8D6E8', mb: 1.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {item.courses}
                      </Typography>
                    </Box>
                  </Box>
                </AnimateIn>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── PUBLICATIONS ── */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>

          {/* Section header */}
          <AnimateIn>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 8 }}>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      bgcolor: 'rgba(201,169,106,0.12)',
                      border: '1px solid rgba(201,169,106,0.35)',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C9A96A',
                      flexShrink: 0,
                    }}
                  >
                    <AutoStoriesIcon sx={{ fontSize: 19 }} />
                  </Box>
                  <Typography variant="h3" sx={{ lineHeight: 1 }}>
                    {t('publications.title')}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, lineHeight: 1.85 }}>
                  {t('publications.body')}
                </Typography>
              </Box>
              {/* Ambient count */}
              <Typography
                aria-hidden
                sx={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: { xs: '4rem', md: '6.5rem' },
                  fontWeight: 300,
                  lineHeight: 0.85,
                  letterSpacing: '-0.03em',
                  color: 'rgba(201,169,106,0.13)',
                  flexShrink: 0,
                  ml: 3,
                  display: { xs: 'none', sm: 'block' },
                  userSelect: 'none',
                }}
              >
                30+
              </Typography>
            </Box>
          </AnimateIn>

          {/* ── Monograph featured card ── */}
          <AnimateIn delay={60}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                border: '1px solid #C8D6E8',
                borderRadius: '2px',
                overflow: 'hidden',
                mb: 10,
                minHeight: { md: 300 },
              }}
            >
              {/* Left: dark photo panel */}
              <Box
                sx={{
                  position: 'relative',
                  flex: { md: '0 0 40%' },
                  minHeight: { xs: 230, md: 'auto' },
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/law-library.jpg"
                  alt=""
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  unoptimized
                />
                {/* Dark overlay */}
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(150deg, rgba(10,20,38,0.95) 0%, rgba(18,34,56,0.91) 100%)',
                  }}
                />
                {/* Amber glow bottom-left */}
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(ellipse 80% 55% at 0% 100%, rgba(201,169,106,0.18) 0%, transparent 55%)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Left amber accent bar */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    background: 'linear-gradient(to bottom, rgba(201,169,106,0.2) 0%, rgba(201,169,106,0.7) 50%, rgba(201,169,106,0.2) 100%)',
                  }}
                />
                {/* Text content over photo */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    p: { xs: 4, md: 5 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: '#C9A96A', letterSpacing: '0.18em', mb: 2.5, display: 'block', fontSize: '0.68rem' }}
                  >
                    {t('publications.monographTitle')}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: { xs: '1.7rem', md: '1.9rem' },
                      fontWeight: 500,
                      color: '#EFF3F8',
                      lineHeight: 1.2,
                      fontStyle: 'italic',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {t('publications.monographName')}
                  </Typography>
                </Box>
              </Box>

              {/* Right: details panel */}
              <Box
                sx={{
                  flex: 1,
                  p: { xs: 4, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  bgcolor: '#FFFFFF',
                }}
              >
                {/* Meta pills */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3.5 }}>
                  {[
                    t('publications.monographPublisher'),
                    t('publications.monographYear'),
                    t('publications.monographPages'),
                    t('publications.monographIsbn'),
                  ].map((meta) => (
                    <Box
                      key={meta}
                      sx={{
                        px: 1.5,
                        py: '4px',
                        bgcolor: 'rgba(201,169,106,0.07)',
                        border: '1px solid rgba(201,169,106,0.25)',
                        borderRadius: '2px',
                      }}
                    >
                      <Typography
                        sx={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.06em', color: '#C9A96A' }}
                      >
                        {meta}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ height: '1px', bgcolor: '#C8D6E8', mb: 3.5 }} />

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, mb: 4 }}>
                  {t('publications.monographDesc')}
                </Typography>

                <Box>
                  <MuiLink
                    href="https://www.ciela.com/diskriminacijata-v-mezhdunarodnoto-dan-chno-pravo.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      px: 3,
                      py: 1.25,
                      bgcolor: 'rgba(201,169,106,0.07)',
                      border: '1px solid rgba(201,169,106,0.35)',
                      borderRadius: '2px',
                      color: '#C9A96A',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      transition: 'all 0.2s ease',
                      '&:hover': { bgcolor: 'rgba(201,169,106,0.14)', borderColor: '#C9A96A' },
                    }}
                  >
                    {t('publications.monographBuy')}
                    <OpenInNewIcon sx={{ fontSize: 12 }} />
                  </MuiLink>
                </Box>
              </Box>
            </Box>
          </AnimateIn>

          {/* ── Publications list ── */}
          <PublicationsList
            items={publicationItems}
            labels={{
              filterAll:      t('publications.filterAll'),
              filterLaw:      t('publications.filterLaw'),
              filterMedicine: t('publications.filterMedicine'),
              typeArticle:    t('publications.typeArticle'),
              typeStudy:      t('publications.typeStudy'),
              typeConference: t('publications.typeConference'),
              coauthors:      t('publications.coauthors'),
              registryLink:   t('publications.registryLink'),
            }}
          />
        </Container>
      </Box>
    </>
  );
}
