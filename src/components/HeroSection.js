'use client'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,169,110,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 40px',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      {/* Gradient orbs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative' }}>

        {/* Eyebrow */}
        <div
          className="animate-fade-up delay-100"
          style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}
        >
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Available for work
          </span>
          <div
            style={{
              width: '6px',
              height: '6px',
              background: '#4ade80',
              borderRadius: '50%',
              animation: 'pulse-glow 2s ease-in-out infinite',
              boxShadow: '0 0 8px #4ade80',
            }}
          />
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up delay-200 font-serif"
          style={{
            fontSize: 'clamp(60px, 10vw, 140px)',
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}
        >
          Yash
        </h1>
        <h1
          className="animate-fade-up delay-300 font-serif shimmer-text"
          style={{
            fontSize: 'clamp(60px, 10vw, 140px)',
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            marginBottom: '40px',
            display: 'block',
          }}
        >
          Kumar
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-up delay-400"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 300,
            color: 'var(--text-muted)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '52px',
          }}
        >
          Full-stack developer crafting{' '}
          <em
            className="font-serif"
            style={{ color: 'var(--accent2)', fontStyle: 'italic', fontWeight: 400 }}
          >
            elegant
          </em>{' '}
          digital experiences — from seamless interfaces to scalable backends.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-500"
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
        >
          <a href="#work" className="btn-primary" style={{ textDecoration: 'none' }}>
            <span>View My Work</span>
            <span>↓</span>
          </a>
          <a href="#contact" className="btn-ghost" style={{ textDecoration: 'none' }}>
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in delay-800"
          style={{
            position: 'absolute',
            bottom: '-120px',
            right: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: 'var(--text-dim)',
              textTransform: 'uppercase',
              writingMode: 'vertical-rl',
            }}
          >
            scroll
          </div>
          <div
            style={{
              width: '1px',
              height: '60px',
              background: 'linear-gradient(to bottom, var(--accent), transparent)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Bottom marquee */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid var(--border)',
          padding: '16px 0',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '80px',
            width: 'max-content',
            animation: 'marquee 20s linear infinite',
          }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              React &nbsp;·&nbsp; Next.js &nbsp;·&nbsp; Node.js &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp; Python &nbsp;·&nbsp; PostgreSQL
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
