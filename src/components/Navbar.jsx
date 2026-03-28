import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 24px', height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.7)',
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(196,30,30,0.2)' : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src="./images/logo.png" alt="Rock Burger" style={{ height: '44px', borderRadius: '4px' }} />
        <div>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', color: '#C41E1E', display: 'block', lineHeight: 1 }}>ROCK BURGER</span>
          <span style={{ fontSize: '9px', letterSpacing: '3px', color: '#888', textTransform: 'uppercase' }}>Artesanal</span>
        </div>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="nav-desktop">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{ color: '#D4D4D4', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#C41E1E'}
            onMouseLeave={e => e.target.style.color = '#D4D4D4'}
          >{l.label}</a>
        ))}
        <a href="https://wa.me/554830300525?text=Olá! Quero fazer um pedido no Rock Burger!" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C41E1E', color: '#FFF', padding: '10px 20px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.target.style.background = '#E63232'; e.target.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.target.style.background = '#C41E1E'; e.target.style.transform = 'translateY(0)' }}
        >Pedir Agora</a>
      </div>

      <button onClick={() => setOpen(!open)} className="nav-mobile-btn"
        style={{ display: 'none', background: 'none', border: 'none', color: '#C41E1E', cursor: 'pointer', padding: '8px' }}>
        {open ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{ position: 'absolute', top: '72px', left: 0, right: 0, background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', borderBottom: '1px solid rgba(196,30,30,0.2)' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: '#D4D4D4', fontSize: '16px', fontWeight: 500, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{l.label}</a>
            ))}
            <a href="https://wa.me/554830300525?text=Olá! Quero fazer um pedido no Rock Burger!" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#C41E1E', color: '#FFF', padding: '14px 24px', borderRadius: '8px', fontSize: '16px', fontWeight: 600, marginTop: '8px' }}>
              Pedir Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: block !important; } }
      `}</style>
    </nav>
  )
}
