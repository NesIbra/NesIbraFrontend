import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/mockData';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page-header" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="section-title">Project Not Found</h1>
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: 24 }}>
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-header" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 20,
              transition: '0.2s',
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>
            <span className="tag" style={{ display: 'inline-block', marginBottom: 16 }}>
              {project.category}
            </span>
            <h1 className="section-title">{project.title}</h1>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card" style={{ overflow: 'hidden', marginBottom: 40 }}>
              <img
                src={project.image_url}
                alt={project.title}
                style={{ width: '100%', height: 400, objectFit: 'cover' }}
              />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 320px',
              gap: 40,
            }}
              className="project-detail-grid"
            >
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 16 }}>About the Project</h2>
                <p style={{
                  color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8,
                }}>
                  {project.description}
                </p>
              </div>

              <div>
                <div className="glass-card" style={{ padding: 28 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>Tech Stack</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {project.tech_stack.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>

                  <div style={{
                    marginTop: 28,
                    paddingTop: 28,
                    borderTop: '1px solid var(--glass-border)',
                  }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>Category</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <style>{`
            @media (max-width: 768px) {
              .project-detail-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
