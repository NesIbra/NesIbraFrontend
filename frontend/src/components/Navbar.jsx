import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/developers', label: 'Team' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
  });
  const location = useLocation();
  const isHome = location.pathname === '/';
  const showSolidBackground = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        background: showSolidBackground ? 'rgba(10, 10, 15, 0.88)' : 'transparent',
        backdropFilter: showSolidBackground ? 'blur(20px)' : 'none',
        borderBottom: showSolidBackground ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 72,
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: 'linear-gradient(135deg, #6c5ce7, #5a4bd1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)',
          }}>
            <Zap size={22} color="white" />
          </div>
          <span style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
            Cloud<span style={{ color: '#6c5ce7' }}>AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: location.pathname === link.path ? '#a29bfe' : '#a0a0b8',
                  transition: '0.2s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => e.target.style.color = '#f0f0f5'}
                onMouseLeave={(e) => e.target.style.color = location.pathname === link.path ? '#a29bfe' : '#a0a0b8'}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: '#6c5ce7',
                      borderRadius: 1,
                    }}
                  />
                )}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
              Hire Us
            </Link>
          </div>
        )}

        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            style={{
              padding: 8,
              borderRadius: 10,
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--text-primary)',
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            style={{
              overflow: 'hidden',
              background: 'rgba(10, 10, 15, 0.98)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '16px 0',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  style={{
                    display: 'block',
                    padding: '14px 24px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: location.pathname === link.path ? '#a29bfe' : '#a0a0b8',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div style={{ padding: '8px 24px' }}>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
                Hire Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
