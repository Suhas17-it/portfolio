import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Star,
  Code,
  Award,
  ExternalLink,
  TrendingUp,
  Calendar
} from 'lucide-react';

export default function CodingProfiles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
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

  const platforms = [
    {
      name: "LeetCode",
      username: "kssuhas",
      rating: 1609,
      solved: 672,
      rank: "--x",
      link: "https://leetcode.com/kssuhas",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-900/20",
      borderColor: "border-orange-500/40",
      icon: Code,
      stats: [
        { label: "Easy", value: "241/886", percentage: 21 },
        { label: "Medium", value: "341/1885", percentage: 9 },
        { label: "Hard", value: "89/885", percentage: 11 }
      ],
      achievements: ["200 Days Badge", "Contest Rating 1600+", "Weekly Contest x15"]
    },
    {
      name: "Skill Rack",
      username: "Suhas_k_s",
      rating: "--",
      solved: 2322,
      link: "https://skillrack.com/faces/profile.xhtml",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-900/20",
      borderColor: "border-amber-500/40",
      achievements: ["1000 Bronze Medals", "Top 2000 in Skillrack", "250 + Daily Tests / Challenges"]
    },
    {
      name: "HackerRank",
      username: "suhas17",
      rating: "--",
      rank: "Gold in Java",
      link: "https://www.hackerrank.com/suhas17",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/40",
      icon: Award,
      stats: [
        { label: "Java", value: "Gold", percentage: 95 },
        { label: "C", value: "Silver" }
      ],
      achievements: ["5 Star Java Programmer", "Problem Solving (Intermediate)", "SQL(Intermediate)"]
    }
  ];

  // ✅ Dynamically computed values
  const totalSolved = platforms.reduce((sum, p) => sum + (p.solved || 0), 0);

  const validRatings = platforms
    .map(p => Number(p.rating))
    .filter(r => !isNaN(r));

  const avgRating = validRatings.length
    ? Math.round(validRatings.reduce((a, b) => a + b, 0) / validRatings.length)
    : "--";

  const overallStats = [
    { label: "Total Problems Solved", value: totalSolved.toString(), icon: Code },
    { label: "Contest Participations", value: "16", icon: Trophy }, // You can also make this dynamic
    { label: "Average Rating", value: avgRating.toString(), icon: Star },
    { label: "Active Days", value: "263 Days", icon: Calendar }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={cardVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Coding Profiles
          </h1>
          <p className="text-gray-400 text-lg">
            My journey across competitive programming platforms
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          variants={cardVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {overallStats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-[#1d1836] rounded-xl p-4 text-center border border-purple-500/20">
              <Icon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className={`${platform.bgColor} rounded-xl p-6 border ${platform.borderColor} hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300`}
            >
              {/* Platform Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${platform.color}`}>
                    {platform.icon && <platform.icon className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                    <p className="text-gray-400">@{platform.username}</p>
                  </div>
                </div>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* Rating and Rank */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{platform.rating}</div>
                  <div className="text-gray-400 text-sm">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{platform.solved}</div>
                  <div className="text-gray-400 text-sm">Solved</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.rank || "--"}
                  </div>
                  <div className="text-gray-400 text-sm">Rank</div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-6">
                {platform.stats?.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{stat.label}</span>
                      <span className="text-white">{stat.value}</span>
                    </div>
                    {stat.percentage && (
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.percentage}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${platform.color}`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp size={16} />
                  Recent Achievements
                </h4>
                <div className="space-y-2">
                  {platform.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center gap-2">
                      <Star size={12} className="text-yellow-500" />
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Activity Graph Placeholder */}
        <motion.div
          variants={cardVariants}
          className="mt-12 bg-[#1d1836] rounded-xl p-6 border border-purple-500/20"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="text-purple-500" />
            Coding Activity
          </h3>
          <div className="h-32 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Activity graph visualization coming soon...</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
