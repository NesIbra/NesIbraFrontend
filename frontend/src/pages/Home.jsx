import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Code, Smartphone, Brain, Cloud, Shield, BarChart3,
  CheckCircle, Zap, Users, Rocket
} from 'lucide-react';
import { projects, services, developers } from '../data/mockData';

const iconMap = { Code, Smartphone, Brain, Cloud, Shield, BarChart3 };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
  }),
};

const stats = [
  { icon: Rocket, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Zap, value: '6+', label: 'Team Members' },
  { icon: CheckCircle, value: '99%', label: 'Client Satisfaction' },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 0 80px',
      }}>
        {/* Background effects */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(108,92,231,0.15) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', top: '10%', right: '10%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108,92,231,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', left: '5%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,206,201,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 720 }}>
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
            >
              <span className="section-label">
                <Zap size={16} /> Welcome to CloudAI
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
                letterSpacing: '-1px',
              }}
            >
              We Build{' '}
              <span style={{
                background: 'linear-gradient(135deg, #6c5ce7, #a29bfe, #00cec9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Digital Products
              </span>
              <br />
              That Matter
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: 36,
                maxWidth: 560,
              }}
            >
              From AI-powered platforms to cloud infrastructure — we craft innovative
              solutions that help startups and enterprises scale and succeed.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
            >
              <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 24,
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card"
                style={{ padding: 28, textAlign: 'center' }}
              >
                <stat.icon size={28} color="#6c5ce7" style={{ marginBottom: 12 }} />
                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 4 }}>{stat.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 60 }}
          >
            <span className="section-label">What We Do</span>
            <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Our Services</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We deliver end-to-end technology solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid-3">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card"
                  style={{ padding: 32 }}
                >
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: 'rgba(108, 92, 231, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <Icon size={24} color="#a29bfe" />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10 }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}
          >
            <div>
              <span className="section-label">Our Portfolio</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">Selected works that showcase our expertise and innovation.</p>
            </div>
            <Link to="/projects" className="btn btn-secondary">
              View All <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid-3">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link to={`/projects/${project.id}`} className="glass-card" style={{
                  display: 'block',
                  overflow: 'hidden',
                  height: '100%',
                }}>
                  <div style={{
                    height: 200,
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <img
                      src={project.image_url}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: '0.5s',
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                    }}>
                      <span className="tag">{project.category}</span>
                    </div>
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>
                      {project.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      marginBottom: 16,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {project.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {project.tech_stack.slice(0, 3).map((tech) => (
                        <span key={tech} style={{
                          padding: '3px 10px',
                          fontSize: '0.72rem',
                          borderRadius: 6,
                          background: 'rgba(255,255,255,0.05)',
                          color: 'var(--text-muted)',
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
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{
              padding: 'clamp(40px, 6vw, 80px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(108,92,231,0.1) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              marginBottom: 16,
              position: 'relative',
            }}>
              Ready to Build Something{' '}
              <span style={{ color: 'var(--accent-light)' }}>Amazing</span>?
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              maxWidth: 500,
              margin: '0 auto 32px',
              lineHeight: 1.7,
              position: 'relative',
            }}>
              Let&apos;s discuss your next project and turn your vision into reality.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link to="/developers" className="btn btn-secondary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
                Meet the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
