'use client'

import { motion } from 'framer-motion'
import { Code, Database, Palette, Cloud, Smartphone, Globe } from 'lucide-react'

interface SkillsProps {
  setActiveSection: (section: string) => void
}

export default function Skills({ setActiveSection }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-8 h-8" />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Sketch', level: 75 },
        { name: 'Prototyping', level: 90 },
        { name: 'User Research', level: 85 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Terraform', level: 70 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 80 },
        { name: 'iOS Development', level: 75 },
        { name: 'Android Development', level: 75 },
        { name: 'Mobile UI/UX', level: 85 },
      ]
    },
    {
      title: 'Other Technologies',
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: 'GraphQL', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Git', level: 90 },
        { name: 'Testing', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-primary-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-gradient">
              Additional Skills & Tools
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Redux', 'GraphQL',
                'Firebase', 'Vercel', 'Netlify', 'Jest', 'Cypress', 'Storybook',
                'Webpack', 'Vite', 'NPM', 'Yarn', 'Linux', 'MacOS',
                'VS Code', 'Postman', 'Insomnia', 'Chrome DevTools', 'Figma', 'Adobe Creative Suite'
              ].map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center p-3 rounded-lg bg-white/5 hover:bg-primary-500/10 transition-colors duration-300"
                >
                  <span className="text-sm text-gray-300">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 