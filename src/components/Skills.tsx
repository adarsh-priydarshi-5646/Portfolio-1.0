import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Brain, PenTool as Tool, Users } from 'lucide-react';

const SkillBar = ({ name, percentage, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-6"
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <Icon size={20} className="text-blue-600" />
        <span className="font-medium">{name}</span>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const technicalSkills = [
    { name: 'Frontend Development', percentage: 85, icon: Code },
    { name: 'Backend Development', percentage: 80, icon: Server },
    { name: 'Database Management', percentage: 75, icon: Database },
    { name: 'AI & ML', percentage: 80, icon: Brain },
  ];

  const programmingLanguages = [
    { name: 'Python', percentage: 90 },
    { name: 'JavaScript/TypeScript', percentage: 85 },
    { name: 'C++', percentage: 80 },
    { name: 'HTML/CSS', percentage: 90 },
  ];

  const tools = [
    'Git & GitHub',
    'VS Code',
    'Terminal',
    'Canva',
    'Jupyter Notebook',
    'Postman',
  ];

  const softSkills = [
    'Team Management',
    'Communication',
    'Problem Solving',
    'Time Management',
    'Adaptability',
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}

            <h3 className="text-xl font-semibold mb-6 mt-12">Programming Languages</h3>
            {programmingLanguages.map((lang, index) => (
              <SkillBar key={index} {...lang} icon={Code} />
            ))}
          </div>

          <div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Tool className="text-blue-600" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Users className="text-blue-600" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;