'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

interface PhotoItem {
  src: string;
  alt: string;
  overline: string;
  title: string;
  subtitle?: string;
  accentColor?: string;
}

interface PhotoContextGridProps {
  items: PhotoItem[];
}

export default function PhotoContextGrid({ items }: PhotoContextGridProps) {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Grid container>
        {items.map((item, i) => (
          <Grid key={i} size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 300, sm: 380, md: 460 },
                overflow: 'hidden',
                cursor: 'default',
                '&:hover .pgrid-img': {
                  transform: 'scale(1.06)',
                },
                '&:hover .pgrid-overlay': {
                  background:
                    'linear-gradient(to top, rgba(16,32,56,0.88) 0%, rgba(27,48,80,0.52) 55%, rgba(27,48,80,0.22) 100%)',
                },
                '&:hover .pgrid-accent': {
                  width: '100%',
                },
              }}
            >
              {/* Photo */}
              <Box
                className="pgrid-img"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  unoptimized
                />
              </Box>

              {/* Gradient overlay */}
              <Box
                className="pgrid-overlay"
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(16,32,56,0.94) 0%, rgba(27,48,80,0.55) 50%, rgba(27,48,80,0.18) 100%)',
                  transition: 'background 0.4s ease',
                  zIndex: 1,
                }}
              />

              {/* Subtle colour vignette at top for overline readability */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 80,
                  background: 'linear-gradient(to bottom, rgba(16,32,56,0.45) 0%, transparent 100%)',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: { xs: 2.5, md: 3.5 },
                }}
              >
                {/* Top overline */}
                <Typography
                  component="p"
                  variant="overline"
                  sx={{
                    color: item.accentColor ?? 'rgba(82,153,200,0.95)',
                    letterSpacing: '0.2em',
                    fontSize: '0.62rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&::before': {
                      content: '""',
                      display: 'inline-block',
                      width: 18,
                      height: 1,
                      bgcolor: item.accentColor ?? 'rgba(82,153,200,0.8)',
                      flexShrink: 0,
                    },
                  }}
                >
                  {item.overline}
                </Typography>

                {/* Bottom text */}
                <Box>
                  {/* Accent bar */}
                  <Box
                    className="pgrid-accent"
                    sx={{
                      height: '1px',
                      width: 24,
                      bgcolor: item.accentColor ?? 'rgba(82,153,200,0.7)',
                      mb: 2,
                      transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: { xs: '1.85rem', md: '2.2rem' },
                      fontWeight: 400,
                      lineHeight: 1.15,
                      color: '#EFF3F8',
                      whiteSpace: 'pre-line',
                      mb: item.subtitle ? 1.5 : 0,
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item.subtitle && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(239,243,248,0.55)',
                        fontSize: '0.78rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Separator line between cards (right edge, except last) */}
              {i < items.length - 1 && (
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    top: '10%',
                    bottom: '10%',
                    right: 0,
                    width: '1px',
                    bgcolor: 'rgba(239,243,248,0.08)',
                    zIndex: 3,
                    display: { xs: 'none', sm: 'block' },
                  }}
                />
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
