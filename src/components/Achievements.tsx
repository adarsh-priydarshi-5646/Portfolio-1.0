import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Code2, Brain, Medal } from 'lucide-react';

const AchievementCard = ({ title, icon: Icon, description, stats }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center gap-4 mb-4">
      <motion.div 
        className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon size={24} className="text-blue-600 dark:text-blue-400" />
      </motion.div>
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="space-y-2">
      {stats.map((stat, index) => (
        <motion.div 
          key={index} 
          className="flex items-center justify-between"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <span className="text-gray-600 dark:text-gray-300">{stat.label}</span>
          <motion.span 
            className="font-semibold text-blue-600 dark:text-blue-400"
            whileHover={{ scale: 1.1 }}
          >
            {stat.value}
          </motion.span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const CertificationCard = ({ title, issuer, date, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
    whileHover={{ scale: 1.02 }}
  >
    <motion.div 
      className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon size={24} className="text-blue-600 dark:text-blue-400" />
    </motion.div>
    <div>
      <h4 className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{issuer}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{date}</p>
    </div>
  </motion.div>
);

const Achievements = () => {
  const competitiveProgramming = {
    title: 'Competitive Programming',
    icon: Trophy,
    description: 'Consistently solving complex algorithmic problems across multiple platforms.',
    stats: [
      { label: 'HackerRank (Problem Solving)', value: '3⭐' },
      { label: 'HackerRank (Python)', value: '4⭐' },
      { label: 'CodeChef Rating', value: '2⭐' },
      { label: 'Codeforces Rating', value: '550+' },
      { label: 'InterviewBit Rank', value: '1st' },
    ],
  };

  const certifications = [
    {
      title: 'AI for Everyone',
      issuer: 'Coursera',
      date: 'December 2024',
      icon: Brain,
    },
    {
      title: 'Generative AI for Everyone',
      issuer: 'Coursera',
      date: 'January 2024',
      icon: Brain,
    },
    {
      title: 'ChatGPT Prompt Engineering for Developers',
      issuer: 'DeepLearning.AI',
      date: 'February 2024',
      icon: Code2,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        <div className="mb-12">
          <AchievementCard {...competitiveProgramming} />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;