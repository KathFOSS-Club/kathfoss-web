"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Box, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "EVENTS", href: "#events" },
    { label: "TEAM", href: "#team" },
    { label: "CONTACT", href: "#contact-us" },
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
      elevation={isScrolled ? 2 : 0}
      sx={{
        backgroundColor: isScrolled ? "rgb(24, 22, 48,0.8)" : "transparent",
        boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        padding: "10px 20px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/assets/logo.svg" alt="Logo" width={130} height={130} />
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
                  color: "#FFF",
                  fontWeight: "normal",
                  fontSize: "14px",
                  textTransform: "none",
                  transition: "color 0.3s",
                  "&:hover": { color: "#BBB" },
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
          {isDrawerOpen ? (
            <CloseIcon sx={{ fontSize: "30px", color: "#FFF" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "30px", color: "#FFF" }} />
          )}
        </IconButton>

        {/* Mobile Menu */}
        {isDrawerOpen && (
          <Box
            sx={{
              position: "absolute",
              top: "70px",
              right: 0,
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              borderRadius: "15px 0 0 15px",
              padding: "20px",
              zIndex: 10,
              width: "140px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {navItems.map(({ label, href }) => (
              <Link key={label} href={href} passHref>
                <Box
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "#FFF",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    "&:hover": {
                      color: "rgb(255, 255, 255, 0.8)",
                    },
                  }}
                >
                  {label}
                </Box>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
