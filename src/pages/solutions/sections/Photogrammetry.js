import React from 'react';
import SolutionDetail from '../components/SolutionDetail';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';

const solutionData = {
  id: 'photogrammetry',
  name: 'Photogrammetry',
  icon: <SatelliteAltIcon sx={{ fontSize: 60 }} />,
  description: 'Accurate 3D modeling from aerial imagery',
  overview: `Our photogrammetry services utilize advanced techniques to create accurate 3D models from aerial imagery. This service is essential for various applications, including construction, mining, and environmental monitoring.`,
  features: [
    {
      title: '3D Modeling',
      description: 'Creation of detailed 3D models from aerial images',
    },
    {
      title: 'High Accuracy',
      description: 'Precision measurements with minimal error',
    },
    {
      title: 'Rapid Data Processing',
      description: 'Quick turnaround times for project delivery',
    },
    {
      title: 'Integration with GIS',
      description: 'Seamless integration with GIS platforms for analysis',
    },
    {
      title: 'Custom Reporting',
      description: 'Detailed reports based on photogrammetric analysis',
    },
  ],
  benefits: [
    'Enhances project planning and execution',
    'Improves accuracy in measurements and assessments',
    'Facilitates effective monitoring of changes over time',
    'Supports various industries including construction and environmental management',
    'Provides valuable insights for decision-making',
  ],
};

const Photogrammetry = () => {
  return <SolutionDetail solution={solutionData} />;
};

export default Photogrammetry; 