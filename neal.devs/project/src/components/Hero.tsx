import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-purple-50 to-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6 space-x-4">
          <a href="https://github.com/neal-s-coder" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Neal</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A full-stack developer passionate about building beautiful, functional, and user-friendly applications
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white text-gray-900 rounded-lg border border-gray-200 hover:border-gray-300 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
}