import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
} from '@mui/material';
import { motion } from 'framer-motion';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DevicesIcon from '@mui/icons-material/Devices';
import CloudIcon from '@mui/icons-material/Cloud';

const innovations = [
  {
    title: 'AI-Powered Mapping',
    description: 'Leveraging artificial intelligence for automated map generation and analysis.',
    icon: <AutorenewIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Mobile Solutions',
    description: 'Advanced mobile applications for field data collection and analysis.',
    icon: <DevicesIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless cloud-based solutions for data storage and processing.',
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
  },
];

const Innovation = () => {
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
            backgroundImage: 'url("/images/innovation.jpg")',
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
              Innovation Hub
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Pioneering the future of geospatial technology in Africa
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 12, backgroundColor: '#f8f9fa' }}>
        <Container>
          <Grid container spacing={4}>
            {innovations.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h4" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body1">
                      {item.description}
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

export default Innovation; 