import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, WhatsappLogo, InstagramLogo } from '@phosphor-icons/react'
import { useInView } from './useInView'

export default function Contact() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="contato" ref={ref} style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{ color: '#C41E1E', fontSize: '13px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>Localização</span>
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 56px)', marginTop: '8px' }}>Bora Comer?</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #2A2A2A', aspectRatio: '4/3' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536!2d-48.48!3d-27.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRio+Tavares+Florianopolis!5e0!3m2!1spt-BR!2sbr"
            width="100%" height="100%" style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7)' }} allowFullScreen="" loading="lazy" title="Localização" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { icon: MapPin, title: 'Endereço', text: 'R. da Lagoinha Pequena, 46 — Sala 01\nRio Tavares, Florianópolis — SC' },
            { icon: Phone, title: 'Telefone / Delivery', text: '(48) 3030-0525' },
            { icon: Clock, title: 'Horário', text: 'Ter–Qui: 18h às 23h\nSex: 18h às 00h30\nSáb–Dom: 19h às 00h30\nSeg: Fechado' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#1C1C1C', border: '1px solid #2A2A2A', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(196,30,30,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <item.icon size={24} weight="duotone" style={{ color: '#C41E1E' }} />
              </div>
              <div>
                <p style={{ color: '#FFF', fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>{item.title}</p>
                <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.text}</p>
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/554830300525?text=Olá! Quero fazer um pedido!" target="_blank" rel="noopener noreferrer"
              style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#25D366', color: '#FFF', padding: '16px 24px', borderRadius: '12px', fontSize: '15px', fontWeight: 600, transition: 'all 0.3s', minWidth: '150px' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <WhatsappLogo size={20} weight="fill" style={{ flexShrink: 0 }} /> WhatsApp
            </a>
            <a href="https://instagram.com/rockburgerba" target="_blank" rel="noopener noreferrer"
              style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg, #833AB4, #C13584, #E1306C)', color: '#FFF', padding: '16px 24px', borderRadius: '12px', fontSize: '15px', fontWeight: 600, transition: 'all 0.3s', minWidth: '150px' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <InstagramLogo size={20} weight="fill" style={{ flexShrink: 0 }} /> Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
