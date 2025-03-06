import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  {
    value: 150,
    suffix: '+',
    label: 'Projects Completed',
    color: '#2196f3',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Years Experience',
    color: '#ff9800',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Countries Served',
    color: '#4caf50',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    color: '#9c27b0',
  },
];

const Stats = () => {
  return (
    <Box 
      sx={{ 
        py: 12,
        position: 'relative',
        backgroundColor: '#f8f9fa',
        overflow: 'hidden',
      }}
    >
      {/* World Map Background */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          opacity: 0.5,
          backgroundImage: 'url("/images/world-map-dots.png")',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: 'primary.main',
              mb: 8,
              fontWeight: 600,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                backgroundColor: 'primary.main',
              },
            }}
          >
            Our Impact
          </Typography>
        </motion.div>

        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{ 
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    }
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: '2rem', md: '3rem' },
                      color: stat.color,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    <CountUp end={stat.value} duration={2.5} />
                    {stat.suffix}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      color: '#333',
                      fontSize: { xs: '0.9rem', md: '1.1rem' },
                      letterSpacing: 1,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats; 