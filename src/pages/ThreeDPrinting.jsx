import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, Settings, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import Reveal from '../components/Reveal';

function ProductCard({ product, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (product.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="product-card"
    >
      <a href={`https://robosolution-3d-printing.vercel.app/contact?product=${product.id}`} target="_blank" rel="noreferrer" className="product-card-link">
        <div className="product-img-wrap">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute', inset: 0 }}
            >
              {(() => {
                const imgPath = product.images[currentImageIndex];
                // Images that have true alpha transparency (no background)
                const alphaImages = ['6.PNG', '7.1.PNG', '7.PNG', '8.1.PNG', '8.2.PNG'];
                const hasAlpha = alphaImages.some(a => imgPath.endsWith(a));
                
                return (
                  <>
                    {!hasAlpha && (
                      <div 
                        style={{ 
                          position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', background: '#000' 
                        }}
                      >
                        <img
                          src={imgPath}
                          alt=""
                          style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'blur(80px) saturate(1.5)',
                            transform: 'scale(2.5)',
                            opacity: 0.85
                          }}
                        />
                      </div>
                    )}
                    <img
                      src={imgPath}
                      alt={product.name}
                      className="product-img"
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
          <div className="product-img-overlay"></div>
          
          {product.images.length > 1 && (
            <div className="product-dots">
              {product.images.map((_, i) => (
                <div 
                  key={i} 
                  className={`product-dot ${i === currentImageIndex ? 'active' : ''}`} 
                />
              ))}
            </div>
          )}
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="product-cta">Customize Order →</div>
        </div>
      </a>
    </motion.div>
  );
}

export default function ThreeDPrinting() {
  const products = [
    {
      id: "desk-name-plate",
      name: "Desk Name Plate",
      description: "Personalized single color or multi-color desk plates.",
      images: ["/images/3dprint/2.png", "/images/3dprint/2.1.png", "/images/3dprint/2.3.png"],
    },
    {
      id: "keychains",
      name: "3D Printed Keychains",
      description: "Custom keychains with your name, logo, or design.",
      images: ["/images/3dprint/3.png", "/images/3dprint/3.1.png"],
    },
    {
      id: "geometric-planter",
      name: "Geometric Planter",
      description: "Modern, low-poly and geometric planters for your desk or home.",
      images: ["/images/3dprint/4.png"],
    },
    {
      id: "cable-clip",
      name: "Under-Desk Cable Clip",
      description: "Keep your workspace tidy with custom cable management solutions.",
      images: ["/images/3dprint/5.png"],
    },
    {
      id: "fidget-toys",
      name: "Articulated Desk Toys / Fidgets",
      description: "Print-in-place articulated dragons, animals, and fidget toys.",
      images: ["/images/3dprint/6.PNG"],
    },
    {
      id: "custom-enclosures",
      name: "Custom Enclosures",
      description: "Fitted cases and enclosures for IoT projects and electronics.",
      images: ["/images/3dprint/7.PNG", "/images/3dprint/7.1.PNG"],
    },
    {
      id: "custom-designs",
      name: "Custom Designs & Ideas",
      description: "Have a unique idea? We can model and print it for you.",
      images: ["/images/3dprint/8.png", "/images/3dprint/8.1.PNG", "/images/3dprint/8.2.PNG"],
    },
    {
      id: "custom-logos",
      name: "Custom Logos",
      description: "Turn your company or brand logo into a physical 3D printed sign.",
      images: ["/images/3dprint/10.png"],
    }
  ];

  return (
    <AnimatedPage>
      <section style={{ background: 'var(--bg2)', paddingTop: '120px', paddingBottom: '120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1.5rem,4vw,3.5rem)' }}>
          <Reveal>
            <div className="sec-label">3D Printing Services</div>
            <h2 className="sec-h" style={{ marginBottom: '1rem' }}>Bring your ideas to life.</h2>
            <p style={{ color: 'var(--muted2)', maxWidth: '600px', marginBottom: '4rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
              From rapid prototyping to custom desk accessories, we offer high-quality FDM 3D printing services tailored to your needs.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: '5rem', marginBottom: '4rem', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--white)', marginBottom: '3rem' }}>
                How It <span style={{ color: 'var(--accent)' }}>Works</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {[
                  { icon: <UploadCloud size={36} color="var(--accent)" />, title: "Upload Your Design", desc: "Submit your STL, OBJ, or STEP files through our secure contact form, along with your specifications." },
                  { icon: <Settings size={36} color="var(--white)" />, title: "Expert Consultation", desc: "Our engineers review your files, recommend the best materials, and provide a transparent quote." },
                  { icon: <Truck size={36} color="var(--accent)" />, title: "Print & Deliver", desc: "We bring your idea to life using high-quality 3D printers and ship it directly to your doorstep." }
                ].map((step, index) => (
                  <div key={index} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '20px', padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                      {step.icon}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-h)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--white)' }}>{step.title}</h3>
                    <p style={{ color: 'var(--muted2)', lineHeight: 1.6, fontSize: '0.95rem' }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <Reveal>
            <div style={{ marginTop: '6rem', padding: '4rem 0', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div className="sec-label">Custom Orders</div>
                <h2 className="sec-h">Need a Custom<br/><em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Quotation?</em></h2>
                <p style={{ color: 'var(--muted2)', maxWidth: '500px', lineHeight: 1.6, marginTop: '1.5rem' }}>
                  Have a specific CAD model, a large batch order, or a unique idea? Get a direct quotation and consultation from our printing experts.
                </p>
              </div>
              <a href="https://robosolution-3d-printing.vercel.app/" target="_blank" rel="noreferrer" className="hero-btn-prim" style={{ textDecoration: 'none' }}>Get a Quotation →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; }
        .product-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; transition: border-color 0.3s; display: flex; flex-direction: column; }
        .product-card:hover { border-color: var(--border2); }
        .product-card-link { text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%; }
        .product-img-wrap { position: relative; aspect-ratio: 4/3; overflow: hidden; background: #000; }
        .product-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.9; }
        .product-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(14,14,20,1) 0%, transparent 40%); z-index: 5; pointer-events: none; }
        .product-dots { position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 6px; z-index: 10; }
        .product-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.3); transition: background 0.3s; }
        .product-dot.active { background: var(--accent); }
        .product-info { padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; }
        .product-info h3 { font-family: var(--font-h); font-weight: 700; font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--white); }
        .product-info p { font-size: 0.9rem; color: var(--muted2); line-height: 1.6; margin-bottom: 1.5rem; flex-grow: 1; }
        .product-cta { font-size: 0.85rem; font-weight: 600; color: var(--accent); display: flex; align-items: center; gap: 8px; margin-top: auto; transition: opacity 0.3s; opacity: 0.8; }
        .product-card:hover .product-cta { opacity: 1; }
      `}</style>
    </AnimatedPage>
  );
}