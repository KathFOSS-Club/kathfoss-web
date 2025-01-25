import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#181818', py: 3 }} className="bg-gray-900">
      <Container maxWidth="lg">
        <Box display={{ xs: 'block', md: 'flex' }} justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" component="h2" color="primary" className="text-white font-bold">
              KATHFOSS
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text-gray-400">
              KATHFORD FOSS COMMUNITY
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h2" color="primary" className="text-white font-bold">
              Navigate
            </Typography>
            <ul className="list-none mt-2">
              <li><Link href="/" className="text-blue-400 hover:text-blue-300">About Us</Link></li>
              <li><Link href="/" className="text-blue-400 hover:text-blue-300">Events</Link></li>
              <li><Link href="/" className="text-blue-400 hover:text-blue-300">Team</Link></li>
              <li><Link href="/" className="text-blue-400 hover:text-blue-300">Contact Us</Link></li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h6" component="h2" color="primary" className="text-white font-bold">
              Newsletter Subscription
            </Typography>
            <form className="mt-2">
              <TextField
                id="outlined-basic"
                label="Subscribe to our newsletter"
                variant="outlined"
                size="small"
                className="mb-2 bg-gray-800 text-white border-gray-700"
              />
              <Button variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-600">
                Subscribe
              </Button>
            </form>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" align="center" className="mt-4 text-gray-400">
          Copyright © 2025 KATHFORD COLLEGE. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;