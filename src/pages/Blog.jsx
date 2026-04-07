import React, { useState, useEffect } from 'react';
import Backendless from 'backendless';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchPosts = async () => {
    try {
      // Ambil data blog terbaru
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
    // Cek apakah yang melihat halaman ini adalah Admin yang sedang login
    Backendless.UserService.getCurrentUser()
      .then(user => setCurrentUser(user))
      .catch(() => setCurrentUser(null));
  }, []);

  const handleDelete = async (objectId) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      try {
        await Backendless.Data.of('Blogs').remove({ objectId: objectId });
        alert("Artikel berhasil dihapus!");
        fetchPosts(); // Refresh daftar blog setelah hapus
      } catch (err) {
        alert("Gagal menghapus: " + err.message);
      }
    }
  };

  return (
    <div className="fade-in section-padding">
      <span className="header-badge">Industry Insights</span>
      <h1 style={{ marginBottom: '40px' }}>The Zaamera <span className="text-accent">Archive.</span></h1>
      
      {loading ? <h2>Syncing Archive...</h2> : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {posts.map((p) => (
            <div key={p.objectId} className="card-base" style={{ position: 'relative' }}>
              
              {/* Tombol Delete: Hanya muncul jika Admin sedang login */}
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
                    cursor: 'pointer'
                  }}
                >
                  DELETE
                </button>
              )}

              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase' }}>{p.category}</span>
              <h3 style={{ margin: '15px 0' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{p.excerpt}</p>
              
              <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid var(--border)', fontSize: '11px', fontWeight: '800' }}>
                BY {p.author?.toUpperCase() || 'ADMIN'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}