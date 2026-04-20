import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../api/client';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);

    try {
      await api.submitContact(form);
      setSubmitted(true);
      toast.success('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      toast.error(error.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '14px 16px',
    background: 'var(--glass)',
    border: `1px solid ${errors[field] ? 'var(--error)' : 'var(--glass-border)'}`,
    borderRadius: 'var(--radius-md)',
    fontSize: '0.95rem',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: '0.3s',
  });

  return (
    <>
      <div className="page-header">
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Get in Touch</span>
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Have a project in mind? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
          }}
            className="contact-grid"
          >
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>
                Let&apos;s Work Together
              </h2>
              <p style={{
                color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 36,
              }}>
                Whether you need a full product built from scratch or want to improve
                an existing system, we&apos;re here to help turn your ideas into reality.
              </p>

              {[
                { icon: Mail, label: 'Email', value: 'info@cloudai.com' },
                { icon: Phone, label: 'Phone', value: '+251 911 123 456' },
                { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia' },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24,
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: 'rgba(108,92,231,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <item.icon size={22} color="#a29bfe" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 2 }}>
                      {item.label}
                    </p>
                    <p style={{ fontWeight: 500 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card"
                  style={{
                    padding: 48, textAlign: 'center',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                  }}
                >
                  <CheckCircle size={56} color="var(--success)" style={{ marginBottom: 20 }} />
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card" style={{ padding: 32 }}>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{
                      display: 'block', fontSize: '0.85rem', fontWeight: 600,
                      marginBottom: 8, color: 'var(--text-secondary)',
                    }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                      style={inputStyle('name')}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = errors.name ? 'var(--error)' : 'var(--glass-border)'}
                    />
                    {errors.name && <p style={{ color: 'var(--error)', fontSize: '0.8rem', marginTop: 6 }}>{errors.name}</p>}
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={{
                      display: 'block', fontSize: '0.85rem', fontWeight: 600,
                      marginBottom: 8, color: 'var(--text-secondary)',
                    }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                      style={inputStyle('email')}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = errors.email ? 'var(--error)' : 'var(--glass-border)'}
                    />
                    {errors.email && <p style={{ color: 'var(--error)', fontSize: '0.8rem', marginTop: 6 }}>{errors.email}</p>}
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{
                      display: 'block', fontSize: '0.85rem', fontWeight: 600,
                      marginBottom: 8, color: 'var(--text-secondary)',
                    }}>
                      Your Message
                    </label>
                    <textarea
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                      rows={5}
                      style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 120 }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = errors.message ? 'var(--error)' : 'var(--glass-border)'}
                    />
                    {errors.message && <p style={{ color: 'var(--error)', fontSize: '0.8rem', marginTop: 6 }}>{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                    style={{
                      width: '100%', padding: '14px',
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading ? 'Sending...' : <>Send Message <Send size={18} /></>}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .contact-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
