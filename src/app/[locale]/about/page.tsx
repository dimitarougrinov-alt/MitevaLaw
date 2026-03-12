import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Image from 'next/image';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import TranslateIcon from '@mui/icons-material/Translate';
import AnimateIn from '@/components/ui/AnimateIn';
import PageHero from '@/components/layout/PageHero';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about.hero' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  const educationItems = t.raw('education.items') as Array<{ year: string; degree: string; institution: string }>;
  const experienceItems = t.raw('experience.items') as string[];
  const membershipItems = t.raw('memberships.items') as string[];
  const languageItems = t.raw('languages.items') as string[];

  return (
    <>
      <PageHero
        overline={t('hero.overline')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        bgSrc="/images/mountain-peaks.jpg"
        bgPosition="center 40%"
      />

      {/* ── BIO + PHOTO ── */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">

            {/* Sticky photo column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <AnimateIn>
                <Box sx={{ position: 'sticky', top: 108 }}>
                  {/* Photo with offset frame */}
                  <Box sx={{ position: 'relative', mb: 4 }}>
                    <Box
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        right: -10,
                        bottom: -10,
                        border: '1px solid rgba(82,153,200,0.35)',
                        borderRadius: '2px',
                        pointerEvents: 'none',
                        zIndex: 0,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'relative',
                        height: { xs: 360, md: 440 },
                        borderRadius: '2px',
                        overflow: 'hidden',
                        border: '1px solid #C8D6E8',
                        zIndex: 1,
                        boxShadow: '0 20px 60px rgba(27,48,80,0.12)',
                      }}
                    >
                      <Image
                        src="/images/ani-1.jpg"
                        alt="Адв. д-р Ани Митева"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        unoptimized
                      />
                    </Box>
                  </Box>
                  {/* Name card */}
                  <Box
                    sx={{
                      p: 2.5,
                      border: '1px solid #C8D6E8',
                      borderLeft: '3px solid #5299C8',
                      borderRadius: '2px',
                      bgcolor: '#EFF3F8',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: '1.15rem',
                        fontWeight: 500,
                        color: 'primary.main',
                        mb: 0.25,
                      }}
                    >
                      Адв. д-р Ани Митева
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', letterSpacing: '0.07em', fontSize: '0.72rem' }}
                    >
                      ATTORNEY AT LAW - Ph.D. LL.M
                    </Typography>
                  </Box>
                </Box>
              </AnimateIn>
            </Grid>

            {/* Bio text */}
            <Grid size={{ xs: 12, md: 8 }}>
              <AnimateIn delay={80}>
                <Typography variant="h3" sx={{ mb: 4, lineHeight: 1.15 }}>
                  {t('bio.title')}
                </Typography>
                {(['p1', 'p2', 'p3'] as const).map((p) => (
                  <Typography key={p} variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.85 }}>
                    {t(`bio.${p}`)}
                  </Typography>
                ))}
              </AnimateIn>

              <Box sx={{ height: '1px', bgcolor: '#C8D6E8', my: 6 }} />

              {/* Education */}
              <AnimateIn delay={100}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      bgcolor: 'rgba(82,153,200,0.1)',
                      border: '1px solid rgba(82,153,200,0.3)',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'secondary.main',
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Typography variant="h4" sx={{ lineHeight: 1 }}>
                    {t('education.title')}
                  </Typography>
                </Box>
              </AnimateIn>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {educationItems.map((item, i) => (
                  <AnimateIn key={i} delay={120 + i * 60}>
                    <Box
                      sx={{
                        py: 3,
                        borderBottom: '1px solid #C8D6E8',
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '80px 1fr' },
                        gap: { xs: 0.5, sm: 3 },
                        '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
                        transition: 'background-color 0.2s ease',
                        '&:hover': { bgcolor: 'rgba(82,153,200,0.03)' },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-cormorant), serif',
                          fontSize: '1rem',
                          fontWeight: 500,
                          color: 'secondary.main',
                          lineHeight: 1.4,
                          pt: { sm: '2px' },
                        }}
                      >
                        {item.year}
                      </Typography>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 500, mb: 0.5, color: 'text.primary', lineHeight: 1.4 }}
                        >
                          {item.degree}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.institution}
                        </Typography>
                      </Box>
                    </Box>
                  </AnimateIn>
                ))}
              </Box>

              <Box sx={{ height: '1px', bgcolor: '#C8D6E8', my: 6 }} />

              {/* Experience */}
              <AnimateIn delay={100}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      bgcolor: 'rgba(78,155,138,0.1)',
                      border: '1px solid rgba(78,155,138,0.3)',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4E9B8A',
                    }}
                  >
                    <WorkIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Typography variant="h4" sx={{ lineHeight: 1 }}>
                    {t('experience.title')}
                  </Typography>
                </Box>
              </AnimateIn>

              <Box
                component="ul"
                sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 0 }}
              >
                {experienceItems.map((item, i) => (
                  <AnimateIn key={i} delay={120 + i * 50}>
                    <Box
                      component="li"
                      sx={{
                        py: 2,
                        borderBottom: '1px solid #C8D6E8',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
                        transition: 'background-color 0.2s ease',
                        '&:hover': { bgcolor: 'rgba(82,153,200,0.03)' },
                      }}
                    >
                      <Box
                        sx={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          bgcolor: 'secondary.main',
                          mt: '8px',
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body1" sx={{ lineHeight: 1.65, color: 'text.primary' }}>
                        {item}
                      </Typography>
                    </Box>
                  </AnimateIn>
                ))}
              </Box>

              <Box sx={{ height: '1px', bgcolor: '#C8D6E8', my: 6 }} />

              {/* Memberships + Languages */}
              <Grid container spacing={{ xs: 5, md: 6 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <AnimateIn>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          bgcolor: 'rgba(82,153,200,0.1)',
                          border: '1px solid rgba(82,153,200,0.3)',
                          borderRadius: '2px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'secondary.main',
                        }}
                      >
                        <GroupIcon sx={{ fontSize: 18 }} />
                      </Box>
                      <Typography variant="h4" sx={{ lineHeight: 1 }}>
                        {t('memberships.title')}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {membershipItems.map((item, i) => (
                        <Typography key={i} variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                          — {item}
                        </Typography>
                      ))}
                    </Box>
                  </AnimateIn>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <AnimateIn delay={80}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          bgcolor: 'rgba(58,120,168,0.1)',
                          border: '1px solid rgba(58,120,168,0.3)',
                          borderRadius: '2px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#3A78A8',
                        }}
                      >
                        <TranslateIcon sx={{ fontSize: 18 }} />
                      </Box>
                      <Typography variant="h4" sx={{ lineHeight: 1 }}>
                        {t('languages.title')}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {languageItems.map((lang, i) => (
                        <Chip
                          key={i}
                          label={lang}
                          size="small"
                          variant="outlined"
                          sx={{ borderColor: '#C8D6E8', color: 'text.primary' }}
                        />
                      ))}
                    </Box>
                  </AnimateIn>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
