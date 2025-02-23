import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Toaster position="top-right" />
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;