import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.8fr repeat(3, 1fr)',
        gap: 'clamp(2rem,4vw,5rem)',
        padding: 'clamp(3.5rem,6vw,5rem) clamp(1.5rem,4vw,3.5rem) 3rem'
      }} className="footer-top">
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '9px', fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-.02em' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)' }} />
            Robo Solutions
          </Link>
          <p style={{ fontSize: '.84rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7, marginTop: '.9rem', maxWidth: 260 }}>
            Engineering smart, connected systems for industrial businesses and modern agriculture. Maharashtra, India.
          </p>
        </div>
        <div>
          <div style={{ fontSize: '.68rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1.1rem' }}>Links</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.55rem', padding: 0 }}>
            <li><Link to="/services" style={linkStyle}>Services</Link></li>
            <li><a href="https://robosolution-workshop.vercel.app/" target="_blank" rel="noreferrer" style={linkStyle}>Workshops ↗</a></li>
            <li><a href="https://robosolution-3d-printing.vercel.app/" target="_blank" rel="noreferrer" style={linkStyle}>3D Printing ↗</a></li>
            <li><Link to="/portfolio" style={linkStyle}>Portfolio</Link></li>
            <li><Link to="/about" style={linkStyle}>About Us</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          </ul>
        </div>
        <div>
          <div style={{ fontSize: '.68rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1.1rem' }}>Socials</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.55rem', padding: 0 }}>
            <li><a href="#" style={linkStyle}>Instagram</a></li>
            <li><a href="#" style={linkStyle}>LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <div style={{ fontSize: '.68rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1.1rem' }}>Contact</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.55rem', padding: 0 }}>
            <li><span style={linkStyle}>Maharashtra, India</span></li>
            <li><a href="mailto:robosolution.info@gmail.com" style={linkStyle}>robosolution.info@gmail.com</a></li>
            <li><a href="tel:+919518781351" style={linkStyle}>+91 95187 81351</a></li>
            <li><a href="tel:+919307474959" style={linkStyle}>+91 93074 74959</a></li>
          </ul>
        </div>
      </div>

      <div style={{ padding: '0 clamp(1.5rem,4vw,3.5rem)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{
          fontFamily: 'var(--font-h)',
          fontWeight: 800,
          fontSize: 'clamp(6rem,15vw,17rem)',
          lineHeight: .85,
          letterSpacing: '-.04em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(244,244,246,.07)',
          whiteSpace: 'nowrap',
          padding: '1rem 0 .5rem',
          userSelect: 'none'
        }}>
          ROBO SOLUTIONS
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem clamp(1.5rem,4vw,3.5rem) clamp(2rem,3vw,3rem)',
        borderTop: '1px solid var(--border)',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <span style={{ fontSize: '.75rem', color: 'var(--muted)' }}>© 2026 Robo Solutions. All Rights Reserved</span>
        <button onClick={scrollToTop} className="back-top-btn" style={{
          height: 34, padding: '0 16px', borderRadius: 999, border: '1px solid var(--border)', color: 'var(--muted)', fontSize: '.72rem', fontWeight: 500, letterSpacing: '.06em', display: 'flex', alignItems: 'center', gap: 6, transition: 'border-color .2s, color .2s'
        }}>
          ↑ Back to Top
        </button>
      </div>

      <style>{`
        @media(max-width:900px){ .footer-top { grid-template-columns: 1fr 1fr !important; } }
        @media(max-width:600px){ .footer-top { grid-template-columns: 1fr !important; } }
        .back-top-btn:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
      `}</style>
    </footer>
  );
}

const linkStyle = {
  fontSize: '.84rem',
  fontWeight: 300,
  color: 'var(--muted)',
  transition: 'color .2s'
};
