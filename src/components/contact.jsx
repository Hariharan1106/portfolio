import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a href="mailto:ananthahariharan116@gmail.com" 
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <Mail className="mx-auto mb-3 text-purple-400" size={32} />
            <p className="font-semibold">Email</p>
            <p className="text-sm text-gray-400 break-all">ananthahariharan116@gmail.com</p>
          </a>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <Phone className="mx-auto mb-3 text-purple-400" size={32} />
            <p className="font-semibold">Phone</p>
            <p className="text-sm text-gray-400">+91 8870237923</p>
          </div>
        </div>
      </div>
    </section>
  );
}