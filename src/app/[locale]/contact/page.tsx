import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import GavelIcon from '@mui/icons-material/Gavel';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
import AnimateIn from '@/components/ui/AnimateIn';
import PageHero from '@/components/layout/PageHero';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact.hero' });
  return { title: t('title'), description: t('subtitle') };
}

const iconAccents = ['#5299C8', '#3A78A8', '#6BB8D8', '#4E9B8A'];

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  const tFooter = await getTranslations({ locale, namespace: 'footer' });

  const infoItems = [
    { Icon: GavelIcon,     label: t('info.barLabel'),          value: t('info.bar'),         href: null },
    { Icon: SchoolIcon,    label: t('info.affiliationLabel'),   value: t('info.affiliation'), href: null },
    { Icon: TranslateIcon, label: t('info.languagesLabel'),     value: t('info.languages'),   href: null },
    { Icon: EmailIcon,     label: 'Email',                      value: 'a.miteva@lawyer.bg',  href: 'mailto:a.miteva@lawyer.bg' },
  ];

  return (
    <>
      <PageHero
        overline={t('hero.overline')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        bgSrc="/images/mountain-peaks.jpg"
        bgPosition="center 55%"
      />

      {/* ── CONTACT INFO ── */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} justifyContent="center">

            {/* Info items column */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {infoItems.map(({ Icon, label, value, href }, i) => (
                  <AnimateIn key={i} delay={i * 70}>
                    <Box
                      sx={{
                        py: 3.5,
                        borderBottom: '1px solid #C8D6E8',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 3,
                        '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
                        transition: 'background-color 0.2s ease',
                        '&:hover': { bgcolor: `${iconAccents[i]}05` },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          bgcolor: `${iconAccents[i]}12`,
                          border: `1px solid ${iconAccents[i]}38`,
                          borderRadius: '2px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: iconAccents[i],
                          flexShrink: 0,
                          mt: '2px',
                          transition: 'all 0.2s ease',
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
                              fontSize: '1.3rem',
                              fontWeight: 500,
                              color: iconAccents[i],
                              transition: 'color 0.15s ease',
                              '&:hover': { color: 'primary.main' },
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
                  </AnimateIn>
                ))}
              </Box>

              {/* Note */}
              <AnimateIn delay={320}>
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
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'primary.main', mb: 1, letterSpacing: '0.04em' }}
                  >
                    {t('info.noteTitle')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {t('info.note')}
                  </Typography>
                </Box>
              </AnimateIn>
            </Grid>

            {/* Right column – mountain photo accent */}
            <Grid size={{ xs: 12, md: 5 }}>
              <AnimateIn delay={160}>
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '2px',
                    minHeight: { xs: 260, md: 340 },
                  }}
                >
                  <Image
                    src="/images/mountain-peaks.jpg"
                    alt=""
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
                    unoptimized
                  />
                  <Box
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(160deg, rgba(10,20,38,0.88) 0%, rgba(27,48,80,0.85) 60%, rgba(16,32,56,0.9) 100%)',
                    }}
                  />
                  <Box
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `radial-gradient(ellipse 80% 60% at 100% 100%, rgba(82,153,200,0.12) 0%, transparent 60%)`,
                      pointerEvents: 'none',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      p: { xs: 4, md: 5 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Accent line */}
                    <Box sx={{ width: 28, height: '1px', bgcolor: 'rgba(82,153,200,0.7)', mb: 3 }} />
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: { xs: '1.65rem', md: '1.9rem' },
                        fontWeight: 400,
                        color: '#EFF3F8',
                        lineHeight: 1.3,
                        mb: 3,
                        fontStyle: 'italic',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {tFooter('tagline')}
                    </Typography>
                    <Box sx={{ height: '1px', bgcolor: 'rgba(239,243,248,0.14)', mb: 3 }} />
                    <Typography
                      variant="body2"
                      sx={{ color: 'rgba(239,243,248,0.52)', lineHeight: 1.75 }}
                    >
                      {t('info.accentDesc')}
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
