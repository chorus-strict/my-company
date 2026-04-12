import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Backendless from 'backendless';
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Teams from './pages/Teams';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail'; // Pastikan file ini sudah dibuat
import Login from './pages/Login';
import CreateBlog from './pages/CreateBlog';

import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    try {
      const currentUser = await Backendless.UserService.getCurrentUser();
      setUser(currentUser);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleLogout = async () => {
    try {
      await Backendless.UserService.logout();
      setUser(null);
      window.location.href = "/"; 
    } catch (err) {
      alert("Logout gagal: " + err.message);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className="app-container">
        <SpeedInsights />
        <nav className="navbar">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            ZAAMERA<span className="text-accent">.</span>
          </Link>

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
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
            <Route path="/blog/:id" element={<BlogDetail />} /> 
            <Route path="/login" element={<Login onLoginSuccess={checkUser} />} />
            <Route path="/create-blog" element={<CreateBlog />} />
          </Routes>
        </main>

        <footer className="global-footer">
          <p>Tech enthusiast & engineer. Based in Indonesia.</p>
          <p>© 2026 Crafted by Bagus.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;