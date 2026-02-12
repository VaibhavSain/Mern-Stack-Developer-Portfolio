
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Core', 'Frontend', 'Backend', 'DevOps', 'Tools'];

  return (
    <section id="skills" className="py-20 md:py-24 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Tech <span className="text-blue-400">Expertise</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            I specialize in building high-performance applications using modern web technologies and distributed backend patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-slate-900/40 border border-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-6 md:space-y-8 hover:bg-slate-900 transition-colors group">
              <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                <i className={`fa-solid ${
                  category === 'Core' ? 'fa-brain' :
                  category === 'Frontend' ? 'fa-display' : 
                  category === 'Backend' ? 'fa-server' : 
                  category === 'DevOps' ? 'fa-cloud' : 'fa-screwdriver-wrench'
                } text-xl`}></i>
                {category}
              </h3>
              <div className="space-y-5 md:space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="text-slate-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${
                          category === 'Core' ? 'from-amber-500 to-orange-400' :
                          category === 'Frontend' ? 'from-blue-500 to-cyan-400' :
                          category === 'Backend' ? 'from-emerald-500 to-teal-400' :
                          category === 'DevOps' ? 'from-purple-500 to-blue-400' : 'from-slate-500 to-slate-400'
                        } rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-blue-500/5 border border-blue-500/10 rounded-2xl md:rounded-3xl text-center">
          <p className="text-slate-400 italic text-sm md:text-base">"Technology is just a tool. Solving problems elegantly is the goal."</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
