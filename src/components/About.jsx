import { motion } from 'framer-motion'
import { Guitar, Clock, MapPin, BeerBottle } from '@phosphor-icons/react'
import { useInView } from './useInView'

export default function About() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="sobre" ref={ref} style={{ padding: '100px 24px', background: '#0F0F0F' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <img src="./images/ambiente.jpg" alt="Ambiente Rock Burger" style={{ width: '100%', borderRadius: '16px', aspectRatio: '4/3', objectFit: 'cover' }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          <span style={{ color: '#C41E1E', fontSize: '13px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>Sobre Nós</span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginTop: '12px', marginBottom: '20px', lineHeight: 1.1 }}>
            Hambúrguer Artesanal
            <br /><span style={{ color: '#C41E1E' }}>Com Alma Rock</span>
          </h2>
          <p style={{ color: '#999', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
            O Rock Burger nasceu da paixão por hambúrgueres de verdade e boa música. Somos referência em
            Florianópolis com ingredientes de primeira qualidade: carne certificada grelhada na hora,
            pães artesanais e tudo fresquinho — nada industrializado.
          </p>
          <p style={{ color: '#999', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
            Com o Alex e a Vilma no atendimento, você é tratado como amigo da casa. Opções para todos:
            burgers clássicos, smash burgers e quatro opções vegetarianas. Tudo acompanhado de
            cervejas artesanais e chopp gelado.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: Clock, text: 'Ter–Qui: 18h–23h\nSex: 18h–00h30\nSáb–Dom: 19h–00h30' },
              { icon: MapPin, text: 'R. da Lagoinha Pequena, 46\nRio Tavares, Florianópolis' },
              { icon: BeerBottle, text: 'Cervejas artesanais\ne chopp gelado' },
              { icon: Guitar, text: 'Rock clássico\ne boa energia' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#1C1C1C', border: '1px solid #2A2A2A', borderRadius: '12px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <item.icon size={24} weight="duotone" style={{ color: '#C41E1E', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ color: '#AAA', fontSize: '13px', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
