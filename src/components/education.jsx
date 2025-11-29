import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-purple-400">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-lg">B.Sc. Computer Science</p>
                <p className="text-gray-400">KR College of Arts & Science, Kovilpatti.</p>
                <p className="text-pink-400">2019 - 2022</p>
              </div>
              
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-purple-400">Certifications</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-lg">Project Intern</p>
                <p className="text-gray-400">Kirubai Technosoft</p>
                <p className="text-pink-400">May 2024 - Aug 2024</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Full Stack Development Course</p>
                <p className="text-gray-400">Greens Technology</p>
                <p className="text-pink-400">Mar 2023 - Jul 2023</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}