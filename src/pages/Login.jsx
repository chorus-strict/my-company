import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Backendless from 'backendless';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Lakukan proses login ke Backendless
      await Backendless.UserService.login(email, password, true);
      
      // 2. Pemicu agar Navbar di App.jsx langsung berubah (Sign Out muncul)
      if (onLoginSuccess) {
        await onLoginSuccess();
      }
      
      // 3. Pindah ke halaman dashboard blog
      navigate('/create-blog');
    } catch (err) {
      alert("Login Gagal: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fade-in section-padding" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card-base" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <span className="header-badge">Admin Access</span>
        <h2 style={{ marginBottom: '30px' }}>Authentication</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', fontSize: '14px' }} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', fontSize: '14px' }} 
            required 
          />
          <button type="submit" className="btn-primary" disabled={loading} style={{ marginTop: '10px' }}>
            {loading ? "Authorizing..." : "Authorize Access"}
          </button>
        </form>
      </div>
    </div>
  );
}