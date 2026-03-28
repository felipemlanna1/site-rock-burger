import { motion } from 'framer-motion'
import { useInView } from './useInView'

const photos = [
  { src: './images/hero-burger.jpg', alt: 'Burger artesanal' },
  { src: './images/preparo.jpg', alt: 'Preparo na chapa' },
  { src: './images/cerveja.jpg', alt: 'Cervejas artesanais' },
  { src: './images/porcao.jpg', alt: 'Batata loaded' },
  { src: './images/ambiente.jpg', alt: 'Ambiente rock' },
  { src: './images/veggie.jpg', alt: 'Burger vegetariano' },
]

export default function Gallery() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="galeria" ref={ref} style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{ color: '#C41E1E', fontSize: '13px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>Galeria</span>
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 56px)', marginTop: '8px' }}>A Experiência Rock</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="gallery-grid-rb">
        {photos.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <img src={p.src} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
              <span style={{ color: '#FFF', fontSize: '13px', fontWeight: 500 }}>{p.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`@media (max-width: 768px) { .gallery-grid-rb { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
    </section>
  )
}
