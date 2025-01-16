"use client"; // Indicates that this is a client-side component

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Box, Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // For closing the drawer
import { useMediaQuery } from "@mui/material";

export default function Header() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Checks if the screen size is small (mobile)

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "EVENTS", href: "#events" },
    { label: "TEAM", href: "#team" },
    { label: "CONTACT US", href: "#contact-us" },
  ];

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0A001F",
        height: 80,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1000px",
        width: "100%",
        borderRadius: 2,
        marginTop: "20px",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: 80,
          paddingX: 3,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/assets/icon.svg" alt="Logo" width={200} height={200} />
        </Box>

        {/* Mobile Hamburger Menu */}
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer for Mobile */}
            <Drawer
              anchor="right"
              open={open}
              onClose={() => toggleDrawer(false)}
              sx={{
                backgroundColor: "rgba(10, 0, 31, 0.85)",
                boxShadow: "2px 0px 6px rgba(0, 0, 0, 0.16)", // Adding a subtle shadow to the drawer
              }}
            >
              <Box
                sx={{
                  width: 250,
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {/* Close Button */}
                <IconButton onClick={() => toggleDrawer(false)} sx={{ alignSelf: "flex-end" }}>
                  <CloseIcon sx={{ color: "white" }} />
                </IconButton>

                {/* Navigation Links */}
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} passHref>
                    <Button
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "16px",
                        textAlign: "left",
                        padding: 1,
                        width: "100%",
                        "&:hover": { color: "#BDBDBD" },
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Drawer>
          </>
        ) : (
          /* Desktop View */
          <Box sx={{ display: "flex", gap: 4 }}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} passHref>
                <Button
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: isMobile ? "12px" : "14px", // Responsive font size
                    "&:hover": { color: "#BDBDBD" },
                    textTransform: "none", // Keeps the text case as is
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
