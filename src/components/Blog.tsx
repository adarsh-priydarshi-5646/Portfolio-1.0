import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, ChevronRight, Search, Mail } from 'lucide-react';

const blogPosts = [
  {
    title: 'Mastering DSA Patterns for Competitive Programming',
    excerpt: 'Learn the most common patterns in Data Structures and Algorithms to ace your coding interviews.',
    tags: ['DSA', 'Competitive Programming', 'Algorithms'],
    readTime: '8 min',
    date: 'March 1, 2024',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'AI in Modern Web Development',
    excerpt: 'Exploring how artificial intelligence is transforming the landscape of web development.',
    tags: ['AI', 'Web Development', 'Technology'],
    readTime: '6 min',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Understanding the TCP Handshake',
    excerpt: 'A deep dive into how TCP establishes connections and its role in web servers.',
    tags: ['Networking', 'Web Servers', 'Backend'],
    readTime: '10 min',
    date: 'February 25, 2024',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
  },
];

const BlogCard = ({ post }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
  >
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
          >
            <Tag size={14} className="inline mr-1" />
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <Clock size={16} className="mr-1" />
          {post.readTime} read
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
      </div>
      <button className="mt-4 text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline">
        Read More
        <ChevronRight size={16} className="ml-1" />
      </button>
    </div>
  </motion.article>
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get the latest articles on AI, ML, and web development delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 rounded-l-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;