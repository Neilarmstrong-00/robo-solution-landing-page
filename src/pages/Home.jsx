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
      
      {/* 1. SERVICES */}
      <section id="home-services" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <Reveal>
            <div className="sec-label">Our Capabilities</div>
            <h2 className="sec-h">End-to-end<br/>engineering<br/>services.</h2>
          </Reveal>
          
          <div className="home-grid">
            <Reveal direction="up" delay={0.1} style={{ height: '100%' }}>
              <div className="home-card">
                <h3 className="hc-title">IoT & Automation</h3>
                <p className="hc-desc">Industrial sensor networks, custom PCB design, and cloud dashboard integration.</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2} style={{ height: '100%' }}>
              <div className="home-card">
                <h3 className="hc-title">AI & Machine Learning</h3>
                <p className="hc-desc">Edge AI deployment for predictive maintenance, computer vision, and agricultural analysis.</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3} style={{ height: '100%' }}>
              <div className="home-card">
                <h3 className="hc-title">Custom Robotics</h3>
                <p className="hc-desc">Autonomous ground vehicles (UGVs) and specialized robotic platforms for tough terrains.</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.4} style={{ height: '100%' }}>
              <div className="home-card">
                <h3 className="hc-title">Software Solutions</h3>
                <p className="hc-desc">Full-stack web & mobile apps tailored for hardware control and data visualization.</p>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.2}>
            <Link to="/services" className="hero-btn-prim" style={{ width: 'fit-content' }}>Explore All Services →</Link>
          </Reveal>
        </div>
      </section>

      {/* 2. PORTFOLIO */}
      <section id="home-portfolio" style={{ background: 'var(--bg)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <Reveal>
            <div className="sec-label">Featured Projects</div>
            <h2 className="sec-h">Built for<br/>the real world.</h2>
          </Reveal>
          
          <div className="home-grid-2">
            <Reveal direction="left" style={{ height: '100%' }}>
              <div className="hc-img-card">
                <img src="/images/vajra_image.webp" alt="Vajra" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div className="hc-img-content">
                  <h3 className="hc-title">Vajra 2.1</h3>
                  <p className="hc-desc">Precision agrochemical spraying rover designed for complex farming terrains.</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" style={{ height: '100%' }}>
              <div className="hc-img-card">
                <img src="/images/Hootie1.webp" alt="Hootie" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div className="hc-img-content">
                  <h3 className="hc-title">Hootie</h3>
                  <p className="hc-desc">Biomimetic IoT companion robot for interactive automation and engagement.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Link to="/portfolio" className="hero-btn-sec" style={{ width: 'fit-content' }}>View Full Portfolio →</Link>
          </Reveal>
        </div>
      </section>

      {/* 3. WORKSHOPS */}
      <section id="home-workshops" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="home-split">
          <div className="hs-left">
            <Reveal direction="left">
              <div className="sec-label">Education</div>
              <h2 className="sec-h" style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3.5rem)' }}>Building the<br/>next generation<br/>of engineers.</h2>
              <p className="sec-desc" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>We don't just build technology, we teach it. We conduct intensive, hands-on workshops across Maharashtra to bridge the gap between academic theory and industrial reality.</p>
              <Link to="/workshops" className="hero-btn-prim" style={{ width: 'fit-content' }}>Explore Workshops →</Link>
            </Reveal>
          </div>
          <div className="hs-right">
            <Reveal direction="right" style={{ height: '100%' }}>
              <img src="/images/workshop/6.png" alt="Workshop" style={{ width: '100%', aspectRatio: '1.2/1', minHeight: '260px', objectFit: 'cover', borderRadius: '18px', border: '1px solid var(--border)' }} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. 3D PRINTING */}
      <section id="home-3d" style={{ background: 'var(--bg)' }}>
        <div className="home-split" style={{ direction: 'rtl' }}>
          <div className="hs-left" style={{ direction: 'ltr' }}>
            <Reveal direction="right">
              <div className="sec-label">Rapid Prototyping</div>
              <h2 className="sec-h" style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3.5rem)' }}>Bring your<br/>ideas into<br/>reality.</h2>
              <p className="sec-desc" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>From initial CAD designs to highly durable physical models. Our industrial-grade 3D printing services help you iterate faster and validate mechanical designs.</p>
              <Link to="/3d-printing" className="hero-btn-sec" style={{ width: 'fit-content' }}>3D Printing Services →</Link>
            </Reveal>
          </div>
          <div className="hs-right" style={{ direction: 'ltr' }}>
            <Reveal direction="left" style={{ height: '100%' }}>
              <img src="/images/3dprint/8.1.PNG" alt="3D Printing" style={{ width: '100%', aspectRatio: '1.2/1', minHeight: '260px', objectFit: 'cover', borderRadius: '18px', border: '1px solid var(--border)' }} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. ABOUT US */}
      <section id="home-about" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto', gap: '1.5rem' }}>
          <Reveal direction="up">
            <div className="sec-label" style={{ justifyContent: 'center' }}>About Us</div>
            <h2 className="sec-h" style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3rem)' }}>Founded by engineers who build with their hands.</h2>
            <p className="sec-desc" style={{ margin: '1.5rem auto 2.5rem auto' }}>We bring a rare combination of software intelligence and mechanical craftsmanship to every project. We connect IoT sensors, AI intelligence, and precision hardware to solve real problems in fields and factories.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/about" className="hero-btn-sec" style={{ width: 'fit-content' }}>Read Our Story →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section id="home-contact" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(5rem, 12vw, 10rem) clamp(1rem, 4vw, 3.5rem)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
          <Reveal direction="up">
            <h2 className="sec-h" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', color: 'var(--accent)' }}>Ready to innovate?</h2>
            <p className="sec-desc" style={{ margin: '1.5rem auto 2.5rem auto' }}>Let's discuss how our intelligent hardware and software solutions can transform your operations.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/contact" className="hero-btn-prim" style={{ width: 'fit-content', height: '54px', fontSize: '1rem', padding: '0 32px' }}>Start Your Project →</Link>
            </div>
          </Reveal>
        </div>
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
        
        .home-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
        .home-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 2.5rem 2rem; transition: transform .3s, border-color .3s; height: 100%; display: flex; flex-direction: column; gap: 1rem; }
        .home-card:hover { transform: translateY(-5px); border-color: rgba(232,255,71,.3); }
        .hc-title { font-family: var(--font-h); font-weight: 700; font-size: 1.3rem; color: var(--white); }
        .hc-desc { font-size: .95rem; color: var(--muted2); line-height: 1.6; font-weight: 300; }
        
        .home-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .hc-img-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; transition: transform .3s, border-color .3s; height: 100%; display: flex; flex-direction: column; }
        .hc-img-card:hover { transform: translateY(-5px); border-color: rgba(232,255,71,.3); }
        .hc-img-content { padding: 2rem; flex: 1; display: flex; flex-direction: column; gap: 1rem; border-top: 1px solid var(--border); }
        
        .home-split { display: grid; grid-template-columns: 1.2fr 1fr; gap: clamp(3rem, 6vw, 6rem); align-items: center; }
        
        @media(max-width: 900px) {
          .home-split { grid-template-columns: 1fr; direction: ltr !important; }
          .home-split .hs-left, .home-split .hs-right { direction: ltr !important; }
          .home-grid-2 { grid-template-columns: 1fr; }
        }

        @media(max-width: 768px) {
          #hero { min-height: 85vh !important; justify-content: flex-start !important; padding-top: 130px !important; }
          .hero-h1 { font-size: clamp(1.4rem, 8vw, 3rem) !important; }
          .hero-h1 em { color: var(--accent) !important; -webkit-text-stroke: 0px !important; }
          
          .home-grid { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 1rem; padding-bottom: 1.5rem; margin: 0 calc(-1 * clamp(1rem, 4vw, 3.5rem)); padding: 0 clamp(1rem, 4vw, 3.5rem) 1.5rem; -webkit-overflow-scrolling: touch; }
          .home-grid::-webkit-scrollbar { display: none; }
          .home-grid { -ms-overflow-style: none; scrollbar-width: none; }
          .home-card { min-width: 270px; scroll-snap-align: center; padding: 1.75rem 1.5rem; }
        }
      `}</style>
    </AnimatedPage>
  );
}
