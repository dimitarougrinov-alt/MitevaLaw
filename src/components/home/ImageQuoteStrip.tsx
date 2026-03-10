'use client';

import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';

interface ImageQuoteStripProps {
  quote: string;
  alt?: string;
}

export default function ImageQuoteStrip({ quote, alt = 'Адв. д-р Ани Митева' }: ImageQuoteStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewH) return;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      setParallaxY((progress - 0.5) * 90);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        height: { xs: 300, sm: 380, md: 460 },
        overflow: 'hidden',
        '@keyframes quoteReveal': {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes lineExpand': {
          from: { width: 0 },
          to: { width: 36 },
        },
      }}
    >
      {/* Parallax image layer */}
      <Box
        sx={{
          position: 'absolute',
          top: '-12%',
          bottom: '-12%',
          left: 0,
          right: 0,
          transform: `translateY(${parallaxY}px)`,
          willChange: 'transform',
        }}
      >
        <Image
          src="/images/ani-1.jpg"
          alt={alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          unoptimized
        />
      </Box>

      {/* Dark gradient overlay */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(160deg, rgba(16,32,56,0.62) 0%, rgba(27,48,80,0.78) 60%, rgba(11,22,40,0.85) 100%)',
          zIndex: 1,
        }}
      />

      {/* Subtle grid texture over overlay */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 40px, #EFF3F8 40px, #EFF3F8 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, #EFF3F8 40px, #EFF3F8 41px)
          `,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Quote content */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: { xs: 3, md: 6 },
        }}
      >
        {/* Top decorative lines */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            mb: 3.5,
          }}
        >
          <Box
            sx={{
              height: '1px',
              bgcolor: 'rgba(239,243,248,0.45)',
              width: 0,
              animation: visible ? 'lineExpand 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : 'none',
            }}
          />
          <Box
            sx={{
              height: '1px',
              bgcolor: 'rgba(82,153,200,0.7)',
              width: 0,
              animation: visible ? 'lineExpand 0.6s cubic-bezier(0.16,1,0.3,1) 0.35s forwards' : 'none',
            }}
          />
        </Box>

        {/* Quote mark */}
        <Typography
          aria-hidden
          sx={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: { xs: '4rem', md: '6rem' },
            lineHeight: 0.5,
            color: 'rgba(82,153,200,0.35)',
            mb: 1.5,
            opacity: 0,
            animation: visible ? 'quoteReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s forwards' : 'none',
          }}
        >
          "
        </Typography>

        <Typography
          sx={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 400,
            lineHeight: 1.3,
            color: '#EFF3F8',
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
            maxWidth: 640,
            opacity: 0,
            animation: visible ? 'quoteReveal 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s forwards' : 'none',
          }}
        >
          {quote}
        </Typography>

        {/* Bottom decorative lines */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            mt: 3.5,
          }}
        >
          <Box
            sx={{
              height: '1px',
              bgcolor: 'rgba(82,153,200,0.7)',
              width: 0,
              animation: visible ? 'lineExpand 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s forwards' : 'none',
            }}
          />
          <Box
            sx={{
              height: '1px',
              bgcolor: 'rgba(239,243,248,0.45)',
              width: 0,
              animation: visible ? 'lineExpand 0.6s cubic-bezier(0.16,1,0.3,1) 0.65s forwards' : 'none',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
