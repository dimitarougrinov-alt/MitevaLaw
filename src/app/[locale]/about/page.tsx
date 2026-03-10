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
          <Typography variant="body1" sx={{ color: 'rgba(239,243,248,0.65)', maxWidth: 480 }}>
            {t('hero.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* ── BIO + PHOTO ── */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <AnimateIn>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
            {/* Photo */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: 'sticky', top: 120 }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 360, md: 480 },
                    borderRadius: '2px',
                    overflow: 'hidden',
                    border: '1px solid #C8D6E8',
                    mb: 2,
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
                {/* Name card */}
                <Box sx={{ p: 2.5, border: '1px solid #C8D6E8', borderRadius: '2px', bgcolor: '#EFF3F8' }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: 'primary.main',
                      mb: 0.25,
                    }}
                  >
                    Адв. д-р Ани Митева
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.06em', fontSize: '0.75rem' }}>
                    ATTORNEY AT LAW · Ph.D.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Bio text */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h3" sx={{ mb: 4, lineHeight: 1.15 }}>
                {t('bio.title')}
              </Typography>
              {(['p1', 'p2', 'p3'] as const).map((p) => (
                <Typography key={p} variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.85 }}>
                  {t(`bio.${p}`)}
                </Typography>
              ))}

              <Box sx={{ height: '1px', bgcolor: '#C8D6E8', my: 6 }} />

              {/* Education */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                <SchoolIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                <Typography variant="h4" sx={{ lineHeight: 1 }}>
                  {t('education.title')}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {educationItems.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      py: 3,
                      borderBottom: '1px solid #C8D6E8',
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '80px 1fr' },
                      gap: { xs: 0.5, sm: 3 },
                      '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
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
                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 0.5, color: 'text.primary', lineHeight: 1.4 }}>
                        {item.degree}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.institution}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box sx={{ height: '1px', bgcolor: '#C8D6E8', my: 6 }} />

              {/* Experience */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                <WorkIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                <Typography variant="h4" sx={{ lineHeight: 1 }}>
                  {t('experience.title')}
                </Typography>
              </Box>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {experienceItems.map((item, i) => (
                  <Box
                    component="li"
                    key={i}
                    sx={{
                      py: 2,
                      borderBottom: '1px solid #C8D6E8',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
                    }}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: 4,
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
                ))}
              </Box>

              <Box sx={{ height: '1px', bgcolor: '#C8D6E8', my: 6 }} />

              {/* Memberships + Languages */}
              <Grid container spacing={{ xs: 5, md: 6 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <GroupIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
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
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <TranslateIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
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
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </AnimateIn>
        </Container>
      </Box>
    </>
  );
}
