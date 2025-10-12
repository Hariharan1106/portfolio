import React from 'react';

export default function Skills() {
  const skills = {
    frontend: [
      { name: 'HTML', color: '#E44D26' },
      { name: 'CSS', color: '#1572B6' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
      { name: 'Bootstrap', color: '#7952B3' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'React.js', color: '#61DAFB' }
    ],
    backend: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#333333' },
      { name: 'PHP', color: '#777BB4' },
      { name: 'CodeIgniter', color: '#EE4623' }
    ],
    databases: [
      { name: 'MySQL', color: '#4479A1' },
      { name: 'MongoDB', color: '#47A248' }
    ],
    tools: [
      { name: 'Git', color: '#F05032' },
      { name: 'VS Code', color: '#007ACC' }
    ]
  };

  const getSkillIcon = (name, color) => {
    const initial = name.charAt(0).toUpperCase();
    return (
      <div 
        className="w-16 h-16 flex items-center justify-center rounded-lg font-bold text-3xl shadow-lg"
        style={{ 
          backgroundColor: color,
          color: name === 'JavaScript' || name === 'Bootstrap' ? '#000' : '#fff'
        }}
      >
        {initial}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400 capitalize text-center">{category}</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {items.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl p-5 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 min-w-[110px] border border-purple-500/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/30">
                    {getSkillIcon(skill.name, skill.color)}
                    <span className="text-sm font-medium text-gray-200 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}