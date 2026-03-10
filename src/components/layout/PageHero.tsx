'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';

interface PageHeroProps {
  overline: string;
  title: string;
  subtitle?: string;
  bgSrc?: string;
  bgPosition?: string;
}

export default function PageHero({
  overline,
  title,
  subtitle,
  bgSrc,
  bgPosition = 'center',
}: PageHeroProps) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(155deg, #06101C 0%, #0D1D32 40%, #172C48 75%, #1B3050 100%)',
        pt: { xs: 13, md: 17 },
        pb: { xs: 9, md: 13 },
        position: 'relative',
        overflow: 'hidden',
        '@keyframes heroFadeUp': {
          from: { opacity: 0, transform: 'translateY(22px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes mtnReveal': {
          from: { opacity: 0, transform: 'translateY(14px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      {/* Optional photo background */}
      {bgSrc && (
        <Box
          aria-hidden
          sx={{ position: 'absolute', inset: 0, opacity: 0.11, pointerEvents: 'none' }}
        >
          <Image
            src={bgSrc}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: bgPosition }}
            unoptimized
          />
        </Box>
      )}

      {/* Topographic lines in glacier blue */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.045,
          backgroundImage: `
            repeating-linear-gradient(
              -30deg,
              transparent, transparent 52px,
              #5299C8 52px, #5299C8 53px
            )
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Atmospheric colour washes */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 70% 70% at 100% 25%, rgba(82,153,200,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 0% 80%, rgba(42,75,117,0.35) 0%, transparent 55%),
            radial-gradient(ellipse 80% 40% at 50% 110%, rgba(11,24,44,0.9) 0%, transparent 65%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Mountain silhouette */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: 70, md: 120 },
          opacity: 0,
          animation: 'mtnReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="xMidYMax meet"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}
        >
          <path
            d="M0 120 L220 72 L360 96 L480 48 L600 82 L720 36 L840 74 L960 26 L1080 66 L1200 40 L1320 70 L1440 48 L1440 120 Z"
            fill="rgba(239,243,248,0.030)"
          />
          <path
            d="M0 120 L180 82 L320 102 L460 62 L580 88 L700 50 L820 80 L940 38 L1060 72 L1180 52 L1300 78 L1440 58 L1440 120 Z"
            fill="rgba(82,153,200,0.05)"
          />
        </svg>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 }, position: 'relative', zIndex: 2 }}>
        <Typography
          component="p"
          variant="overline"
          sx={{
            color: '#5299C8',
            letterSpacing: '0.28em',
            mb: 2.5,
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            opacity: 0,
            animation: 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
            '&::before': {
              content: '""',
              display: 'inline-block',
              width: 22,
              height: 1,
              bgcolor: 'rgba(82,153,200,0.7)',
              flexShrink: 0,
            },
          }}
        >
          {overline}
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: { xs: '2.5rem', md: '3.85rem' },
            fontWeight: 400,
            color: '#EFF3F8',
            lineHeight: 1.08,
            mb: subtitle ? 2.5 : 0,
            letterSpacing: '-0.015em',
            opacity: 0,
            animation: 'heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.28s forwards',
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(239,243,248,0.56)',
              maxWidth: 520,
              lineHeight: 1.75,
              opacity: 0,
              animation: 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.42s forwards',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
