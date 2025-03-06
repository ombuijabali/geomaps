import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductsSolutions = () => {
  return (
    <Box id="solutions" sx={{ py: 12, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: 'primary.main',
              mb: 2,
              fontWeight: 600,
            }}
          >
            Ready to transform your business?
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: '#666',
              mb: 8,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Discover how our geospatial solutions can revolutionize your operations
          </Typography>
        </motion.div>

        <Grid 
          container 
          spacing={6}
          justifyContent="center"
          sx={{ 
            maxWidth: '1000px',
            mx: 'auto',
          }}
        >
          {/* Products Card */}
          <Grid item xs={12} md={5.5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 280,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/geomanager.png"
                    alt="GIS Products"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.85)',
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                    Products
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: '#666', minHeight: '80px' }}>
                    Our comprehensive portfolio of GIS products can help you automate the management of your spatial data. From desktop applications to web-based solutions.
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: '#2196f3',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: '#1976d2',
                      },
                    }}
                  >
                    PRODUCTS
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Solutions Card */}
          <Grid item xs={12} md={5.5}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 280,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/solutions.png"
                    alt="GIS Solutions"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.85)',
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                    Solutions
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: '#666', minHeight: '80px' }}>
                    We recognize that location data is ubiquitous and the potential innovations with it are limitless. Our custom solutions help you harness this power.
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: '#4caf50',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: '#388e3c',
                      },
                    }}
                  >
                    SOLUTIONS
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsSolutions; 