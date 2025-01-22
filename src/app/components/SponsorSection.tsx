'use server';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const SponsorSection = ({ sponsors = ['Sponsor1.jpg', 'Sponsor2.jpg', 'Sponsor3.jpg'] }) => {
  return (
    <Box sx={{ padding: 4, marginTop: 10 }}>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: "600", marginBottom: 3 }}
          >
            OUR SPONSORS
          </Typography>

      {/* Grid for Sponsors */}
      <Grid container spacing={{ xs: 4, sm: 6, md: 10 }} justifyContent="center">
        {sponsors.map((image, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                width: 120,
                height: 120,
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Sponsor Image */}
              <img
                src={`/images/SponsorSection/${image}`}
                alt={`Sponsor ${index + 1}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SponsorSection;
