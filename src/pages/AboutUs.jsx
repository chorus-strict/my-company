import React from 'react';

export default function AboutUs() {
  return (
    <div className="fade-in">
      {/* HERO SECTION */}
      <section className="section-padding" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        <div>
          <span className="header-badge">Our Philosophy</span>
          <h1>The Architectural <br/><span className="text-accent">Monolith.</span></h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '30px', lineHeight: '1.7' }}>
            Zaamera provides in-depth technical information to safeguard aircraft asset values through intentional geometry and aerospace precision.
          </p>
          
          <div style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
            <div>
              <h2 style={{ color: 'var(--accent)', marginBottom: '0' }}>500+</h2>
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Assets Monitored</p>
            </div>
            <div>
              <h2 style={{ color: 'var(--accent)', marginBottom: '0' }}>12</h2>
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Partners</p>
            </div>
          </div>
        </div>
        <div style={{ height: '400px', background: 'linear-gradient(135deg, var(--accent) 0%, #0a2d75 100%)', borderRadius: '40px 150px 40px 40px', boxShadow: '20px 20px 40px rgba(19,91,236,0.1)' }}></div>
      </section>

      {/* STORY & MILESTONES SECTION */}
      <section className="section-padding" style={{ borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="header-badge">Our Journey</span>
          <h2 style={{ marginBottom: '30px' }}>Founding Story & Milestones</h2>
          <p style={{ marginBottom: '40px', lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Established in 2014, Zaamera began in a modest workshop in Jakarta with a vision to revolutionize aviation safety standards. From specialized technical audits, we have evolved into a leading aerospace consultancy firm serving the Southeast Asian region.
          </p>
          
          <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '30px', position: 'relative' }}>
            {[
              { year: '2014', title: 'The Takeoff', desc: 'Officially founded and achieved our first international audit certification.' },
              { year: '2018', title: 'Global Reach', desc: 'Expanded operations to Singapore, managing a portfolio of over 500 commercial jet assets.' },
              { year: '2026', title: 'Digital Innovation', desc: 'Launched our proprietary AI platform for real-time structural integrity monitoring.' }
            ].map((item, idx) => (
              <div key={idx} style={{ marginBottom: '40px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-38px', top: '5px', width: '13px', height: '13px', borderRadius: '50%', backgroundColor: 'var(--accent)', border: '4px solid white' }}></div>
                <h4 style={{ color: 'var(--accent)', marginBottom: '5px' }}>{item.year} — {item.title}</h4>
                <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#f8faff' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="header-badge">The Strategic Team</span>
          <h2>Meet The Experts</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {[
            { 
              name: 'Bagus', 
              role: 'Founder & Lead Engineer', 
              bio: 'The visionary behind Zaamera with over a decade of expertise in jet engine integrity maintenance.' 
            },
            { 
              name: 'Sarah Vane', 
              role: 'Airworthiness Consultant', 
              bio: 'Former aviation authority regulator ensuring all our solutions comply with global legal standards.' 
            },
            { 
              name: 'Julian Chen', 
              role: 'Systems Architect', 
              bio: 'Digital systems expert integrating physical security with future-ready artificial intelligence.' 
            }
          ].map((m, i) => (
            <div key={i} className="card-base" style={{ transition: 'transform 0.3s ease' }}>
              <span style={{ fontSize: '10px', fontWeight: '900', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>{m.role}</span>
              <h3 style={{ margin: '10px 0', fontSize: '1.8rem' }}>{m.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="header-badge">Workplace Culture</span>
            <h2 style={{ fontSize: '2.5rem' }}>How We Fly</h2>
            <p style={{ marginTop: '20px', color: 'var(--text-muted)' }}>We are not just a tech company; we are a community of engineers obsessed with detail.</p>
          </div>
          <div style={{ display: 'grid', gap: '40px' }}>
            {[
              { title: 'Precision First', desc: 'At Zaamera, the margin for error is zero. We value accuracy above all else.' },
              { title: 'Collaborative Growth', desc: 'We believe the best ideas can come from anyone, whether an intern or a senior engineer.' },
              { title: 'Radical Transparency', desc: 'Integrity in data is the ultimate key to maintaining lives in the air.' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.2rem' }}>0{idx + 1}</div>
                <div>
                  <h4 style={{ marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}