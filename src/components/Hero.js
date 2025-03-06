import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/images/geomap.png', '/images/plane.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: '120px', // Updated to account for both navbars (40px + 80px)
        background: '#fff',
        position: 'relative',
      }}
    >
      {/* Background gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 100%)',
          zIndex: 1,
        }}
      />

      {/* Background image carousel */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            alt="GIS Mapping"
          />
        </AnimatePresence>
      </Box>

      {/* Content */}
      <Container 
        maxWidth="xl" 
        sx={{ 
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box sx={{ maxWidth: '600px' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h1" 
                  sx={{
                    color: 'primary.main',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  Transforming Africa Through Geospatial Excellence
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: '#666',
                    mb: 4,
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  Delivering innovative GIS solutions and mapping technologies for sustainable development across the African continent.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      py: 1.5,
                      px: 4,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    What we do
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      py: 1.5,
                      px: 4,
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderColor: 'primary.dark',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 50,
            border: '2px solid',
            borderColor: 'primary.main',
            borderRadius: 15,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 8,
              left: '50%',
              width: 6,
              height: 6,
              backgroundColor: 'primary.main',
              borderRadius: '50%',
              transform: 'translateX(-50%)',
            },
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Hero; 