import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

          {/* Newsletter Section */}
          <Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ color: 'white', fontWeight: 'bold' }} // Changed color to white
            >
              Newsletter Subscription
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
                  bgcolor: '#2d2d2d',
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#555' },
                    '&:hover fieldset': { borderColor: '#888' },
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