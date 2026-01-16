import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ open, onClose, children }){
  useEffect(() => {
    const onKey = (e) => { if(e.key === 'Escape') onClose() }
    if(open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal-backdrop" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} onClick={onClose}>
          <motion.div className="modal" initial={{ y:50, scale:0.95 }} animate={{ y:0, scale:1 }} exit={{ y:50, scale:0.95 }} onClick={(e)=>e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>✕</button>
            <div className="modal-content">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
