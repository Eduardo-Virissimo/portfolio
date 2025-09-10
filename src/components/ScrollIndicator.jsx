import { motion } from 'framer-motion'
import { memo } from 'react'

const ScrollIndicator = memo(({ targetId, delay = 1 }) => {
  const scrollToNext = () => {
    const nextSection = document.querySelector(targetId)
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      className="absolute bottom-8 left-8 flex flex-col items-center text-white/40 hover:text-white transition-colors cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      onClick={scrollToNext}
    >
      <div className="w-6 h-6 border-2 border-white/40 rotate-45 mb-2"></div>
      <span className="text-sm font-medium tracking-wider">DESCER</span>
    </motion.div>
  )
})

ScrollIndicator.displayName = 'ScrollIndicator'

export default ScrollIndicator
