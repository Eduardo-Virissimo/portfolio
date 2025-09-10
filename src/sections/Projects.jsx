import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, memo } from 'react'
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react'
import ScrollIndicator from '../components/ScrollIndicator'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('all')

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

  const projects = [
    {
      id: 1,
      title: 'PLATAFORMA E-COMMERCE',
      description: 'Uma solução completa de e-commerce construída com tecnologias modernas. Inclui processamento de pagamentos, gerenciamento de estoque e painel administrativo.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'APP DE GERENCIAMENTO',
      description: 'Uma aplicação colaborativa de gerenciamento de tarefas com atualizações em tempo real, funcionalidade de arrastar e soltar e recursos de colaboração em equipe.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'PAINEL DO TEMPO',
      description: 'Um painel interativo do tempo com visualizações de dados, previsões de 7 dias e atualizações em tempo real.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Chart.js', 'API Integration'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'API REDES SOCIAIS',
      description: 'Uma API RESTful para plataforma de redes sociais com autenticação JWT, upload de imagens e sistema de seguidores.',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Express', 'JWT', 'AWS S3'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'APP BANCÁRIO MÓVEL',
      description: 'Uma aplicação bancária móvel segura com autenticação biométrica, transferências PIX e ferramentas de gestão financeira.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Expo', 'Firebase'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'CHATBOT INTELIGENTE',
      description: 'Um chatbot inteligente com capacidades de processamento de linguagem natural e integração multiplataforma.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      technologies: ['Python', 'OpenAI API', 'FastAPI'],
      category: 'ai',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const filters = [
    { key: 'all', label: 'TODOS' },
    { key: 'frontend', label: 'FRONTEND' },
    { key: 'backend', label: 'BACKEND' },
    { key: 'fullstack', label: 'FULL STACK' },
    { key: 'mobile', label: 'MÓVEL' },
    { key: 'ai', label: 'INTELIGÊNCIA ARTIFICIAL' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-black relative overflow-hidden" ref={ref}>
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="abstract-shape w-96 h-96 border border-white/5 top-1/4 left-1/4 animate-float"></div>
        <div className="abstract-shape w-64 h-64 border border-white/10 bottom-1/4 right-1/4 animate-rotate"></div>
        <div className="abstract-shape w-32 h-32 bg-white/5 border border-white/20 top-1/2 left-1/2 animate-morph"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header with abstract styling */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="w-2 h-2 bg-white rotate-45"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 artistic-text">
              TRABALHOS
            </h2>
            
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed tracking-wider">
              Projetos selecionados que mostram minhas habilidades e paixão
            </p>
          </motion.div>

          {/* Abstract Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                className={`px-6 py-3 border transition-all duration-300 text-sm tracking-wider ${
                  activeFilter === filter.key
                    ? 'border-white text-white bg-white/10'
                    : 'border-white/30 text-white/60 hover:border-white/60 hover:text-white/80'
                }`}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Abstract Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group border border-white/20 hover:border-white/40 transition-all duration-500 relative ${
                  project.featured ? 'border-white/40' : ''
                }`}
                variants={itemVariants}
                whileHover={{ y: -10, rotate: 1 }}
                transition={{ duration: 0.3 }}
                layout
              >
                {/* Project Image with abstract overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <motion.a
                      href={project.liveUrl}
                      className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white"></div>
                  )}
                </div>

                {/* Project Content with abstract styling */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/80 transition-colors tracking-wider">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Abstract Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 border border-white/20 text-white/60 text-xs tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Abstract Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      VIEW
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-white/30 text-white/60 hover:border-white hover:text-white transition-all duration-300 text-sm tracking-wider"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Abstract corner decorations */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Abstract View More Button */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-4 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tracking-wider">VIEW MORE WORK</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Indicador de scroll - DESCER */}
        <ScrollIndicator targetId="#contact" delay={1} />
      </div>
    </section>
  )
}

export default Projects