import React from 'react';
import ProductDetail from './ProductDetail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const productData = {
  id: 'geomanager-field',
  name: 'GeoManager Field',
  icon: <PhoneAndroidIcon sx={{ fontSize: 60 }} />,
  description: 'Mobile solution for field data collection and real-time updates',
  features: [
    'Offline data collection',
    'GPS tracking and navigation',
    'Photo and document attachments',
    'Real-time sync with GeoManager',
    'Custom forms and workflows',
    'Team coordination tools',
  ],
  benefits: [
    'Enhance field team efficiency',
    'Ensure data accuracy',
    'Real-time project updates',
    'Seamless office-field coordination',
  ],
};

const GeoManagerField = () => <ProductDetail product={productData} />;

export default GeoManagerField; 