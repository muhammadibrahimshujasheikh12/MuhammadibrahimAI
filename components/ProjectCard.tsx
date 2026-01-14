import React from 'react';
import { Project } from '../types';
import { Icons } from '../constants';

interface ProjectCardProps { project: Project; }

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative glass-panel rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/5 hover:border-[#33ccff]/40 transition-all duration-700 p-3 md:p-4 shadow-sm hover:shadow-xl flex flex-col h-full">
      <div className="relative aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-zinc-900 shrink-0">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
        />
        {/* Specific Professional Overlay Requested by User */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
        
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
           <a 
             href={project.demoUrl || project.githubUrl || '#'} 
             target="_blank" 
             rel="noopener noreferrer"
             className="p-3 sm:p-4 bg-white text-black rounded-full shadow-2xl block hover:bg-[#33ccff] transition-colors"
           >
             <Icons.ExternalLink />
           </a>
        </div>

        <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-3 py-1.5 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-black/80 text-[#33ccff] border border-[#33ccff]/20 backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 md:p-10 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:text-[#33ccff] transition-colors tracking-tighter uppercase italic">
            {project.title}
          </h3>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-zinc-600 hover:text-[#33ccff] transition-colors p-1">
            <Icons.Github />
          </a>
        </div>
        
        <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base mb-8 md:mb-10 leading-relaxed font-medium line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <a 
            href={project.demoUrl || project.githubUrl || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-5 rounded-xl bg-black/5 dark:bg-white/5 text-[10px] md:text-[11px] font-black text-slate-700 dark:text-zinc-100 hover:bg-[#33ccff] hover:text-black transition-all uppercase tracking-[0.4em] flex items-center justify-center gap-4 border border-black/5 dark:border-white/5 no-underline cursor-pointer shadow-lg active:scale-[0.98]"
          >
            Launch System <Icons.ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;