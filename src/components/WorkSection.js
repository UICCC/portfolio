'use client'
import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    num: '01',
    title: 'CHAT-APP',
    category: 'Python · Next.js',
    description:
      'A multi-user encrypted chat application built with Python sockets and SSL/TLS — featuring real-time message broadcasting, persistent logging, a dark-themed GUI, and an integrated AI chatbot accessible via simple commands.',
    tags: [],
    year: '2026',
    link: '#',
  },
  {
    num: '02',
    title: 'EQUIPSENSE',
    category: 'Full-Stack · React · Node.js',
    description:
      'An equipment reservation and inventory management system built for schools — enabling students to borrow gear in advance while giving administrators real-time visibility into stock.',
    tags: ['Next.js', 'PostgreSQL', 'Python', 'Xampp'],
    year: '2024',
    link: '#',
  },
  {
    num: '03',
    title: 'CARE-LIST',
    category: 'HTML · CSS · JavaScript  · Auth',
    description:
      'A patient appointment booking platform that lets users browse available doctors, select a preferred time slot, and manage their upcoming visits — streamlining scheduling for both patients and healthcare providers.',
    tags: ['React', 'OpenAI', 'Tailwind', 'Tokens'],
    year: '2025',
    link: '#',
  },
  {
    num: '04',
    title: 'MOVIE-SEARCHER',
    category: 'Data · WebSocket · Python',
    description:
      'A movie discovery platform with secure email and password authentication, giving users instant access to a movie library powered by a third-party API — browse, explore, and find your next details.',
    tags: [ 'FastAPI', 'JavaScript', 'WebSocket'],
    year: '2025',
    link: '#',
  },
  
]

export default function WorkSection() {
  const sectionRef = useRef(null)
  const [activeProject, setActiveProject] = useState(null)

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

  return (
    <section id="work" ref={sectionRef} style={{ padding: '140px 40px', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
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
              Selected Work
            </div>
            <h2
              className="reveal reveal-delay-1 font-serif"
              style={{
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              What I've Built
            </h2>
          </div>
          <a
            href="#"
            className="reveal"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            View all →
          </a>
        </div>

        {/* Projects list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
          {projects.map((p, i) => (
            <div
              key={p.num}
              className="reveal"
              style={{
                background: activeProject === i ? 'var(--surface2)' : 'var(--bg)',
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '40px',
                alignItems: 'start',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                cursor: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
              style={{
                background: 'var(--bg)',
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '40px',
                alignItems: 'start',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                cursor: 'none',
              }}
              onMouseEnter={(e) => {
                setActiveProject(i)
                e.currentTarget.style.background = 'rgba(200,169,110,0.03)'
                e.currentTarget.style.paddingLeft = '48px'
              }}
              onMouseLeave={(e) => {
                setActiveProject(null)
                e.currentTarget.style.background = 'var(--bg)'
                e.currentTarget.style.paddingLeft = '40px'
              }}
            >
              {/* Number */}
              <div
                className="font-serif"
                style={{
                  fontSize: '48px',
                  fontWeight: 300,
                  color: 'var(--text-dim)',
                  lineHeight: 1,
                  transition: 'color 0.3s',
                  color: activeProject === i ? 'var(--accent)' : 'var(--text-dim)',
                }}
              >
                {p.num}
              </div>

              {/* Content */}
              <div>
                <div
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  {p.category}
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '28px',
                    fontWeight: 400,
                    marginBottom: '14px',
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    maxWidth: '560px',
                    marginBottom: '20px',
                  }}
                >
                  {p.description}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '10px',
                        letterSpacing: '0.1em',
                        color: 'var(--text-dim)',
                        border: '1px solid var(--border)',
                        padding: '4px 10px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year + link */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
                <span
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {p.year}
                </span>
                <a
                  href={p.link}
                  style={{
                    width: '44px',
                    height: '44px',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '18px',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                  }}
                >
                  ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
