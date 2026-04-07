import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { id: '01', title: 'Aircraft Induction', icon: 'flight_land', desc: 'Full technical compliance for new fleet entries.', features: ['Technical Records Audit', 'Physical Inspection', 'Delivery Compliance'] },
    { id: '02', title: 'End of Lease', icon: 'history_edu', desc: 'Smooth handovers to lessors without surprises.', features: ['Redelivery Planning', 'Lease Analysis', 'Project Mgmt'] },
    { id: '03', title: 'Asset Integrity Audit', icon: 'fact_check', desc: 'Protecting your investment with 360° reviews.', features: ['Airworthiness Review', 'Maintenance Audit', 'Bridge Analysis'] }
  ];

  return (
    <div className="fade-in section-padding">
      <header style={{ marginBottom: '80px' }}>
        <span className="header-badge">Our Expertise</span>
        <h1>Solutions for <br/><span className="text-accent">Aviation Lifecycle.</span></h1>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {services.map((s, i) => (
          <div key={i} className="card-base" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <span style={{ fontWeight: '900', color: 'var(--accent)', opacity: 0.3 }}>{s.id}</span>
                <h2 style={{ margin: 0, fontSize: '2rem' }}>{s.title}</h2>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '25px' }}>{s.desc}</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {s.features.map((f, j) => <span key={j} style={{ background: '#f0f4ff', color: 'var(--accent)', padding: '6px 14px', borderRadius: '100px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>{f}</span>)}
              </div>
            </div>
            <Link to="/contact" className="btn-primary" style={{ padding: '14px 28px' }}>Discuss Project →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}