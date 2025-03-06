import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const awards = [
  {
    year: '2023',
    title: 'African GIS Innovation Award',
    organization: 'African Geospatial Forum',
    description: 'Recognized for pioneering AI-driven mapping solutions in Africa.',
    category: 'Innovation',
  },
  {
    year: '2022',
    title: 'Excellence in Sustainability',
    organization: 'Global Mapping Association',
    description: 'Award for sustainable geospatial practices and environmental impact.',
    category: 'Sustainability',
  },
  {
    year: '2022',
    title: 'Best Enterprise Solution',
    organization: 'Tech Africa Summit',
    description: 'Leading enterprise geospatial solution provider in Africa.',
    category: 'Enterprise',
  },
  {
    year: '2021',
    title: 'Community Impact Award',
    organization: 'African Development Council',
    description: 'Recognition for community development through technology.',
    category: 'Social Impact',
  },
];

const Awards = () => {
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
            backgroundImage: 'url("/images/awards.jpg")',
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
              Awards & Recognition
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Celebrating excellence in geospatial innovation and impact
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
        <Container>
          <Grid container spacing={4}>
            {awards.map((award, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card 
                    sx={{ 
                      p: 4,
                      height: '100%',
                      position: 'relative',
                      overflow: 'visible',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -15,
                        left: 20,
                        width: 30,
                        height: 30,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        zIndex: 1,
                      },
                    }}
                  >
                    <Box sx={{ 
                      position: 'absolute',
                      top: -15,
                      left: 20,
                      zIndex: 2,
                      color: 'white',
                      width: 30,
                      height: 30,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <EmojiEventsIcon fontSize="small" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Chip 
                        label={award.year}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                      <Chip 
                        label={award.category}
                        color="primary"
                        size="small"
                        sx={{ backgroundColor: 'primary.lighter' }}
                      />
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      {award.title}
                    </Typography>
                    <Typography 
                      variant="subtitle2" 
                      color="primary.main"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {award.organization}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {award.description}
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

export default Awards; 