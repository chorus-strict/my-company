import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="fade-in">
      <section className="hero-section" style={{ display: 'flex', alignItems: 'center', minHeight: '90vh', padding: '0 8%', gap: '50px', background: 'linear-gradient(135deg, #fff 0%, #f4f7ff 100%)' }}>
        <div style={{ flex: 1.2 }}>
          <span className="header-badge">Architecting Aviation Integrity</span>
          <h1>Precision in <span className="text-accent">Transition</span>. <br />Command in Aviation.</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', margin: '30px 0 40px 0', maxWidth: '550px' }}>
            Zaamera bridges the gap between complex technical operations and strategic efficiency for world-class fleet management.
          </p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link to="/services" className="btn-primary">Explore Services</Link>
            <Link to="/aboutus" style={{ fontWeight: '800', color: 'var(--text-main)', textDecoration: 'none' }}>Our Story →</Link>
          </div>
        </div>
        <div className="hero-image-container" style={{ flex: 0.8 }}>
          <img src="/buntut.webp" alt="Aviation" style={{ width: '100%', borderRadius: '60px 20px 100px 20px', filter: 'grayscale(100%) contrast(1.1)', boxShadow: '20px 20px 60px rgba(0,0,0,0.05)' }} />
        </div>
      </section>

      <section className="section-padding" style={{ textAlign: 'center' }}>
        <h2 style={{ maxWidth: '800px', margin: '0 auto 60px auto' }}>Zero-Error Mindset in Every Asset Audit.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            { title: 'Aircraft Induction', icon: 'flight_land', desc: 'Seamless integration of new fleet assets.' },
            { title: 'End of Lease', icon: 'history_edu', desc: 'Managing returns to minimize penalty costs.' },
            { title: 'Technical Audit', icon: 'fact_check', desc: 'Preserving airworthiness and market value.' }
          ].map((item, i) => (
            <div key={i} className="card-base" style={{ textAlign: 'left' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--accent)', marginBottom: '20px', display: 'block' }}>{item.icon}</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '15px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}