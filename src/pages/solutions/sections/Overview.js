import React from 'react';
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
import FlightIcon from '@mui/icons-material/Flight';
import MapIcon from '@mui/icons-material/Map';
import TerrainIcon from '@mui/icons-material/Terrain';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import ExploreIcon from '@mui/icons-material/Explore';
import { alpha } from '@mui/material/styles';

const solutions = [
  {
    id: 'aerial-photography',
    name: 'Aerial Photography',
    icon: <FlightIcon sx={{ fontSize: 60 }} />,
    description: 'High-resolution aerial imagery for mapping and surveying',
    path: '/solutions/aerial-photography',
  },
  {
    id: 'cadastral-survey',
    name: 'Cadastral Survey',
    icon: <MapIcon sx={{ fontSize: 60 }} />,
    description: 'Precise land boundary surveys and documentation',
    path: '/solutions/cadastral-survey',
  },
  {
    id: 'gis-mapping',
    name: 'GIS Mapping & Analysis',
    icon: <TerrainIcon sx={{ fontSize: 60 }} />,
    description: 'Comprehensive geospatial analysis and mapping solutions',
    path: '/solutions/gis-mapping',
  },
  {
    id: 'software-development',
    name: 'Software Development',
    icon: <CodeIcon sx={{ fontSize: 60 }} />,
    description: 'Custom GIS software solutions for your specific needs',
    path: '/solutions/software-development',
  },
  {
    id: 'cartography',
    name: 'Cartography',
    icon: <LocationOnIcon sx={{ fontSize: 60 }} />,
    description: 'Professional map design and production services',
    path: '/solutions/cartography',
  },
  {
    id: 'photogrammetry',
    name: 'Photogrammetry',
    icon: <SatelliteAltIcon sx={{ fontSize: 60 }} />,
    description: 'Accurate 3D modeling from aerial imagery',
    path: '/solutions/photogrammetry',
  },
  {
    id: 'remote-sensing',
    name: 'Remote Sensing',
    icon: <ExploreIcon sx={{ fontSize: 60 }} />,
    description: 'Satellite imagery analysis and interpretation',
    path: '/solutions/remote-sensing',
  },
];

const Overview = () => {
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
            backgroundImage: 'url("/images/solutions.jpg")',
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
              Our Solutions
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Comprehensive geospatial services for all your mapping needs
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Solutions Grid */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={4}
            justifyContent="center"
          >
            {solutions.map((solution, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6}
                md={4}
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card 
                    sx={{ 
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
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
                      {solution.icon}
                    </Box>
                    <Typography 
                      variant="h4" 
                      gutterBottom
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                      }}
                    >
                      {solution.name}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary" 
                      paragraph
                      sx={{ 
                        mb: 4,
                        textAlign: 'center',
                        flex: 1,
                      }}
                    >
                      {solution.description}
                    </Typography>
                    <Button
                      component={Link}
                      to={solution.path}
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Learn More
                    </Button>
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