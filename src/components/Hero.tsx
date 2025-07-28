import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

// C++ and DSA themed icons/elements for the hero section
const TechIcon = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.7, scale: 1 }}
    transition={{ delay, duration: 0.8, type: "spring" }}
    className="absolute text-purple-400/60 pointer-events-none"
  >
    {children}
  </motion.div>
);

export default function Hero() {
  const profileVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "backOut"
      }
    })
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* C++ and DSA themed decorative elements */}
      <TechIcon delay={1.5}>
        <div className="absolute top-20 left-20 font-mono text-2xl">{'{ }'}</div>
      </TechIcon>
      <TechIcon delay={2}>
        <div className="absolute top-32 right-32 font-mono text-xl">[]</div>
      </TechIcon>
      <TechIcon delay={2.5}>
        <div className="absolute bottom-40 left-32 font-mono text-lg">{'->'}
        </div>
      </TechIcon>
      <TechIcon delay={3}>
        <div className="absolute bottom-32 right-20 font-mono text-xl">*ptr</div>
      </TechIcon>
      <TechIcon delay={1.8}>
        <div className="absolute top-1/2 left-10 font-mono text-sm">O(log n)</div>
      </TechIcon>
      <TechIcon delay={2.2}>
        <div className="absolute top-1/3 right-10 font-mono text-sm">vector&lt;int&gt;</div>
      </TechIcon>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.img
          variants={profileVariants}
          initial="hidden"
          animate="visible"
          src="/images/profile.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500 hover:border-pink-500 transition-colors duration-300"
        />
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        >
          Suhas K S
        </motion.h1>
        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl text-gray-400 mb-2"
        >
          Information Technology Student at Thiagarajar College of Engineering
        </motion.p>
        <motion.p
          custom={2.5}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg text-purple-400 mb-6 font-mono"
        >
          C++ Developer | DSA Enthusiast
        </motion.p>
        <motion.div
          className="flex justify-center gap-4 mb-8"
        >
          {[
            { icon: Github, href: "https://github.com/Suhas17-it/Suhas-17" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/suhas-senthil-kumar/" },
            { icon: Mail, href: "mailto:suhassenthil17706@gmail.com" }
          ].map(({ icon: Icon, href }, index) => (  
            <motion.a
              key={href}
              custom={index}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              href={href}
              target="_blank"
              className="bg-[#1d1836] p-3 rounded-full text-white hover:text-purple-500 hover:bg-[#2a2649] transition-all duration-300"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}