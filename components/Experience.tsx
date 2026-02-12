
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-24 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Career <span className="text-emerald-400">Timeline</span></h1>
          <p className="text-slate-400 text-base md:text-lg">A chronicle of my professional contributions and growth.</p>
        </div>

        <div className="space-y-12 md:space-y-16 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-slate-800 before:to-transparent">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0 absolute left-0 md:left-1/2 transform translate-x-0 md:-translate-x-1/2 z-10">
                <i className="fa-solid fa-briefcase text-[10px] text-white"></i>
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 ml-12 md:ml-0 shadow-2xl">
                <div className="flex flex-col mb-4 md:mb-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                    <time className="text-[10px] md:text-xs font-bold font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20 whitespace-nowrap">
                      {exp.duration}
                    </time>
                  </div>
                  <p className="text-emerald-400 font-bold tracking-wide uppercase text-xs md:text-sm">{exp.company}</p>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-300 text-xs md:text-sm leading-relaxed flex gap-3">
                      <span className="text-blue-500 shrink-0"><i className="fa-solid fa-circle-check mt-1"></i></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
