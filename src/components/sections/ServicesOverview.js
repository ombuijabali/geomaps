import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import MapIcon from '@mui/icons-material/Map';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import TerrainIcon from '@mui/icons-material/Terrain';

const services = [
  {
    icon: <MapIcon sx={{ fontSize: 50 }} />,
    title: 'GIS Mapping',
    description: 'Comprehensive mapping solutions using cutting-edge GIS technology for precise spatial analysis.',
    color: '#2196f3',
  },
  {
    icon: <DataUsageIcon sx={{ fontSize: 50 }} />,
    title: 'Data Analytics',
    description: 'Advanced geospatial data analytics to derive actionable insights for informed decision-making.',
    color: '#ff9800',
  },
  {
    icon: <SatelliteAltIcon sx={{ fontSize: 50 }} />,
    title: 'Remote Sensing',
    description: 'Satellite imagery analysis and remote sensing solutions for environmental monitoring and other commercial use.',
    color: '#4caf50',
  },
  {
    icon: <TerrainIcon sx={{ fontSize: 50 }} />,
    title: 'Land Surveying',
    description: 'Professional land surveying services using modern equipment like drones, total stations and aircrafts.',
    color: '#9c27b0',
  },
];

const ServicesOverview = () => {
  return (
    <Box id="services" sx={{ py: 12, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="xl">
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
            Our Services
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                      '& .icon-button': {
                        transform: 'rotate(360deg)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, pt: 6 }}>
                    <IconButton
                      className="icon-button"
                      sx={{
                        position: 'absolute',
                        top: -25,
                        left: 30,
                        backgroundColor: service.color,
                        width: 70,
                        height: 70,
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          backgroundColor: service.color,
                        },
                        '& svg': {
                          color: 'white',
                        },
                      }}
                    >
                      {service.icon}
                    </IconButton>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ 
                        mb: 2,
                        fontWeight: 600,
                        color: service.color,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesOverview; 