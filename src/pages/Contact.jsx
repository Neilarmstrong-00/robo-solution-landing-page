import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import Reveal from '../components/Reveal';
import { ArrowRight } from '../components/Icons';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initType = searchParams.get('type') || "";
  const initSubject = searchParams.get('subject') || "";

  const [contactType, setContactType] = useState(initType);
  const [projectInterest, setProjectInterest] = useState(initType === 'Project' ? initSubject : "");
  const [serviceInterest, setServiceInterest] = useState(initType === 'Service' ? initSubject : "");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type) setContactType(type);
    const subject = params.get('subject');
    if (type === 'Project' && subject) setProjectInterest(subject);
    if (type === 'Service' && subject) setServiceInterest(subject);
  }, [location]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    formData.append("access_key", "a57c9ad6-b93e-4784-86c7-0b4d58dcb3f2");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setIsSent(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'What hardware platforms do you specialize in?',
      a: 'We primarily work with ESP32, ESP8266, Arduino, Raspberry Pi (3/4/5), STM32, and custom PCB designs. For industrial applications we also integrate with PLCs and SCADA systems. Selection is always based on your specific use case requirements.'
    },
    {
      q: 'Do you provide custom solutions for rural farming?',
      a: 'Absolutely — precision agriculture is one of our core domains. We design solar-powered sensor nodes, soil moisture monitoring, automated irrigation controllers, and pest/disease prediction systems using ML — all designed for low-connectivity environments with offline fallback.'
    },
    {
      q: 'What is the typical timeline for an IoT deployment?',
      a: 'A basic sensor network with dashboard typically takes 3–6 weeks from discovery to deployment. Complex custom UGV or highly scaled industrial deployments may take 2–4 months.'
    },
    {
      q: 'Can you train our internal team alongside the deployment?',
      a: "Yes — knowledge transfer is built into every project. We conduct hands-on workshops so your team can maintain and expand the system independently. We've trained 150+ engineers across Maharashtra."
    },
    {
      q: 'Do you offer post-deployment support?',
      a: 'Yes. We offer monthly retainer packages for remote monitoring, firmware updates, and system optimization. Our dashboards include anomaly alerts so issues are caught proactively before they become critical.'
    }
  ];

  return (
    <AnimatedPage>
      <section id="contact" style={{ background: 'var(--bg2)', paddingTop: '120px' }}>
        <div className="contact-wrap">
          <div className="contact-left">
            <Reveal direction="left">
              <div className="sec-label">Contact Us</div>
              <h2 className="sec-h" style={{ marginTop: '.5rem' }}>
                Let's Talk<br/><em style={{ fontStyle: 'normal', display: 'block', color: 'var(--muted)' }}>Your Next<br/>Project</em>
              </h2>
              <p style={{ fontSize: '.92rem', fontWeight: 300, color: 'var(--muted2)', lineHeight: 1.75, margin: '1.5rem 0 2.5rem' }}>
                Tell us about your challenge. Whether it's a smart farm, an industrial IoT rollout, or custom robotics — we want to hear it.
              </p>
              <div>
                <div className="c-info-row">
                  <div className="c-info-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div><div className="c-info-label">Location</div><div className="c-info-val">Maharashtra, India</div></div>
                </div>
                <div className="c-info-row">
                  <div className="c-info-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div className="c-info-label">Email</div>
                    <div className="c-info-val">robosolution.info@gmail.com</div>
                  </div>
                </div>
                <div className="c-info-row">
                  <div className="c-info-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  </div>
                  <div>
                    <div className="c-info-label">Phone</div>
                    <div className="c-info-val">+91 93074 74959</div>
                    <div className="c-info-val" style={{ marginTop: '4px' }}>+91 95187 81351</div>
                  </div>
                </div>
              </div>
              <div className="c-socials">
                <a href="https://robosolution-workshop.vercel.app/" target="_blank" rel="noreferrer" className="c-social" title="Workshop">🔗</a>
                <a href="#" className="c-social" title="LinkedIn">in</a>
                <a href="#" className="c-social" title="Instagram">ig</a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right">
            {isSent ? (
              <div className="c-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 2rem', minHeight: '100%' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem', background: 'rgba(232,255,71,.1)', width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-h)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--white)', letterSpacing: '-.02em' }}>Thank you!</h3>
                <p style={{ color: 'var(--muted2)', fontSize: '.95rem', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: 350 }}>
                  We have received your message and will get back to you within 24 hours.
                </p>
                <Link to="/" className="hero-btn-prim" style={{ width: '100%', maxWidth: '280px', justifyContent: 'center', height: '50px' }}>
                  Back to Home <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              <form className="c-form" onSubmit={handleSubmit}>
                <div className="c-form-title">Fill This Form Below</div>
              <div className="c-row">
                <div className="c-group">
                  <label className="c-label">Your Name</label>
                  <input name="name" className="c-input" type="text" placeholder="Prathamesh Ingale" required />
                </div>
                <div className="c-group">
                  <label className="c-label">Your Email</label>
                  <input name="email" className="c-input" type="email" placeholder="hello@company.com" required />
                </div>
              </div>
              <div className="c-group">
                <label className="c-label">Your Phone Number</label>
                <input name="phone" className="c-input" type="tel" placeholder="+91 95187 81351" required />
              </div>
              
              <div className="c-group">
                <label className="c-label">Inquiry Type</label>
                <select name="inquiry_type" className="c-select" value={contactType} onChange={(e) => setContactType(e.target.value)} required>
                  <option value="" disabled>Select Inquiry Type</option>
                  <option value="B2B">B2B / Enterprise Inquiry</option>
                  <option value="Project">Project Inquiry</option>
                  <option value="Service">Service Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <AnimatePresence>
                {contactType === "Project" && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="c-group" style={{ marginBottom: '1rem' }}>
                      <label className="c-label">Which Project are you interested in?</label>
                      <select name="project_interest" className="c-select" value={projectInterest} onChange={(e) => setProjectInterest(e.target.value)} required>
                        <option value="" disabled>Select a Project</option>
                        <option value="Vajra 2.1: Precision Agrochemical Spraying">Vajra 2.1 (Agriculture Rover)</option>
                        <option value="Hootie: Biomimetic IoT Companion Robot">Hootie (Companion Robot)</option>
                        <option value="Smart Business Card Platform">Smart Business Card (NFC)</option>
                        <option value="Smart Breathe — Adaptive Ventilator">Smart Breathe (Ventilator)</option>
                        <option value="Integrated Air Quality Monitoring System">Air Quality Monitor</option>
                        <option value="Hexapod Autonomous Terrain UGV">Hexapod UGV</option>
                        <option value="Custom Project">Custom Project</option>
                      </select>
                    </div>
                  </motion.div>
                )}
                
                {contactType === "Service" && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="c-group" style={{ marginBottom: '1rem' }}>
                      <label className="c-label">Which Service are you interested in?</label>
                      <select name="service_interest" className="c-select" value={serviceInterest} onChange={(e) => setServiceInterest(e.target.value)} required>
                        <option value="" disabled>Select a Service</option>
                        <option value="IoT & Automation">IoT & Automation</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="Custom Hardware Engineering">Custom Hardware Engineering</option>
                        <option value="Smart Business Card Services">Smart Business Card Services</option>
                        <option value="Software Solutions">Software Solutions</option>
                        <option value="MATLAB & SLAM Simulations">MATLAB & SLAM Simulations</option>
                        <option value="FEA Simulation">FEA Simulation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="c-group">
                <label className="c-label">More About The Project</label>
                <textarea name="message" className="c-textarea" placeholder="Describe your project, timeline, and any specific requirements…" required></textarea>
              </div>
              <button 
                className="c-submit" 
                type="submit" 
                style={{ background: isSent ? 'var(--accent)' : 'var(--white)' }}
              >
                <span>{isSubmitting ? 'Sending...' : isSent ? 'Message Sent! ✓' : 'Send Message <ArrowRight size={16} />'}</span>
              </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section id="faq" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <Reveal>
          <div className="sec-label">FAQs</div>
          <h2 className="sec-h">FAQs</h2>
        </Reveal>
        
        <div className="faq-wrap">
          <div className="faq-left">
            <Reveal direction="left">
              <p>Can't find your answer? Send us a message and we'll respond within 24 hours.</p>
              <button className="hero-btn-prim" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
                Contact Us <ArrowRight size={16} />
              </button>
            </Reveal>
          </div>
          <div className="faq-items">
            {faqs.map((faq, i) => {
              const isActive = activeFaq === i;
              return (
                <Reveal key={i} delay={i * 0.1} direction="up" className={`faq-item ${isActive ? 'on' : ''}`}>
                  <div className="faq-q" onClick={() => setActiveFaq(isActive ? null : i)}>
                    {faq.q} 
                    <motion.span 
                      className="faq-ico"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      style={{
                        borderColor: isActive ? 'var(--accent)' : 'var(--border2)',
                        color: isActive ? 'var(--accent)' : 'var(--muted2)',
                        background: isActive ? 'rgba(232,255,71,.07)' : 'transparent'
                      }}
                    >+</motion.span>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="faq-ans-inner">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .contact-wrap { display: grid; grid-template-columns: 1fr 1.3fr; gap: clamp(3rem,7vw,9rem); align-items: start; }
        .c-info-row { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; }
        .c-info-icon { width: 36px; height: 36px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); display: flex; align-items: center; justify-content: center; font-size: .85rem; flex-shrink: 0; }
        .c-info-label { font-size: .68rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); margin-bottom: .2rem; }
        .c-info-val { font-size: .88rem; font-weight: 400; color: var(--white); }
        .c-socials { display: flex; gap: .6rem; margin-top: 2.5rem; }
        .c-social { width: 38px; height: 38px; border-radius: 9px; border: 1px solid var(--border); background: var(--surface); display: flex; align-items: center; justify-content: center; font-size: .75rem; color: var(--muted2); transition: border-color .2s, color .2s, transform .2s; }
        .c-social:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
        
        .c-form { background: var(--surface); border: 1px solid var(--border); border-radius: 18px; padding: clamp(1.75rem,3vw,2.75rem); }
        .c-form-title { font-family: var(--font-h); font-size: .82rem; font-weight: 600; letter-spacing: .08em; color: var(--muted); text-transform: uppercase; margin-bottom: 1.75rem; }
        .c-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        .c-group { display: flex; flex-direction: column; gap: .45rem; margin-bottom: 1rem; }
        .c-group:last-of-type { margin-bottom: 0; }
        .c-label { font-size: .68rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); }
        .c-input, .c-select, .c-textarea { background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: 11px 14px; font-family: var(--font-b); font-size: .875rem; color: var(--white); outline: none; width: 100%; transition: border-color .2s, box-shadow .2s; appearance: none; -webkit-appearance: none; }
        .c-select { background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 6 0 0h10z' fill='rgba(244,244,246,.3)'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; }
        .c-input:focus, .c-select:focus, .c-textarea:focus { border-color: rgba(232,255,71,.4); box-shadow: 0 0 0 3px rgba(232,255,71,.05); }
        .c-input::placeholder, .c-textarea::placeholder { color: rgba(244,244,246,.22); }
        .c-textarea { resize: vertical; min-height: 110px; line-height: 1.6; }
        .c-submit { width: 100%; padding: 14px; border-radius: 10px; color: #09090b; font-family: var(--font-h); font-weight: 700; font-size: .88rem; letter-spacing: .04em; position: relative; overflow: hidden; transition: background .25s, transform .2s, box-shadow .2s; margin-top: 1rem; cursor: none; }
        .c-submit::after { content: ''; position: absolute; inset: 0; background: var(--accent); transform: translateY(101%); transition: transform .4s var(--ease); }
        .c-submit:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(232,255,71,.3); }
        .c-submit:hover::after { transform: translateY(0); }
        .c-submit span { position: relative; z-index: 1; }
        
        .faq-wrap { display: grid; grid-template-columns: 1fr 1.6fr; gap: clamp(3rem,7vw,9rem); align-items: start; margin-top: 3.5rem; }
        .faq-left { position: sticky; top: 120px; }
        .faq-left p { font-size: .92rem; font-weight: 300; color: var(--muted2); line-height: 1.75; margin-top: 1.25rem; margin-bottom: 2rem; }
        .faq-items { display: flex; flex-direction: column; gap: 0; }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-item:first-child { border-top: 1px solid var(--border); }
        .faq-q { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.4rem 0; font-size: clamp(.88rem,1.3vw,1rem); font-weight: 500; letter-spacing: -.01em; cursor: none; transition: color .2s; }
        .faq-item.on .faq-q { color: var(--accent); }
        .faq-ico { width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--border2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: .85rem; color: var(--muted2); transition: border-color .2s, color .2s, background .2s; }
        .faq-ans-inner { padding: 0 0 1.4rem; font-size: .88rem; font-weight: 300; color: var(--muted2); line-height: 1.75; }
        
        @media(max-width: 900px) { .contact-wrap { grid-template-columns: 1fr; } .c-row { grid-template-columns: 1fr; } .faq-wrap { grid-template-columns: 1fr; } .faq-left { position: static; } }
      `}</style>
    </AnimatedPage>
  );
}
