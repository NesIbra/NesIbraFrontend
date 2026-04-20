import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Link2, MessageCircle, Palette, ExternalLink } from 'lucide-react';
import { api } from '../api/client';

const socialIcons = {
  github: Globe,
  linkedin: Link2,
  twitter: MessageCircle,
  dribbble: Palette,
  behance: ExternalLink,
};

export default function Developers() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    api.getDevelopers()
      .then((data) => {
        if (!active) return;
        setDevelopers(data);
      })
      .catch((error) => {
        console.error('Failed to load developers:', error);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Our People</span>
            <h1 className="section-title">Meet the Team</h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Talented individuals who make the magic happen every day.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          {loading && (
            <div className="glass-card" style={{ padding: 32, textAlign: 'center', color: 'var(--text-secondary)' }}>
              Loading team members...
            </div>
          )}

          {!loading && (
            <div className="grid-3">
              {developers.map((dev, i) => (
                <motion.div
                  key={dev.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card"
                  style={{ overflow: 'hidden', textAlign: 'center' }}
                >
                  <div style={{
                    position: 'relative',
                    height: 200,
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(108,92,231,0.2), rgba(0,206,201,0.1))',
                  }}>
                    <img
                      src={dev.image_url}
                      alt={dev.name}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: '0.5s',
                      }}
                    />
                  </div>
                  <div style={{ padding: '24px 24px 28px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 4 }}>
                      {dev.name}
                    </h3>
                    <p style={{
                      color: 'var(--accent-light)',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      marginBottom: 12,
                    }}>
                      {dev.role}
                    </p>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}>
                      {dev.bio}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, marginBottom: 16 }}>
                      {dev.skills.map((skill) => (
                        <span key={skill} style={{
                          padding: '3px 10px',
                          fontSize: '0.72rem',
                          borderRadius: 6,
                          background: 'rgba(255,255,255,0.05)',
                          color: 'var(--text-muted)',
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
                      {Object.entries(dev.social_links || {}).map(([platform, url]) => {
                        const Icon = socialIcons[platform] || Globe;
                        return (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              width: 34,
                              height: 34,
                              borderRadius: 8,
                              background: 'var(--glass)',
                              border: '1px solid var(--glass-border)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: '0.3s',
                              color: 'var(--text-muted)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'var(--accent)';
                              e.currentTarget.style.borderColor = 'var(--accent)';
                              e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'var(--glass)';
                              e.currentTarget.style.borderColor = 'var(--glass-border)';
                              e.currentTarget.style.color = 'var(--text-muted)';
                            }}
                          >
                            <Icon size={15} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && developers.length === 0 && (
            <div className="glass-card" style={{ padding: 32, textAlign: 'center', color: 'var(--text-secondary)' }}>
              No team members are available yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
