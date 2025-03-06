import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
} from '@mui/material';
import { motion } from 'framer-motion';

const strategies = [
  {
    title: 'Market Leadership',
    description: 'Establishing GeoAfrica as the premier geospatial solutions provider in Africa.',
  },
  {
    title: 'Digital Transformation',
    description: 'Leading the digital transformation of mapping and spatial data analysis.',
  },
  {
    title: 'Sustainable Growth',
    description: 'Focusing on sustainable business practices and long-term value creation.',
  },
];

const Strategy = () => {
  return (
    <Box>
      {/* Custom Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: { xs: '160px', md: '180px' },
          paddingBottom: '60px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/images/planning.png")',
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
              Our Strategy
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Building a sustainable future through strategic innovation
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
        <Container>
          <Grid container spacing={4}>
            {strategies.map((strategy, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card sx={{ p: 4, height: '100%' }}>
                    <Typography variant="h4" gutterBottom color="primary">
                      {strategy.title}
                    </Typography>
                    <Typography variant="body1">
                      {strategy.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Strategy; 