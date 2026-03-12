import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          PK.
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-sm text-slate-500">
          © {currentYear} Pavanitha Kalasani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
