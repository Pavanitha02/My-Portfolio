import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-accent-blue mx-auto rounded-full"></div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Let's discuss your project</h3>
            <p className="text-slate-400 text-lg max-w-md">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out via email or phone!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Email</div>
                  <div className="text-lg">pavanitha.kalasani@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Phone</div>
                  <div className="text-lg">8885274606</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Location</div>
                  <div className="text-lg">Anantapur</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a href="https://github.com/Pavanitha02" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pavanitha-kalasani-07091a323/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400">Message</label>
              <textarea rows="4" placeholder="How can I help you?" className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <Send size={20} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
