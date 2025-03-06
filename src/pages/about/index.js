import React from 'react';
import { Box } from '@mui/material';
import AboutHero from './sections/AboutHero';
import VisionMission from './sections/VisionMission';
import Leadership from './sections/Leadership';
import Strategy from './sections/Strategy';
import Innovation from './sections/Innovation';
import Partners from './sections/Partners';
import CorporateResponsibility from './sections/CorporateResponsibility';
import Awards from './sections/Awards';
import Careers from './sections/Careers';
import Legal from './sections/Legal';

const About = () => {
  return (
    <Box>
      <AboutHero />
      <VisionMission />
      <Leadership />
      <Strategy />
      <Innovation />
      <Partners />
      <CorporateResponsibility />
      <Awards />
      <Careers />
      <Legal />
    </Box>
  );
};

export default About; 