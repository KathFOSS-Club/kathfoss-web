import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from "next/image";

// JSON-like data inside the same file
const navLinks = [
  { label: "About Us", href: "/" },
  { label: "Events", href: "/" },
  { label: "Team", href: "/" },
  { label: "Contact Us", href: "/" }
];

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#181818', py: 3 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Navigate Section */}
          <Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ color: 'white', fontWeight: 'bold' }}
            >
              Navigate
            </Typography>
            <Box
              component="nav"
              sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
            >
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  underline="hover"
                  sx={{ color: 'info.main', '&:hover': { color: 'info.dark' } }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Newsletter Section */}
          <Box sx={{ padding: 2 }}>
            <Typography
              variant="h3"
              component="h3"
              align="center"
              gutterBottom
              sx={{ fontWeight: "400", marginBottom: 2, color: "#64ffda" }}
            >
              <span style={{ color: "#fff", textTransform: "capitalize" }}>
                Newsletter
              </span>{" "}
              <span style={{ color: "#87CEFA", textTransform: "capitalize" }}>
                Subscription
              </span>
            </Typography>
            <Box
              component="form"
              sx={{
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <TextField
                id="outlined-basic"
                label="Subscribe to our newsletter"
                variant="outlined"
                size="small"
                sx={{
                  bgcolor: 'white',
                  input: { color: 'black' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#111' },
                    '&:hover fieldset': { borderColor: '#222' },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'info.main',
                  '&:hover': { bgcolor: 'info.dark' },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Logo Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}> 
          <Image src="/assets/logo.svg" alt="KATHFOSS Logo" width={200} height={100} /> 
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            mt: 4,
          }}
        >
          Copyright © 2025 KATHFORD COLLEGE. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
