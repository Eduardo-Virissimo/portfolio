import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-custom">
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Abstract Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border-2 border-white relative group">
                  <div className="absolute inset-1 border border-white/50"></div>
                  <div className="absolute inset-2 border border-white/30"></div>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wider">
                  EDUARDO
                </h3>
              </div>
              <p className="text-white/60 tracking-wider">
                DESENVOLVEDOR FULL STACK
              </p>
            </div>

            {/* Abstract Social Links */}
            <div className="flex gap-6">
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
                  className="w-12 h-12 border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={18} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Abstract Bottom */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-px bg-white/20"></div>
              <div className="w-2 h-2 bg-white rotate-45"></div>
              <div className="w-16 h-px bg-white/20"></div>
            </div>
            
            <p className="text-white/60 flex items-center justify-center gap-2 tracking-wider">
              © {currentYear} EDUARDO. FEITO COM{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-white"
              >
                <Heart size={16} />
              </motion.span>{' '}
              E CAFÉ ☕
            </p>
            
            <div className="mt-4 text-white/40 text-sm tracking-wider">
              CONSTRUÍDO COM REACT + FRAMER MOTION
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer