import React from 'react';
import SolutionDetail from '../components/SolutionDetail';
import CodeIcon from '@mui/icons-material/Code';

const solutionData = {
  id: 'software-development',
  name: 'Software Development',
  icon: <CodeIcon sx={{ fontSize: 60 }} />,
  description: 'Custom GIS software solutions for your specific needs',
  overview: `We offer tailored software development services to create GIS applications that meet your unique requirements. Our team of experienced developers works closely with clients to deliver high-quality, user-friendly solutions.`,
  features: [
    {
      title: 'Custom Application Development',
      description: 'Development of bespoke GIS applications tailored to your needs',
    },
    {
      title: 'Integration with Existing Systems',
      description: 'Seamless integration with your current software and databases',
    },
    {
      title: 'User-Friendly Interfaces',
      description: 'Intuitive designs for enhanced user experience',
    },
    {
      title: 'Ongoing Support and Maintenance',
      description: 'Comprehensive support to ensure smooth operation',
    },
    {
      title: 'Scalable Solutions',
      description: 'Applications that grow with your business needs',
    },
  ],
  benefits: [
    'Increases operational efficiency',
    'Enhances data accessibility and usability',
    'Provides competitive advantage through tailored solutions',
    'Facilitates better decision-making with custom tools',
    'Ensures long-term support and updates',
  ],
};

const SoftwareDevelopment = () => {
  return <SolutionDetail solution={solutionData} />;
};

export default SoftwareDevelopment; 