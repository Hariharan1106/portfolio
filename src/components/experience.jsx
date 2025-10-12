import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: 'Executive Developer',
      company: 'I-Net Secure Labs',
      period: 'Dec 2024 - Present',
      responsibilities: [
        'Developed and maintained employee timesheet system with task management and reporting',
        'Implemented dynamic forms with validations and status tracking',
        'Added filters for reports by employee, project, and date',
        'Designed responsive UI components using React, JS, and Bootstrap'
      ]
    },
    {
      role: 'Project Intern',
      company: 'Kirubai Technosoft',
      period: 'May 2024 - Aug 2024',
      responsibilities: [
        'Assisted in developing web apps using the MERN stack',
        'Collaborated with senior developers to implement UI components',
        'Conducted testing/debugging for performance optimization',
        'Participated in code reviews and improved development processes'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">{exp.role}</h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <span className="text-pink-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}