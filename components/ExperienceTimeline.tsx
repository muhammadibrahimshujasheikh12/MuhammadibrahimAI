import React from 'react';
import { EXPERIENCES, Icons } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 md:px-10">
      {/* Adaptive Center Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-slate-300 dark:via-white/10 to-transparent md:-translate-x-1/2 transition-colors"></div>
      
      <div className="space-y-12 md:space-y-24">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="relative">
            <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#33ccff] z-20 shadow-[0_0_15px_#33ccff] border-4 border-white dark:border-black"></div>
              
              <div className="w-full md:w-[45%] pl-12 md:pl-0">
                <div className="glass-panel p-6 sm:p-10 rounded-[2rem] border border-black/5 dark:border-white/5 hover:border-[#33ccff]/30 transition-all group shadow-sm hover:shadow-xl">
                  <div className="flex flex-wrap items-center justify-between mb-6 gap-2">
                    <span className="text-[#33ccff] font-mono text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase bg-[#33ccff]/10 px-3 py-1 rounded-full border border-[#33ccff]/20">
                      {exp.period}
                    </span>
                    <h3 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter group-hover:text-[#33ccff] transition-colors">{exp.role}</h3>
                  </div>
                  
                  <h4 className="text-slate-500 dark:text-zinc-400 font-bold mb-8 text-sm md:text-lg border-b border-black/5 dark:border-white/5 pb-5">
                    <span className="text-slate-400 dark:text-zinc-600">AT_</span> {exp.company}
                  </h4>
                  
                  <ul className="space-y-4 mb-10">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-zinc-500 text-xs md:text-base leading-relaxed font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#33ccff]/50 mt-1.5 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.company === 'Scrimba' && (
                    <div className="mb-8 p-4 rounded-xl bg-[#33ccff]/5 border border-[#33ccff]/20">
                      <p className="text-[#33ccff] text-[10px] md:text-xs font-black uppercase tracking-widest mb-3">Join Scrimba via my Ambassador Link:</p>
                      <a 
                        href="https://scrimba.com/?via=u432d432" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs hover:text-[#33ccff] transition-colors"
                      >
                        scrimba.com/?via=u432d432 <Icons.ExternalLink />
                      </a>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="text-[8px] md:text-[10px] px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 text-slate-500 dark:text-zinc-400 font-black uppercase tracking-widest border border-black/5 dark:border-white/5 group-hover:border-[#33ccff]/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;