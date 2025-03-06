import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import SustainableIcon from '@mui/icons-material/People';
import CommunityIcon from '@mui/icons-material/People';
import EducationIcon from '@mui/icons-material/School';

const initiatives = [
  {
    title: 'Environmental Impact',
    description: 'Committed to reducing our carbon footprint and promoting sustainable practices.',
    progress: 75,
    icon: <SustainableIcon sx={{ fontSize: 40 }} />,
    metrics: 'Carbon neutral by 2025',
  },
  {
    title: 'Community Development',
    description: 'Supporting local communities through technology and education initiatives.',
    progress: 85,
    icon: <CommunityIcon sx={{ fontSize: 40 }} />,
    metrics: '10,000+ beneficiaries',
  },
  {
    title: 'Education & Training',
    description: 'Providing GIS training and educational resources to African institutions.',
    progress: 90,
    icon: <EducationIcon sx={{ fontSize: 40 }} />,
    metrics: '5,000+ students trained',
  },
];

const CorporateResponsibility = () => {
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
            backgroundImage: 'url("/images/responsability.jpg")',
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
              Corporate Responsibility
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Making a positive impact across Africa through sustainable practices
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 12, backgroundColor: '#f8f9fa' }}>
        <Container>
          <Grid container spacing={4}>
            {initiatives.map((initiative, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card sx={{ p: 4, height: '100%' }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {initiative.icon}
                    </Box>
                    <Typography variant="h4" gutterBottom>
                      {initiative.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {initiative.description}
                    </Typography>
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Progress
                      </Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={initiative.progress}
                        sx={{ 
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(0, 128, 129, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: 'primary.main',
                          },
                        }}
                      />
                    </Box>
                    <Typography 
                      variant="subtitle2" 
                      color="primary"
                      sx={{ mt: 2, fontWeight: 600 }}
                    >
                      {initiative.metrics}
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

export default CorporateResponsibility; 