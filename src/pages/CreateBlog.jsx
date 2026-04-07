import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Backendless from 'backendless';

export default function CreateBlog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', category: 'Technical', content: '', excerpt: '', author: 'Bagus' });

  useEffect(() => {
    const checkLogin = async () => {
      const currentUser = await Backendless.UserService.getCurrentUser();
      if (!currentUser) navigate('/login');
    };
    checkLogin();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Backendless.Data.of('Blogs').save(formData);
      alert("Article successfully archived!");
      navigate('/blog');
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="fade-in section-padding">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
        <div>
          <span className="header-badge">System Entry</span>
          <h1>Draft New <br/><span className="text-accent">Perspective.</span></h1>
        </div>
        <form onSubmit={handleSubmit} className="card-base" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input 
            type="text" 
            placeholder="Article Title" 
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)' }} 
            required 
          />
          <input 
            type="text" 
            placeholder="Short Excerpt (Ringkasan)" 
            onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
            style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)' }} 
            required 
          />
          <select 
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)' }}
          >
            <option>Technical</option><option>Compliance</option><option>Innovation</option>
          </select>
          <textarea 
            rows="8" 
            placeholder="Begin analysis..." 
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', resize: 'none' }} 
            required 
          ></textarea>
          <button type="submit" className="btn-primary">Submit to Archive</button>
        </form>
      </div>
    </div>
  );
}