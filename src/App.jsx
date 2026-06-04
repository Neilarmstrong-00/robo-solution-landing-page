import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Workshops from './pages/Workshops';
import ThreeDPrinting from './pages/ThreeDPrinting';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MobileHomeBtn() {
  const location = useLocation();
  if (location.pathname === '/') return null;
  return (
    <div className="mobile-home-wrap">
      <Link to="/" className="mobile-home-btn" title="Back to Home">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      </Link>
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <div style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/3d-printing" element={<ThreeDPrinting />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <MobileHomeBtn />
        <Footer />
      </div>
    </>
  );
}

export default App;
