import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react'

const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-950 py-20 px-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">Contact Me</h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Reach out to me for any opportunities or collaborations. I'm always open to discussing new projects and ideas.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
                    <a 
                        href="mailto:ravien.dalpatadu@gmail.com" 
                        className="flex items-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-cyan-900/20 hover:shadow-cyan-500/40 hover:-translate-y-1"
                    >
                        <Mail size={20} />
                        ravien.dalpatadu@gmail.com
                    </a>
                    <a 
                        href="tel:+94701949400" 
                        className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 hover:-translate-y-1"
                    >
                        <span>📞</span>
                        +94 70 194 9400
                    </a>
                </div>

                <div className="flex justify-center gap-8 mb-12">
                    <a href="https://github.com/Ravien" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300 border border-slate-800 hover:border-slate-700">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ravien-dalpatadu-8718b7223/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-all duration-300 border border-slate-800 hover:border-slate-700">
                        <Linkedin size={24} />
                    </a>
                </div>

                <p className="text-slate-600 text-sm">
                    © {new Date().getFullYear()} Ravien Dalpatadu. All rights reserved.
                </p>
            </motion.div>
        
            <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                className="absolute bottom-10 right-0 md:right-10 p-3 bg-slate-800 text-cyan-400 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors"
                aria-label="Back to top"
            >
                <ArrowUp size={20} />
            </motion.a>
        </div>
    </footer>
  )
}

export default Contact
