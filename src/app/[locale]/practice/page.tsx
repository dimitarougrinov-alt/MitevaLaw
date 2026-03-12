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
import BalanceIcon from '@mui/icons-material/Balance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CheckIcon from '@mui/icons-material/Check';
import NavButton from '@/components/ui/NavButton';
import AnimateIn from '@/components/ui/AnimateIn';
import PageHero from '@/components/layout/PageHero';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'practice.hero' });
  return { title: t('title'), description: t('subtitle') };
}

const areas = [
  { key: 'tax',       Icon: GavelIcon,          accent: '#5299C8' },
  { key: 'financial', Icon: AccountBalanceIcon,  accent: '#3A78A8' },
  { key: 'admin',     Icon: PolicyIcon,          accent: '#6BB8D8' },
  { key: 'bioethics', Icon: BiotechIcon,         accent: '#4E9B8A' },
  { key: 'conflict',      Icon: BalanceIcon,                accent: '#8A7EB8' },
  { key: 'confiscation',  Icon: AccountBalanceWalletIcon,   accent: '#B87E7E' },
] as const;

export default async function PracticePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'practice' });
  const tContact = await getTranslations({ locale, namespace: 'common' });

  return (
    <>
      <PageHero
        overline={t('hero.overline')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        bgSrc="/images/law-library.jpg"
        bgPosition="center 30%"
      />

      {/* ── PRACTICE AREAS ── */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {areas.map(({ key, Icon, accent }, i) => {
              const items = t.raw(`${key}.items`) as string[];
              return (
                <AnimateIn key={key} delay={i * 60}>
                  <Box
                    sx={{
                      py: { xs: 7, md: 10 },
                      borderBottom: '1px solid #C8D6E8',
                      '&:first-of-type': { borderTop: '1px solid #C8D6E8' },
                      transition: 'background-color 0.25s ease',
                      '&:hover': { bgcolor: `${accent}06` },
                    }}
                  >
                    <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
                      {/* Number */}
                      <Grid size={{ xs: 12, md: 1 }}>
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-cormorant), serif',
                            fontSize: '3rem',
                            fontWeight: 300,
                            color: accent,
                            lineHeight: 1,
                            opacity: 0.55,
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </Typography>
                      </Grid>

                      {/* Title + description */}
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            bgcolor: `${accent}14`,
                            border: `1px solid ${accent}45`,
                            borderRadius: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: accent,
                            mb: 2.5,
                          }}
                        >
                          <Icon sx={{ fontSize: 19 }} />
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
                        <Box
                          component="ul"
                          sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 0 }}
                        >
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
                              <Box
                                sx={{
                                  width: 18,
                                  height: 18,
                                  bgcolor: `${accent}12`,
                                  border: `1px solid ${accent}35`,
                                  borderRadius: '2px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                }}
                              >
                                <CheckIcon sx={{ fontSize: 11, color: accent }} />
                              </Box>
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

          {/* CTA – mountain photo background */}
          <AnimateIn>
            <Box
              sx={{
                mt: 10,
                p: { xs: 5, md: 8 },
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '2px',
                textAlign: 'center',
              }}
            >
              {/* Photo background */}
              <Image
                src="/images/mountain-peaks.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
                unoptimized
              />
              {/* Dark overlay */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(160deg, rgba(10,20,38,0.92) 0%, rgba(27,48,80,0.88) 100%)',
                }}
              />
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `radial-gradient(ellipse 60% 80% at 80% 50%, rgba(82,153,200,0.1) 0%, transparent 60%)`,
                  pointerEvents: 'none',
                }}
              />
              {/* Content */}
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 2,
                    lineHeight: 1.2,
                    color: '#EFF3F8',
                    fontFamily: 'var(--font-cormorant), serif',
                  }}
                >
                  {t('cta.title')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, maxWidth: 440, mx: 'auto', color: 'rgba(239,243,248,0.58)' }}
                >
                  {t('cta.body')}
                </Typography>
                <NavButton
                  href="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: '#EFF3F8',
                    borderColor: 'rgba(239,243,248,0.35)',
                    '&:hover': {
                      borderColor: '#EFF3F8',
                      bgcolor: 'rgba(239,243,248,0.07)',
                    },
                  }}
                >
                  {tContact('contactCta')}
                </NavButton>
              </Box>
            </Box>
          </AnimateIn>
        </Container>
      </Box>
    </>
  );
}
