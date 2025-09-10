import { motion } from 'framer-motion'
import { useState, useEffect, memo } from 'react'

const LoadingScreen = memo(({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('INICIANDO')

  const loadingTexts = [
    'INICIANDO',
    'CARREGANDO',
    'PREPARANDO',
    'FINALIZANDO'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete()
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingTexts.indexOf(prev)
        const nextIndex = (currentIndex + 1) % loadingTexts.length
        return loadingTexts[nextIndex]
      })
    }, 800)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [onComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    }
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  }

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        delay: 1
      }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Elementos abstratos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-white/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Linhas abstratas */}
        <div className="absolute top-1/2 left-1/2 w-px h-32 bg-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-px bg-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Logo abstrato */}
        <motion.div
          className="w-24 h-24 border-2 border-white mx-auto mb-8 relative group"
          variants={logoVariants}
          whileHover={{ scale: 1.1, rotate: 45 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-4 border border-white/50"></div>
          <div className="absolute inset-8 border border-white/30"></div>
          <div className="absolute inset-12 border border-white/20"></div>
          
          {/* Elemento central animado */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-white transform -translate-x-1/2 -translate-y-1/2"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        {/* Nome */}
        <motion.h1
          className="text-4xl font-bold text-white mb-4 tracking-wider"
          variants={textVariants}
        >
          EDUARDO
        </motion.h1>

        {/* Texto de loading */}
        <motion.div
          className="text-white/60 mb-8 text-sm tracking-wider"
          variants={textVariants}
        >
          {loadingText}
        </motion.div>

        {/* Barra de progresso abstrata */}
        <motion.div
          className="w-64 h-px bg-white/20 mx-auto mb-4 relative overflow-hidden"
          variants={progressVariants}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
          
          {/* Efeito de brilho */}
          <motion.div
            className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            animate={{ x: [-32, 256] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        {/* Porcentagem */}
        <motion.div
          className="text-white/40 text-xs tracking-wider"
          variants={textVariants}
        >
          {progress}%
        </motion.div>

        {/* Elementos decorativos */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-white/40"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
})

LoadingScreen.displayName = 'LoadingScreen'

export default LoadingScreen
