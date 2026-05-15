'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    label: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'React / Next.js', level: 85 },
      { name: 'JAVScript', level: 79 },
      { name: 'CSS / Tailwind', level: 92 },
      { name: 'Animation / GSAP', level: 78 },
    ],
  },
  {
    label: 'Backend',
    icon: '◉',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / FastAPI', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'DBMS', level: 75 },
    ],
  },
  {
    label: 'DevOps & Tools',
    icon: '◎',
    skills: [
      
      { name: 'CI/CD / GitHub Actions', level: 80 },
      { name: 'AWS / Vercel', level: 78 },
      { name: 'Git / Version Control', level: 94 },
    ],
  },
]

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'Redis',  'AWS', 'Tailwind', 'Prisma', 'GraphQL',
  'Figma', 'Git', 'DBMS',
]

function SkillBar({ name, level, index }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = level + '%'
              }
            }, index * 100 + 200)
          }
        })
      },
      { threshold: 0.5 }
    )
    if (barRef.current) observer.observe(barRef.current.parentElement)
    return () => observer.disconnect()
  }, [level, index])

  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{name}</span>
        <span
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '11px',
            color: 'var(--accent)',
            letterSpacing: '0.05em',
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: '2px',
          background: 'var(--border)',
          borderRadius: '1px',
          overflow: 'hidden',
        }}
      >
        <div
          ref={barRef}
          style={{
            height: '100%',
            width: '0%',
            background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
            borderRadius: '1px',
            transition: `width 1.2s cubic-bezier(0.16,1,0.3,1)`,
            boxShadow: '0 0 10px rgba(200,169,110,0.4)',
          }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} style={{ padding: '140px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
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
            Expertise
          </div>
          <h2
            className="reveal reveal-delay-1 font-serif"
            style={{
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 300,
              letterSpacing: '-0.01em',
            }}
          >
            Skills & Technologies
          </h2>
        </div>

        {/* Skill groups */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginBottom: '80px' }}>
          {skillGroups.map((group, gi) => (
            <div
              key={group.label}
              className="reveal glass-card"
              style={{
                padding: '40px',
                transitionDelay: `${gi * 0.1}s`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <span style={{ fontSize: '20px', color: 'var(--accent)' }}>{group.icon}</span>
                <span
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  {group.label}
                </span>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={si} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech cloud */}
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'var(--text-dim)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Also experienced with
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  padding: '8px 16px',
                  transition: 'all 0.3s',
                  cursor: 'none',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.background = 'rgba(200,169,110,0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
