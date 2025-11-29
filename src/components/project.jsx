import React from 'react';
import { Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'Hotstar Website',
      description: 'Replicated Hotstar platform with authentication, dynamic content, and MongoDB/Node.js backend',
      tech: ['React', 'Node.js', 'MongoDB', 'JavaScript']
    },
    {
      name: 'Performance Tracker',
      description: 'Internal employee task manager with forms, filters, and timesheet tracking',
      tech: ['Bootstrap', 'CodeIgniter', 'MySQL', 'JavaScript']
    },
    {
      name: 'Exam Admin Dashboard',
      description: 'Registration form and admin dashboard with reports and analytics',
      tech: ['Bootstrap', 'CodeIgniter', 'MySQL', 'Charts' , 'JavaScript']
    },
    {
      name: 'OEM Project Tool',
      description: 'Managed OEM entries, projects, and pricing with comparison features',
      tech: ['Bootstrap', 'CodeIgniter', 'JavaScript', 'MySQL']
    },
    {
      name: 'Car & Bike Website',
      description: 'Vehicle listings with React dynamic updates and RESTful API integration',
      tech: ['React', 'REST API', 'JavaScript']
    },
    {
      name: 'Music Player',
      description: 'Web-based player with playlist management, search, and responsive design',
      tech: ['JavaScript', 'HTML', 'CSS', 'React']
    },
    {
      name: 'Weather App',
      description: 'Web-based app for weather forecasting with API integration and responsive UI',
      tech: ['JavaScript', 'HTML', 'CSS', 'React' , 'API']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Code className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-purple-400">{project.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 px-3 py-1 rounded-full text-xs hover:from-purple-600/50 hover:to-pink-600/50 transition-all duration-300 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}