import React from 'react';
import { motion } from 'framer-motion';


import { 
  Code2, 
  Brain,
  Rocket,
  Coffee,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

export default function Profile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skills = [
    { name: "Frontend", level: 85 },
    { name: "Problem Solving", level: 90 },
    { name: "UI/UX Design", level: 80 },
    { name: "Machine Learning", level: 80 }
  ];

  const interests = [
    {
      icon: Code2,
      title: "Coding",
      description: "Passionate about creating clean, efficient, and scalable code"
    },
    {
      icon: Brain,
      title: "AI/ML",
      description: "Exploring machine learning and its applications"
    },
    {
      icon: Rocket,
      title: "Space Tech",
      description: "Fascinated by space technology and exploration"
    },
    {
      icon: Coffee,
      title: "Coffee & Code",
      description: "Perfect combination for problem solving"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <img
            src="/public/images/profile.png"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500"
          />
          <h1 className="text-4xl font-bold text-white mb-2">Suhas K S</h1>
          <p className="text-gray-400 mb-4">Dsa Enthusiast | Web Developer</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Suhas17-it/Suhas-17" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/suhas-senthil-kumar/" },
              { icon: Mail, href: "mailto:suhassenthil17706@gmail.com" }
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href={href}
                target="_blank"
                className="text-white hover:text-purple-500 transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div 
          variants={itemVariants}
          className="bg-[#1d1836] rounded-xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Bio</h2>
          <p className="text-gray-400 leading-relaxed">
           Aspiring full-stack developer and enthusiastic problem solver, currently pursuing B.Tech in Information Technology at Thiagarajar College of Engineering. Skilled in React, Node.js, and Java, with hands-on experience in building projects like a museum chatbot and a malware detection framework. Passionate about competitive programming, open-source contributions, and always eager to learn and share through technical blogs.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div 
          variants={itemVariants}
          className="bg-[#1d1836] rounded-xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
          <div className="space-y-4">
            {skills.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-purple-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#2a2649] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div 
          variants={itemVariants}
          className="bg-[#1d1836] rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interests.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-[#2a2649] flex items-start gap-4"
              >
                <div className="text-purple-500">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}