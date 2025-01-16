import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

export default function Header() {
  const navItems = ["HOME", "EVENTS", "TEAM", "CONTACT US"];

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
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/assets/icon.svg" alt="Logo" width={110} height={110} />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              passHref
            >
              <Button
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                  "&:hover": { color: "#BDBDBD" },
                }}
              >
                {item}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
