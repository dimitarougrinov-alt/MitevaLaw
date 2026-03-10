'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export interface Publication {
  title: string;
  year: string;
  type: string;
  venue: string;
  coauthors?: string;
  indexed?: string;
  area: 'law' | 'medicine';
}

interface Labels {
  filterAll: string;
  filterLaw: string;
  filterMedicine: string;
  typeArticle: string;
  typeStudy: string;
  typeConference: string;
  coauthors: string;
  registryLink: string;
}

interface Props {
  items: Publication[];
  labels: Labels;
}

const typeColors: Record<string, { bg: string; text: string; border: string; bar: string }> = {
  article:    { bg: 'rgba(82,153,200,0.08)',  text: '#5299C8', border: 'rgba(82,153,200,0.28)', bar: '#5299C8' },
  study:      { bg: 'rgba(201,169,106,0.10)', text: '#C9A96A', border: 'rgba(201,169,106,0.32)', bar: '#C9A96A' },
  conference: { bg: 'rgba(78,155,138,0.08)',  text: '#4E9B8A', border: 'rgba(78,155,138,0.28)', bar: '#4E9B8A' },
};

function typeLabel(type: string, labels: Labels) {
  if (type === 'article')    return labels.typeArticle;
  if (type === 'study')      return labels.typeStudy;
  if (type === 'conference') return labels.typeConference;
  return type;
}

export default function PublicationsList({ items, labels }: Props) {
  const [filter, setFilter] = useState<'all' | 'law' | 'medicine'>('all');

  const visible = filter === 'all' ? items : items.filter((p) => p.area === filter);

  const byYear: Record<string, Publication[]> = {};
  for (const pub of visible) {
    (byYear[pub.year] ??= []).push(pub);
  }
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  const filters: { key: 'all' | 'law' | 'medicine'; label: string }[] = [
    { key: 'all',      label: labels.filterAll },
    { key: 'law',      label: labels.filterLaw },
    { key: 'medicine', label: labels.filterMedicine },
  ];

  return (
    <Box>
      {/* Filter tabs */}
      <Box sx={{ display: 'flex', gap: 1, mb: 8, flexWrap: 'wrap' }}>
        {filters.map(({ key, label }) => (
          <Box
            key={key}
            component="button"
            onClick={() => setFilter(key)}
            sx={{
              px: 3,
              py: 1,
              border: '1px solid',
              borderColor: filter === key ? 'secondary.main' : '#C8D6E8',
              borderRadius: '2px',
              bgcolor: filter === key ? 'rgba(82,153,200,0.07)' : 'transparent',
              color: filter === key ? 'secondary.main' : 'text.secondary',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.78rem',
              fontWeight: filter === key ? 600 : 400,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
              '&:hover': { borderColor: 'secondary.main', color: 'secondary.main' },
            }}
          >
            {label}
          </Box>
        ))}
      </Box>

      {/* Year groups */}
      <Box>
        {years.map((year) => (
          <Box key={year} sx={{ mb: 2 }}>
            {/* Year header — full-width rule with year as left anchor */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                mb: 0,
                pb: 0,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '2.2rem',
                  fontWeight: 300,
                  color: 'primary.main',
                  opacity: 0.45,
                  lineHeight: 1,
                  minWidth: 60,
                  letterSpacing: '-0.02em',
                  flexShrink: 0,
                }}
              >
                {year}
              </Typography>
              <Box sx={{ flex: 1, height: '1px', bgcolor: '#C8D6E8' }} />
            </Box>

            {/* Entries */}
            {byYear[year].map((pub, i) => {
              const c = typeColors[pub.type] ?? typeColors.article;
              return (
                <Box
                  key={i}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '60px 1fr' },
                    gap: { xs: 0, sm: 0 },
                    py: 3,
                    borderBottom: '1px solid #C8D6E8',
                    position: 'relative',
                    transition: 'all 0.18s ease',
                    '&:hover': {
                      bgcolor: 'rgba(82,153,200,0.02)',
                      '& .entry-bar': { opacity: 1 },
                    },
                  }}
                >
                  {/* Left accent bar on hover */}
                  <Box
                    className="entry-bar"
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '2px',
                      bgcolor: c.bar,
                      opacity: 0,
                      transition: 'opacity 0.18s ease',
                    }}
                  />

                  {/* Type badge — sits in left column on desktop */}
                  <Box
                    sx={{
                      pt: { xs: 0, sm: '4px' },
                      pb: { xs: 1, sm: 0 },
                      pl: { xs: 0, sm: 0 },
                      display: 'flex',
                      alignItems: { xs: 'center', sm: 'flex-start' },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        px: 1,
                        py: '3px',
                        bgcolor: c.bg,
                        border: `1px solid ${c.border}`,
                        borderRadius: '2px',
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          color: c.text,
                          textTransform: 'uppercase',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {typeLabel(pub.type, labels)}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Content */}
                  <Box sx={{ pl: { xs: 0, sm: 2 } }}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: '1.15rem',
                        fontWeight: 500,
                        color: 'text.primary',
                        lineHeight: 1.4,
                        mb: 0.75,
                      }}
                    >
                      {pub.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '0.78rem',
                        color: 'text.secondary',
                        lineHeight: 1.65,
                        fontStyle: 'italic',
                      }}
                    >
                      {pub.venue}
                    </Typography>

                    {(pub.coauthors || pub.indexed) && (
                      <Box sx={{ display: 'flex', gap: 1.5, mt: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                        {pub.coauthors && (
                          <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                            <Box component="span" sx={{ fontWeight: 600 }}>{labels.coauthors}:</Box>{' '}
                            {pub.coauthors}
                          </Typography>
                        )}
                        {pub.indexed && (
                          <Box
                            sx={{
                              px: 1,
                              py: '1px',
                              bgcolor: 'rgba(82,153,200,0.06)',
                              border: '1px solid rgba(82,153,200,0.2)',
                              borderRadius: '2px',
                            }}
                          >
                            <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: '#5299C8' }}>
                              {pub.indexed}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* Registry link */}
      <Box sx={{ mt: 5, pt: 5, borderTop: '1px solid #C8D6E8' }}>
        <MuiLink
          href="https://ras.nacid.bg/dissertation-preview/47257"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            fontSize: '0.78rem',
            fontWeight: 500,
            color: 'text.secondary',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            transition: 'color 0.15s ease',
            '&:hover': { color: 'secondary.main' },
          }}
        >
          {labels.registryLink} →
        </MuiLink>
      </Box>
    </Box>
  );
}
