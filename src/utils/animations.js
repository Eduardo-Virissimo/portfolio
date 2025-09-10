// Configurações de animação otimizadas para performance
export const animationConfig = {
  // Animações básicas otimizadas
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  
  // Animações de hover otimizadas
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  },
  
  hoverLift: {
    whileHover: { y: -5 },
    transition: { duration: 0.2 }
  },
  
  // Animações de container com stagger otimizado
  containerStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },
  
  // Animações de item com stagger
  itemStagger: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  },
  
  // Animações de floating otimizadas
  floating: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  },
  
  // Animações de rotação otimizadas
  rotate: {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }
}

// Função para criar animações com delay
export const createDelayedAnimation = (delay = 0) => ({
  ...animationConfig.itemStagger,
  transition: {
    ...animationConfig.itemStagger.transition,
    delay
  }
})

// Função para animações de entrada com intersection observer
export const createInViewAnimation = (isInView, delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  transition: { delay, duration: 0.6, ease: 'easeOut' }
})
