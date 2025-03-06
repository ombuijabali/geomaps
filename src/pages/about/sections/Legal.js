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
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import GavelIcon from '@mui/icons-material/Gavel';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const legalSections = [
  {
    title: 'Privacy Policy',
    icon: <PrivacyTipIcon />,
    items: [
      'Personal data collection and usage',
      'Data protection measures',
      'User rights and consent',
      'Cookie policy',
    ],
  },
  {
    title: 'Terms of Service',
    icon: <GavelIcon />,
    items: [
      'Service usage terms',
      'User responsibilities',
      'Intellectual property rights',
      'Limitation of liability',
    ],
  },
  {
    title: 'Compliance',
    icon: <VerifiedUserIcon />,
    items: [
      'GDPR compliance',
      'Industry standards',
      'Local regulations',
      'Data sovereignty',
    ],
  },
  {
    title: 'Security',
    icon: <SecurityIcon />,
    items: [
      'Data encryption',
      'Security protocols',
      'Access controls',
      'Incident response',
    ],
  },
];

const Legal = () => {
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
            backgroundImage: 'url("/images/legal.jpg")',
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
              Legal & Compliance
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              Our commitment to privacy, security, and regulatory compliance
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
        <Container>
          <Grid container spacing={4}>
            {legalSections.map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card sx={{ p: 4, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ color: 'primary.main', mr: 2 }}>
                        {section.icon}
                      </Box>
                      <Typography variant="h4">
                        {section.title}
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 3 }} />
                    <List>
                      {section.items.map((item, idx) => (
                        <ListItem key={idx}>
                          <ListItemText 
                            primary={item}
                            sx={{
                              '& .MuiTypography-root': {
                                fontSize: '1.1rem',
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
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

export default Legal; 