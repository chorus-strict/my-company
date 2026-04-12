import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Backendless from 'backendless';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await Backendless.Data.of('Blogs').findById(id);
        setPost(data);
      } catch (err) {
        console.error("Failed to fetch article:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="section-padding"><h2>Analyzing Data...</h2></div>;
  if (!post) return <div className="section-padding"><h2>Article Not Found.</h2></div>;

  return (
    <div className="fade-in section-padding">
      <button 
        onClick={() => navigate('/blog')}
        style={{ marginBottom: '30px', background: 'none', border: 'none', color: 'var(--accent)', fontWeight: '800', cursor: 'pointer', fontSize: '12px' }}
      >
        ← BACK TO ARCHIVE
      </button>

      <div style={{ maxWidth: '800px' }}>
        <span className="header-badge">{post.category}</span>
        <h1 style={{ marginBottom: '20px' }}>{post.title}</h1>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '40px', fontSize: '13px', color: 'var(--text-muted)' }}>
          <span style={{ fontWeight: '800', color: 'var(--text-main)' }}>BY {post.author?.toUpperCase() || 'ADMIN'}</span>
          <span>•</span>
          <span>{new Date(post.created).toLocaleDateString()}</span>
        </div>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333', whiteSpace: 'pre-wrap' }}>
          {post.content}
        </div>
      </div>
    </div>
  );
}