import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Backendless from 'backendless';
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Teams from './pages/Teams';
import Blog from './pages/Blog';
import Login from './pages/Login';
import CreateBlog from './pages/CreateBlog';

import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Fungsi untuk sinkronisasi status user antara Backendless dan React State
  const checkUser = async () => {
    try {
      const currentUser = await Backendless.UserService.getCurrentUser();
      setUser(currentUser);
    } catch (err) {
      setUser(null);
    }
  };

  // Cek user saat aplikasi pertama kali dibuka
  useEffect(() => {
    checkUser();
  }, []);

  const handleLogout = async () => {
    try {
      await Backendless.UserService.logout();
      setUser(null);
      window.location.href = "#"; 
    } catch (err) {
      alert("Logout gagal: " + err.message);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className={`app-container ${isMenuOpen ? 'menu-active' : ''}`}>
        <nav className="navbar">
          <Link to="/" className="nav-logo" onClick={closeMenu}>Zaamera</Link>
          
          <div className={`hamburger ${isMenuOpen ? 'is-active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="line"></span><span className="line"></span><span className="line"></span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
            <NavLink to="/aboutus" onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/teams" onClick={closeMenu}>Teams</NavLink>
            <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
            
            {user ? (
              <>
                <NavLink to="/create-blog" onClick={closeMenu} style={{color: 'var(--accent)', fontWeight: '800'}}>+ POST</NavLink>
                <button onClick={handleLogout} className="logout-btn">SIGN OUT</button>
              </>
            ) : (
              <NavLink to="/login" onClick={closeMenu}>ADMIN</NavLink>
            )}
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/blog" element={<Blog />} />
            {/* Mengirim fungsi checkUser sebagai prop ke Login.jsx */}
            <Route path="/login" element={<Login onLoginSuccess={checkUser} />} />
            <Route path="/create-blog" element={<CreateBlog />} />
          </Routes>
        </main>

        <footer className="global-footer">
          <p>Tech enthusiast & engineer. Based in Indonesia.</p>
          <p>© 2026 Crafted by Bagus.</p>
        </footer>
      </div>
      <SpeedInsights />
    </Router>
  );
}

export default App;