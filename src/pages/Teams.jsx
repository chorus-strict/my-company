import React, { useState, useEffect } from 'react';

export default function Teams() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  // Daftar role fiktif agar tidak semua "Aviation Specialist"
  const roles = [
    "Aerodynamics Engineer", "Safety Compliance Officer", 
    "Structural Analyst", "Avionics Technician", 
    "Materials Scientist", "Propulsion Expert"
  ];

  // Bio singkat fiktif
  const bios = [
    "Specializing in high-stress fluid dynamics and wing geometry optimization.",
    "Ensuring every technical workflow meets FAA and EASA global safety standards.",
    "Expert in composite material fatigue and long-term asset durability.",
    "Focused on next-generation cockpit integration and sensor accuracy.",
    "Researches advanced alloys to reduce aircraft weight while increasing strength.",
    "Optimizing fuel efficiency through advanced thermodynamic modeling."
  ];

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6&nat=us,gb,de')
      .then(res => res.json())
      .then(data => { 
        // Tambahkan role dan bio secara acak ke data dari API
        const enhancedData = data.results.map((user, index) => ({
          ...user,
          role: roles[index],
          bio: bios[index]
        }));
        setTeam(enhancedData); 
        setLoading(false); 
      });
  }, []);

  return (
    <div className="fade-in">
      {/* HEADER SECTION */}
      <section className="section-padding" style={{ paddingBottom: '20px' }}>
        <div style={{ maxWidth: '800px' }}>
          <span className="header-badge">Meet the Collective</span>
          <h1>The Minds Behind <br/><span className="text-accent">The Monolith.</span></h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '20px', lineHeight: '1.6' }}>
            Our team consists of world-class engineers, data scientists, and aviation consultants dedicated to pushing the boundaries of aerospace precision and safety.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="section-padding" style={{ paddingTop: '40px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <h2 className="fade-in" style={{ color: 'var(--accent)' }}>Initializing Systems...</h2>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
            {team.map((m, i) => (
              <div key={i} className="card-base" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '20px', 
                border: '1px solid #eee',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <img 
                    src={m.picture.large} 
                    style={{ 
                      width: '90px', 
                      height: '90px', 
                      borderRadius: '20px', 
                      filter: 'grayscale(100%) contrast(1.1)',
                      objectFit: 'cover'
                    }} 
                    alt="Team member" 
                  />
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{m.name.first} {m.name.last}</h3>
                    <p style={{ 
                      color: 'var(--accent)', 
                      fontWeight: '800', 
                      fontSize: '11px', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1px',
                      marginTop: '5px' 
                    }}>
                      {m.role}
                    </p>
                  </div>
                </div>
                
                <hr style={{ border: 'none', borderTop: '1px solid #f0f0f0', margin: '0' }} />
                
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '15px' }}>
                    "{m.bio}"
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: '600' }}>{m.email}</span>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ fontSize: '14px', cursor: 'pointer' }}>🗎</span>
                      <span style={{ fontSize: '14px', cursor: 'pointer' }}>✉</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA SECTION (TAMBAHAN BIAR GAK KOSONG DI BAWAH) */}
      <section className="section-padding" style={{ textAlign: 'center', backgroundColor: '#f8faff', marginTop: '60px' }}>
        <h3>Want to join the mission?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>We're always looking for talented engineers and dreamers.</p>
        <button style={{ 
          padding: '12px 30px', 
          backgroundColor: 'var(--accent)', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>View Careers</button>
      </section>
    </div>
  );
}