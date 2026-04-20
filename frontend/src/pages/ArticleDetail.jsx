import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { articles } from '../data/mockData';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="page-header" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="section-title">Article Not Found</h1>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: 24 }}>
            <ArrowLeft size={18} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('### ')) {
        return <h4 key={i} style={{ fontSize: '1.1rem', fontWeight: 700, margin: '24px 0 8px', color: 'var(--text-primary)' }}>{line.slice(4)}</h4>;
      }
      if (line.startsWith('## ')) {
        return <h3 key={i} style={{ fontSize: '1.3rem', fontWeight: 700, margin: '32px 0 12px', color: 'var(--text-primary)' }}>{line.slice(3)}</h3>;
      }
      if (line.startsWith('- ')) {
        return (
          <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, paddingLeft: 8 }}>
            <span style={{ color: 'var(--accent-light)' }}>-</span>
            <span style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{line.slice(2)}</span>
          </div>
        );
      }
      if (line.trim() === '') {
        return <div key={i} style={{ height: 12 }} />;
      }
      return <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 4, fontSize: '1rem' }}>{line}</p>;
    });
  };

  return (
    <>
      <div className="page-header" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ position: 'relative', maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 20,
              transition: '0.2s',
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              {article.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <h1 className="section-title" style={{ textAlign: 'left' }}>{article.title}</h1>
            <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
              <span style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.9rem', color: 'var(--text-muted)',
              }}>
                <User size={16} /> {article.author}
              </span>
              <span style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.9rem', color: 'var(--text-muted)',
              }}>
                <Clock size={16} /> {new Date(article.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '0 0 100px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card" style={{ overflow: 'hidden', marginBottom: 40 }}>
              <img
                src={article.cover_image}
                alt={article.title}
                style={{ width: '100%', height: 360, objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '0 20px' }}>
              {renderContent(article.content)}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
