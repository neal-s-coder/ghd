import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Neal.dev
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
              <a 
                href="#contact" 
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Neal.dev</h3>
              <p className="text-gray-400">Building digital experiences with passion</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/neal-s-coder" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Neal.dev. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;