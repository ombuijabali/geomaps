import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const SectionHero = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: { xs: '160px', md: '180px' }, // Increased padding to account for navbar
        paddingBottom: '60px',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/images/vision.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000',
          opacity: 0.7,
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            color="white"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default SectionHero; 