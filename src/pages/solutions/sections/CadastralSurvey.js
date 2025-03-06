import React from 'react';
import SolutionDetail from '../components/SolutionDetail';
import MapIcon from '@mui/icons-material/Map';

const solutionData = {
  id: 'cadastral-survey',
  name: 'Cadastral Survey',
  icon: <MapIcon sx={{ fontSize: 60 }} />,
  description: 'Precise land boundary surveys and documentation',
  overview: `Our cadastral survey services provide accurate and reliable land boundary information, essential for property ownership and land use planning. We utilize advanced surveying techniques and equipment to ensure precision in every project.`,
  features: [
    {
      title: 'Boundary Determination',
      description: 'Accurate identification of property lines and boundaries',
    },
    {
      title: 'Legal Documentation',
      description: 'Preparation of legal documents for land ownership',
    },
    {
      title: 'Topographic Surveys',
      description: 'Detailed mapping of land features and elevations',
    },
    {
      title: 'Subdivision Planning',
      description: 'Expert guidance on land subdivision and development',
    },
    {
      title: 'GIS Integration',
      description: 'Integration of survey data into GIS for enhanced analysis',
    },
  ],
  benefits: [
    'Ensures legal compliance for property transactions',
    'Reduces disputes over land boundaries',
    'Facilitates effective land use planning',
    'Provides accurate data for development projects',
    'Enhances property value through proper documentation',
  ],
};

const CadastralSurvey = () => {
  return <SolutionDetail solution={solutionData} />;
};

export default CadastralSurvey; 