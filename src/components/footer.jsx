import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">© 2024 Anantha Hariharan V. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/Hariharan1106" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-all duration-300 transform hover:scale-125">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/anantha-hariharan-v-586723215/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-all duration-300 transform hover:scale-125">
            <Linkedin size={24} />
          </a>
          <a href="mailto:ananthahariharan116@gmail.com" className="text-purple-400 hover:text-purple-300 transition-all duration-300 transform hover:scale-125">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}