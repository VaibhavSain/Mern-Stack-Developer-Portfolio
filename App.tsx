
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, BIO_CONTEXT } from './constants';

type Page = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle URL hash for initial load
  useEffect(() => {
    try {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'about', 'skills', 'projects', 'experience', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    } catch (e) {
      // Silently fail if hash is inaccessible in sandboxed environments
    }
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    try {
      // Some environments restrict setting the hash (e.g. blob URLs in sandboxed iframes)
      // We attempt to set it for better UX where supported, but ignore failures.
      window.location.hash = page;
    } catch (e) {
      // Silently fail if hash setting is denied by security policy
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-700">
            <Hero onNavigate={navigate} />
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
              <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                <div onClick={() => navigate('projects')} className="group cursor-pointer p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all shadow-xl">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center justify-between">
                    View Projects <i className="fa-solid fa-arrow-right text-blue-500 group-hover:translate-x-2 transition-transform"></i>
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base">Deep dive into my technical architecture and MERN stack implementations.</p>
                </div>
                <div onClick={() => navigate('about')} className="group cursor-pointer p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500 transition-all shadow-xl">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center justify-between">
                    About Me <i className="fa-solid fa-arrow-right text-emerald-500 group-hover:translate-x-2 transition-transform"></i>
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base">Learn about my journey, education, and passion for software engineering.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="pt-28 md:pt-32 pb-20 md:pb-24 px-4 md:px-6 max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">About <span className="text-emerald-400">Me</span></h1>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-slate-300 leading-relaxed">
              <p>
                I am a dedicated MERN stack developer with a passion for building systems that solve real-world problems. 
                My journey began with a deep curiosity about how the web works, which led me to specialize in modern JavaScript frameworks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-4 md:py-8">
                <div className="p-5 md:p-6 bg-slate-900 border border-slate-800 rounded-xl md:rounded-2xl">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-blue-400"><i className="fa-solid fa-graduation-cap mr-2"></i> Education</h3>
                  <p className="text-slate-400 text-sm md:text-base">BCA<br/>Lords University, Alwar<br/>Bachelor in Computer Application</p>
                </div>
                <div className="p-5 md:p-6 bg-slate-900 border border-slate-800 rounded-xl md:rounded-2xl">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-emerald-400"><i className="fa-solid fa-heart mr-2"></i> Philosophy</h3>
                  <p className="text-slate-400 text-sm md:text-base">Clean code, robust testing, and user-centric design are the pillars of my engineering approach.</p>
                </div>
              </div>
              <p>
                {BIO_CONTEXT}
              </p>
              <div className="pt-6 md:pt-8 flex justify-center md:justify-start">
                <button 
                  onClick={() => navigate('contact')} 
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  Get in Touch <i className="fa-solid fa-paper-plane text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return <div className="pt-20"><Skills /></div>;
      case 'projects':
        return (
          <div className="pt-28 md:pt-32 pb-20 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12 md:mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">My <span className="text-blue-400">Work</span></h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl">A collection of engineering projects focused on scalability, performance, and user experience.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      case 'experience':
        return <div className="pt-20"><Experience /></div>;
      case 'contact':
        return <div className="pt-20"><Contact /></div>;
      default:
        return <Hero onNavigate={navigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-slate-200">
      <Navbar onNavigate={navigate} activePage={currentPage} />
      
      <main className="relative z-10">
        {renderPage()}
      </main>

      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
          <p>© {new Date().getFullYear()} Vaibhav Sain.</p>
          <div className="flex gap-8">
            <button onClick={() => navigate('home')} className="hover:text-blue-400 transition-colors">Home</button>
            <a href="https://github.com/VaibhavSain" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/vaibhav-28887b2a2" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      <ChatBot />

      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[50%] h-[70%] md:h-[50%] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[50%] h-[70%] md:h-[50%] bg-emerald-600/5 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default App;
