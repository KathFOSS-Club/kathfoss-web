"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {AppBar,Toolbar,Box,Button,IconButton,Drawer,List,ListItem,ListItemButton,ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'EVENTS', href: '#events' },
    { label: 'TEAM', href: '#team' },
    { label: 'CONTACT US', href: '#contact-us' },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#0A001F',
        maxWidth: '1000px',
        margin: '20px auto',
        borderRadius: 3,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        {/* Logo */}
        <Image src="/assets/icon.svg" alt="Logo" width={150} height={150} />

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} passHref>
              <Button
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: '#FFFFFF',
            position: 'absolute',
            top: 5,
            right: 5,
          }}
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
        {isDrawerOpen?<CloseIcon sx={{ fontSize: '30px'}}/>:<MenuIcon sx={{ fontSize: '30px' }} />}
        </IconButton>

          <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={()=>setIsDrawerOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: 'rgba(10, 0, 31, 0.85)',
              color: '#FFFFFF',
              padding: '5px',
              top: 90,
              right: 5,
              height: 'auto',
              borderRadius: '10px',
            },
          }}
        >
          
          <List sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}> 
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  <ListItemText primary={item.label} sx={{ fontWeight: 'bold' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}