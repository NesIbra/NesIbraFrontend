import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { projects } from '../data/mockData';

export default function Projects() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tech_stack.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <>
      <div className="page-header">
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Our Portfolio</span>
            <h1 className="section-title">Our Projects</h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Explore our diverse portfolio of innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'flex',
              gap: 16,
              marginBottom: 40,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <div style={{
              flex: 1,
              minWidth: 240,
              position: 'relative',
            }}>
              <Search size={18} style={{
                position: 'absolute',
                left: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }} />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 44px',
                  background: 'var(--glass)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: '0.3s',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    borderRadius: 'var(--radius-md)',
                    background: activeCategory === cat
                      ? 'linear-gradient(135deg, var(--accent), var(--accent-dark))'
                      : 'var(--glass)',
                    border: `1px solid ${activeCategory === cat ? 'transparent' : 'var(--glass-border)'}`,
                    color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                    transition: '0.3s',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project Grid */}
          <div className="grid-3">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                layout
              >
                <Link to={`/projects/${project.id}`} className="glass-card" style={{
                  display: 'block',
                  overflow: 'hidden',
                  height: '100%',
                }}>
                  <div style={{ height: 200, overflow: 'hidden' }}>
                    <img
                      src={project.image_url}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        transition: '0.5s',
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <span className="tag">{project.category}</span>
                      {project.featured && (
                        <span style={{ fontSize: '0.72rem', color: 'var(--success)', fontWeight: 600 }}>
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>
                      {project.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6,
                      marginBottom: 16,
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>
                      {project.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {project.tech_stack.map((tech) => (
                        <span key={tech} style={{
                          padding: '3px 10px', fontSize: '0.72rem', borderRadius: 6,
                          background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)',
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center', padding: '60px 20px',
                color: 'var(--text-muted)',
              }}
            >
              <Filter size={48} style={{ marginBottom: 16, opacity: 0.3 }} />
              <p style={{ fontSize: '1.1rem' }}>No projects match your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
