import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const SolutionDetail = ({ solution }) => {
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
            backgroundImage: `url("/images/solutions/${solution.id}.png")`,
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
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box sx={{ color: 'primary.main', mr: 2 }}>
                {solution.icon}
              </Box>
              <Typography
                variant="h1"
                color="white"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 700,
                }}
              >
                {solution.name}
              </Typography>
            </Box>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              {solution.description}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Overview */}
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h3" gutterBottom color="primary">
                  Overview
                </Typography>
                <Typography variant="body1" paragraph>
                  {solution.overview}
                </Typography>
                
                <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
                  Key Features
                </Typography>
                <List>
                  {solution.features.map((feature, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={feature.title}
                        secondary={feature.description}
                      />
                    </ListItem>
                  ))}
                </List>
              </motion.div>
            </Grid>

            {/* Benefits Card */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card sx={{ p: 4, border: 1, borderColor: 'primary.main' }}>
                  <Typography variant="h4" gutterBottom color="primary">
                    Benefits
                  </Typography>
                  <List>
                    {solution.benefits.map((benefit, index) => (
                      <ListItem key={index} sx={{ py: 1 }}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ mt: 4 }}
                  >
                    Request Service
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SolutionDetail; 