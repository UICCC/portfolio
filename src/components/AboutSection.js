'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { num: '4+', label: 'Years Experience' },
  { num: '10+', label: 'Projects ' },
  { num: '100%', label: 'Client Satisfaction' },
  { num: '∞', label: 'Coffee Consumed' },
]

export default function AboutSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} style={{ padding: '140px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>

          {/* Left — visual */}
          <div className="reveal" style={{ position: 'relative' }}>
            {/* Decorative frame */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '4/5',
                maxWidth: '420px',
              }}
            >
              {/* Rotating border */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-2px',
                  border: '1px solid var(--accent)',
                  borderRadius: '2px',
                  animation: 'none',
                }}
              />

              {/* Corner accents */}
              {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
                <div
                  key={pos}
                  style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    ...(pos.includes('top') ? { top: -8 } : { bottom: -8 }),
                    ...(pos.includes('left') ? { left: -8 } : { right: -8 }),
                    borderTop: pos.includes('top') ? '2px solid var(--accent)' : 'none',
                    borderBottom: pos.includes('bottom') ? '2px solid var(--accent)' : 'none',
                    borderLeft: pos.includes('left') ? '2px solid var(--accent)' : 'none',
                    borderRight: pos.includes('right') ? '2px solid var(--accent)' : 'none',
                  }}
                />
              ))}

              {/* Main card */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px',
                  padding: '40px',
                }}
              >
                {/* Avatar placeholder with initials */}
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(200,169,110,0.2), rgba(200,169,110,0.05))',
                    border: '1px solid rgba(200,169,110,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '42px',
                    fontWeight: 300,
                    color: 'var(--accent)',
                    animation: 'pulse-glow 3s ease-in-out infinite',
                  }}
                >
                  YK
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '24px',
                      fontWeight: 400,
                      marginBottom: '6px',
                    }}
                  >
                    Yash Kumar
                  </div>
                  <div
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Full-Stack Developer
                  </div>
                </div>

                {/* Decorative lines */}
                <div
                  style={{
                    width: '60px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                  }}
                />

                <div
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    color: 'var(--text-dim)',
                    textTransform: 'uppercase',
                  }}
                >
                  📍 Canada
                </div>
              </div>

              {/* Floating badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  right: '-24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    background: '#4ade80',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px #4ade80',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}
                >
                  Open to roles
                </span>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <div
              className="reveal"
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div style={{ width: '30px', height: '1px', background: 'var(--accent)' }} />
              About Me
            </div>

            <h2
              className="reveal reveal-delay-1 font-serif"
              style={{
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: 300,
                lineHeight: 1.1,
                marginBottom: '28px',
                letterSpacing: '-0.01em',
              }}
            >
              Building things that
              <br />
              <em style={{ color: 'var(--accent2)', fontStyle: 'italic' }}>actually matter</em>
            </h2>

            <p
              className="reveal reveal-delay-2"
              style={{
                color: 'var(--text-muted)',
                marginBottom: '20px',
                fontSize: '16px',
                lineHeight: 1.8,
              }}
            >
              I'm a full-stack developer passionate about creating intuitive, performant, and
              beautiful web experiences. With a deep focus on clean architecture and thoughtful
              design, I bridge the gap between technical excellence and user-centric thinking.
            </p>

            <p
              className="reveal reveal-delay-3"
              style={{
                color: 'var(--text-muted)',
                marginBottom: '48px',
                fontSize: '16px',
                lineHeight: 1.8,
              }}
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to
              personal small projects, or sipping way too much coffee while debugging production issues at 2am.
            </p>

            {/* Stats */}
            <div
              className="reveal reveal-delay-4"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1px',
                background: 'var(--border)',
                border: '1px solid var(--border)',
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.num}
                  style={{
                    background: 'var(--bg)',
                    padding: '24px 16px',
                    textAlign: 'center',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg)')}
                >
                  <div
                    className="font-serif"
                    style={{ fontSize: '32px', fontWeight: 400, color: 'var(--accent)', lineHeight: 1 }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '9px',
                      letterSpacing: '0.12em',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      marginTop: '8px',
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
