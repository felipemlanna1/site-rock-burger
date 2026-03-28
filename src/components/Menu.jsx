import { useState } from 'react'
import { motion } from 'framer-motion'
import { Hamburger, BeerBottle, ForkKnife, Leaf } from '@phosphor-icons/react'
import { useInView } from './useInView'

const categories = ['Todos', 'Burgers', 'Vegetariano', 'Porções', 'Bebidas']

const items = [
  { cat: 'Burgers', name: 'Rock Classic', desc: 'Blend 180g, cheddar, alface, tomate, cebola caramelizada, molho especial', img: './images/hero-burger.jpg', price: null },
  { cat: 'Burgers', name: 'Smash Burger', desc: 'Dois smash patties 90g, american cheese, picles, cebola, mostarda', img: './images/preparo.jpg', price: null },
  { cat: 'Burgers', name: 'Bacon Jam', desc: 'Blend 180g, geleia de bacon, brie, rúcula, cebola crispy', img: './images/hero-burger.jpg', price: null },
  { cat: 'Vegetariano', name: 'Veggie Rock', desc: 'Hambúrguer de grão-de-bico, guacamole, tomate seco, rúcula, maionese vegana', img: './images/veggie.jpg', price: null },
  { cat: 'Porções', name: 'Batata Loaded', desc: 'Fritas crocantes com cheddar, bacon crocante e cebolinha', img: './images/porcao.jpg', price: null },
  { cat: 'Porções', name: 'Onion Rings', desc: 'Anéis de cebola empanados com molho BBQ artesanal', img: './images/porcao.jpg', price: null },
  { cat: 'Bebidas', name: 'Chopp Artesanal', desc: 'Variedade de cervejas artesanais da ilha no chopp', img: './images/cerveja.jpg', price: null },
  { cat: 'Bebidas', name: 'Milkshake', desc: 'Milkshake cremoso: chocolate, morango ou Ovomaltine', img: './images/cerveja.jpg', price: null },
]

export default function Menu() {
  const [ref, inView] = useInView(0.1)
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? items : items.filter(i => i.cat === active)

  return (
    <section id="cardapio" ref={ref} style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{ color: '#C41E1E', fontSize: '13px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>Cardápio</span>
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 56px)', marginTop: '8px' }}>Escolha Seu Burger</h2>
      </motion.div>

      {/* Category filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
        {categories.map(c => (
          <button key={c} onClick={() => setActive(c)}
            style={{
              padding: '10px 24px', borderRadius: '100px', border: 'none', cursor: 'pointer',
              fontSize: '14px', fontWeight: 600, transition: 'all 0.2s',
              background: active === c ? '#C41E1E' : '#1C1C1C',
              color: active === c ? '#FFF' : '#888',
            }}>
            {c}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filtered.map((item, i) => (
          <motion.div key={item.name + i}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.08 }}
            style={{
              background: '#1C1C1C', borderRadius: '16px', overflow: 'hidden', border: '1px solid #2A2A2A', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(196,30,30,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.transform = 'translateY(0)' }}>
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
            </div>
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ background: 'rgba(196,30,30,0.15)', color: '#C41E1E', padding: '3px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: 600 }}>{item.cat}</span>
              </div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', marginBottom: '8px', letterSpacing: '0.5px' }}>{item.name}</h3>
              <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <a href="https://wa.me/554830300525?text=Olá! Quero fazer um pedido!" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C41E1E', color: '#FFF', padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 700, transition: 'all 0.3s' }}
          onMouseEnter={e => { e.target.style.background = '#E63232'; e.target.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.target.style.background = '#C41E1E'; e.target.style.transform = 'translateY(0)' }}>
          Pedir pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
