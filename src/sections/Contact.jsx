import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'EMAIL',
      value: 'contato@exemplo.com',
      link: 'mailto:contato@exemplo.com'
    },
    {
      icon: Phone,
      title: 'TELEFONE',
      value: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      title: 'LOCALIZAÇÃO',
      value: 'São Paulo, SP - Brasil',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' }
  ]

  return (
    <section id="contact" className="section-padding bg-black relative overflow-hidden" ref={ref}>
      {/* Abstract background elements */}
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
          {/* Header with abstract styling */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="w-2 h-2 bg-white rotate-45"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 artistic-text">
              CONTATO
            </h2>
            
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed tracking-wider">
              Vamos criar algo incrível juntos
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info with abstract styling */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8 tracking-wider">
                ENTRE EM CONTATO
              </h3>
              <p className="text-lg text-white/60 mb-12 leading-relaxed">
                Estou sempre aberto para discutir novos projetos, ideias criativas 
                ou oportunidades para fazer parte da sua visão.
              </p>

              <div className="space-y-8 mb-16">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-6 p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors duration-300">
                      <info.icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 tracking-wider">{info.title}</h4>
                      <p className="text-white/60">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Abstract Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6 tracking-wider">
                  SIGA-ME
                </h4>
                <div className="flex gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.2 }}
                    >
                      <social.icon size={24} />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Abstract Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="border border-white/20 p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-8 tracking-wider">
                  ENVIAR MENSAGEM
                </h3>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-20 h-20 text-white mx-auto mb-6" />
                    <h4 className="text-2xl font-semibold text-white mb-4">
                      MENSAGEM ENVIADA!
                    </h4>
                    <p className="text-white/60">
                      Obrigado por entrar em contato. Retornarei em breve!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-3 tracking-wider">
                          NOME
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-white/20 bg-transparent text-white placeholder-white/40 focus:border-white focus:outline-none transition-all duration-300"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-3 tracking-wider">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-white/20 bg-transparent text-white placeholder-white/40 focus:border-white focus:outline-none transition-all duration-300"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-3 tracking-wider">
                        ASSUNTO
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border border-white/20 bg-transparent text-white placeholder-white/40 focus:border-white focus:outline-none transition-all duration-300"
                        placeholder="Sobre o que é isso?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-3 tracking-wider">
                        MENSAGEM
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full px-4 py-4 border border-white/20 bg-transparent text-white placeholder-white/40 focus:border-white focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Conte-me sobre seu projeto..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 border border-white text-white hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 tracking-wider"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          ENVIANDO...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          ENVIAR MENSAGEM
                        </>
                      )}
                    </motion.button>
                  </form>
                )}

                {/* Abstract corner decorations */}
                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact