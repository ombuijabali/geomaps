import React from 'react';
import SolutionDetail from '../components/SolutionDetail';
import TerrainIcon from '@mui/icons-material/Terrain';

const solutionData = {
  id: 'gis-mapping',
  name: 'GIS Mapping & Analysis',
  icon: <TerrainIcon sx={{ fontSize: 60 }} />,
  description: 'Comprehensive geospatial analysis and mapping solutions',
  overview: `Our GIS mapping and analysis services provide in-depth insights into spatial data, enabling informed decision-making. We utilize advanced GIS software and techniques to analyze and visualize data effectively.`,
  features: [
    {
      title: 'Spatial Analysis',
      description: 'In-depth analysis of spatial relationships and patterns',
    },
    {
      title: 'Data Visualization',
      description: 'Interactive maps and visual representations of data',
    },
    {
      title: 'Custom Mapping Solutions',
      description: 'Tailored maps to meet specific project needs',
    },
    {
      title: 'Data Integration',
      description: 'Combining various data sources for comprehensive analysis',
    },
    {
      title: 'Reporting Tools',
      description: 'Detailed reports and presentations based on analysis',
    },
  ],
  benefits: [
    'Improves decision-making with data-driven insights',
    'Enhances project planning and execution',
    'Facilitates stakeholder communication',
    'Identifies trends and patterns in data',
    'Supports effective resource management',
  ],
};

const GISMapping = () => {
  return <SolutionDetail solution={solutionData} />;
};

export default GISMapping; 