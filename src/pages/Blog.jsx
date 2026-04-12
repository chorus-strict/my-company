import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Backendless from 'backendless';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchPosts = async () => {
    try {
      const data = await Backendless.Data.of('Blogs').find({
        options: { sortBy: ['created DESC'] } 
      });
      setPosts(data);
    } catch (err) {
      console.error("Gagal mengambil blog:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    Backendless.UserService.getCurrentUser()
      .then(user => setCurrentUser(user))
      .catch(() => setCurrentUser(null));
  }, []);

  const handleDelete = async (objectId) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      try {
        await Backendless.Data.of('Blogs').remove({ objectId: objectId });
        alert("Artikel berhasil dihapus!");
        fetchPosts();
      } catch (err) {
        alert("Gagal menghapus: " + err.message);
      }
    }
  };

  return (
    <div className="fade-in section-padding">
      <header style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <span className="header-badge">Archive & Insights</span>
          <h1>Engineering <br/><span className="text-accent">Perspectives.</span></h1>
        </div>
        <p style={{ maxWidth: '400px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Explore our latest technical audits, compliance updates, and aerospace innovations from the Zaamera laboratory.
        </p>
      </header>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2 style={{ color: 'var(--accent)' }}>Synchronizing Database...</h2>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {posts.map((p) => (
            <div key={p.objectId} className="card-base" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
              
              {currentUser && (
                <button 
                  onClick={() => handleDelete(p.objectId)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#ff4d4d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '5px 10px',
                    fontSize: '10px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    zIndex: 2
                  }}
                >
                  DELETE
                </button>
              )}

              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase' }}>{p.category}</span>
              
              <Link to={`/blog/${p.objectId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ margin: '15px 0', cursor: 'pointer' }}>{p.title}</h3>
              </Link>
              
              <p style={{ color: 'var(--text-muted)', flexGrow: 1, marginBottom: '20px' }}>{p.excerpt}</p>
              
              <div style={{ marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: '800' }}>BY {p.author?.toUpperCase() || 'ADMIN'}</span>
                
                <Link to={`/blog/${p.objectId}`} style={{ fontSize: '11px', fontWeight: '800', color: 'var(--accent)', textDecoration: 'none' }}>
                  READ ANALYSIS →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {posts.length === 0 && !loading && (
        <div style={{ textAlign: 'center', padding: '100px 0', border: '2px dashed #eee', borderRadius: '20px' }}>
          <p style={{ color: 'var(--text-muted)' }}>No articles found in the archive.</p>
        </div>
      )}
    </div>
  );
}