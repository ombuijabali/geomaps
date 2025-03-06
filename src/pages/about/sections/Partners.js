import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Tech Partner 1',
    logo: '/images/partners/partner1.png',
    description: 'Leading technology provider for geospatial solutions.',
    category: 'Technology',
  },
  {
    name: 'Government Agency',
    logo: '/images/partners/partner2.png',
    description: 'Key government partnership for national mapping projects.',
    category: 'Government',
  },
  {
    name: 'Research Institution',
    logo: '/images/partners/partner3.png',
    description: 'Collaboration on advanced geospatial research.',
    category: 'Research',
  },
  {
    name: 'Industry Leader',
    logo: '/images/partners/partner4.png',
    description: 'Strategic industry partnership for innovation.',
    category: 'Industry',
  },
];

const Partners = () => {
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
            backgroundImage: 'url("/images/partners.jpg")',
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
              Our Partners
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Collaborating with industry leaders to deliver excellence
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
        <Container>
          <Grid container spacing={4}>
            {partners.map((partner, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <Box sx={{ p: 4, textAlign: 'center' }}>
                      <CardMedia
                        component="img"
                        image={partner.logo}
                        alt={partner.name}
                        sx={{
                          height: 80,
                          objectFit: 'contain',
                          mb: 3,
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="primary"
                        sx={{ 
                          mb: 1,
                          display: 'block',
                          fontWeight: 600,
                        }}
                      >
                        {partner.category}
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        {partner.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {partner.description}
                      </Typography>
                    </Box>
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

export default Partners; 