import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AnimateIn from '@/components/ui/AnimateIn';
import PageHero from '@/components/layout/PageHero';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'academic.hero' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function AcademicPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'academic' });

  const roles = t.raw('position.roles') as Array<{ label: string; value: string }>;
  const teachingItems = t.raw('teaching.items') as Array<{
    institution: string;
    role: string;
    period: string;
    courses: string;
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

      {/* ── ACADEMIC POSITION ── */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }}>

            {/* Main content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <AnimateIn>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
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
                    <SchoolIcon sx={{ fontSize: 19 }} />
                  </Box>
                  <Typography variant="h3" sx={{ lineHeight: 1 }}>
                    {t('position.title')}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 6, lineHeight: 1.85 }}>
                  {t('position.body')}
                </Typography>
              </AnimateIn>

              {/* Roles grid */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {roles.map((role, i) => (
                  <AnimateIn key={i} delay={i * 60}>
                    <Box
                      sx={{
                        py: 2.5,
                        borderBottom: '1px solid #C8D6E8',
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' },
                        gap: { xs: 0.5, sm: 2 },
                        '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
                        transition: 'background-color 0.2s ease',
                        '&:hover': { bgcolor: 'rgba(82,153,200,0.03)' },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 500,
                          fontSize: '0.78rem',
                          letterSpacing: '0.06em',
                          pt: { sm: '2px' },
                        }}
                      >
                        {role.label.toUpperCase()}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                        {role.value}
                      </Typography>
                    </Box>
                  </AnimateIn>
                ))}
              </Box>
            </Grid>

            {/* Side accent – Sofia University photo */}
            <Grid size={{ xs: 12, md: 5 }}>
              <AnimateIn delay={120}>
                <Box
                  sx={{
                    position: { md: 'sticky' },
                    top: { md: 108 },
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  {/* Photo strip */}
                  <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                    <Image
                      src="/images/sofia-university.jpg"
                      alt="Софийски университет"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                      unoptimized
                    />
                    <Box
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(9,18,32,0.3) 0%, rgba(9,18,32,0.7) 100%)',
                      }}
                    />
                    {/* University name overlay */}
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2.5, zIndex: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-cormorant), serif',
                          fontSize: '1.35rem',
                          fontWeight: 500,
                          color: '#EFF3F8',
                          lineHeight: 1.3,
                        }}
                      >
                        {t('position.institution')}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Info panel below photo */}
                  <Box
                    sx={{
                      p: { xs: 3, md: 3.5 },
                      bgcolor: '#EFF3F8',
                      border: '1px solid #C8D6E8',
                      borderTop: 'none',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 2.5 }}>
                      {t('position.dept')}
                    </Typography>
                    <Box sx={{ height: '1px', bgcolor: '#C8D6E8', mb: 2.5 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {t('position.courses')}
                    </Typography>
                  </Box>
                </Box>
              </AnimateIn>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <AnimateIn delay={i * 80}>
                  <Box
                    sx={{
                      p: 3.5,
                      height: '100%',
                      bgcolor: 'background.paper',
                      border: '1px solid #C8D6E8',
                      borderTop: `3px solid #5299C8`,
                      borderRadius: '2px',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        boxShadow: '0 8px 32px rgba(27,48,80,0.1)',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
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
                </AnimateIn>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── PUBLICATIONS ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <AnimateIn>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 6 }}>
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
                }}
              >
                <AutoStoriesIcon sx={{ fontSize: 19 }} />
              </Box>
              <Typography variant="h3" sx={{ lineHeight: 1 }}>
                {t('publications.title')}
              </Typography>
            </Box>
          </AnimateIn>

          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <AnimateIn>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
                  {t('publications.body')}
                </Typography>
              </AnimateIn>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <AnimateIn delay={80}>
                {/* Monograph highlight with library photo background */}
                <Box
                  sx={{
                    p: { xs: 3.5, md: 4.5 },
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '2px',
                  }}
                >
                  <Image
                    src="/images/law-library.jpg"
                    alt=""
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    unoptimized
                  />
                  <Box
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(160deg, rgba(10,20,38,0.93) 0%, rgba(22,40,66,0.9) 100%)',
                    }}
                  />
                  <Box
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `radial-gradient(ellipse 80% 60% at 100% 100%, rgba(201,169,106,0.1) 0%, transparent 60%)`,
                      pointerEvents: 'none',
                    }}
                  />
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography
                      variant="overline"
                      sx={{ color: '#C9A96A', letterSpacing: '0.14em', mb: 2, display: 'block' }}
                    >
                      {t('publications.monographTitle')}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: '1.4rem',
                        fontWeight: 500,
                        color: '#EFF3F8',
                        lineHeight: 1.35,
                        mb: 2,
                      }}
                    >
                      {t('publications.monographName')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(239,243,248,0.58)', lineHeight: 1.75 }}>
                      {t('publications.monographDesc')}
                    </Typography>
                  </Box>
                </Box>
              </AnimateIn>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
