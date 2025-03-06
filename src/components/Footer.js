import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#008081',
        color: 'white',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <img src="/images/logo.jpg" alt="GeoAfrica Logo" height="60" />
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
              Leading provider of geospatial solutions across Africa, delivering innovative mapping technologies and GIS services for sustainable development.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <IconButton size="small" sx={{ color: '#1877f2' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#1da1f2' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#c32aa3' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#0a66c2' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#ff0000' }}>
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Quick Links
            </Typography>
            {['Home', 'About Us', 'Services', 'Products', 'Career', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                underline="none"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  display: 'block',
                  mb: 1.5,
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Our Services
            </Typography>
            {[
              'GIS Mapping',
              'Remote Sensing',
              'Land Surveying',
              'Data Analytics',
              'Spatial Planning',
              'Technical Training',
            ].map((service) => (
              <Link
                key={service}
                href="#"
                underline="none"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  display: 'block',
                  mb: 1.5,
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {service}
              </Link>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Contact Us
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <LocationOnIcon sx={{ color: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  123 Business Avenue,<br />
                  Nairobi, Kenya
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <PhoneIcon sx={{ color: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  +254 123 456 789
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <EmailIcon sx={{ color: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  info@geoafrica.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} GeoAfrica. All rights reserved.
          </Typography>
          <Box>
            <Link
              href="#"
              underline="none"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                mx: 2,
                '&:hover': { color: 'primary.main' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 