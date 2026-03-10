import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

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

      {/* ── ACADEMIC POSITION ── */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                <SchoolIcon sx={{ color: 'secondary.main', fontSize: 22 }} />
                <Typography variant="h3" sx={{ lineHeight: 1 }}>
                  {t('position.title')}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 6, lineHeight: 1.85 }}>
                {t('position.body')}
              </Typography>

              {/* Roles grid */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {roles.map((role, i) => (
                  <Box
                    key={i}
                    sx={{
                      py: 2.5,
                      borderBottom: '1px solid #C8D6E8',
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' },
                      gap: { xs: 0.5, sm: 2 },
                      '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.8rem', letterSpacing: '0.06em', pt: { sm: '2px' } }}
                    >
                      {role.label.toUpperCase()}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                      {role.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Side accent */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
                  bgcolor: '#EFF3F8',
                  border: '1px solid #C8D6E8',
                  borderRadius: '2px',
                  position: { md: 'sticky' },
                  top: { md: 120 },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    border: '1px solid #C8D6E8',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    color: 'primary.main',
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 22 }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'primary.main',
                    lineHeight: 1.3,
                    mb: 2,
                  }}
                >
                  {t('position.institution')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 3 }}>
                  {t('position.dept')}
                </Typography>
                <Box sx={{ height: '1px', bgcolor: '#C8D6E8', mb: 3 }} />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {t('position.courses')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── TEACHING ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: '#EFF3F8' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 8 }}>
            <MenuBookIcon sx={{ color: 'secondary.main', fontSize: 22 }} />
            <Typography variant="h3" sx={{ lineHeight: 1 }}>
              {t('teaching.title')}
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {teachingItems.map((item, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    p: 3.5,
                    height: '100%',
                    bgcolor: 'background.paper',
                    border: '1px solid #C8D6E8',
                    borderRadius: '2px',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      boxShadow: '0 8px 32px rgba(27,48,80,0.08)',
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
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── PUBLICATIONS ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
            <AutoStoriesIcon sx={{ color: 'secondary.main', fontSize: 22 }} />
            <Typography variant="h3" sx={{ lineHeight: 1 }}>
              {t('publications.title')}
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
                {t('publications.body')}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              {/* Monograph highlight */}
              <Box
                sx={{
                  p: { xs: 3.5, md: 4.5 },
                  bgcolor: '#1B3050',
                  borderRadius: '2px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(ellipse 80% 60% at 100% 100%, rgba(82,153,200,0.1) 0%, transparent 60%)`,
                    pointerEvents: 'none',
                  }}
                />
                <Typography
                  variant="overline"
                  sx={{ color: 'secondary.main', letterSpacing: '0.14em', mb: 2, display: 'block' }}
                >
                  {t('publications.monographTitle')}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '1.35rem',
                    fontWeight: 500,
                    color: '#EFF3F8',
                    lineHeight: 1.35,
                    mb: 2,
                  }}
                >
                  {t('publications.monographName')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(239,243,248,0.60)', lineHeight: 1.75 }}>
                  {t('publications.monographDesc')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
