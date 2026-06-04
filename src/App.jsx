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
      <Link to="/" className="mobile-home-btn">
        <span style={{ marginRight: 8, fontSize: '1.2rem' }}>←</span> Back to Home
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
