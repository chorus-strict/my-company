import React from 'react';

export default function AboutUs() {
  return (
    <div className="fade-in">
      <section className="section-padding" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        <div>
          <span className="header-badge">Our Philosophy</span>
          <h1>The Architectural <br/><span className="text-accent">Monolith.</span></h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '30px', lineHeight: '1.7' }}>
            Zaamera provides in-depth technical information to safeguard aircraft asset values through intentional geometry and aerospace precision.
          </p>
        </div>
        <div style={{ height: '400px', background: 'linear-gradient(135deg, var(--accent) 0%, #0a2d75 100%)', borderRadius: '40px 150px 40px 40px', boxShadow: '20px 20px 40px rgba(19,91,236,0.1)' }}></div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#f8faff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>The Strategic Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {[
            { name: 'Bagus', role: 'Founder & Lead Engineer', bio: '10+ years in aviation maintenance and integrity audits.' },
            { name: 'Sarah Vane', role: 'Airworthiness Consultant', bio: 'Specialist in international aviation regulations.' },
            { name: 'Julian Chen', role: 'Systems Architect', bio: 'Bridging aerospace precision with digital innovation.' }
          ].map((m, i) => (
            <div key={i} className="card-base">
              <span style={{ fontSize: '10px', fontWeight: '900', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>{m.role}</span>
              <h3 style={{ margin: '10px 0', fontSize: '1.8rem' }}>{m.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{m.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}