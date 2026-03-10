'use client';

import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LocaleSwitcher from './LocaleSwitcher';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { key: 'home',     href: '/'         },
  { key: 'about',    href: '/about'    },
  { key: 'practice', href: '/practice' },
  { key: 'academic', href: '/academic' },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
          bgcolor: scrolled ? 'rgba(9,18,32,0.93)' : 'rgba(9,18,32,0.0)',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(0px)',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'rgba(82,153,200,0.14)' : 'transparent',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1240,
            mx: 'auto',
            width: '100%',
            px: { xs: 2.5, md: 5 },
            minHeight: { xs: '72px !important', md: '88px !important' },
            gap: 1,
          }}
        >
          {/* Logo – always light on the dark nav */}
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              <Logo color="#EFF3F8" size="md" />
            </Link>
          </Box>

          {/* Desktop nav links */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0, alignItems: 'center' }}>
            {navLinks.map(({ key, href }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Button
                  key={key}
                  component={Link}
                  href={href}
                  disableRipple
                  sx={{
                    color: isActive ? '#5299C8' : 'rgba(239,243,248,0.70)',
                    fontWeight: isActive ? 500 : 400,
                    fontSize: '0.8125rem',
                    px: 1.75,
                    py: 1,
                    borderRadius: '2px',
                    letterSpacing: '0.06em',
                    position: 'relative',
                    transition: 'color 0.2s ease',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 5,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isActive ? '14px' : '0px',
                      height: '1px',
                      bgcolor: '#5299C8',
                      transition: 'width 0.2s ease',
                    },
                    '&:hover': {
                      bgcolor: 'transparent',
                      color: '#EFF3F8',
                      '&::after': { width: '14px' },
                    },
                  }}
                >
                  {t(key)}
                </Button>
              );
            })}
          </Box>

          {/* Right: locale switcher + CTA + hamburger */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1.5 }}>
            {/* Locale switcher – override MUI theme colors for dark bg */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                '& .MuiButton-root': {
                  color: 'rgba(239,243,248,0.5)',
                  '&:hover': { color: 'rgba(239,243,248,0.85)', bgcolor: 'transparent' },
                },
              }}
            >
              <LocaleSwitcher />
            </Box>

            {/* Contact CTA – ghost outlined on dark */}
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              size="small"
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                whiteSpace: 'nowrap',
                color: 'rgba(239,243,248,0.85)',
                borderColor: 'rgba(239,243,248,0.28)',
                borderWidth: '1px',
                fontSize: '0.8125rem',
                letterSpacing: '0.04em',
                '&:hover': {
                  borderColor: 'rgba(239,243,248,0.7)',
                  bgcolor: 'rgba(239,243,248,0.06)',
                  color: '#EFF3F8',
                },
              }}
            >
              {t('contact')}
            </Button>

            {/* Mobile hamburger */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="меню"
              sx={{
                display: { lg: 'none' },
                color: 'rgba(239,243,248,0.78)',
                width: 40,
                height: 40,
                borderRadius: '2px',
                '&:hover': { bgcolor: 'rgba(239,243,248,0.08)', color: '#EFF3F8' },
              }}
            >
              <MenuIcon sx={{ fontSize: 22 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer – dark navy */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: '#0C1A2E',
            borderLeft: '1px solid rgba(82,153,200,0.14)',
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 2.5 }}>
            <Box
              sx={{
                '& .MuiButton-root': {
                  color: 'rgba(239,243,248,0.5)',
                  '&:hover': { color: 'rgba(239,243,248,0.85)', bgcolor: 'transparent' },
                },
              }}
            >
              <LocaleSwitcher />
            </Box>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              size="small"
              sx={{ color: 'rgba(239,243,248,0.5)', '&:hover': { color: '#EFF3F8' } }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Divider sx={{ borderColor: 'rgba(82,153,200,0.1)' }} />
          <List sx={{ px: 1.5, pt: 1.5, flex: 1 }}>
            {[...navLinks, { key: 'contact' as const, href: '/contact' as const }].map(({ key, href }) => {
              const isActive = pathname === href;
              return (
                <ListItem key={key} disablePadding sx={{ mb: 0.25 }}>
                  <ListItemButton
                    component={Link}
                    href={href}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      py: 1.25,
                      px: 2,
                      borderRadius: '2px',
                      bgcolor: isActive ? 'rgba(82,153,200,0.12)' : 'transparent',
                      '&:hover': { bgcolor: 'rgba(82,153,200,0.08)' },
                    }}
                  >
                    <ListItemText
                      primary={t(key)}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 500 : 400,
                        color: isActive ? '#5299C8' : 'rgba(239,243,248,0.75)',
                        fontSize: '0.9375rem',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
