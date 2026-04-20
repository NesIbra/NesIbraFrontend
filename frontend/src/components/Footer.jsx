import { Link } from 'react-router-dom';
import { Zap, Globe, Link2, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'var(--bg-secondary)',
      padding: '60px 0 30px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 40,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #6c5ce7, #5a4bd1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Zap size={18} color="white" />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                Cloud<span style={{ color: '#6c5ce7' }}>AI</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 280 }}>
              Building the future with innovative technology solutions. We turn ideas into powerful digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 16, color: 'var(--text-primary)' }}>
              Quick Links
            </h4>
            {['Home', 'Projects', 'Team', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : item === 'Team' ? '/developers' : `/${item.toLowerCase()}`}
                style={{
                  display: 'block',
                  padding: '6px 0',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  transition: '0.2s',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-light)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 16, color: 'var(--text-primary)' }}>
              Services
            </h4>
            {['Web Development', 'Mobile Apps', 'AI & ML', 'Cloud Solutions', 'UI/UX Design'].map((item) => (
              <p key={item} style={{ padding: '6px 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {item}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 16, color: 'var(--text-primary)' }}>
              Get in Touch
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 8 }}>
              info@cloudai.com
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 16 }}>
              Addis Ababa, Ethiopia
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[Globe, Link2, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'var(--glass)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: '0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--glass)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} CloudAI. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Built with passion and innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
