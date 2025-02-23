import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Brain, Server } from 'lucide-react';

const projects = [
  {
    title: 'Chatbot AI',
    description: 'An intelligent chatbot powered by machine learning for automated customer support.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'React'],
    category: 'AI/ML',
    features: [
      'Natural Language Processing',
      'Context-aware responses',
      'Multi-language support',
      'Real-time chat interface',
    ],
    challenges: [
      'Implementing NLP algorithms',
      'Training with limited data',
      'Optimizing response time',
    ],
    github: 'https://github.com/yourusername/chatbot-ai',
    demo: 'https://demo-url.com',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Sifra (Virtual Assistant)',
    description: 'A personal virtual assistant with voice recognition and task automation capabilities.',
    techStack: ['Python', 'Speech Recognition', 'PyQt'],
    category: 'AI/ML',
    features: [
      'Voice commands',
      'Task automation',
      'Calendar integration',
      'Weather updates',
    ],
    challenges: [
      'Implementing voice recognition',
      'Creating natural responses',
      'System integration',
    ],
    github: 'https://github.com/yourusername/sifra',
    demo: 'https://demo-url.com',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'KM Computers',
    description: 'A full-stack e-commerce website for a computer hardware store.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'Full-Stack',
    features: [
      'Product catalog',
      'User authentication',
      'Shopping cart',
      'Order management',
    ],
    challenges: [
      'Implementing secure payments',
      'Real-time inventory',
      'Performance optimization',
    ],
    github: 'https://github.com/yourusername/km-computers',
    demo: 'https://demo-url.com',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Quiz Website',
    description: 'An interactive quiz platform with real-time scoring and leaderboards.',
    techStack: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'Full-Stack',
    features: [
      'Multiple quiz categories',
      'Real-time scoring',
      'Leaderboards',
      'User profiles',
    ],
    challenges: [
      'Real-time updates',
      'Score calculation',
      'User experience',
    ],
    github: 'https://github.com/yourusername/quiz-website',
    demo: 'https://demo-url.com',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800',
  },
];

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryIcon = {
    'AI/ML': Brain,
    'Full-Stack': Server,
  }[project.category];

  const Icon = categoryIcon || Code2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
          <Icon size={16} />
          {project.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.div
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          {isExpanded && (
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Challenges Solved</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </motion.div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github size={20} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ExternalLink size={20} />
            </a>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI/ML', 'Full-Stack'];

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;