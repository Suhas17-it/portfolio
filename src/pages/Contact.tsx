import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const inputVariants = {
    hidden: { 
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
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
          Get In Touch
        </motion.h2>
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              variants={inputVariants}
              type="text"
              placeholder="Name"
              className="bg-[#1d1836] text-white rounded-lg p-4 outline-none border border-[#2a2649] focus:border-purple-500 transition-all transform-gpu hover:shadow-lg hover:shadow-purple-500/20"
            />
            <motion.input
              variants={inputVariants}
              type="email"
              placeholder="Email"
              className="bg-[#1d1836] text-white rounded-lg p-4 outline-none border border-[#2a2649] focus:border-purple-500 transition-all transform-gpu hover:shadow-lg hover:shadow-purple-500/20"
            />
          </div>
          <motion.textarea
            variants={inputVariants}
            rows={6}
            placeholder="Your message"
            className="w-full bg-[#1d1836] text-white rounded-lg p-4 outline-none border border-[#2a2649] focus:border-purple-500 transition-all transform-gpu hover:shadow-lg hover:shadow-purple-500/20"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto group hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Send Message
            <motion.div
              animate={{ 
                x: [0, 5, 0],
                transition: { 
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear"
                }
              }}
            >
              <Send size={20} />
            </motion.div>
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}