import React from 'react';
import SolutionDetail from '../components/SolutionDetail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const solutionData = {
  id: 'cartography',
  name: 'Cartography',
  icon: <LocationOnIcon sx={{ fontSize: 60 }} />,
  description: 'Professional map design and production services',
  overview: `Our cartography services provide high-quality map design and production, ensuring that your maps are not only accurate but also visually appealing. We specialize in creating custom maps for various applications.`,
  features: [
    {
      title: 'Custom Map Design',
      description: 'Tailored maps to meet specific project requirements',
    },
    {
      title: 'High-Quality Printing',
      description: 'Professional-grade printing for physical maps',
    },
    {
      title: 'Digital Map Production',
      description: 'Creation of interactive digital maps for online use',
    },
    {
      title: 'Thematic Mapping',
      description: 'Maps that highlight specific themes or data sets',
    },
    {
      title: 'Map Consultation Services',
      description: 'Expert advice on map design and usage',
    },
  ],
  benefits: [
    'Enhances communication of spatial information',
    'Improves user engagement with visually appealing maps',
    'Supports effective decision-making with clear data representation',
    'Facilitates better understanding of geographic contexts',
    'Provides professional quality for presentations and reports',
  ],
};

const Cartography = () => {
  return <SolutionDetail solution={solutionData} />;
};

export default Cartography; 