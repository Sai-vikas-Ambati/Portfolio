'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'

interface ResearchPaper {
  title: string
  venue: string
  year: string
  abstract: string
  link: string
}

const researchPapers: ResearchPaper[] = [
  {
    title: 'Deep Learning for Medical Image Analysis',
    venue: 'IEEE Transactions on Medical Imaging',
    year: '2023',
    abstract:
      'This paper proposes a novel deep learning architecture for automated diagnosis from medical images, achieving state-of-the-art results on multiple datasets.',
    link: 'https://doi.org/10.1109/TMI.2023.1234567',
  },
  {
    title: 'Blockchain-based Secure Data Sharing in IoT',
    venue: 'ACM Conference on IoT Security',
    year: '2022',
    abstract:
      'We present a blockchain-enabled framework for secure and scalable data sharing in Internet of Things environments, addressing privacy and trust issues.',
    link: 'https://doi.org/10.1145/IoTSEC.2022.7654321',
  },
  {
    title: 'Optimizing Edge Computing for Smart Cities',
    venue: 'Elsevier Future Generation Computer Systems',
    year: '2021',
    abstract:
      'This work explores edge computing strategies to improve latency and resource utilization in smart city applications, validated through real-world deployments.',
    link: 'https://doi.org/10.1016/j.future.2021.9876543',
  },
]

export default function Research() {
  return (
    <section id="research" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Selected peer-reviewed research papers and publications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, idx) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 card-hover flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-primary-400" />
                  <span className="text-primary-400 font-semibold text-sm">{paper.venue} &middot; {paper.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {paper.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-4">
                  {paper.abstract}
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:underline font-medium mt-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Publication
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 