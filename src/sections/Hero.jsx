import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut'
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Formas Abstratas de Fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos flutuantes grandes */}
        <div className="abstract-shape w-96 h-96 border-2 border-white/20 rounded-full top-1/4 left-1/4 animate-float"></div>
        <div className="abstract-shape w-64 h-64 border-2 border-white/30 rounded-full top-3/4 right-1/4 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="abstract-shape w-80 h-80 border-2 border-white/10 rounded-full bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Formas geométricas */}
        <div className="abstract-shape w-32 h-32 border-2 border-white/40 top-1/3 right-1/3 animate-rotate"></div>
        <div className="abstract-shape w-24 h-24 bg-white/5 border-2 border-white/20 top-2/3 left-1/5 animate-morph"></div>
        
        {/* Linhas e conexões */}
        <div className="abstract-shape w-px h-32 bg-white/20 top-1/2 left-1/2 animate-pulse-glow"></div>
        <div className="abstract-shape w-32 h-px bg-white/20 top-1/2 left-1/2 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Elemento geométrico abstrato */}
          <motion.div
            className="w-24 h-24 border-2 border-white mx-auto mb-8 relative"
            variants={itemVariants}
            whileHover={{ scale: 1.2, rotate: 45 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-4 border border-white/50"></div>
            <div className="absolute inset-8 border border-white/30"></div>
          </motion.div>

          {/* Nome com tipografia artística */}
          <motion.h1
            className="text-8xl md:text-9xl lg:text-[12rem] font-bold mb-8 artistic-text leading-none"
            variants={itemVariants}
          >
            <span className="text-gradient">E</span>
            <span className="text-white">DUARDO</span>
          </motion.h1>

          {/* Separador de linha abstrato */}
          <motion.div
            className="w-32 h-px bg-white mx-auto mb-8"
            variants={itemVariants}
            whileHover={{ scaleX: 2 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          {/* Cargo com estilo artístico */}
          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl text-white/80 mb-12 font-light tracking-wider"
            variants={itemVariants}
          >
            DESENVOLVEDOR FULL STACK
          </motion.div>

          {/* Descrição abstrata */}
          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-16 leading-relaxed"
            variants={itemVariants}
          >
            Criando experiências digitais através de código, design e inovação.
            <br />
            <span className="text-white/40">Construindo o futuro, um pixel por vez.</span>
          </motion.p>

          {/* Seção CTA abstrata */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="btn-primary relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">VER TRABALHOS</span>
              <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn-secondary relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">ENTRE EM CONTATO</span>
              <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </motion.a>
          </motion.div>

          {/* Links sociais abstratos */}
          <motion.div
            className="flex justify-center space-x-8"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:contato@exemplo.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="w-16 h-16 border-2 border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300 group relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2 }}
              >
                <social.icon size={24} />
                <div className="absolute inset-0 border border-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Indicador de scroll abstrato - Canto esquerdo */}
        <motion.div
          className="absolute bottom-8 left-8 flex flex-col items-center text-white/40 hover:text-white transition-colors cursor-pointer"
          variants={floatingVariants}
          animate="animate"
          onClick={scrollToNext}
        >
          <div className="w-6 h-6 border-2 border-white/40 rotate-45 mb-2"></div>
          <span className="text-sm font-medium tracking-wider">ROLE</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero