import React from 'react';
import { motion } from 'framer-motion';

// C++ Code snippets floating animation
const CodeSnippet = ({ code, delay, x, y }: { code: string; delay: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0.3, 0.7, 0.3],
      y: [y, y - 20, y],
      x: [x, x + 10, x]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute text-purple-400/30 font-mono text-sm pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    {code}
  </motion.div>
);

// Git command animations
const GitCommand = ({ command, delay, x, y }: { command: string; delay: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0.4, 0.8, 0.4],
      scale: [0.8, 1, 0.8],
      rotate: [0, 2, -2, 0]
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute text-green-400/40 font-mono text-xs pointer-events-none bg-gray-900/20 px-2 py-1 rounded border border-green-500/20"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    $ {command}
  </motion.div>
);

// DSA Structure animations
const DSAElement = ({ type, delay, x, y }: { type: string; delay: number; x: number; y: number }) => {
  const getElement = () => {
    switch (type) {
      case 'array':
        return (
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-8 h-8 border border-purple-500/40 bg-purple-900/20 flex items-center justify-center text-xs text-purple-300"
                animate={{ 
                  scale: [1, 1.1, 1],
                  borderColor: ['rgba(168, 85, 247, 0.4)', 'rgba(168, 85, 247, 0.8)', 'rgba(168, 85, 247, 0.4)']
                }}
                transition={{ duration: 2, delay: delay + i * 0.2, repeat: Infinity }}
              >
                {i}
              </motion.div>
            ))}
          </div>
        );
      case 'tree':
        return (
          <div className="relative">
            <motion.div 
              className="w-6 h-6 rounded-full border-2 border-pink-500/60 bg-pink-900/20 flex items-center justify-center text-xs text-pink-300"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, delay, repeat: Infinity }}
            >
              A
            </motion.div>
            <div className="flex gap-4 mt-2 ml-[-16px]">
              <motion.div 
                className="w-5 h-5 rounded-full border border-pink-400/40 bg-pink-900/10 flex items-center justify-center text-xs text-pink-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, delay: delay + 0.5, repeat: Infinity }}
              >
                B
              </motion.div>
              <motion.div 
                className="w-5 h-5 rounded-full border border-pink-400/40 bg-pink-900/10 flex items-center justify-center text-xs text-pink-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, delay: delay + 1, repeat: Infinity }}
              >
                C
              </motion.div>
            </div>
          </div>
        );
      case 'stack':
        return (
          <div className="flex flex-col-reverse gap-1">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-12 h-6 border border-blue-500/40 bg-blue-900/20 flex items-center justify-center text-xs text-blue-300"
                animate={{ 
                  y: [0, -2, 0],
                  backgroundColor: ['rgba(59, 130, 246, 0.2)', 'rgba(59, 130, 246, 0.4)', 'rgba(59, 130, 246, 0.2)']
                }}
                transition={{ duration: 2.5, delay: delay + i * 0.3, repeat: Infinity }}
              >
                {i}
              </motion.div>
            ))}
          </div>
        );
      case 'graph':
        return (
          <div className="relative">
            {/* Graph nodes */}
            <motion.div 
              className="w-4 h-4 rounded-full border border-cyan-500/60 bg-cyan-900/20 absolute"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, delay, repeat: Infinity }}
            />
            <motion.div 
              className="w-4 h-4 rounded-full border border-cyan-500/60 bg-cyan-900/20 absolute top-4 left-6"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, delay: delay + 0.5, repeat: Infinity }}
            />
            <motion.div 
              className="w-4 h-4 rounded-full border border-cyan-500/60 bg-cyan-900/20 absolute top-8 left-2"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, delay: delay + 1, repeat: Infinity }}
            />
            {/* Graph edges */}
            <div className="absolute top-2 left-2 w-6 h-0.5 bg-cyan-500/30 rotate-45" />
            <div className="absolute top-6 left-1 w-4 h-0.5 bg-cyan-500/30 rotate-90" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay, duration: 1 }}
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {getElement()}
    </motion.div>
  );
};

// Floating particles
const Particle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 0.6, 0],
      scale: [0.5, 1, 0.5],
      x: [0, Math.random() * 50 - 25, 0],
      y: [0, Math.random() * 50 - 25, 0]
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute w-1 h-1 bg-purple-400 rounded-full"
    style={{ left: `${x}%`, top: `${y}%` }}
  />
);

export default function Background() {
  const cppSnippets = [
    '#include <iostream>',
    'vector<int> arr;',
    'class Node {',
    'int* ptr = new int;',
    'template<class T>',
    'std::sort(v.begin(), v.end());',
    'for(auto& x : vec)',
    'return 0;',
    'std::map<int, int>',
    'priority_queue<int>',
    'unordered_set<int>'
  ];

  const gitCommands = [
    'git add .',
    'git commit -m',
    'git push origin',
    'git pull',
    'git branch',
    'git merge',
    'git status',
    'git log --oneline'
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* C++ Code snippets */}
      {cppSnippets.map((code, i) => (
        <CodeSnippet
          key={i}
          code={code}
          delay={i * 0.5}
          x={Math.random() * 80 + 10}
          y={Math.random() * 80 + 10}
        />
      ))}

      {/* Git Commands */}
      {gitCommands.map((command, i) => (
        <GitCommand
          key={i}
          command={command}
          delay={i * 0.7 + 2}
          x={Math.random() * 70 + 15}
          y={Math.random() * 70 + 15}
        />
      ))}

      {/* DSA Elements */}
      <DSAElement type="array" delay={1} x={15} y={20} />
      <DSAElement type="tree" delay={2} x={75} y={25} />
      <DSAElement type="stack" delay={3} x={20} y={70} />
      <DSAElement type="array" delay={4} x={80} y={75} />
      <DSAElement type="tree" delay={5} x={50} y={15} />
      <DSAElement type="graph" delay={6} x={60} y={60} />
      <DSAElement type="stack" delay={7} x={10} y={45} />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Particle
          key={i}
          delay={i * 0.2}
          x={Math.random() * 100}
          y={Math.random() * 100}
        />
      ))}

      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10" />
    </div>
  );
}