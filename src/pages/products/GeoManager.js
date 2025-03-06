import React from 'react';
import ProductDetail from './ProductDetail';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

const productData = {
  id: 'geomanager',
  name: 'GeoManager',
  icon: <DesktopWindowsIcon sx={{ fontSize: 60 }} />,
  description: 'Enterprise-grade GIS software for advanced spatial data management and analysis',
  features: [
    'Advanced spatial analysis and mapping',
    'Real-time data visualization',
    'Multi-user collaboration',
    'Custom workflow automation',
    'Integration with existing systems',
    'Comprehensive reporting tools',
  ],
  benefits: [
    'Streamline geospatial operations',
    'Make data-driven decisions',
    'Improve team productivity',
    'Reduce operational costs',
  ],
};

const GeoManager = () => <ProductDetail product={productData} />;

export default GeoManager; 