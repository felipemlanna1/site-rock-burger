import { motion } from 'framer-motion'
import { Star, GoogleLogo } from '@phosphor-icons/react'
import { useInView } from './useInView'

const reviews = [
  { name: 'Marina F.', text: 'O melhor hambúrguer de Floripa, sem exagero. Tudo fresquinho e nada industrializado. O atendimento do Alex e da Vilma é de primeira!', rating: 5 },
  { name: 'Carlos R.', text: 'Uma das melhores experiências gastronômicas que tive em Florianópolis. O smash burger é sensacional e as cervejas artesanais combinam perfeitamente.', rating: 5 },
  { name: 'Juliana P.', text: 'Amo as opções vegetarianas! O burger de grão-de-bico com guacamole é viciante. O ambiente rock é super acolhedor e a música é sempre boa.', rating: 5 },
  { name: 'Eduardo M.', text: 'Virei cliente fiel. A carne é de qualidade absurda, você sente o sabor artesanal em cada mordida. A batata loaded é obrigatória!', rating: 5 },
]

export default function Testimonials() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="depoimentos" ref={ref} style={{ padding: '100px 24px', background: '#0F0F0F' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ color: '#C41E1E', fontSize: '13px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>Avaliações</span>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 56px)', marginTop: '8px' }}>O Que Dizem de Nós</h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px', background: 'rgba(196,30,30,0.1)', padding: '8px 20px', borderRadius: '100px' }}>
            <GoogleLogo size={18} weight="bold" style={{ color: '#F5A623' }} />
            <span style={{ color: '#F5A623', fontSize: '14px', fontWeight: 600 }}>4.5 no Google — 354 avaliações</span>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: '#1C1C1C', border: '1px solid #2A2A2A', borderRadius: '16px', padding: '28px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '48px', fontFamily: "'Bebas Neue', sans-serif", color: 'rgba(196,30,30,0.15)', lineHeight: 1 }}>"</div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {[...Array(r.rating)].map((_, j) => <Star key={j} size={16} weight="fill" style={{ color: '#F5A623' }} />)}
              </div>
              <p style={{ color: '#CCC', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #C41E1E, #8B1515)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 700, fontSize: '16px' }}>{r.name[0]}</div>
                <span style={{ color: '#FFF', fontWeight: 600, fontSize: '14px' }}>{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
