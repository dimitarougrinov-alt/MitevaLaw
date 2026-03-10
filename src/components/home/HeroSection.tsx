'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image';
import NavButton from '@/components/ui/NavButton';

interface HeroSectionProps {
  overline: string;
  title: string;
  essence: string;
  cta: string;
  ctaSecondary: string;
}

export default function HeroSection({ overline, title, essence, cta, ctaSecondary }: HeroSectionProps) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(155deg, #06101C 0%, #0D1D32 40%, #172C48 75%, #1B3050 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pt: { xs: 13, md: 17 },
        pb: { xs: 16, md: 24 },

        // ── keyframes ──────────────────────────────────────
        '@keyframes heroFadeUp': {
          from: { opacity: 0, transform: 'translateY(32px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes heroImageIn': {
          from: { opacity: 0, transform: 'translateX(48px) scale(0.97)' },
          to:   { opacity: 1, transform: 'translateX(0) scale(1)' },
        },
        '@keyframes kenBurns': {
          from: { transform: 'scale(1.07) translateY(10px)' },
          to:   { transform: 'scale(1.0) translateY(0)' },
        },
        '@keyframes dividerGrow': {
          from: { width: 0, opacity: 0 },
          to:   { width: 40, opacity: 0.65 },
        },
        '@keyframes mountainReveal': {
          from: { opacity: 0, transform: 'translateY(16px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes floatTL': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%':       { transform: 'translate(-5px, -5px)' },
        },
        '@keyframes floatBR': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%':       { transform: 'translate(5px, 5px)' },
        },
        '@keyframes scrollBounce': {
          '0%, 100%': { transform: 'translateY(0) translateX(-50%)' },
          '50%':       { transform: 'translateY(6px) translateX(-50%)' },
        },
        '@keyframes glowPulse': {
          '0%, 100%': { opacity: 0.55 },
          '50%':       { opacity: 0.85 },
        },
      }}
    >
      {/* ── LAYER 1: mountain photo at low opacity ── */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.09,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/images/mountain-peaks.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          priority
          unoptimized
        />
      </Box>

      {/* ── LAYER 2: topographic lines in glacier blue ── */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.055,
          backgroundImage: `
            repeating-linear-gradient(
              -30deg,
              transparent,
              transparent 52px,
              #5299C8 52px,
              #5299C8 53px
            )
          `,
          pointerEvents: 'none',
        }}
      />

      {/* ── LAYER 3: atmospheric radial colour washes ── */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 2% 5%, rgba(82,153,200,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 55% 75% at 105% 40%, rgba(82,153,200,0.1) 0%, transparent 55%),
            radial-gradient(ellipse 90% 45% at 50% 110%, rgba(11,24,44,0.95) 0%, transparent 65%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* ── LAYER 4: ghost monogram watermark ── */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: { xs: '3%', md: '6%' },
          right: { xs: '-4%', md: '-1%' },
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: { xs: '13vw', md: '11vw' },
          fontWeight: 300,
          color: 'rgba(239,243,248,0.030)',
          letterSpacing: '0.18em',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        ANI MITEVA
      </Box>

      {/* ── LAYER 5: multi-depth mountain silhouette SVG ── */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: 110, md: 180 },
          opacity: 0,
          animation: 'mountainReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="xMidYMax meet"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}
        >
          {/* Distant range */}
          <path
            d="M0 180 L160 110 L260 140 L390 75 L510 120 L630 52 L750 105 L870 38 L990 95 L1110 50 L1230 100 L1350 62 L1440 85 L1440 180 Z"
            fill="rgba(239,243,248,0.032)"
          />
          {/* Mid range */}
          <path
            d="M0 180 L200 125 L320 150 L460 95 L580 130 L700 78 L820 118 L940 58 L1060 108 L1185 72 L1310 115 L1440 88 L1440 180 Z"
            fill="rgba(82,153,200,0.055)"
          />
          {/* Nearest peaks */}
          <path
            d="M0 180 L280 148 L420 162 L560 128 L680 155 L800 118 L930 148 L1070 122 L1200 148 L1350 130 L1440 142 L1440 180 Z"
            fill="rgba(239,243,248,0.04)"
          />
          {/* Ground fade */}
          <defs>
            <linearGradient id="groundFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(23,44,72,0)" />
              <stop offset="100%" stopColor="rgba(27,48,80,0.6)" />
            </linearGradient>
          </defs>
          <rect x="0" y="155" width="1440" height="25" fill="url(#groundFade)" />
        </svg>
      </Box>

      {/* ── Corner accent – top left, floats ── */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: { xs: 88, md: 110 },
          left: { xs: 20, md: 60 },
          width: { xs: 44, md: 68 },
          height: { xs: 44, md: 68 },
          borderLeft: '1px solid rgba(82,153,200,0.22)',
          borderTop: '1px solid rgba(82,153,200,0.22)',
          pointerEvents: 'none',
          animation: 'floatTL 8s ease-in-out infinite',
          zIndex: 2,
        }}
      />
      {/* ── Corner accent – bottom right, floats ── */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: { xs: 120, md: 190 },
          right: { xs: 20, md: 60 },
          width: { xs: 44, md: 68 },
          height: { xs: 44, md: 68 },
          borderRight: '1px solid rgba(82,153,200,0.18)',
          borderBottom: '1px solid rgba(82,153,200,0.18)',
          pointerEvents: 'none',
          animation: 'floatBR 8s ease-in-out infinite',
          zIndex: 2,
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 }, position: 'relative', zIndex: 3 }}>
        <Grid container alignItems="center" spacing={{ xs: 7, md: 10 }}>

          {/* ── TEXT COLUMN ── */}
          <Grid size={{ xs: 12, md: 6 }}>

            {/* Overline */}
            <Typography
              component="p"
              variant="overline"
              sx={{
                color: '#5299C8',
                letterSpacing: '0.28em',
                mb: 3.5,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                opacity: 0,
                animation: 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: 28,
                  height: 1,
                  bgcolor: 'rgba(82,153,200,0.7)',
                  flexShrink: 0,
                },
              }}
            >
              {overline}
            </Typography>

            {/* Main headline */}
            <Typography
              component="h1"
              sx={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: { xs: '2.9rem', sm: '3.9rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 400,
                lineHeight: { xs: 1.07, md: 1.03 },
                letterSpacing: '-0.025em',
                color: '#EFF3F8',
                mb: 4,
                whiteSpace: 'pre-line',
                opacity: 0,
                animation: 'heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.28s forwards',
              }}
            >
              {title}
            </Typography>

            {/* Divider line – draws in */}
            <Box
              sx={{
                width: 0,
                height: '1px',
                bgcolor: 'rgba(82,153,200,0.65)',
                mb: 4,
                opacity: 0,
                animation: 'dividerGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.46s forwards',
              }}
            />

            {/* Tagline */}
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(239,243,248,0.58)',
                mb: 5.5,
                maxWidth: 460,
                lineHeight: 1.85,
                fontStyle: 'italic',
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: { xs: '1.2rem', md: '1.35rem' },
                opacity: 0,
                animation: 'heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.52s forwards',
              }}
            >
              {essence}
            </Typography>

            {/* CTAs */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                opacity: 0,
                animation: 'heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.68s forwards',
              }}
            >
              {/* Primary: white pill on dark */}
              <NavButton
                href="/contact"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#EFF3F8',
                  color: '#0E1D34',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  '&:hover': {
                    bgcolor: '#FFFFFF',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
                  },
                }}
              >
                {cta}
              </NavButton>
              {/* Secondary: ghost on dark */}
              <NavButton
                href="/practice"
                variant="outlined"
                size="large"
                sx={{
                  color: 'rgba(239,243,248,0.82)',
                  borderColor: 'rgba(239,243,248,0.28)',
                  borderWidth: '1.5px',
                  '&:hover': {
                    borderColor: 'rgba(239,243,248,0.7)',
                    borderWidth: '1.5px',
                    bgcolor: 'rgba(239,243,248,0.06)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {ctaSecondary}
              </NavButton>
            </Box>
          </Grid>

          {/* ── PHOTO COLUMN ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 380, sm: 480, md: 620 },
                opacity: 0,
                animation: 'heroImageIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards',
              }}
            >
              {/* Ambient blue glow radiating behind the photo */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  top: '5%',
                  left: '5%',
                  right: '-8%',
                  bottom: '-5%',
                  background: 'radial-gradient(ellipse at 60% 40%, rgba(82,153,200,0.22) 0%, transparent 70%)',
                  filter: 'blur(32px)',
                  animation: 'glowPulse 4s ease-in-out infinite',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Decorative offset frame */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  right: -12,
                  bottom: -12,
                  border: '1px solid rgba(82,153,200,0.3)',
                  borderRadius: '2px',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Second decorative frame offset further */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  top: 28,
                  left: 28,
                  right: -24,
                  bottom: -24,
                  border: '1px solid rgba(82,153,200,0.12)',
                  borderRadius: '2px',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Photo */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  height: '100%',
                  border: '1px solid rgba(82,153,200,0.3)',
                  boxShadow: '0 48px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(82,153,200,0.08)',
                  zIndex: 1,
                }}
              >
                <Image
                  src="/images/ani-2.jpg"
                  alt="Адв. д-р Ани Митева"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    animation: 'kenBurns 7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.35s 1 both',
                  }}
                  priority
                  unoptimized
                />
                {/* Gradient blending photo bottom into hero background */}
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(to top, rgba(19,36,60,0.72) 0%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Subtle blue-tint overlay */}
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(82,153,200,0.04) 0%, transparent 50%)',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ── Scroll indicator ── */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: { xs: 28, md: 36 },
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.75,
          zIndex: 5,
          opacity: 0,
          animation: 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.3s forwards',
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: 'rgba(82,153,200,0.45)',
            fontSize: '0.58rem',
            letterSpacing: '0.3em',
          }}
        >
          scroll
        </Typography>
        <Box
          sx={{
            width: '1px',
            height: 38,
            bgcolor: 'rgba(82,153,200,0.3)',
            animation: 'scrollBounce 2.2s ease-in-out infinite',
            transformOrigin: 'top center',
          }}
        />
      </Box>
    </Box>
  );
}
