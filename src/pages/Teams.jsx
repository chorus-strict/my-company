import React, { useState, useEffect } from 'react';

export default function Teams() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6&nat=us,gb,de')
      .then(res => res.json())
      .then(data => { setTeam(data.results); setLoading(false); });
  }, []);

  return (
    <div className="fade-in section-padding">
      <header style={{ marginBottom: '60px' }}>
        <span className="header-badge">Meet the Collective</span>
        <h1>The Minds Behind <br/><span className="text-accent">The Monolith.</span></h1>
      </header>

      {loading ? <h2>Initializing Systems...</h2> : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {team.map((m, i) => (
            <div key={i} className="card-base" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <img src={m.picture.large} style={{ width: '80px', height: '80px', borderRadius: '16px', filter: 'grayscale(100%)' }} alt="Team" />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{m.name.first} {m.name.last}</h3>
                <p style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', marginTop: '5px' }}>Aviation Specialist</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '5px' }}>{m.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}