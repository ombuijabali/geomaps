import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const contactInfo = [
  {
    icon: <LocationOnIcon />,
    title: 'Visit Us',
    details: ['123 Business Avenue', 'Nairobi, Kenya'],
    color: '#2196f3',
  },
  {
    icon: <PhoneIcon />,
    title: 'Call Us',
    details: ['+254 123 456 789', '+254 987 654 321'],
    color: '#4caf50',
  },
  {
    icon: <EmailIcon />,
    title: 'Email Us',
    details: ['info@geoafrica.com', 'support@geoafrica.com'],
    color: '#ff9800',
  },
];

const interestOptions = [
  'Products',
  'Services',
  'Solutions',
  'Partnership',
  'Other',
];

const referralOptions = [
  'Search Engine (Google, Bing, etc.)',
  'Social Media',
  'Word of Mouth',
  'Professional Referral',
  'Conference/Event',
  'Online Advertisement',
  'Other',
];

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: '',
    referralSource: '',
  });

  const mapCenter = { lat: -1.2921, lng: 36.8219 }; // Nairobi coordinates
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '12px',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box 
      sx={{ 
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/images/geomap.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#001e3c', // Dark blue overlay
          opacity: 0.5,
          zIndex: 1,
        },
      }}
    >
      <Box 
        sx={{ 
          position: 'relative',
          zIndex: 2, // Increased z-index to show above both background layers
          pt: { xs: '160px', md: '180px' },
          pb: 12,
        }}
      >
        <Container maxWidth="xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                color: 'secondary.main',
                mb: 2,
                fontWeight: 600,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                color: 'secondary.main',
                mb: 8,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Typography>
          </motion.div>

          {/* Contact Cards */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        textAlign: 'center',
                        p: 4,
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: info.color,
                          color: 'white',
                          mb: 2,
                          '&:hover': {
                            backgroundColor: info.color,
                          },
                        }}
                      >
                        {info.icon}
                      </IconButton>
                      <Typography variant="h6" gutterBottom>
                        {info.title}
                      </Typography>
                      {info.details.map((detail, idx) => (
                        <Typography
                          key={idx}
                          variant="body1"
                          sx={{ color: '#666' }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Map and Form Section */}
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 4 }}>
                      Send Message
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Your Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            select
                            label="What are you interested in?"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                            SelectProps={{
                              native: true,
                            }}
                            sx={{
                              '& .MuiSelect-select': {
                                color: formData.interest ? 'inherit' : 'text.secondary',
                              },
                            }}
                          >
                            <option value="" disabled>
                              What are you interested in?
                            </option>
                            {interestOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            select
                            label="How did you hear about us?"
                            name="referralSource"
                            value={formData.referralSource}
                            onChange={handleChange}
                            required
                            SelectProps={{
                              native: true,
                            }}
                            sx={{
                              '& .MuiSelect-select': {
                                color: formData.referralSource ? 'inherit' : 'text.secondary',
                              },
                            }}
                          >
                            <option value="" disabled>
                              How did you hear about us?
                            </option>
                            {referralOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            endIcon={<SendIcon />}
                            sx={{
                              py: 1.5,
                              px: 4,
                              borderRadius: 2,
                            }}
                          >
                            Send Message
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Google Map */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                  }}
                >
                  <LoadScript googleMapsApiKey="AIzaSyByFCCOFZUKZq7kr4nNbBlxtDmI4M4lv9s">
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={mapCenter}
                      zoom={15}
                    >
                      <Marker position={mapCenter} />
                    </GoogleMap>
                  </LoadScript>
                </Card>

                {/* WhatsApp Button */}
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      bgcolor: '#25D366',
                      '&:hover': {
                        bgcolor: '#128C7E',
                      },
                    }}
                    href="https://wa.me/254123456789"
                    target="_blank"
                  >
                    Chat on WhatsApp
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact; 