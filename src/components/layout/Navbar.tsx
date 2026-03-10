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
  { key: 'home', href: '/' as const },
  { key: 'about', href: '/about' as const },
  { key: 'practice', href: '/practice' as const },
  { key: 'academic', href: '/academic' as const },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          transition: 'background-color 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
          bgcolor: scrolled ? 'rgba(239,243,248,0.97)' : 'rgba(239,243,248,0)',
          backdropFilter: scrolled ? 'blur(14px)' : 'blur(0px)',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'rgba(200,214,232,0.9)' : 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1240,
            mx: 'auto',
            width: '100%',
            px: { xs: 2.5, md: 5 },
            minHeight: { xs: '72px !important', md: '96px !important' },
            gap: 1,
          }}
        >
          {/* Logo */}
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              <Logo size="md" />
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
                    color: isActive ? 'primary.main' : 'text.primary',
                    fontWeight: isActive ? 600 : 400,
                    fontSize: '0.8125rem',
                    px: 1.75,
                    py: 1,
                    borderRadius: '2px',
                    letterSpacing: '0.05em',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isActive ? '16px' : '0px',
                      height: '1px',
                      bgcolor: 'secondary.main',
                      transition: 'width 0.2s ease',
                    },
                    '&:hover': {
                      bgcolor: 'transparent',
                      color: 'primary.main',
                      '&::after': { width: '16px' },
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
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <LocaleSwitcher />
            </Box>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="primary"
              size="small"
              sx={{ display: { xs: 'none', md: 'inline-flex' }, whiteSpace: 'nowrap' }}
            >
              {t('contact')}
            </Button>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="меню"
              sx={{
                display: { lg: 'none' },
                color: 'text.primary',
                width: 40,
                height: 40,
                borderRadius: '2px',
                '&:hover': { bgcolor: 'rgba(27,48,80,0.06)' },
              }}
            >
              <MenuIcon sx={{ fontSize: 22 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ height: { xs: 72, md: 96 } }} aria-hidden />

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: '#EFF3F8',
            borderLeft: '1px solid #C8D6E8',
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 2.5 }}>
            <LocaleSwitcher />
            <IconButton onClick={() => setDrawerOpen(false)} size="small" sx={{ color: 'text.secondary' }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Divider />
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
                      bgcolor: isActive ? 'rgba(27,48,80,0.06)' : 'transparent',
                    }}
                  >
                    <ListItemText
                      primary={t(key)}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? 'primary.main' : 'text.primary',
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
