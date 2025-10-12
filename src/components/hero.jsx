import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Anantha Hariharan V
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-6">Junior Frontend Developer</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Passionate about creating user-friendly web applications with clean, efficient code. 
            Experienced in React, JavaScript, and full-stack development.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://github.com/Hariharan1106" target="_blank" rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/anantha-hariharan-v-586723215/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:ananthahariharan116@gmail.com"
              className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50">
              <Mail size={20} /> Contact
            </a>
          </div>
        </div>
        <button onClick={() => scrollToSection('about')} className="mt-12 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </button>
      </div>
    </section>
  );
}