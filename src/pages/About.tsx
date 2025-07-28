import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Trophy } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: BookOpen,
              title: "Education",
              description: "Currently pursuing B.Tech in Information Technology (2023-2027) with a CGPA of 8.6"
            },
            {
              icon: Code,
              title: "Skills",
              description: "C++, React, TypeScript, Node.js, Java, Data Structures & Algorithms,Object- Oriented Programming"
            },
            {
              icon: Trophy,
              title: "Achievements",
              description: "AIR 66 in Unstop Weekly Coding Contest"
            }
          ].map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-[#1d1836] p-6 rounded-xl transform-gpu hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
                className="w-12 h-12 text-purple-500 mb-4"
              >
                <Icon className="w-full h-full" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}