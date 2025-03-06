import React from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const sections = [
  { label: 'Vision & Mission', path: '/about' },
  { label: 'Leadership', path: '/about/leadership' },
  { label: 'Strategy', path: '/about/strategy' },
  { label: 'Innovation', path: '/about/innovation' },
  { label: 'Partners', path: '/about/partners' },
  { label: 'Corporate Responsibility', path: '/about/responsibility' },
  { label: 'Awards', path: '/about/awards' },
  { label: 'Careers', path: '/about/careers' },
  { label: 'Legal', path: '/about/legal' },
];

const AboutHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event, newPath) => {
    navigate(newPath);
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          pt: { xs: '120px', md: '160px' },
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
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#001e3c',
            opacity: 0.8,
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
              About Us
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Leading Africa's Geospatial Revolution
            </Typography>
          </motion.div>
        </Container>
      </Box>
      <Box sx={{ 
        backgroundColor: 'white',
        borderBottom: 1,
        borderColor: 'divider',
        position: 'sticky',
        top: { xs: '120px', md: '160px' },
        zIndex: 1000,
      }}>
        <Container>
          <Tabs
            value={location.pathname}
            onChange={handleChange}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile}
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-flexContainer': {
                justifyContent: isMobile ? 'flex-start' : 'center',
              },
            }}
          >
            {sections.map((section) => (
              <Tab
                key={section.path}
                label={section.label}
                value={section.path}
                sx={{ 
                  minWidth: 'auto',
                  px: 3,
                  py: 2,
                }}
              />
            ))}
          </Tabs>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutHero; 