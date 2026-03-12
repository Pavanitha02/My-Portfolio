import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, GitBranch, Layout, Server, Cpu,
  Brain, Users, Clock, MessageSquare 
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', icon: <Layout className="text-orange-500" /> },
    { name: 'CSS', icon: <Code2 className="text-blue-500" /> },
    { name: 'JavaScript', icon: <Code2 className="text-yellow-400" /> },
    { name: 'React', icon: <Code2 className="text-cyan-400" /> },
    { name: 'Node.js', icon: <Server className="text-green-500" /> },
    { name: 'Express', icon: <Server className="text-gray-400" /> },
    { name: 'Firebase', icon: <Database className="text-orange-400" /> },
    { name: 'Supabase', icon: <Database className="text-emerald-500" /> },
    { name: 'Git', icon: <GitBranch className="text-red-500" /> },
    { name: 'GitHub', icon: <GitBranch className="text-white" /> },
    { name: 'VS Code', icon: <Cpu className="text-blue-600" /> },
    { name: 'Postman', icon: <MessageSquare className="text-orange-600" /> },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <Brain className="text-purple-400" /> },
    { name: 'Teamwork', icon: <Users className="text-indigo-400" /> },
    { name: 'Time Management', icon: <Clock className="text-pink-400" /> },
    { name: 'Communication', icon: <MessageSquare className="text-blue-400" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Technical Arsenal</h2>
          <div className="w-20 h-1.5 bg-accent-blue mx-auto rounded-full"></div>
        </header>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20"
        >
          {technicalSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-accent-blue/50 transition-colors cursor-default"
            >
              {skill.icon}
              <span className="font-medium text-slate-300">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <header className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Soft Skills</h2>
          <div className="w-20 h-1.5 bg-accent-purple mx-auto rounded-full"></div>
        </header>

        <div className="grid md:grid-cols-4 gap-8">
          {softSkills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-secondary/50 border border-white/5 hover:bg-secondary transition-all text-center"
            >
              <div className="flex justify-center mb-4 italic">
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
