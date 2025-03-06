import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const useCases = {
  geomanager: [
    {
      title: 'Urban Planning',
      description: 'Help municipalities make data-driven decisions for urban development and infrastructure planning.',
      metrics: '30% faster planning cycles',
    },
    {
      title: 'Environmental Monitoring',
      description: 'Track environmental changes and assess impact using advanced spatial analysis.',
      metrics: '85% improved accuracy',
    },
    {
      title: 'Asset Management',
      description: 'Manage infrastructure assets efficiently with real-time tracking and maintenance scheduling.',
      metrics: '40% reduced maintenance costs',
    },
    {
      title: 'Land Administration',
      description: 'Streamline land registration and cadastral mapping processes.',
      metrics: '60% faster processing time',
    },
  ],
  'geomanager-field': [
    {
      title: 'Field Surveys',
      description: 'Conduct accurate field surveys with mobile data collection capabilities.',
      metrics: '75% time savings',
    },
    {
      title: 'Infrastructure Inspection',
      description: 'Perform on-site inspections and maintenance checks with real-time data sync.',
      metrics: '50% improved efficiency',
    },
    {
      title: 'Emergency Response',
      description: 'Coordinate emergency teams with real-time location tracking and status updates.',
      metrics: '45% faster response time',
    },
    {
      title: 'Agricultural Mapping',
      description: 'Map and monitor agricultural lands with precise GPS tracking.',
      metrics: '65% better yield management',
    },
  ],
};

const editions = [
  {
    name: 'Standard',
    price: 'Contact Sales',
    features: [
      'Basic spatial analysis',
      'Standard visualization tools',
      'Single user license',
      'Email support',
      '5GB storage',
      'Standard formats support',
    ],
    recommended: false,
  },
  {
    name: 'Professional',
    price: 'Contact Sales',
    features: [
      'Advanced spatial analysis',
      'Custom visualization tools',
      'Up to 5 user licenses',
      'Priority support',
      '50GB storage',
      'Extended formats support',
      'Custom workflows',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Sales',
    features: [
      'Full spatial analysis suite',
      'Advanced visualization tools',
      'Unlimited user licenses',
      '24/7 dedicated support',
      'Unlimited storage',
      'All formats supported',
      'Custom workflows',
      'API access',
      'Custom integrations',
    ],
    recommended: false,
  },
];

const ProductDetail = ({ product }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      {/* Hero Section remains the same */}

      {/* Enhanced Product Details */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
        <Container>
          <Grid container spacing={4}>
            {/* Product Overview */}
            <Grid item xs={12}>
              <Card sx={{ p: 4, mb: 4 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ color: 'primary.main', mr: 2 }}>
                        {product.icon}
                      </Box>
                      <Typography variant="h3" gutterBottom>
                        {product.name}
                      </Typography>
                    </Box>
                    <Typography variant="h6" paragraph color="text.secondary">
                      {product.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        component={Link}
                        to="/contact"
                        startIcon={<CompareArrowsIcon />}
                      >
                        Request Demo
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        startIcon={<DownloadIcon />}
                      >
                        Download Brochure
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        startIcon={<PlayArrowIcon />}
                      >
                        Watch Video
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            {/* Tabs Section */}
            <Grid item xs={12}>
              <Card sx={{ p: 4 }}>
                <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 4 }}>
                  <Tab label="Features" />
                  <Tab label="Benefits" />
                  <Tab label="Technical Specs" />
                  <Tab label="Use Cases" />
                </Tabs>

                {/* Features Tab */}
                {activeTab === 0 && (
                  <Grid container spacing={4}>
                    {product.features.map((feature, idx) => (
                      <Grid item xs={12} md={6} key={idx}>
                        <ListItem sx={{ p: 2, backgroundColor: 'primary.lighter', borderRadius: 2 }}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                )}

                {/* Benefits Tab */}
                {activeTab === 1 && (
                  <Grid container spacing={4}>
                    {product.benefits.map((benefit, idx) => (
                      <Grid item xs={12} md={6} key={idx}>
                        <ListItem sx={{ p: 2, backgroundColor: 'primary.lighter', borderRadius: 2 }}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={benefit} />
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                )}

                {/* Technical Specs Tab */}
                {activeTab === 2 && (
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom color="primary.main">
                        System Requirements
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemText 
                            primary="Operating System" 
                            secondary="Windows 10/11, macOS 10.15+" 
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText 
                            primary="Processor" 
                            secondary="Intel i5/AMD Ryzen 5 or better" 
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText 
                            primary="Memory" 
                            secondary="8GB RAM minimum, 16GB recommended" 
                          />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom color="primary.main">
                        Supported Formats
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemText 
                            primary="Vector Formats" 
                            secondary="Shapefile, GeoJSON, KML, DXF" 
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText 
                            primary="Raster Formats" 
                            secondary="GeoTIFF, ECW, JPEG2000" 
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                )}

                {/* Use Cases Tab */}
                {activeTab === 3 && (
                  <Grid container spacing={4}>
                    {useCases[product.id].map((useCase, idx) => (
                      <Grid item xs={12} md={6} key={idx}>
                        <Card 
                          sx={{ 
                            p: 3, 
                            height: '100%',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-5px)',
                            },
                          }}
                        >
                          <Typography variant="h5" gutterBottom color="primary.main">
                            {useCase.title}
                          </Typography>
                          <Typography variant="body1" paragraph>
                            {useCase.description}
                          </Typography>
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              color: 'success.main',
                              fontWeight: 600,
                              mt: 'auto',
                            }}
                          >
                            {useCase.metrics}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Comparison Section */}
      <Box sx={{ py: 12, backgroundColor: 'primary.lighter' }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Compare Editions
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Choose the right version for your needs
          </Typography>
          <Grid container spacing={4}>
            {editions.map((edition, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <Card 
                    sx={{ 
                      p: 4,
                      height: '100%',
                      position: 'relative',
                      border: edition.recommended ? 2 : 0,
                      borderColor: 'primary.main',
                    }}
                  >
                    {edition.recommended && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: 20,
                          backgroundColor: 'primary.main',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        Recommended
                      </Box>
                    )}
                    <Typography variant="h4" gutterBottom>
                      {edition.name}
                    </Typography>
                    <Typography variant="h5" color="primary.main" gutterBottom>
                      {edition.price}
                    </Typography>
                    <Divider sx={{ my: 3 }} />
                    <List>
                      {edition.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ p: 0, mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      component={Link}
                      to="/contact"
                      variant={edition.recommended ? "contained" : "outlined"}
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ mt: 4 }}
                    >
                      Get Started
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
        <Container>
          <Card sx={{ p: 6, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
              Ready to get started?
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Contact our sales team for a personalized demo and pricing information.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2, py: 2, px: 4 }}
            >
              Contact Sales
            </Button>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductDetail; 