'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, ExternalLink, Mail, Linkedin, Twitter } from 'lucide-react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Research from '@/components/Research'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <main className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="relative">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Hero setActiveSection={setActiveSection} />
          <About setActiveSection={setActiveSection} />
          <Skills setActiveSection={setActiveSection} />
          <Research />
          <Projects setActiveSection={setActiveSection} />
          <Contact setActiveSection={setActiveSection} />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-primary-400" />
        </motion.div>
      </div>
    </main>
  )
} 