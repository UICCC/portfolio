'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = ['about', 'work', 'skills', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '24px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--text)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}
      >
        YK<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {links.map((link) => (
          <a key={link} href={`#${link}`} className="nav-link" style={{ textDecoration: 'none' }}>
            {link}
          </a>
        ))}
        <a
          href="/resume.pdf"
          className="btn-primary"
          style={{ padding: '10px 20px', textDecoration: 'none' }}
        >
          <span>Resume</span>
        </a>
      </div>
    </nav>
  )
}
