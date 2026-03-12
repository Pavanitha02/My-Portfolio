import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video rounded-3xl overflow-hidden glass relative group"
          >
            <img 
              src="/workspace.png" 
              alt="Workplace Setup" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-accent-blue font-semibold mb-2 uppercase tracking-tight">About Me</h3>
            <h2 className="text-4xl font-bold mb-6">Designing the Future, One Page at a Time</h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Skilled Full Stack Developer focused on building responsive and user-friendly web applications. 
                Experienced in developing end-to-end solutions using React, Node.js, Express, and Supabase.
              </p>
              <p>
                Strong in problem solving, teamwork, and building scalable digital products. 
                I believe in clean code and intuitive user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
