'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection('contact')
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 mb-8 md:mb-0"
          >
            <img
              src="/profile.jpg"
              alt="Ambati Sai Vikas profile picture"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary-500 shadow-xl bg-dark-800"
              style={{ boxShadow: '0 4px 32px 0 rgba(14,165,233,0.15)' }}
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center md:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-primary-400 text-lg md:text-xl font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">Ambati Sai Vikas</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8"
            >
              Full Stack Developer & UI/UX Designer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed"
            >
              I create beautiful, functional, and user-centered digital experiences. 
              Passionate about clean code, innovative design, and cutting-edge technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start mb-12"
            >
              <motion.button
                onClick={scrollToContact}
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="group flex items-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-full hover:bg-primary-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex justify-center md:justify-start gap-6"
            >
              <motion.a
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-primary-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6 text-gray-300 hover:text-primary-400" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-primary-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-primary-400" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-primary-400 rounded-full opacity-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-primary-500 rounded-full opacity-40"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-primary-300 rounded-full opacity-80"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
      </div>
    </section>
  )
} 