import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
  Stack,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const menuItems = [
  { label: 'Home', path: '/' },
  { 
    label: 'About', 
    children: [
      { label: 'Vision & Mission', path: '/about/vision-mission' },
      { label: 'Leadership', path: '/about/leadership' },
      { label: 'Innovation', path: '/about/innovation' },
      { label: 'Strategy', path: '/about/strategy' },
      { label: 'Partners', path: '/about/partners' },
      { label: 'Awards', path: '/about/awards' },
      { label: 'Corporate Responsibility', path: '/about/responsibility' },
      { label: 'Legal', path: '/about/legal' },
    ],
  },
  { label: 'Products', path: '/products' },
  { 
    label: 'Solutions',
    children: [
      { label: 'Aerial Imagery ', path: '/solutions/aerial-photography' },
      { label: 'Cadastral Survey', path: '/solutions/cadastral-survey' },
      { label: 'GIS Mapping & Analysis', path: '/solutions/gis-mapping' },
      { label: 'Software Development', path: '/solutions/software-development' },
      { label: 'Cartography', path: '/solutions/cartography' },
      { label: 'Photogrammetry', path: '/solutions/photogrammetry' },
      { label: 'Remote Sensing', path: '/solutions/remote-sensing' },
    ],
  },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

const dropdownStyles = {
  menuItem: {
    minWidth: 200,
    py: 1.5,
    px: 2,
    borderLeft: '3px solid transparent',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      borderLeft: '3px solid',
      borderColor: 'primary.main',
      backgroundColor: 'primary.lighter',
      color: 'primary.main',
      transform: 'translateX(5px)',
    },
  },
  paper: {
    mt: 0.5,
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  dropdownContainer: {
    position: 'relative',
    '&:hover': {
      '& .MuiPaper-root': {
        opacity: 1,
        visibility: 'visible',
        transform: 'translateY(0)',
      },
    },
  },
  dropdownPaper: {
    position: 'absolute',
    top: '100%',
    left: 0,
    opacity: 0,
    visibility: 'hidden',
    transform: 'translateY(-10px)',
    transition: 'all 0.2s ease-in-out',
    zIndex: 1301,
  },
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const [openDropdown, setOpenDropdown] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setDropdownAnchor(null);
    setOpenDropdown('');
  };

  const handleDropdownClick = (event, label) => {
    event.preventDefault();
    setDropdownAnchor(event.currentTarget);
    setOpenDropdown(openDropdown === label ? '' : label);
  };

  return (
    <Box>
      {/* Top Social Media Bar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: 'primary.main',
          height: '40px',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            disableGutters 
            sx={{ 
              minHeight: '40px !important',
              justifyContent: 'space-between',
            }}
          >
            {/* Mission Statement */}
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                fontSize: '0.875rem',
                display: { xs: 'none', md: 'block' },
                fontStyle: 'italic',
                fontFamily: 'bold'
              }}
            >
              geomaps africa...delivering practical solutions
            </Typography>

            {/* Social Media Icons */}
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                size="small"
                sx={{ color: '#1877f2' }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                size="small"
                sx={{ color: '#1da1f2' }}
              >
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                size="small"
                sx={{ color: '#c32aa3' }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://youtube.com"
                target="_blank"
                size="small"
                sx={{ color: '#ff0000' }}
              >
                <YouTubeIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                size="small"
                sx={{ color: '#0a66c2' }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Navigation Bar */}
      <AppBar 
        position="fixed" 
        color="secondary" 
        elevation={0}
        sx={{ 
          top: '40px',
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              <img src="/images/logo.jpg" alt="GeoAfrica Logo" height="80" />
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {menuItems.map((item) => (
                  item.children ? (
                    <Box key={item.label}>
                      <MenuItem
                        onClick={(e) => handleDropdownClick(e, item.label)}
                        sx={{ display: 'flex', justifyContent: 'space-between' }}
                      >
                        <Typography>{item.label}</Typography>
                        {openDropdown === item.label ? <ExpandLess /> : <ExpandMore />}
                      </MenuItem>
                      <Collapse in={openDropdown === item.label}>
                        <Box sx={{ pl: 2 }}>
                          {item.children.map((child) => (
                            <MenuItem
                              key={child.label}
                              component={Link}
                              to={child.path}
                              onClick={handleCloseNavMenu}
                              sx={{ pl: 4 }}
                            >
                              {child.label}
                            </MenuItem>
                          ))}
                        </Box>
                      </Collapse>
                    </Box>
                  ) : (
                    <MenuItem
                      key={item.label}
                      component={Link}
                      to={item.path}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography>{item.label}</Typography>
                    </MenuItem>
                  )
                ))}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {menuItems.map((item) => (
                <Box 
                  key={item.label}
                  sx={item.children ? dropdownStyles.dropdownContainer : null}
                >
                  {item.children ? (
                    <>
                      <Button
                        sx={{
                          my: 2,
                          color: 'primary.main',
                          display: 'flex',
                          mx: 2,
                          '&:hover': {
                            color: 'primary.dark',
                          },
                        }}
                        endIcon={<ExpandMore />}
                      >
                        {item.label}
                      </Button>
                      <Paper sx={dropdownStyles.dropdownPaper}>
                        <Box>
                          {item.children.map((child) => (
                            <MenuItem
                              key={child.label}
                              component={Link}
                              to={child.path}
                              onClick={handleCloseNavMenu}
                              sx={dropdownStyles.menuItem}
                            >
                              {child.label}
                            </MenuItem>
                          ))}
                        </Box>
                      </Paper>
                    </>
                  ) : (
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{
                        my: 2,
                        color: 'primary.main',
                        display: 'block',
                        mx: 2,
                        '&:hover': {
                          color: 'primary.dark',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar; 