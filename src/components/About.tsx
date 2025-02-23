import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  const certifications = [
    { name: 'AI for Everyone', issuer: 'Coursera' },
    { name: 'Generative AI for Everyone', issuer: 'Coursera' },
    { name: 'ChatGPT Prompt Engineering for Developers', issuer: 'DeepLearning.AI' },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
      institution: 'Newton School of Technology, ADYPU',
      year: '2024-2028',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm Adarsh Priydarsi, currently in my first year of B.Tech in CSE (AI & ML) at 
                Newton School of Technology, ADYPU. My passion lies in AI, Machine Learning, and 
                developing full-stack web applications. I believe in the power of technology to 
                transform lives and solve real-world challenges.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="text-blue-600" size={24} />
                Mission Statement
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am committed to becoming an AI/ML Engineer by solving real-world problems through 
                innovative technologies. My goal is to contribute to cutting-edge AI advancements 
                while building scalable and efficient solutions that make a positive impact.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fun Facts</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Ranked 1st in university on InterviewBit</li>
                <li>Passionate about AI innovations</li>
                <li>Love to explore new technologies</li>
                <li>Active participant in coding competitions</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-blue-600" size={24} />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400">{edu.year}</p>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="text-blue-600" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg"
                  >
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;