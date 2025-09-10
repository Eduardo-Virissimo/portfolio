import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react'
import ScrollIndicator from '../components/ScrollIndicator'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const stats = [
    { number: '50+', label: 'PROJETOS', icon: Code },
    { number: '3+', label: 'ANOS', icon: Award },
    { number: '100%', label: 'PAIXÃO', icon: Users },
    { number: '∞', label: 'IDEIAS', icon: Coffee }
  ]

  const highlights = [
    {
      icon: Code,
      title: 'CÓDIGO LIMPO',
      description: 'Escrevendo código elegante e sustentável que fala por si só.'
    },
    {
      icon: Zap,
      title: 'DESEMPENHO',
      description: 'Otimizando cada pixel e milissegundo para a melhor experiência.'
    },
    {
      icon: Palette,
      title: 'DESIGN',
      description: 'Criando experiências visuais que contam uma história.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden" ref={ref}>
      {/* Elementos abstratos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="abstract-shape w-64 h-64 border border-white/5 top-1/4 right-1/4 animate-rotate"></div>
        <div className="abstract-shape w-32 h-32 bg-white/5 border border-white/10 bottom-1/4 left-1/4 animate-morph"></div>
        <div className="abstract-shape w-px h-64 bg-white/10 top-1/2 left-1/2 animate-pulse-glow"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Cabeçalho com elementos abstratos */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="w-2 h-2 bg-white rotate-45"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 artistic-text">
              SOBRE
            </h2>
            
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed tracking-wider">
              Um desenvolvedor criativo criando experiências digitais
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            {/* Conteúdo de texto com estilo abstrato */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8 text-lg text-white/70 leading-relaxed">
                <p className="relative pl-8 border-l-2 border-white/20">
                  Sou um desenvolvedor full-stack com paixão por criar 
                  experiências digitais que são funcionais e belas.
                </p>
                
                <p className="relative pl-8 border-l-2 border-white/20">
                  Com mais de 3 anos de experiência, me especializo em 
                  tecnologias web modernas e sempre busco expandir os 
                  limites do que é possível.
                </p>
                
                <p className="relative pl-8 border-l-2 border-white/20">
                  Acredito no poder do código limpo, design pensativo 
                  e aprendizado contínuo para criar soluções que importam.
                </p>
              </div>
            </motion.div>

            {/* Abstract Stats Grid */}
            <motion.div className="grid grid-cols-2 gap-8" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group relative"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                >
                  <div className="w-16 h-16 border border-white/30 flex items-center justify-center mx-auto mb-4 group-hover:border-white/60 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/60 font-medium tracking-wider">{stat.label}</div>
                  
                  {/* Abstract corner decoration */}
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Abstract Highlights */}
          <motion.div className="grid md:grid-cols-3 gap-8" variants={itemVariants}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="text-center p-8 border border-white/10 hover:border-white/30 transition-all duration-500 group relative"
                whileHover={{ y: -10, rotate: 1 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 border-2 border-white/20 flex items-center justify-center mx-auto mb-6 group-hover:border-white/40 transition-colors duration-300 relative">
                  <highlight.icon className="w-10 h-10 text-white/60 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-2 border border-white/10 group-hover:border-white/20 transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 tracking-wider">{highlight.title}</h3>
                <p className="text-white/60 leading-relaxed">{highlight.description}</p>
                
                {/* Abstract line decoration */}
                <div className="w-16 h-px bg-white/20 mx-auto mt-6 group-hover:bg-white/40 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Indicador de scroll - DESCER */}
        <ScrollIndicator targetId="#projects" delay={1} />
      </div>
    </section>
  )
}

export default About