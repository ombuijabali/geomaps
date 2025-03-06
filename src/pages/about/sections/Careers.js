import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const jobs = [
  {
    title: 'Senior GIS Developer',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Lead the development of advanced geospatial applications and solutions.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years experience in GIS development",
      "Proficiency in Python, JavaScript, and spatial databases",
    ],
  },
  {
    title: 'Geospatial Data Analyst',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    department: 'Data Science',
    description: 'Analyze and interpret complex geospatial data for client projects.',
    requirements: [
      "Master's degree in GIS, Geography, or related field",
      "3+ years experience in spatial analysis",
      "Experience with QGIS and ArcGIS",
    ],
  },
  {
    title: 'Project Manager',
    location: 'Remote',
    type: 'Full-time',
    department: 'Operations',
    description: 'Manage and coordinate geospatial projects across Africa.',
    requirements: [
      'PMP certification preferred',
      '5+ years project management experience',
      'Experience in GIS industry',
    ],
  },
];

const Careers = () => {
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
            backgroundImage: 'url("/images/plane1.png")',
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
              Join Our Team
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Build your career with Africa's leading geospatial technology company
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 12, backgroundColor: '#f8f9fa' }}>
        <Container>
          <Grid container spacing={4}>
            {jobs.map((job, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card sx={{ p: 4 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={8}>
                        <Typography variant="h4" gutterBottom>
                          {job.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOnIcon color="primary" fontSize="small" />
                            <Typography variant="body2">{job.location}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <AccessTimeIcon color="primary" fontSize="small" />
                            <Typography variant="body2">{job.type}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <WorkIcon color="primary" fontSize="small" />
                            <Typography variant="body2">{job.department}</Typography>
                          </Box>
                        </Box>
                        <Typography variant="body1" paragraph>
                          {job.description}
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                          Requirements:
                        </Typography>
                        <Box component="ul" sx={{ pl: 2 }}>
                          {job.requirements.map((req, idx) => (
                            <Typography component="li" key={idx} variant="body1" paragraph>
                              {req}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          sx={{ mb: 2 }}
                        >
                          Apply Now
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="large"
                          fullWidth
                        >
                          Save Job
                        </Button>
                      </Grid>
                    </Grid>
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

export default Careers; 