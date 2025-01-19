"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "EVENTS", href: "#events" },
    { label: "TEAM", href: "#team" },
    { label: "CONTACT US", href: "#contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={isScrolled ? 3 : 0}
      sx={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.8)"
          : "transparent",
        boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        transition: "background-color 0.3s, box-shadow 0.3s",
        padding: "10px 20px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/assets/icon.svg" alt="Logo" width={130} height={130} />
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} passHref>
              <Button
                sx={{
                  color: isScrolled ? "#000" : "#FFF",
                  fontWeight: "normal",
                  fontSize: "14px",
                  textTransform: "none",
                  transition: "color 0.3s",
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
            display: { xs: "flex", md: "none" },
            color: "#FFFFFF",
            position: "relative",
          }}
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {/* Toggling between MenuIcon and CloseIcon */}
          {isDrawerOpen ? (
            <CloseIcon sx={{ fontSize: "30px", color: "#FFF" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "30px", color: "#FFF" }} />
          )}
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          elevation={0}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "transparent",
              color: "#FFF",
              padding: "20px 10px",
              borderRadius: "15px 0 0 15px",
              height: "auto",
              width: "40%",
              top: "50px",
              right: 0,
              position: "fixed",
            },
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)} // Close the drawer after clicking a nav item
                  sx={{
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: 1,
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "18px",
                      textTransform: "uppercase",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
