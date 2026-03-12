import React from 'react';
import { motion } from 'framer-motion';
import { Github, FileText, ExternalLink, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent-blue font-semibold mb-4 tracking-wider uppercase">Full Stack Web Developer</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pavanitha <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Kalasani</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Passionate Full Stack Developer focused on building modern, responsive web applications using React and Node.js.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 bg-accent-blue hover:bg-blue-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/20 flex items-center gap-2">
              View Projects
            </a>
            <a href="https://flowcv.com/resume/flq8352gg7ht" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white/10 hover:bg-white/5 rounded-full font-semibold transition-all flex items-center gap-2">
              <FileText size={20} />
              Download Resume
            </a>
            <a href="https://github.com/Pavanitha02" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 hover:bg-white/5 rounded-full transition-all text-slate-300 hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pavanitha-kalasani-07091a323/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 hover:bg-white/5 rounded-full transition-all text-slate-300 hover:text-white">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue to-accent-purple rounded-full animate-pulse blur-2xl opacity-20"></div>
            <div className="relative w-full h-full rounded-full border-2 border-white/10 p-4 ring-1 ring-white/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-secondary flex items-center justify-center">
                {/* Replace 'profile.jpg' with your actual image file in the public folder */}
                <img 
                  src="/Profile.jpg" 
                  alt="Pavanitha Kalasani" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-4xl font-bold text-slate-600">PK</span>';
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
