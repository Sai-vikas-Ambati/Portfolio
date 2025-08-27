'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '15+' },
  ]

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Built responsive user interfaces and implemented modern design systems.',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2019 - 2020',
      description: 'Developed features for web applications and collaborated with cross-functional teams.',
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Born: March 15, 1995</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Location: San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Experience: 5+ Years</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Degree: Computer Science</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center glass-effect rounded-xl p-6"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-gradient">Work Experience</h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-primary-500/30"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <p className="text-primary-400 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              innovative digital solutions. My journey in technology began with a curiosity 
              about how things work, which evolved into a career building applications that 
              make a difference.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community. 
              I believe in continuous learning and staying up-to-date with the latest 
              industry trends and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 