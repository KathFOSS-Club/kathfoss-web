import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from "next/image";

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
              sx={{ color: 'white', fontWeight: 'bold' }} // Changed color to white
            >
              Navigate
            </Typography>
            <Box
              component="nav"
              sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
            >
              <Link
                href="/"
                underline="hover"
                sx={{ color: 'info.main', '&:hover': { color: 'info.dark' } }}
              >
                About Us
              </Link>
              <Link
                href="/"
                underline="hover"
                sx={{ color: 'info.main', '&:hover': { color: 'info.dark' } }}
              >
                Events
              </Link>
              <Link
                href="/"
                underline="hover"
                sx={{ color: 'info.main', '&:hover': { color: 'info.dark' } }}
              >
                Team
              </Link>
              <Link
                href="/"
                underline="hover"
                sx={{ color: 'info.main', '&:hover': { color: 'info.dark' } }}
              >
                Contact Us
              </Link>
            </Box>
          </Box>

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
        <span style={{ color: "#87CEFA", textTransform: "capitalize" }}> Subscription</span>
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
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}> 
          <Image src="/assets/logo.svg" alt="KATHFOSS Logo" width={200} height={100} /> 
        </Box>
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