
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3 text-slate-400">
            <a href={project.github} className="hover:text-white transition-colors"><i className="fa-brands fa-github text-xl"></i></a>
            <a href={project.link} className="hover:text-white transition-colors"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
