import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import Reveal from '../components/Reveal';
import { ArrowRight } from '../components/Icons';

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  // Counters effect
  const Counter = ({ to, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          let startTime = null;
          const duration = 1800;
          const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            setCount(Math.round(ease * to));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      }, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [to]);

    return (
      <div ref={ref} className="stat-n">
        <span className="cnt">{count}</span><span className="suf">{suffix}</span>
      </div>
    );
  };

  const StatBar = ({ width }) => {
    const [w, setW] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setW(width);
          observer.disconnect();
        }
      }, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [width]);

    return (
      <div ref={ref} className="stat-bar-wrap">
        <div className="stat-bar" style={{ width: `${w}%` }} />
      </div>
    );
  };

  return (
    <AnimatedPage>
      <section id="about" style={{ background: 'var(--bg2)', paddingTop: '120px' }}>
        <div className="about-wrap">
          <div className="about-sticky">
            <Reveal direction="left">
              <div className="sec-label">About Us</div>
              <div style={{ marginBottom: '1.5rem', display: 'flex', marginTop: '.5rem' }}>
                <div style={{ border: '1px solid var(--border2)', borderRadius: 999, padding: '6px 14px', fontSize: '.7rem', fontWeight: 500, letterSpacing: '.1em', color: 'var(--muted2)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap' }}>
                  <motion.span animate={{ opacity: [1, 0.15, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  <span>Maharashtra, India · Est. 2023</span>
                </div>
              </div>
              <h2 className="sec-h" style={{ marginTop: '0' }}>Empowering the future of tech and agriculture.</h2>
              <p className="about-p">
                Robo Solutions is a Maharashtra-based engineering consultancy building the infrastructure of tomorrow. We connect IoT sensors, AI intelligence, and precision hardware to solve real problems in fields and factories.<br/><br/>
                Founded by engineers who build with their hands, we bring a rare combination of software intelligence and mechanical craftsmanship to every project.
              </p>
              <Link to="/contact" className="about-cta">Work With Us <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
          <div>
            <Reveal direction="right">
              <div className="stats-grid">
                <div className="stat-cell">
                  <Counter to={28} suffix="+" />
                  <div className="stat-lbl">Projects Delivered</div>
                  <StatBar width={75} />
                </div>
                <div className="stat-cell">
                  <Counter to={10} suffix="+" />
                  <div className="stat-lbl">Happy Clients</div>
                  <StatBar width={60} />
                </div>
                <div className="stat-cell">
                  <Counter to={150} suffix="+" />
                  <div className="stat-lbl">Engineers Trained</div>
                  <StatBar width={90} />
                </div>
                <div className="stat-cell">
                  <Counter to={4} suffix="+" />
                  <div className="stat-lbl">Major Events</div>
                  <StatBar width={45} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team Carousel recreated simply with framer motion drag */}
      <section id="team" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <Reveal>
          <div className="team-head">
            <div>
              <div className="sec-label">Team Members</div>
              <h2 className="sec-h">Meet Our Team</h2>
            </div>
            <div className="team-drag-hint">
              <span>Drag</span>
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8h28M22 2l6 6-6 6" stroke="rgba(244,244,246,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div 
            className="team-carousel-outer hover-big hide-scroll" 
            style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '0 calc(-1 * clamp(1.5rem,4vw,3.5rem))', paddingBottom: '1rem', scrollSnapType: 'x mandatory' }}
          >
            <div 
              className="team-carousel-inner"
              style={{ display: 'flex', gap: '1.25rem', padding: '0 clamp(1.5rem,4vw,3.5rem)', width: 'max-content' }}
            >
              {[
                { init: 'NM', name: 'Nilove Mandal', role: 'Founder & Project Lead', desc: 'Award-winning innovator. Specializing in advanced robotics, mechatronics, and IoT embedded systems. Proven expertise in full-cycle product design, from 3D CAD modelling and explicit dynamic analysis to final physical prototyping.', image: '/images/workshop/2.png', badge: 'Founder & Lead', email: 'nilovemandal@gmail.com', phone: '+91 93074 74959', portfolio: 'https://portfolio-nilove.vercel.app/', linkedin: 'https://www.linkedin.com/in/nilove-mandal/', instagram: 'https://www.instagram.com/nilove_mandal/' },
                { init: 'PI', name: 'Prathemesh Ingle', role: 'Co-Founder & Technical Lead', desc: 'Core technical architect. Embedded systems, robotics, and IoT from concept to field deployment.', image: '/images/workshop/3.png', badge: 'Co-Founder & Tech Lead', email: 'prthmshingle@gmail.com', phone: '+91 95187 81351', linkedin: 'https://www.linkedin.com/in/prathamesh-ingle-6ab573318/', instagram: 'https://www.instagram.com/mr_deadpool_888/' },
                { init: 'SD', name: 'Sagarsinh Dhannavat', role: 'Sales & Management', desc: 'Driving business strategy, enterprise outreach, and client relationships across the region.', image: '/images/workshop/15.jpeg', badge: 'Sales & Management', email: 'sgdhannavat@gmail.com', phone: '+91 75881 21079', linkedin: 'https://www.linkedin.com/in/sagar-dhannavat-6982972a2/', instagram: 'https://www.instagram.com/sagardhannavat/' },
                { init: 'KD', name: 'Karan Dharulkar', role: 'Sales & Management', desc: 'Spearheading marketing operations and building partnerships with top engineering colleges.', image: '/images/workshop/17.jpeg', badge: 'Sales & Management', email: 'Karandharulkar2612@gmail.com', phone: '+91 93738 86583', instagram: 'https://www.instagram.com/karan187_d/' },
                { init: 'HA', name: 'Hriday Amle', role: 'Software Developer', desc: 'Full-stack software architect. Crafts resilient cloud dashboards and seamless user experiences.', image: '/images/workshop/16.jpeg', badge: 'Software Developer', email: 'hridayamle123@gmail.com', phone: '+91 97632 68587', portfolio: 'https://hridayamle.github.io/Portfolio/', linkedin: 'https://www.linkedin.com/in/hriday-amle-06103028b/', instagram: 'https://www.instagram.com/hridayamle/' }
              ].map((member, i) => (
                <motion.div 
                  key={i} 
                  className="team-card" 
                  whileHover={{ y: -5, borderColor: 'var(--border2)' }}
                  onClick={() => setSelectedMember(member)}
                  style={{ flexShrink: 0, width: 'clamp(240px, 45vw, 290px)', borderRadius: 18, border: '1px solid var(--border)', background: 'var(--card)', overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.3s', scrollSnapAlign: 'start' }}
                >
                  <div style={{ height: 'clamp(260px,30vw,360px)', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.4s ease' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--card) 0%, transparent 40%)' }}></div>
                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(9,9,11,.75)', backdropFilter: 'blur(8px)', border: '1px solid var(--border2)', borderRadius: 8, padding: '5px 10px', fontSize: '.65rem', fontWeight: 600, letterSpacing: '.1em', color: 'var(--accent)' }}>
                      {member.badge}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ fontSize: '.68rem', fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.4rem' }}>{member.role}</div>
                    <div style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-.01em', marginBottom: '.75rem', color: 'var(--white)' }}>{member.name}</div>
                    <p style={{ fontSize: '.82rem', fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.6 }}>{member.desc}</p>
                    <div style={{ marginTop: '1rem', fontSize: '.75rem', color: 'var(--accent)', fontWeight: 500 }}>View Profile <ArrowRight size={16} /></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <style>{`
        .about-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem,7vw,9rem); align-items: start; }
        .about-sticky { position: sticky; top: 120px; }
        .about-p { font-size: clamp(.95rem,1.3vw,1.05rem); font-weight: 300; color: var(--muted2); line-height: 1.8; margin-top: 1.5rem; }
        .about-cta { margin-top: 2.5rem; height: 44px; padding: 0 26px; border-radius: 999px; border: 1px solid var(--border2); color: var(--white); font-size: .82rem; font-weight: 500; display: inline-flex; align-items: center; gap: 8px; transition: border-color .2s, background .2s; }
        .about-cta:hover { border-color: var(--accent); background: rgba(232,255,71,.04); }
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 18px; overflow: hidden; margin-bottom: 2px; }
        .stat-cell { background: var(--bg2); padding: 1.75rem 1.25rem; display: flex; flex-direction: column; gap: .4rem; transition: background .3s; }
        .stat-cell:hover { background: var(--surface); }
        .stat-n { font-family: var(--font-h); font-weight: 800; font-size: clamp(2rem,6vw,3.8rem); line-height: 1; letter-spacing: -.04em; }
        .stat-n .cnt { color: var(--white); }
        .stat-n .suf { color: var(--muted2); }
        .stat-lbl { font-size: .78rem; font-weight: 400; color: var(--muted); letter-spacing: .04em; word-wrap: break-word; }
        .stat-bar-wrap { height: 2px; background: rgba(255,255,255,.06); border-radius: 1px; margin-top: .75rem; overflow: hidden; }
        .stat-bar { height: 100%; width: 0; background: linear-gradient(90deg,var(--accent),rgba(232,255,71,.3)); border-radius: 1px; transition: width 1.6s var(--ease); }
        
        .team-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 2rem; }
        .team-drag-hint { font-family: var(--font-h); font-weight: 800; font-size: clamp(1.8rem,3.5vw,3rem); letter-spacing: -.03em; color: var(--muted); display: flex; align-items: center; gap: .75rem; }
        .team-drag-hint span { opacity: .35; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        
        @media(max-width: 900px) { .about-wrap { grid-template-columns: 1fr; gap: 2.5rem; } .about-sticky { position: static; } }
        @media(max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr; }
          .stat-cell { padding: 1.25rem 1rem; }
        }
        @media(max-width: 768px) {
          .team-carousel-outer { overflow: visible !important; margin: 0 !important; scroll-snap-type: none !important; }
          .team-carousel-inner { flex-wrap: wrap; width: 100% !important; justify-content: center; padding: 0 !important; display: grid !important; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)) !important; }
          .team-card { width: 100% !important; }
          .team-drag-hint { display: none !important; }
          .popup-modal-content { max-height: 95vh !important; flex-direction: column !important; }
          .popup-modal-img { min-height: 140px !important; flex: none !important; height: 160px !important; }
          .popup-modal-text { padding: 1.25rem !important; flex: none !important; }
          .popup-modal-h3 { font-size: 1.5rem !important; margin-bottom: 0.75rem !important; }
          .popup-modal-desc { font-size: 0.82rem !important; margin-bottom: 1rem !important; line-height: 1.5 !important; }
        }
      `}</style>
      
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="team-modal-overlay"
            onClick={() => setSelectedMember(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="popup-modal-content"
              style={{ position: 'relative', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 24, width: '100%', maxWidth: 850, maxHeight: '90vh', overflowY: 'auto', overflowX: 'hidden', display: 'flex', flexDirection: 'row' }}
            >
              <button 
                onClick={() => setSelectedMember(null)}
                style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(9,9,11,0.5)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', border: '1px solid var(--border)', color: 'var(--white)', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}
              >
                ✕
              </button>
              <div className="popup-modal-img" style={{ flex: '1.2', minHeight: 250, background: '#000', position: 'relative' }}>
                <img src={selectedMember.image} alt={selectedMember.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, var(--card) 100%)', opacity: window.innerWidth < 768 ? 0 : 1 }}></div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, transparent 50%, var(--card) 100%)', opacity: window.innerWidth < 768 ? 1 : 0 }}></div>
              </div>
              <div className="popup-modal-text" style={{ flex: '1.2', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <div style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '.5rem' }}>{selectedMember.role}</div>
                <h3 className="popup-modal-h3" style={{ fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.4rem)', lineHeight: 1.1, letterSpacing: '-.03em', marginBottom: '1.5rem', color: 'var(--white)', whiteSpace: selectedMember.name.includes('Nilove') ? 'nowrap' : 'normal' }}>{selectedMember.name}</h3>
                <p className="popup-modal-desc" style={{ fontSize: '.95rem', fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.7, marginBottom: '2rem' }}>{selectedMember.desc}</p>
                
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  {selectedMember.email && (
                    <a href={`mailto:${selectedMember.email}`} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted)', fontSize: '.85rem', textDecoration: 'none' }}>
                      <span style={{ padding: 8, background: 'rgba(255,255,255,0.03)', borderRadius: 8, color: 'var(--white)' }}>✉</span> {selectedMember.email}
                    </a>
                  )}
                  {selectedMember.phone && (
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '.5rem' }}>
                      <a href={`tel:${selectedMember.phone.replace(/[\s+]/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--muted)', fontSize: '.85rem', textDecoration: 'none' }}>
                        <span style={{ padding: 8, background: 'rgba(255,255,255,0.03)', borderRadius: 8, color: 'var(--white)', display: 'flex' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </span> {selectedMember.phone}
                      </a>
                    </div>
                  )}
                  {selectedMember.portfolio && (
                    <a href={selectedMember.portfolio} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--accent)', fontSize: '.85rem', fontWeight: 500, textDecoration: 'none', marginTop: '.5rem' }}>
                      <span style={{ padding: selectedMember.name === 'Nilove Mandal' ? 4 : 8, background: 'rgba(232,255,71,0.08)', borderRadius: 8, color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {selectedMember.name === 'Nilove Mandal' ? <img src="/favicon.png" alt="Favicon" style={{ width: 24, height: 24, objectFit: 'contain' }} /> : '🔗'}
                      </span> 
                      View Personal Portfolio <ArrowRight size={16} />
                    </a>
                  )}
                </div>
                
                {(selectedMember.linkedin || selectedMember.instagram || selectedMember.phone) && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {selectedMember.linkedin && (
                      <a href={selectedMember.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontSize: '.8rem', transition: 'color .2s' }} onMouseEnter={(e)=>e.target.style.color='var(--white)'} onMouseLeave={(e)=>e.target.style.color='var(--muted)'}>
                        <span style={{ padding: '6px', background: 'rgba(255,255,255,0.03)', borderRadius: 6, display: 'flex' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </span> LinkedIn
                      </a>
                    )}
                    {selectedMember.instagram && (
                      <a href={selectedMember.instagram} target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontSize: '.8rem', transition: 'color .2s' }} onMouseEnter={(e)=>e.target.style.color='var(--white)'} onMouseLeave={(e)=>e.target.style.color='var(--muted)'}>
                        <span style={{ padding: '6px', background: 'rgba(255,255,255,0.03)', borderRadius: 6, display: 'flex' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </span> Instagram
                      </a>
                    )}
                    {selectedMember.phone && (
                      <a href={`https://wa.me/${selectedMember.phone.replace(/[\s+]/g, '')}`} target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontSize: '.8rem', transition: 'color .2s' }} onMouseEnter={(e)=>e.target.style.color='var(--white)'} onMouseLeave={(e)=>e.target.style.color='var(--muted)'}>
                        <span style={{ padding: '6px', background: 'rgba(255,255,255,0.03)', borderRadius: 6, display: 'flex' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        </span> WhatsApp
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
}
