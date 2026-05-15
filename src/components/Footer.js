'use client'
export default function Footer() {
  return (
    <footer
      style={{
        padding: '40px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '20px',
          fontWeight: 300,
          color: 'var(--text-muted)',
        }}
      >
        YK<span style={{ color: 'var(--accent)' }}>.</span>
      </div>

      <div
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '10px',
          letterSpacing: '0.1em',
          color: 'var(--text-dim)',
          textTransform: 'uppercase',
        }}
      >
        © {new Date().getFullYear()} Yash Kumar — Built with Next.js
      </div>

      
    </footer>
  )
}
