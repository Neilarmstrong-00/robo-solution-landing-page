import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import Reveal from '../components/Reveal';
import useImageDominantColor from '../hooks/useImageDominantColor';

function ProjectGridCard({ proj, i, setSelectedProject }) {
  const { color, isTransparent } = useImageDominantColor(proj.image);
  return (
    <Reveal delay={i * 0.1} direction="up" className="proj-card-wrap">
      <motion.div
        whileHover={{ borderColor: 'var(--border2)', y: -4 }}
        style={{
          borderRadius: 18,
          border: '1px solid var(--border)',
          background: 'var(--card)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'border-color 0.35s, transform 0.35s'
        }}
        className="proj-card-inner"
      >
        <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: '#000', borderBottom: '1px solid var(--border)' }} className="proj-card-top">
          {!isTransparent && (
            <div style={{ position: 'absolute', inset: 0, backgroundColor: color, zIndex: 0 }} />
          )}
          <motion.img
            src={proj.image}
            alt={proj.title}
            className="proj-visual-placeholder"
            whileHover={{ scale: 1.05 }}
            style={{
              width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.6s var(--ease)', opacity: 0.95, position: 'relative', zIndex: 1
            }}
          />
          <div
            className="proj-visual-glow"
            style={{
              position: 'absolute', inset: 0, opacity: 0,
              background: proj.glowBg, transition: 'opacity 0.4s', pointerEvents: 'none', zIndex: 2
            }}
          />
        </div>
        
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {proj.cats.map((cat, j) => (
              <span key={j} style={{
                fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase',
                padding: '4px 8px', borderRadius: 999, border: '1px solid var(--border)', color: 'var(--muted)'
              }}>
                {cat}
              </span>
            ))}
          </div>
          <div style={{
            fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '1.3rem',
            lineHeight: 1.2, letterSpacing: '-.02em', marginBottom: '0.75rem', color: 'var(--white)'
          }}>
            {proj.title}
          </div>
          <p style={{ fontSize: '.85rem', fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
            {proj.desc}
          </p>
          <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
            <button 
              onClick={() => setSelectedProject(proj)} 
              className="proj-link" 
              style={{ background: 'transparent', cursor: 'pointer' }}
            >
              View Details →
            </button>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noreferrer" className="proj-link" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                Launch ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsVideoPlaying(false);
    setIsMuted(false);
  }, [selectedProject]);

  const { color: modalColor, isTransparent: isModalTransparent } = useImageDominantColor(selectedProject?.image);

  const projects = [
    {
      cats: ['IoT', 'Air Quality', 'Industrial'],
      title: 'Integrated Air Quality Monitoring System',
      desc: 'Real-time PM2.5, CO₂, VOC and temperature sensors with a cloud dashboard for industrial facilities and smart buildings.',
      details: 'A robust industrial IoT node designed for continuous air quality monitoring in factories and smart buildings. It seamlessly aggregates data from PM2.5, CO₂, and VOC sensors and pushes it to a secure cloud dashboard for real-time visualization and alerting, enabling proactive health and safety measures.',
      image: '/images/workshop/5.png',
      glowBg: 'linear-gradient(135deg, rgba(232,255,71,.2), transparent)'
    },
    {
      cats: ['Robotics', 'Autonomous', 'UGV'],
      title: 'Hexapod Autonomous Terrain UGV',
      desc: 'Six-legged autonomous robot for terrain mapping and reconnaissance in unstructured environments, with onboard vision navigation.',
      details: 'An advanced six-legged Unmanned Ground Vehicle (UGV) engineered for highly unstructured environments. Utilizing advanced kinematics and onboard vision, the hexapod can autonomously map terrain, adapt its gait to obstacles, and perform reconnaissance missions where traditional wheeled or tracked robots fail.',
      image: '/images/workshop/6.png',
      glowBg: 'linear-gradient(135deg, rgba(150,100,255,.2), transparent)'
    },
    {
      cats: ['AgriTech', 'Automation', 'Award Winner'],
      title: 'Smart Breathe — Adaptive Ventilator',
      desc: '₹8,500 IoT-enabled ventilator with SpO₂ bio-feedback loop. 1st Prize HISET-2024 · 2nd Prize IIT Ropar IMPACT 3.0 (₹15,000).',
      details: 'A portable, low-cost mechanical ventilator designed for emergency and home-care use. It automates a silicon Ambu bag using a Nema-17 stepper motor and lead-screw mechanism. It features an intelligent bio-feedback loop that adjusts airflow based on real-time patient vitals (SpO2). Validated a cost-effective design that provides Tele-ICU capabilities.',
      image: '/images/workshop/4.png',
      glowBg: 'linear-gradient(135deg, rgba(255,77,77,.2), transparent)'
    },
    {
      cats: ['NFC', 'Web App', 'Networking'],
      title: 'Smart Business Card Platform',
      desc: 'NFC-enabled smart digital business cards with a dedicated cloud-based dashboard for instant contact sharing and analytics.',
      details: 'A complete SaaS platform that replaces traditional paper business cards. Users can instantly share contact information, portfolios, and social links with a simple tap of an NFC card. The platform includes a cloud-based dashboard for real-time profile editing and networking analytics.',
      image: '/images/nfc-card.jpeg',
      glowBg: 'linear-gradient(135deg, rgba(0,200,255,.2), transparent)',
      link: 'https://nfc-card-preview.vercel.app/'
    },
    {
      cats: ['Robotics', 'AgriTech', 'Teleoperated'],
      title: 'Vajra 2.1: Precision Agrochemical Spraying',
      desc: 'A reliability-engineered, teleoperated rover designed to eliminate human exposure to hazardous pesticides.',
      details: 'Acts as a teleoperated proxy, allowing farmers to spray hazardous chemicals from a safe distance, reducing direct exposure risk by 100%. Solved the "Liquid Slosh Resonance" instability common in small AGVs by designing a rigid geometry that locks the fluid mass relative to the drive train, ensuring predictable handling on uneven terrain. The chassis utilizes modular Aluminium Extrusion profiles and a compound inclination angle for multi-axis stability.',
      image: '/images/vajra_image.webp',
      video: '/images/projects/vajra_2.1.mp4',
      glowBg: 'linear-gradient(135deg, rgba(50,200,100,.2), transparent)'
    },
    {
      cats: ['IoT', 'Robotics', 'Biomimicry'],
      title: 'Hootie: Biomimetic IoT Companion Robot',
      desc: 'An interactive desktop robot blending animatronic biomimicry with IoT connectivity.',
      details: 'Designed to bridge the gap between user and machine, a capacitive touch sensor was integrated into the robot\'s anterior shell. This allows Hootie to detect physical affection, such as "petting." Upon contact, the system triggers a "Joy Protocol," synchronizing happy OLED eye animations, rhythmic servo oscillations, and cheerful audio chirps. It features an ESP32 architecture, extensive emotion engine, and passive thermal management.',
      image: '/images/Hootie1.webp',
      glowBg: 'linear-gradient(135deg, rgba(200,150,50,.2), transparent)'
    }
  ];

  return (
    <AnimatedPage>
      <section id="projects" style={{ background: 'var(--bg)', paddingTop: '120px' }}>
        <Reveal>
          <div className="sec-label">Portfolio</div>
          <h2 className="sec-h">Our Projects</h2>
          <p className="sec-desc" style={{ marginTop: '1rem', marginBottom: '3rem' }}>
            See some of our selected projects we launched.
          </p>
        </Reveal>

        <div className="portfolio-grid">
          {projects.map((proj, i) => (
            <ProjectGridCard key={i} proj={proj} i={i} setSelectedProject={setSelectedProject} />
          ))}
        </div>
      </section>

      <style>{`
        .portfolio-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        @media(min-width: 768px) { .portfolio-grid { grid-template-columns: 1fr 1fr; } }
        @media(min-width: 1024px) { .portfolio-grid { grid-template-columns: 1fr 1fr 1fr; } }
        
        .proj-link { display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 36px; padding: 0 16px; border-radius: 999px; border: 1px solid var(--border2); font-size: .75rem; font-weight: 500; color: var(--white); transition: border-color .2s, background .2s; }
        .proj-link:hover { border-color: var(--accent); background: rgba(232,255,71,.04); }
        .proj-card-wrap:hover .proj-visual-glow { opacity: 1 !important; }
      `}</style>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="team-modal-overlay"
            onClick={() => setSelectedProject(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 24, width: '100%', maxWidth: 900, maxHeight: '90vh', overflowY: 'auto', overflowX: 'hidden', display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row' }}
            >
              <div style={{ flex: '1.2', minHeight: 300, background: '#000', position: 'relative', overflow: 'hidden' }}>
                {!isModalTransparent && (
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: modalColor, zIndex: 0 }} />
                )}
                <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
                  {selectedProject.video && isVideoPlaying ? (
                    <video 
                      ref={videoRef}
                      src={selectedProject.video} 
                      autoPlay 
                      loop 
                      muted={isMuted}
                      onClick={() => setIsMuted(!isMuted)}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }} 
                    />
                  ) : (
                    <>
                      <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.95 }} />
                      {selectedProject.video && (
                        <div 
                          onClick={() => { setIsVideoPlaying(true); setIsMuted(false); }}
                          style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', cursor: 'pointer' }}
                        >
                          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', transition: 'transform 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.transform='scale(1.1)'} onMouseLeave={(e)=>e.currentTarget.style.transform='scale(1)'}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                {/* Mute indicator overlay removed per request */}
                
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, var(--card) 100%)', opacity: window.innerWidth < 768 ? 0 : 1, pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, transparent 50%, var(--card) 100%)', opacity: window.innerWidth < 768 ? 1 : 0, pointerEvents: 'none' }}></div>
              </div>
              <div style={{ flex: '1', padding: 'clamp(2rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <button 
                  onClick={() => setSelectedProject(null)}
                  style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.05)', border: 'none', color: 'var(--muted)', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  ✕
                </button>
                <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {selectedProject.cats.map((cat, j) => (
                    <span key={j} style={{
                      fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase',
                      padding: '4px 8px', borderRadius: 999, border: '1px solid var(--border)', color: 'var(--muted)'
                    }}>
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: 'clamp(1.5rem,2.5vw,2rem)', lineHeight: 1.1, letterSpacing: '-.03em', marginBottom: '1.5rem', color: 'var(--white)' }}>{selectedProject.title}</h3>
                <p style={{ fontSize: '.9rem', fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.7, marginBottom: '2rem' }}>{selectedProject.details}</p>
                
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  {selectedProject.link ? (
                    <a href={selectedProject.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--accent)', fontSize: '.85rem', fontWeight: 500, textDecoration: 'none' }}>
                      <span style={{ padding: 8, background: 'rgba(232,255,71,0.08)', borderRadius: 8, color: 'var(--accent)' }}>🔗</span> Launch Live Project →
                    </a>
                  ) : (
                    <Link to={`/contact?type=Project&subject=${encodeURIComponent(selectedProject.title)}`} onClick={() => setSelectedProject(null)} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--white)', fontSize: '.85rem', fontWeight: 500, textDecoration: 'none' }}>
                      <span style={{ padding: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 8, color: 'var(--white)' }}>✉</span> Request Similar Project →
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
}
