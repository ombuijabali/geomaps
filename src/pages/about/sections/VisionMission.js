import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionHero from '../../../components/shared/SectionHero';

const VisionMission = () => {
  return (
    <Box>
      <SectionHero 
        title="Vision & Mission" 
        subtitle="Shaping the Future of Geospatial Solutions in Africa" 
      />

      {/* Content Section */}
      <Box sx={{ py: 12, backgroundColor: '#f8f9fa' }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h3" color="primary" gutterBottom>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 4 }}>
                    To empower African organizations with cutting-edge geospatial solutions that drive sustainable development and innovation.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h3" color="primary" gutterBottom>
                    Our Vision
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 4 }}>
                    To be Africa's leading provider of geospatial solutions, recognized globally for excellence and innovation.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default VisionMission; 