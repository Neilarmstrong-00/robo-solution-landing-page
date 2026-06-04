import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import Reveal from '../components/Reveal';

export default function Services() {
  const services = [
    {
      image: '/images/workshop/5.png',
      title: 'IoT & Automation',
      desc: 'Smart sensors, microcontrollers, and real-time cloud dashboards. We connect physical machines to intelligent digital systems.',
      tags: ['ESP32', 'Arduino', 'MQTT', 'ThingSpeak'],
      color: 'rgba(232,255,71,.3)'
    },
    {
      image: '/images/workshop/9.png',
      title: 'AI & Machine Learning',
      desc: 'Intelligent data analysis and predictive systems for agriculture and business. Actionable AI, not just dashboards.',
      tags: ['Python', 'TensorFlow', 'Vision AI'],
      color: 'rgba(255,77,77,.3)'
    },
    {
      image: '/images/workshop/6.png',
      title: 'Custom Hardware Engineering',
      desc: 'From geared motor robotic platforms to full UGV systems. We design, prototype, and manufacture for demanding environments.',
      tags: ['CAD/CAM', 'SolidWorks', 'UGV', 'PCB'],
      color: 'rgba(0,200,255,.3)'
    },
    {
      image: '/images/workshop/10.png',
      title: 'Technical Workshops',
      desc: 'Hands-on training on IoT, AI/ML, and embedded systems. Delivered at colleges and enterprises across Maharashtra.',
      tags: ['Bootcamps', 'Corporate', 'Blender', 'Robotics'],
      color: 'rgba(150,100,255,.3)'
    },
    {
      image: '/images/nfc-card.jpeg',
      title: 'Smart Business Card Services',
      desc: 'NFC-enabled digital cards with real-time cloud analytics for seamless networking and corporate portfolio sharing.',
      tags: ['NFC', 'Networking', 'SaaS', 'Web App'],
      color: 'rgba(50,200,100,.3)'
    },
    {
      image: '/images/workshop/8.png',
      title: '3D Printing Solutions',
      desc: 'Rapid prototyping, high-precision structural enclosures, and functional parts using industrial-grade FDM and SLA technologies.',
      tags: ['FDM', 'SLA', 'Prototyping', 'CAD'],
      color: 'rgba(255,150,50,.3)'
    },
    {
      image: '/images/services/software_solutions.png',
      title: 'Software Solutions',
      desc: 'Custom software development for control systems, data management, and secure enterprise integration.',
      tags: ['SaaS', 'Cloud', 'Analytics', 'Dashboards'],
      color: 'rgba(50,200,255,.3)'
    },
    {
      image: '/images/services/slam_simulations.png',
      title: 'MATLAB & SLAM Simulations',
      desc: 'Advanced robotic navigation mapping, point cloud processing, and kinematic simulations using MATLAB and ROS.',
      tags: ['MATLAB', 'ROS', 'LiDAR', 'Simulation'],
      color: 'rgba(50,255,150,.3)'
    },
    {
      image: '/images/services/fea_simulations.png',
      title: 'FEA Simulation',
      desc: 'Finite Element Analysis for structural integrity, stress gradients, and thermal dynamics in mechanical CAD designs.',
      tags: ['FEA', 'SolidWorks', 'ANSYS', 'Mechanics'],
      color: 'rgba(255,50,150,.3)'
    }
  ];

  return (
    <AnimatedPage>
      <section style={{ background: 'var(--bg)', paddingTop: '120px' }}>
        <Reveal>
          <div className="sec-label">Our Services</div>
          <h2 className="sec-h" style={{ marginBottom: '2rem' }}>What We Do</h2>
          <p className="sec-desc" style={{ marginBottom: '4rem' }}>
            We craft engineering solutions from idea to deployment — blending hardware intelligence with software to build systems that perform.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem' }}>
          {services.map((srv, i) => (
            <Reveal key={i} delay={0.1 * i} direction="up" className="srv-card-wrapper">
              <motion.div
                whileHover={{ y: -8, borderColor: 'var(--border2)' }}
                style={{
                  borderRadius: 18,
                  border: '1px solid var(--border)',
                  background: 'var(--card)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'border-color 0.3s'
                }}
              >
                <div style={{
                  height: 200,
                  background: '#000',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} className="srv-media">
                  <motion.img
                    src={srv.image}
                    alt={srv.title}
                    className="srv-media-icon"
                    initial={{ scale: 1, opacity: 0.7 }}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s var(--ease), opacity .4s' }}
                  />
                  <div
                    className="srv-media-grad"
                    style={{
                      position: 'absolute', inset: 0, opacity: 0,
                      background: `radial-gradient(circle at 50% 100%, ${srv.color}, transparent)`,
                      transition: 'opacity 0.4s', pointerEvents: 'none'
                    }}
                  />
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-.01em' }}>
                    {srv.title}
                  </div>
                  <p style={{ fontSize: '.84rem', fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.65, flex: 1 }}>
                    {srv.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '.25rem', marginBottom: '1rem' }}>
                    {srv.tags.map((tag, j) => (
                      <span key={j} style={{
                        fontSize: '.64rem', letterSpacing: '.08em', padding: '3px 9px',
                        borderRadius: 999, border: '1px solid var(--border)', color: 'var(--muted)',
                        textTransform: 'uppercase'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex' }}>
                    {srv.title === '3D Printing Solutions' ? (
                      <a href="https://robosolution-3d-printing.vercel.app/" target="_blank" rel="noreferrer" className="srv-link">
                        Visit 3D Printing Website →
                      </a>
                    ) : srv.title === 'Technical Workshops' ? (
                      <a href="https://robosolution-workshop.vercel.app/" target="_blank" rel="noreferrer" className="srv-link">
                        Book a Workshop →
                      </a>
                    ) : (
                      <Link to={`/contact?type=Service&subject=${encodeURIComponent(srv.title)}`} className="srv-link">
                        Inquire About Service →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
      
      <style>{`
        .srv-card-wrapper:hover .srv-media-grad { opacity: 1 !important; }
        .srv-card-wrapper:hover .srv-media-icon { transform: scale(1.15) !important; opacity: 0.9 !important; }
        .srv-link { font-size: .75rem; font-weight: 500; color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 6px; padding: 6px 0; transition: opacity .2s; }
        .srv-link:hover { opacity: 0.7; }
      `}</style>
    </AnimatedPage>
  );
}
