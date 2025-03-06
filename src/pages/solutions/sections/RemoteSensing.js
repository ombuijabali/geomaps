import React from 'react';
import SolutionDetail from '../components/SolutionDetail';
import ExploreIcon from '@mui/icons-material/Explore';

const solutionData = {
  id: 'remote-sensing',
  name: 'Remote Sensing',
  icon: <ExploreIcon sx={{ fontSize: 60 }} />,
  description: 'Satellite imagery analysis and interpretation',
  overview: `Our remote sensing services provide valuable insights through the analysis of satellite imagery. We utilize advanced techniques to interpret data for various applications, including environmental monitoring and urban planning.`,
  features: [
    {
      title: 'Satellite Imagery Analysis',
      description: 'In-depth analysis of satellite images for various applications',
    },
    {
      title: 'Change Detection',
      description: 'Monitoring changes in land use and environmental conditions',
    },
    {
      title: 'Data Integration',
      description: 'Combining remote sensing data with other datasets for comprehensive analysis',
    },
    {
      title: 'Custom Reporting',
      description: 'Detailed reports based on remote sensing analysis',
    },
    {
      title: 'Expert Consultation',
      description: 'Guidance on the use of remote sensing data for decision-making',
    },
  ],
  benefits: [
    'Provides timely and accurate information for decision-making',
    'Enhances understanding of environmental changes',
    'Supports effective resource management',
    'Facilitates urban planning and development',
    'Offers valuable insights for various industries',
  ],
};

const RemoteSensing = () => {
  return <SolutionDetail solution={solutionData} />;
};

export default RemoteSensing; 