import { WhatsappLogo, InstagramLogo, MapPin, Phone } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer style={{ padding: '48px 24px 24px', background: '#050505', borderTop: '1px solid rgba(196,30,30,0.15)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <img src="./images/logo.png" alt="Rock Burger" style={{ height: '36px', borderRadius: '4px' }} />
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', color: '#C41E1E' }}>ROCK BURGER</span>
          </div>
          <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.7 }}>Os hambúrgueres mais artesanais da ilha. Carne certificada, ingredientes frescos e vibe rock.</p>
        </div>
        <div>
          <h4 style={{ color: '#FFF', fontSize: '14px', fontWeight: 600, marginBottom: '16px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '1px' }}>Contato</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} weight="duotone" style={{ color: '#C41E1E', flexShrink: 0 }} />
              <span style={{ color: '#999', fontSize: '14px' }}>R. da Lagoinha Pequena, 46 — Rio Tavares</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} weight="duotone" style={{ color: '#C41E1E', flexShrink: 0 }} />
              <span style={{ color: '#999', fontSize: '14px' }}>(48) 3030-0525</span>
            </div>
          </div>
        </div>
        <div>
          <h4 style={{ color: '#FFF', fontSize: '14px', fontWeight: 600, marginBottom: '16px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '1px' }}>Horário</h4>
          <div style={{ color: '#999', fontSize: '14px', lineHeight: 1.8 }}>
            <p>Ter–Qui: 18h às 23h</p>
            <p>Sex: 18h às 00h30</p>
            <p>Sáb–Dom: 19h às 00h30</p>
            <p>Seg: Fechado</p>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #1A1A1A', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ color: '#555', fontSize: '13px' }}>Rock Burger Artesanal — Florianópolis/SC</p>
        <div style={{ display: 'flex', gap: '12px' }}>
          {[
            { href: 'https://wa.me/554830300525', icon: WhatsappLogo },
            { href: 'https://instagram.com/rockburgerba', icon: InstagramLogo },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#1A1A1A', border: '1px solid #2A2A2A', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#C41E1E'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#2A2A2A'}>
              <s.icon size={18} weight="fill" style={{ color: '#C41E1E' }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
