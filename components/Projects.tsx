'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, Calendar, Users, Code, Globe } from 'lucide-react'

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

interface Project {
  id: number
  title: string
  description: string
  shortDescription: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  date: string
  teamSize: string
  category: string
  features: string[]
}

export default function Projects({ setActiveSection }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing with Stripe, and an admin dashboard for product management. The platform includes advanced search, filtering, and a responsive design optimized for all devices.",
      shortDescription: "Modern e-commerce platform with payment processing",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      date: "2024",
      teamSize: "Solo Project",
      category: "Full Stack",
      features: [
        "Real-time inventory management",
        "Secure payment processing with Stripe",
        "Admin dashboard for product management",
        "Advanced search and filtering",
        "Responsive design for all devices",
        "Order tracking and notifications"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase, it includes project boards, time tracking, and progress analytics.",
      shortDescription: "Collaborative task management with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["React", "Firebase", "TypeScript", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://task-app-demo.com",
      githubUrl: "https://github.com/username/task-management",
      date: "2024",
      teamSize: "3 Developers",
      category: "Frontend",
      features: [
        "Real-time collaboration",
        "Drag-and-drop task management",
        "Project boards and kanban views",
        "Time tracking and analytics",
        "Team member management",
        "Progress reporting"
      ]
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "An intelligent chat application powered by OpenAI's GPT API, featuring natural language processing, conversation history, and customizable AI personalities. The app includes user authentication, message encryption, and a modern chat interface.",
      shortDescription: "AI-powered chat with natural language processing",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      technologies: ["Next.js", "OpenAI API", "Socket.io", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/username/ai-chat-app",
      date: "2024",
      teamSize: "Solo Project",
      category: "AI/ML",
      features: [
        "OpenAI GPT integration",
        "Real-time messaging",
        "Conversation history",
        "Customizable AI personalities",
        "User authentication",
        "Message encryption"
      ]
    },
    {
      id: 4,
      title: "Fitness Tracking Dashboard",
      description: "A comprehensive fitness tracking application with workout planning, progress analytics, and social features. The dashboard provides detailed insights into user performance, nutrition tracking, and goal setting capabilities.",
      shortDescription: "Comprehensive fitness tracking with analytics",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Chart.js", "Expo"],
      liveUrl: "https://fitness-app-demo.com",
      githubUrl: "https://github.com/username/fitness-tracker",
      date: "2023",
      teamSize: "4 Developers",
      category: "Mobile",
      features: [
        "Workout planning and tracking",
        "Progress analytics and charts",
        "Nutrition tracking",
        "Social features and challenges",
        "Goal setting and achievements",
        "Cross-platform mobile app"
      ]
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "A modern real estate platform with property listings, virtual tours, and advanced search capabilities. Features include interactive maps, property comparisons, and a comprehensive admin system for real estate agents.",
      shortDescription: "Modern real estate platform with virtual tours",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Google Maps API", "AWS S3"],
      liveUrl: "https://real-estate-demo.com",
      githubUrl: "https://github.com/username/real-estate-platform",
      date: "2023",
      teamSize: "6 Developers",
      category: "Full Stack",
      features: [
        "Property listings and search",
        "Virtual tour integration",
        "Interactive maps",
        "Property comparison tools",
        "Agent dashboard",
        "Advanced filtering system"
      ]
    },
    {
      id: 6,
      title: "Crypto Portfolio Tracker",
      description: "A cryptocurrency portfolio tracking application with real-time price updates, portfolio analytics, and trading history. Features include price alerts, portfolio diversification analysis, and integration with multiple exchanges.",
      shortDescription: "Cryptocurrency portfolio tracking with real-time data",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      technologies: ["React", "WebSocket", "CoinGecko API", "Chart.js", "Firebase"],
      liveUrl: "https://crypto-tracker-demo.com",
      githubUrl: "https://github.com/username/crypto-portfolio",
      date: "2023",
      teamSize: "2 Developers",
      category: "Finance",
      features: [
        "Real-time price updates",
        "Portfolio analytics",
        "Trading history tracking",
        "Price alerts",
        "Portfolio diversification",
        "Multiple exchange integration"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative glass-effect rounded-2xl overflow-hidden card-hover cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary-500/20 text-primary-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/90 via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-400">{selectedProject.shortDescription}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                {/* Project Image */}
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary-400" />
                        <span className="text-gray-300">Date: {selectedProject.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary-400" />
                        <span className="text-gray-300">Team: {selectedProject.teamSize}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Code className="w-5 h-5 text-primary-400" />
                        <span className="text-gray-300">Category: {selectedProject.category}</span>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-4 mt-6">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Description</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe className="w-5 h-5" />
                    View Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 