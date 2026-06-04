import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isStuck, setIsStuck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 4vw, 3.5rem)',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        borderBottom: '1px solid transparent',
        background: isStuck ? 'rgba(9,9,11,.95)' : 'rgba(9,9,11,.5)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderColor: isStuck ? 'var(--border)' : 'transparent'
      }}
    >
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo-light.png" alt="Robo Solutions" style={{ height: 38, objectFit: 'contain' }} />
        </Link>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(1.5rem, 2.5vw, 2.5rem)' }} className="nav-mid">
        <Link to="/services" style={linkStyle(location.pathname === '/services')}>Services</Link>
        <Link to="/workshops" style={linkStyle(location.pathname === '/workshops')}>Workshops</Link>
        <Link to="/3d-printing" style={linkStyle(location.pathname === '/3d-printing')}>3D Printing</Link>
        <Link to="/portfolio" style={linkStyle(location.pathname === '/portfolio')}>Projects</Link>
        <Link to="/about" style={linkStyle(location.pathname === '/about')}>About Us</Link>
        <Link to="/contact" style={linkStyle(location.pathname === '/contact')}>Contact</Link>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem' }}>
        <Link to="/contact" className="nav-cta hidden-mobile" style={{
          height: 38, padding: '0 22px', borderRadius: 999, background: 'var(--white)', color: '#09090b', fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '.78rem', letterSpacing: '.04em', display: 'flex', alignItems: 'center', gap: 6, transition: 'background .2s, transform .2s'
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', transition: 'background .2s' }} className="nav-cta-dot" />
          Let's Connect!
        </Link>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', border: 'none', color: 'var(--white)', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}>
          ☰
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
        <div className="nav-mobile-inner">
          <Link to="/" style={linkStyle(location.pathname === '/')} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" style={linkStyle(location.pathname === '/services')} onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/workshops" style={linkStyle(location.pathname === '/workshops')} onClick={() => setIsOpen(false)}>Workshops</Link>
          <Link to="/3d-printing" style={linkStyle(location.pathname === '/3d-printing')} onClick={() => setIsOpen(false)}>3D Printing</Link>
          <Link to="/portfolio" style={linkStyle(location.pathname === '/portfolio')} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/about" style={linkStyle(location.pathname === '/about')} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" style={linkStyle(location.pathname === '/contact')} onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/contact" className="nav-cta" onClick={() => setIsOpen(false)} style={{ marginTop: '1rem', height: 38, padding: '0 22px', borderRadius: 999, background: 'var(--white)', color: '#09090b', fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '.78rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Let's Connect!</Link>
        </div>
      </div>

      <style>{`
        @media(max-width: 900px) { 
          .nav-mid { display: none !important; } 
          .hidden-mobile { display: none !important; }
          .hamburger { display: flex !important; align-items: center; justify-content: center; width: 38px; height: 38px; }
        }
        .nav-cta:hover { background: var(--accent) !important; transform: scale(1.02); }
        .nav-cta:hover .nav-cta-dot { background: #09090b !important; }
        .nav-mobile { position: absolute; top: 68px; left: 0; right: 0; background: rgba(14,14,20,.95); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); padding: 1.5rem 2rem 2.5rem; display: flex; flex-direction: column; opacity: 0; pointer-events: none; transform: translateY(-10px); transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); z-index: 999; }
        .nav-mobile.open { opacity: 1; pointer-events: auto; transform: translateY(0); }
        .nav-mobile-inner { display: flex; flex-direction: column; gap: 1.5rem; }
        .nav-mid a { position: relative; }
        .nav-mid a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0%; height: 1px; background: var(--white); transition: width 0.2s ease; }
        .nav-mid a:hover::after { width: 100%; }
        .nav-mid a[style*="color: var(--white)"]::after { width: 100%; background: var(--accent); }
      `}</style>
    </nav>
  );
}

function linkStyle(isActive) {
  return {
    fontSize: '.82rem',
    fontWeight: 500,
    letterSpacing: '.04em',
    color: isActive ? 'var(--white)' : 'var(--muted)',
    transition: 'color .2s'
  };
}
