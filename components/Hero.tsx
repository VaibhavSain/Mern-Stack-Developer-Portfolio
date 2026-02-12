
import React from 'react';

interface HeroProps {
  onNavigate: (page: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6 min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mx-auto md:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">scalable</span> software systems.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed mx-auto md:mx-0">
            Hi, I'm Vaibhav Sain. A MERN Stack Developer focused on crafting high-performance web applications and distributed systems.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <button 
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group shadow-lg"
            >
              View My Projects <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2 group"
            >
              Get in Touch <i className="fa-solid fa-paper-plane text-xs group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"></i>
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8 pt-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <a href="https://github.com/VaibhavSain" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/vaibhav-28887b2a2" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

        <div className="relative group mt-8 md:mt-0 px-4 sm:px-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden aspect-video md:aspect-square flex items-center justify-center p-6 md:p-8">
             <div className="w-full h-full font-mono text-xs md:text-sm text-blue-400/80 overflow-hidden select-none">
                <pre className="animate-pulse">
{`const engineer = {
  name: "Vaibhav Sain",
  role: "MERN Stack Dev",
  stack: ["MongoDB", "Express", "React", "Node.js"],
  passion: "Problem Solving",
  exp: "1 Year",
  location: "India",
  status: "Building 🚀"
};

/** 
 * Focus on clean code 
 * and high performance
 */
function innovate() {
  return engineer.stack.map(s => s.toUpperCase());
}`}
                </pre>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
