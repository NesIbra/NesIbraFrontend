import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import { articles } from '../data/mockData';

export default function Blog() {
  return (
    <>
      <div className="page-header">
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Insights & Ideas</span>
            <h1 className="section-title">Our Blog</h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Thoughts, tutorials, and insights from our team.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div className="grid-3">
            {articles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link to={`/blog/${article.id}`} className="glass-card" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  height: '100%',
                }}>
                  <div style={{ height: 200, overflow: 'hidden' }}>
                    <img
                      src={article.cover_image}
                      alt={article.title}
                      loading="lazy"
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        transition: '0.5s',
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                      {article.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <h3 style={{
                      fontSize: '1.1rem', fontWeight: 700, marginBottom: 8, lineHeight: 1.4,
                    }}>
                      {article.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6,
                      marginBottom: 16, flex: 1,
                      display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>
                      {article.excerpt}
                    </p>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      paddingTop: 16, borderTop: '1px solid var(--glass-border)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <span style={{
                          display: 'flex', alignItems: 'center', gap: 6,
                          fontSize: '0.8rem', color: 'var(--text-muted)',
                        }}>
                          <User size={14} /> {article.author}
                        </span>
                        <span style={{
                          display: 'flex', alignItems: 'center', gap: 6,
                          fontSize: '0.8rem', color: 'var(--text-muted)',
                        }}>
                          <Clock size={14} /> {new Date(article.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <ArrowRight size={16} color="var(--accent-light)" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
