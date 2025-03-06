import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { alpha } from '@mui/material/styles';

const products = [
  {
    id: 'geomanager',
    name: 'GeoManager',
    icon: <DesktopWindowsIcon sx={{ fontSize: 60 }} />,
    description: 'Enterprise-grade GIS software for advanced spatial data management and analysis',
    path: '/products/geomanager',
  },
  {
    id: 'geomanager-field',
    name: 'GeoManager Field',
    icon: <PhoneAndroidIcon sx={{ fontSize: 60 }} />,
    description: 'Mobile solution for field data collection and real-time updates. Connects easiy with GeoManager desktop',
    path: '/products/geomanager-field',
  },
];

const heroImages = [
  '/images/geomanager.png',
  '/images/plane.png'
];

const Overview = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
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
            backgroundImage: `url("${heroImages[currentImage]}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1s ease-in-out',
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
              Our Products
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Powerful geospatial solutions for every need
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Products Grid - Updated Container and Card styles */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={6} 
            justifyContent="center"
          >
            {products.map((product, index) => (
              <Grid 
                item 
                xs={12} 
                sm={10}
                md={6} 
                lg={5}
                key={index}
              >
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
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      maxWidth: '600px',
                      mx: 'auto',
                      border: '1px solid',
                      borderColor: 'primary.main',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: (theme) => `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
                      },
                    }}
                  >
                    <Box 
                      sx={{ 
                        color: 'primary.main', 
                        mb: 3,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {product.icon}
                    </Box>
                    <Typography 
                      variant="h3" 
                      gutterBottom
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '1.75rem', md: '2rem' },
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      color="text.secondary" 
                      paragraph
                      sx={{ 
                        mb: 4,
                        textAlign: 'center',
                        flex: 1,
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Box 
                      sx={{ 
                        mt: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                      }}
                    >
                      <Button
                        component={Link}
                        to={product.path}
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        Learn More
                      </Button>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="outlined"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        Contact Sales
                      </Button>
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

export default Overview; 