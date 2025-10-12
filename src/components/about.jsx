import React, { useState } from 'react';

export default function About() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo Section */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                
                {/* Image container */}
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <img 
                    src="/profile.png" 
                    alt="Anantha Hariharan V" 
                    className="relative w-64 h-80 object-cover rounded-2xl shadow-2xl border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 transform group-hover:scale-105"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                    <p className="text-white text-sm font-medium">Click to view</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Junior Frontend Developer with 10 months of hands-on experience building responsive and dynamic web applications. 
                My journey in web development has equipped me with strong skills in modern technologies including React, JavaScript, 
                Node.js, and various database systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in creating intuitive user interfaces and have experience developing dashboards, task management systems, 
                and dynamic forms. I'm committed to writing clean, maintainable code and continuously learning new technologies to 
                deliver innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] animate-fade-in">
            {/* Close button */}
            <button 
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-4 -right-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              ✕
            </button>
            
            {/* Full size image */}
            <img 
              src="/profile.png" 
              alt="Anantha Hariharan V" 
              className="rounded-2xl shadow-2xl max-h-[90vh] object-contain border-2 border-purple-500/50"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}