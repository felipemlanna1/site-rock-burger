import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsappLogo } from '@phosphor-icons/react'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
          href="https://wa.me/554830300525?text=Olá! Quero fazer um pedido no Rock Burger!" target="_blank" rel="noopener noreferrer"
          style={{ position: 'fixed', bottom: '24px', right: '24px', width: '56px', height: '56px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 1500 }}>
          <WhatsappLogo size={28} weight="fill" style={{ color: '#FFF' }} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
