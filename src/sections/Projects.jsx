import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Recipe Sharing Platform",
      description: "A full-stack web application where users can create, browse, like, comment on, and bookmark recipes.",
      tech: ["React", "Node.js", "Express", "Supabase"],
      github: "https://github.com/Pavanitha02/Recipe-sharing-Platform-FE",
      backend: "https://github.com/Pavanitha02/Recipe-Sharing-Platform-BE",
      live: "https://recipe-sharing-platform-fe-virid.vercel.app/",
      image: "", 
      video: "/Recipe.mp4", 
    },
    {
      title: "Tuition Management System",
      description: "A dashboard system that manages student attendance and automatically sends WhatsApp notifications to parents.",
      tech: ["React"],
      github: "https://github.com/Pavanitha02/Student-Attendance",
      live: "https://student-attendance-fwyx.vercel.app/login",
      image: "", 
      video: "/Student.mp4", 
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-accent-blue mx-auto rounded-full"></div>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:border-accent-blue/30 transition-all"
            >
              <div className="aspect-video bg-primary overflow-hidden relative">
                {project.video ? (
                  <video 
                    src={project.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className={`absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center text-slate-700 font-bold text-xl uppercase tracking-widest ${project.image || project.video ? 'hidden' : 'flex'}`}>
                   {project.title}
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-accent-blue">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-8 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors">
                    <Github size={18} />
                    {project.backend ? 'Frontend' : 'Source Code'}
                  </a>
                  {project.backend && (
                    <a href={project.backend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors">
                      <Github size={18} />
                      Backend
                    </a>
                  )}
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-accent-blue transition-colors">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
