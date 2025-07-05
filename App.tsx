
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DecalsPage from './pages/DecalsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import { CERAMIC_DECAL_PROPS, GLASS_DECAL_PROPS } from './constants';

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ceramic-decals" element={<DecalsPage {...CERAMIC_DECAL_PROPS} />} />
          <Route path="/glass-decals" element={<DecalsPage {...GLASS_DECAL_PROPS} />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;