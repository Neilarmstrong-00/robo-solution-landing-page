import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Hammer, TrendingUp } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import Reveal from '../components/Reveal';

export default function Workshops() {
  const events = [
    {
      id: 1,
      title: "6-Day Intensive AI/ML & IoT Workshop",
      partner: "Dept of CSE, Mauli Group of Institutions",
      description: "Week-long hands-on training on smart systems, Python, ML. Spearheaded by Nilove and Prathemesh. Honored with a Letter of Appreciation.",
      image: "/images/workshop/10.png",
    },
    {
      id: 2,
      title: "Innovo'24: RC Race Technical Coordination",
      partner: "SSGMCE",
      description: "Led execution of flagship RC Race. Designed custom track, authored Rule Book. Awarded Certificate of Appreciation.",
      image: "/images/workshop/13.png",
    },
    {
      id: 3,
      title: "RoboRide: Robotics & Embedded Systems Workshop",
      partner: "IEEE Committee",
      description: "Resource Personnel for a 2-day hardware bootcamp. Every participant built a functional RC Robot.",
      image: "/images/workshop/11.png",
    },
    {
      id: 4,
      title: "Pursuit 2023: 3D Modelling in AR/VR",
      partner: "Mozilla Club, SSGMCE",
      description: "Trained 150+ students in Blender rendering and shading. Awarded Certificate of Appreciation.",
      image: "/images/workshop/12.png",
    },
  ];

  return (
    <AnimatedPage>
      <section style={{ background: 'var(--bg2)', paddingTop: '120px', paddingBottom: '120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1.5rem,4vw,3.5rem)' }}>
          <Reveal>
            <div className="sec-label">Workshops & Events</div>
            <h2 className="sec-h" style={{ marginBottom: '4rem' }}>A Legacy of Empowering<br/><em style={{ fontStyle: 'normal', display: 'block', color: 'var(--accent)' }}>Future Engineers</em></h2>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: '3rem', marginBottom: '6rem', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--white)', marginBottom: '3rem' }}>
                Why Choose <span style={{ color: 'var(--accent)' }}>Robo Solution</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem' }}>
                {[
                  { icon: <Briefcase size={36} color="var(--accent)" />, title: "Industry-Relevant Curriculum", desc: "We strictly teach the exact tools and workflows currently used in modern engineering and industrial automation. No outdated syllabus." },
                  { icon: <Hammer size={36} color="var(--white)" />, title: "100% Hands-On Approach", desc: "We believe in learning by building. No long lectures; only practical, project-based execution guided directly by Nilove and Prathemesh." },
                  { icon: <TrendingUp size={36} color="var(--accent)" />, title: "End-to-End Execution", desc: "From training 150+ students to managing a technical championship, we handle technical logistics flawlessly from start to finish." }
                ].map((feature, index) => (
                  <div key={index} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '20px', padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', transition: 'transform 0.3s ease, background 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)';}} onMouseOut={e => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)';}}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                      {feature.icon}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-h)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--white)' }}>{feature.title}</h3>
                    <p style={{ color: 'var(--muted2)', lineHeight: 1.6, fontSize: '0.95rem' }}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div style={{ position: 'relative', marginTop: '4rem' }}>
            <div className="event-line"></div>
            <div className="events-container">
              {events.map((event, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={event.id} className={`event-row ${isEven ? 'row-even' : 'row-odd'}`}>
                    <div className="event-img-wrap">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="event-img-inner"
                      >
                        <img src={event.image} alt={event.title} className="event-img" />
                        <div className="event-img-overlay"></div>
                      </motion.div>
                    </div>

                    <div className="event-dot">
                      <div className="event-dot-inner"></div>
                    </div>

                    <div className="event-text">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`event-text-wrap ${isEven ? 'text-right' : 'text-left'}`}>
                          <div className="event-partner">{event.partner}</div>
                          <h3 className="event-title">{event.title}</h3>
                          <p className="event-desc">{event.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Reveal>
            <div style={{ marginTop: '6rem', padding: '4rem 0', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div className="sec-label">Corporate & Academic</div>
                <h2 className="sec-h">Ready to Upskill<br/><em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Your Students?</em></h2>
                <p style={{ color: 'var(--muted2)', maxWidth: '500px', lineHeight: 1.6, marginTop: '1.5rem' }}>
                  Bring our industry-grade technical workshops to your campus. We handle the curriculum, hardware kits, and hands-on training.
                </p>
              </div>
              <a href="https://robosolution-workshop.vercel.app/" target="_blank" rel="noreferrer" className="hero-btn-prim" style={{ textDecoration: 'none' }}>Book a Workshop →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .events-container { display: flex; flex-direction: column; gap: 4rem; position: relative; }
        .event-line { display: none; }
        .event-row { display: flex; flex-direction: column; gap: 2rem; align-items: center; width: 100%; position: relative; }
        .event-img-wrap { width: 100%; }
        .event-text { width: 100%; }
        .event-img-inner { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 16/9; border: 1px solid rgba(255,255,255,0.1); }
        .event-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: transform 0.5s, opacity 0.5s; }
        .event-img-inner:hover .event-img { transform: scale(1.05); opacity: 1; }
        .event-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, var(--bg2) 0%, transparent 50%); }
        .event-dot { display: none; }
        .event-text-wrap { background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); backdrop-filter: blur(10px); }
        .event-partner { color: var(--accent); font-weight: 600; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; }
        .event-title { font-family: var(--font-h); font-weight: 700; font-size: 1.5rem; color: var(--white); margin-bottom: 1rem; }
        .event-desc { color: var(--muted2); line-height: 1.7; font-size: 0.95rem; }

        @media(min-width: 768px) {
          .events-container { gap: 6rem; }
          .event-line { display: block; position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, var(--accent) 0%, rgba(255,255,255,0.1) 50%, transparent 100%); transform: translateX(-50%); z-index: 1; }
          .event-row { flex-direction: row; justify-content: space-between; }
          .row-even { flex-direction: row-reverse; }
          .event-img-wrap { width: 45%; margin-bottom: 0; }
          .event-text { width: 45%; }
          .event-dot { display: flex; position: absolute; left: 50%; transform: translateX(-50%); width: 24px; height: 24px; border-radius: 50%; background: var(--bg2); border: 3px solid var(--accent); z-index: 2; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(232,255,71,0.3); }
          .event-dot-inner { width: 6px; height: 6px; background: var(--white); border-radius: 50%; }
          .text-right { text-align: right; }
          .text-left { text-align: left; }
        }
      `}</style>
    </AnimatedPage>
  );
}