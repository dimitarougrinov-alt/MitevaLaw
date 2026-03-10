import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import GavelIcon from '@mui/icons-material/Gavel';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact.hero' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  const tFooter = await getTranslations({ locale, namespace: 'footer' });

  const infoItems = [
    {
      Icon: GavelIcon,
      label: t('info.barLabel'),
      value: t('info.bar'),
      href: null,
    },
    {
      Icon: SchoolIcon,
      label: t('info.affiliationLabel'),
      value: t('info.affiliation'),
      href: null,
    },
    {
      Icon: TranslateIcon,
      label: t('info.languagesLabel'),
      value: t('info.languages'),
      href: null,
    },
    {
      Icon: EmailIcon,
      label: 'Email',
      value: 'a.miteva@lawyer.bg',
      href: 'mailto:a.miteva@lawyer.bg',
    },
  ];

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

      {/* ── CONTACT INFO ── */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} justifyContent="center">
            <Grid size={{ xs: 12, md: 7 }}>
              {/* Info items */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {infoItems.map(({ Icon, label, value, href }, i) => (
                  <Box
                    key={i}
                    sx={{
                      py: 3.5,
                      borderBottom: '1px solid #C8D6E8',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 3,
                      '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
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
                        color: 'primary.main',
                        flexShrink: 0,
                        mt: '2px',
                      }}
                    >
                      <Icon sx={{ fontSize: 18 }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{ color: 'text.secondary', letterSpacing: '0.14em', mb: 0.75, display: 'block' }}
                      >
                        {label}
                      </Typography>
                      {href ? (
                        <MuiLink
                          href={href}
                          underline="none"
                          sx={{
                            fontFamily: 'var(--font-cormorant), serif',
                            fontSize: '1.25rem',
                            fontWeight: 500,
                            color: 'primary.main',
                            transition: 'color 0.15s ease',
                            '&:hover': { color: 'secondary.main' },
                          }}
                        >
                          {value}
                        </MuiLink>
                      ) : (
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-cormorant), serif',
                            fontSize: '1.2rem',
                            fontWeight: 400,
                            color: 'text.primary',
                            lineHeight: 1.5,
                          }}
                        >
                          {value}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Note */}
              <Box
                sx={{
                  mt: 6,
                  p: 4,
                  bgcolor: '#EFF3F8',
                  border: '1px solid #C8D6E8',
                  borderRadius: '2px',
                  borderLeft: '3px solid',
                  borderLeftColor: 'secondary.main',
                }}
              >
                <Typography variant="subtitle2" sx={{ color: 'primary.main', mb: 1, letterSpacing: '0.04em' }}>
                  {t('info.noteTitle')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {t('info.note')}
                </Typography>
              </Box>
            </Grid>

            {/* Right column — visual accent */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
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
                <Box sx={{ position: 'relative' }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: { xs: '1.75rem', md: '2rem' },
                      fontWeight: 400,
                      color: '#EFF3F8',
                      lineHeight: 1.3,
                      mb: 3,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {tFooter('tagline')}
                  </Typography>
                  <Box sx={{ height: '1px', bgcolor: 'rgba(239,243,248,0.15)', mb: 3 }} />
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(239,243,248,0.55)', lineHeight: 1.75 }}
                  >
                    {t('info.accentDesc')}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
