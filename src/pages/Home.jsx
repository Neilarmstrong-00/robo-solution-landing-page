import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <AnimatedPage>
      <section id="hero" style={{
        position: 'relative',
        minHeight: '100vh',
        height: 'auto',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'calc(68px + clamp(1.5rem, 4vh, 3rem)) clamp(1.5rem, 4vw, 3.5rem) clamp(2.5rem, 5vh, 5rem)'
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} className="hero-vid-wrap">
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 80% 70% at 60% 40%,rgba(232,255,71,.07) 0%,transparent 60%), radial-gradient(ellipse 50% 60% at 20% 70%,rgba(255,77,77,.04) 0%,transparent 50%), linear-gradient(135deg,#0e0e12 0%,#121218 50%,#0a0a0d 100%)',
            animation: 'hero-breathe 6s ease-in-out infinite'
          }} />
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
            <motion.div animate={{ x: ['-10%', '10%', '-10%'], opacity: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', background: 'linear-gradient(90deg,transparent,rgba(232,255,71,.12),transparent)', height: 1, top: '28%', width: '60%', left: '20%' }} />
            <motion.div animate={{ x: ['-10%', '10%', '-10%'], opacity: [0, 1, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }} style={{ position: 'absolute', background: 'linear-gradient(90deg,transparent,rgba(232,255,71,.12),transparent)', height: 1, top: '55%', width: '40%', left: '35%' }} />
            <motion.div animate={{ y: ['-10%', '10%', '-10%'], opacity: [0, 1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} style={{ position: 'absolute', background: 'linear-gradient(180deg,transparent,rgba(232,255,71,.08),transparent)', width: 1, top: '10%', height: '70%', left: '20%' }} />
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ position: 'relative', zIndex: 2, marginBottom: 'clamp(1rem, 3vh, 2rem)' }}>
            <div style={{ overflow: 'hidden', maxWidth: '100%', maskImage: 'linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)' }}>
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'flex', gap: '1rem', width: 'max-content' }}
              >
                {/* Double the list for seamless loop */}
                {['IoT Systems', 'AI & Machine Learning', 'Custom Hardware', 'Precision Agriculture', 'Robotics & UGV', 'Technical Workshops', 'Embedded Systems', 'ESP32 / Arduino', 'IoT Systems', 'AI & Machine Learning', 'Custom Hardware', 'Precision Agriculture', 'Robotics & UGV', 'Technical Workshops', 'Embedded Systems', 'ESP32 / Arduino'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid var(--border)', borderRadius: 999, padding: '7px 18px', fontSize: '.75rem', fontWeight: 500, letterSpacing: '.06em', color: 'var(--muted2)', whiteSpace: 'nowrap', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', background: 'rgba(255,255,255,.03)' }}>
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-h1"
            style={{ fontFamily: 'var(--font-h)', fontWeight: 800, lineHeight: .92, letterSpacing: '-.04em', marginBottom: '1.75rem' }}
          >
            Engineering<br />
            <em style={{ fontStyle: 'normal', color: 'transparent', WebkitTextStroke: '1.5px rgba(244,244,246,.22)' }}>Smart Solutions</em><br />
            for a Connected<br />
            World
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}
          >
            <p style={{ fontSize: 'clamp(.9rem,1.4vw,1.05rem)', fontWeight: 300, color: 'var(--muted2)', maxWidth: 420, lineHeight: 1.75 }}>
              Advanced IoT, AI, and automation systems tailored for industrial businesses and modern agriculture.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', flexShrink: 0 }}>
              <Link to="/portfolio" className="hero-btn-prim">See Our Work ↓</Link>
              <Link to="/contact" className="hero-btn-sec">Let's Talk</Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section id="home-services" style={{ background: 'var(--bg)' }}>
        <Reveal>
          <div className="sec-label">Our Capabilities</div>
          <h2 className="sec-h">We craft<br/>engineering<br/>solutions</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link to="/services" className="hero-btn-sec">Explore Services →</Link>
          </div>
        </Reveal>
      </section>

      {/* Floating Rogue Links for Home Page */}
      <div style={{ position: 'fixed', bottom: 'clamp(1.5rem, 4vw, 2.5rem)', right: 'clamp(1.5rem, 4vw, 2.5rem)', zIndex: 99, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div className="hero-float-anim">
          <a href="https://robosolution-workshop.vercel.app/" target="_blank" rel="noreferrer" className="hero-social">Workshop ↗</a>
        </div>
        <div className="hero-float-anim" style={{ animationDelay: '0.2s' }}>
          <a href="https://robosolution-3d-printing.vercel.app/" target="_blank" rel="noreferrer" className="hero-social">3D Printing ↗</a>
        </div>
      </div>

      <style>{`
        .hero-social { font-size: .7rem; font-weight: 500; letter-spacing: .1em; color: var(--muted); border: 1px solid var(--border); border-radius: 999px; padding: 7px 16px; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); background: rgba(255,255,255,.03); transition: all .3s cubic-bezier(0.16, 1, 0.3, 1); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .hero-social:hover { color: #09090b; background: var(--accent); border-color: var(--accent); transform: translateY(-3px) scale(1.05); box-shadow: 0 8px 24px rgba(232,255,71,0.2); }
        .hero-float-anim { animation: float-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both, float-bob 3s ease-in-out infinite 0.6s; }
        @keyframes float-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes hero-breathe { 0%, 100% { opacity: 0.9; } 50% { opacity: 1; } }
        .hero-h1 { font-size: clamp(2rem, 13vw, 9rem); word-wrap: break-word; overflow-wrap: break-word; hyphens: auto; }
        @media(max-width: 768px) {
          #hero { min-height: 85vh !important; justify-content: flex-start !important; padding-top: 130px !important; }
          .hero-h1 { font-size: clamp(1.4rem, 8vw, 3rem) !important; }
          .hero-h1 em { color: var(--accent) !important; -webkit-text-stroke: 0px !important; }
        }
      `}</style>
    </AnimatedPage>
  );
}
