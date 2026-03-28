import { motion } from 'framer-motion'
import { Star, Fire } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(./images/hero-burger.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.25)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(196,30,30,0.15), transparent 60%)' }} />

      <div style={{ position: 'relative', zIndex: 1, padding: '120px 24px 80px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: '700px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(196,30,30,0.2)', border: '1px solid rgba(196,30,30,0.4)', borderRadius: '100px', padding: '8px 20px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" style={{ color: '#F5A623' }} />)}
            </div>
            <span style={{ color: '#F5A623', fontSize: '13px', fontWeight: 600 }}>4.5 — 354 avaliações</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Fire size={44} weight="fill" style={{ color: '#C41E1E', marginBottom: '16px' }} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 8vw, 80px)', color: '#FFF', lineHeight: 0.95, marginBottom: '20px' }}>
            Os Hambúrgueres
            <br /><span style={{ color: '#C41E1E' }}>Mais Artesanais</span>
            <br />da Ilha
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#AAA', lineHeight: 1.6, marginBottom: '36px', maxWidth: '500px' }}>
            Carne certificada grelhada na hora, ingredientes frescos e cervejas artesanais.
            Tudo com a atitude rock que Floripa merece.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <a href="https://wa.me/554830300525?text=Olá! Quero fazer um pedido no Rock Burger!" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C41E1E', color: '#FFF', padding: '16px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 700, transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.background = '#E63232'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 32px rgba(196,30,30,0.4)' }}
              onMouseLeave={e => { e.target.style.background = '#C41E1E'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}>
              Pedir pelo WhatsApp
            </a>
            <a href="#cardapio"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#C41E1E', padding: '16px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 600, border: '1px solid rgba(196,30,30,0.5)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.borderColor = '#C41E1E'; e.target.style.background = 'rgba(196,30,30,0.08)' }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(196,30,30,0.5)'; e.target.style.background = 'transparent' }}>
              Ver Cardápio
            </a>
          </motion.div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />
    </section>
  )
}
