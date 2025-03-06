import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const leaders = [
  {
    name: 'James Smith',
    position: 'CEO & Co-Founder',
    image: '/images/team/james.jpg',
    bio: 'Leading GeoAfrica with over 15 years of experience in geospatial technology.',
    linkedin: '#',
    email: 'james@geoafrica.com',
  },
  // Add more leaders...
];

const Leadership = () => {
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
            backgroundImage: 'url("/images/leadership.jpg")', // Different background for leadership
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
              Our Leadership
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Meet the team driving innovation in African geospatial solutions
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
        <Container>
          <Grid container spacing={4}>
            {leaders.map((leader, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Avatar
                        src={leader.image}
                        sx={{ width: 120, height: 120, mb: 2, mx: 'auto' }}
                      />
                      <Typography variant="h5" align="center" gutterBottom>
                        {leader.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                        align="center"
                        gutterBottom
                      >
                        {leader.position}
                      </Typography>
                      <Typography align="center" sx={{ mb: 2 }}>
                        {leader.bio}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <IconButton href={leader.linkedin} color="primary">
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton href={`mailto:${leader.email}`} color="primary">
                          <EmailIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
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

export default Leadership; 