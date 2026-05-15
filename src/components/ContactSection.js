'use client'
import { useEffect, useRef, useState } from 'react'

export default function ContactSection() {
  const sectionRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" ref={sectionRef} style={{ padding: '140px 40px', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div
              className="reveal"
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div style={{ width: '30px', height: '1px', background: 'var(--accent)' }} />
              Contact
            </div>

            <h2
              className="reveal reveal-delay-1 font-serif"
              style={{
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                marginBottom: '28px',
                lineHeight: 1.1,
              }}
            >
              Let's build
              <br />
              <em style={{ color: 'var(--accent2)', fontStyle: 'italic' }}>something great</em>
            </h2>

            <p
              className="reveal reveal-delay-2"
              style={{
                color: 'var(--text-muted)',
                fontSize: '16px',
                lineHeight: 1.8,
                marginBottom: '52px',
                maxWidth: '420px',
              }}
            >
              Have a project in mind? Looking for a developer to join your team? Or just want to
              say hello? My inbox is always open.
            </p>

            {/* Contact links */}
            <div className="reveal reveal-delay-3" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { label: 'Email', value: 'yashr.kmr@gmail.com', href: 'mailto:yashr.kmr@gmail.com' },
                { label: 'LinkedIn', value: '/in/yashkumar', href: 'https://linkedin.com' },
                { label: 'GitHub', value: 'github.com/yashkumar', href: 'https://github.com/UICCC' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0',
                    borderBottom: '1px solid var(--border)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    group: true,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = '8px'
                    e.currentTarget.style.borderBottomColor = 'rgba(200,169,110,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = '0'
                    e.currentTarget.style.borderBottomColor = 'var(--border)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {item.value}
                    <span style={{ color: 'var(--accent)', opacity: 0.6 }}>↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Email@example.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: 'var(--text-dim)',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  Message
                </label>
                <textarea
                  className="input-field"
                  placeholder="Tell me about your Need..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                  style={{ resize: 'none' }}
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  <span>
                    {status === 'idle' && 'Send Message'}
                    {status === 'sending' && 'Sending...'}
                    {status === 'success' && '✓ Message Sent!'}
                    {status === 'error' && '✗ Try Again'}
                  </span>
                  {status === 'idle' && <span>→</span>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
