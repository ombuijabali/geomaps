import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/sections/ServicesOverview';
import ProductsSolutions from './components/sections/ProductsSolutions';
import Stats from './components/sections/Stats';
import Footer from './components/Footer';
import Contact from './pages/Contact';

// Import About pages
import VisionMission from './pages/about/sections/VisionMission';
import Leadership from './pages/about/sections/Leadership';
import Strategy from './pages/about/sections/Strategy';
import Innovation from './pages/about/sections/Innovation';
import Partners from './pages/about/sections/Partners';
import CorporateResponsibility from './pages/about/sections/CorporateResponsibility';
import Awards from './pages/about/sections/Awards';
import Careers from './pages/about/sections/Careers';
import Legal from './pages/about/sections/Legal';
import Products from './pages/products/Products';
import GeoManager from './pages/products/GeoManager';
import GeoManagerField from './pages/products/GeoManagerField';
import Solutions from './pages/solutions/Solutions';
import AerialImagery  from './pages/solutions/sections/AerialImagery ';
import CadastralSurvey from './pages/solutions/sections/CadastralSurvey';
import GISMapping from './pages/solutions/sections/GISMapping';
import SoftwareDevelopment from './pages/solutions/sections/SoftwareDevelopment';
import Cartography from './pages/solutions/sections/Cartography';
import Photogrammetry from './pages/solutions/sections/Photogrammetry';
import RemoteSensing from './pages/solutions/sections/RemoteSensing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ServicesOverview />
              <ProductsSolutions />
              <Stats />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/strategy" element={<Strategy />} />
          <Route path="/about/innovation" element={<Innovation />} />
          <Route path="/about/partners" element={<Partners />} />
          <Route path="/about/responsibility" element={<CorporateResponsibility />} />
          <Route path="/about/awards" element={<Awards />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/about/legal" element={<Legal />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/geomanager" element={<GeoManager />} />
          <Route path="/products/geomanager-field" element={<GeoManagerField />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/aerial-photography" element={<AerialImagery  />} />
          <Route path="/solutions/cadastral-survey" element={<CadastralSurvey />} />
          <Route path="/solutions/gis-mapping" element={<GISMapping />} />
          <Route path="/solutions/software-development" element={<SoftwareDevelopment />} />
          <Route path="/solutions/cartography" element={<Cartography />} />
          <Route path="/solutions/photogrammetry" element={<Photogrammetry />} />
          <Route path="/solutions/remote-sensing" element={<RemoteSensing />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
