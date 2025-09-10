import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Database, 
  Palette, 
  Smartphone, 
  Globe, 
  Zap,
  GitBranch,
  Shield,
  Cpu,
  Cloud
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Palette,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Framer Motion', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Expo', level: 80 },
        { name: 'Flutter', level: 60 },
        { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 65 }
      ]
    },
    {
      title: 'DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Vercel', level: 90 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'Linux', level: 80 }
      ]
    }
  ]

  const tools = [
    { name: 'Git', icon: GitBranch, color: 'bg-orange-500' },
    { name: 'VS Code', icon: Code2, color: 'bg-blue-500' },
    { name: 'Figma', icon: Palette, color: 'bg-purple-500' },
    { name: 'Postman', icon: Globe, color: 'bg-green-500' },
    { name: 'Jest', icon: Shield, color: 'bg-red-500' },
    { name: 'Terminal', icon: Cpu, color: 'bg-gray-600' }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Habilidades & <span className="text-gradient">Tecnologias</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tecnologias e ferramentas que uso para criar soluções incríveis
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            duration: 1,
                            ease: 'easeOut'
                          }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Ferramentas que Uso
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills