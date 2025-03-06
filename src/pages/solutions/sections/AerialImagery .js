import React from 'react';
import SolutionDetail from '../components/SolutionDetail';
import FlightIcon from '@mui/icons-material/Flight';

const solutionData = {
  id: 'aerial-photography',
  name: 'Aerial Imagery',
  icon: <FlightIcon sx={{ fontSize: 60 }} />,
  description: 'High-resolution aerial imagery for mapping and surveying',
  overview: `Our aerial photography services utilize state-of-the-art equipment and techniques to capture high-resolution imagery for various mapping and surveying applications. We employ advanced UAV technology and professional-grade cameras to ensure exceptional quality and accuracy in every project.`,
  features: [
    {
      title: 'High-Resolution Imagery',
      description: 'Ultra-high resolution photos with up to 2cm/pixel accuracy',
    },
    {
      title: 'Orthomosaic Mapping',
      description: 'Geometrically corrected aerial imagery for accurate measurements',
    },
    {
      title: 'Thermal Imaging',
      description: 'Infrared photography for specialized applications',
    },
    {
      title: 'Real-time Processing',
      description: 'Quick turnaround with on-site data processing capabilities',
    },
    {
      title: 'Multiple Output Formats',
      description: 'Delivery in various formats including TIFF, JPEG, and digital elevation models',
    },
  ],
  benefits: [
    'Cost-effective compared to traditional aerial surveys',
    'Rapid deployment and quick results',
    'Highly accurate and detailed imagery',
    'Flexible scheduling and project planning',
    'Regular updates for monitoring changes',
  ],
};

const AerialImagery  = () => {
  return <SolutionDetail solution={solutionData} />;
};

export default AerialImagery ; 