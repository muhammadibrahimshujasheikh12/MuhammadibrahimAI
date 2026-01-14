import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactForm from './components/ContactForm';
import { PROJECTS, SKILLS, Icons } from './constants';

const App: React.FC = () => {
  const githubUrl = "https://github.com/muhammadibrahimshujasheikh12";
  const linkedinUrl = "https://www.linkedin.com/in/muhammad-ibrahim-a4644235b/";

  return (
    <div className="min-h-screen bg-transparent relative w-full overflow-x-hidden selection:bg-[#33ccff] selection:text-black transition-colors duration-500">
      <Navbar />
      
      <main className="w-full">
        <section id="hero" className="w-full">
          <Hero />
        </section>

        {/* ABOUT ME */}
        <AboutMe />

        {/* PROJECTS */}
        <section id="projects" className="py-24 md:py-48 px-4 sm:px-10 lg:px-20 max-w-[2200px] mx-auto border-t border-black/5 dark:border-white/5">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 md:mb-32 gap-12">
            <div className="max-w-4xl">
              <span className="text-[#33ccff] font-mono text-[10px] sm:text-xs font-black tracking-[0.8em] uppercase mb-6 block opacity-60">Portfolio // Selected Works</span>
              <h2 className="text-[clamp(2.2rem,8vw,9rem)] font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-[0.85] uppercase transition-colors">
                Featured <br/><span className="text-[#33ccff] italic">Projects.</span>
              </h2>
              <p className="text-slate-500 dark:text-zinc-500 text-lg sm:text-xl md:text-3xl font-medium leading-relaxed max-w-3xl opacity-80">
                A selection of high-performance web applications and user interfaces, focused on accessibility, performance, and clean code.
              </p>
            </div>
            <div className="flex">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto px-12 py-7 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-slate-900 dark:text-white font-black text-xs uppercase tracking-[0.4em] hover:border-[#33ccff] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-5 group shadow-2xl active:scale-95"
              >
                GitHub Profile <Icons.Github />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
            {PROJECTS.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 md:py-48 px-4 sm:px-10 lg:px-20 bg-slate-50 dark:bg-black/30 border-y border-black/5 dark:border-white/5 transition-colors">
          <div className="max-w-[2200px] mx-auto">
            <div className="text-center mb-24 md:mb-40">
              <h2 className="text-[clamp(2.5rem,7vw,8rem)] font-black text-slate-900 dark:text-white mb-10 tracking-tighter uppercase leading-none transition-colors">Technical <span className="text-[#33ccff]">Skills.</span></h2>
              <p className="text-slate-500 dark:text-zinc-500 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-medium opacity-60">A comprehensive set of proficiencies developed through building complex digital products.</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-6 md:gap-8 lg:gap-10">
              {SKILLS.map(skill => (
                <div key={skill.name} className="glass-panel p-10 md:p-14 rounded-[2.5rem] flex flex-col items-center justify-center text-center group hover:bg-[#33ccff]/5 hover:border-[#33ccff]/20 transition-all duration-700">
                  <span className="text-slate-400 dark:text-zinc-400 font-black text-[10px] md:text-xs tracking-[0.5em] uppercase group-hover:text-[#33ccff] transition-colors leading-tight mb-8">{skill.name}</span>
                  <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#33ccff] transition-all duration-1000 group-hover:shadow-[0_0_15px_#33ccff]" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 md:py-48 px-4 sm:px-8 border-t border-black/5 dark:border-white/5">
          <div className="mb-24 md:mb-40 text-center">
            <h2 className="text-[clamp(2.5rem,7vw,8rem)] font-black text-slate-900 dark:text-white mb-10 tracking-tighter uppercase leading-none transition-colors">Work <span className="text-[#33ccff]">Experience.</span></h2>
            <p className="text-slate-500 dark:text-zinc-500 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-medium opacity-60">Professional history of contributions within the tech industry.</p>
          </div>
          <ExperienceTimeline />
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 md:py-48 px-4 sm:px-8 max-w-[2200px] mx-auto">
          <div className="glass-panel p-8 sm:p-16 md:p-24 lg:p-32 rounded-[3rem] md:rounded-[5rem] text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#33ccff]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
            
            <div className="relative z-10 mb-20 md:mb-32">
              <span className="text-[#33ccff] font-mono text-[10px] font-black tracking-[1em] uppercase mb-8 block opacity-60 animate-pulse">Contact Me</span>
              <h2 className="text-[clamp(2.5rem,9vw,11rem)] font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-none uppercase italic transition-colors">
                Let's <span className="text-[#33ccff] not-italic">Connect.</span>
              </h2>
              <p className="text-slate-500 dark:text-zinc-500 text-lg sm:text-xl md:text-3xl max-w-3xl mx-auto font-medium leading-relaxed opacity-70">
                Open for collaboration, project inquiries, or just a professional chat.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-black/5 dark:border-white/5 px-6 sm:px-12 md:px-20 bg-slate-100/50 dark:bg-black/40 transition-colors">
        <div className="max-w-[2200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
             <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center font-black text-2xl shadow-2xl transition-colors">MI</div>
             <div className="flex flex-col">
               <span className="font-black text-slate-900 dark:text-white tracking-widest uppercase text-xl md:text-2xl leading-none">Muhammad Ibrahim</span>
               <span className="text-[#33ccff] text-[10px] font-black uppercase tracking-[0.5em] mt-3">Software Engineer • Karachi, PK</span>
             </div>
          </div>
          <div className="flex gap-10 md:gap-16">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-zinc-600 hover:text-[#33ccff] transition-all transform hover:scale-125"><Icons.Github /></a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-zinc-600 hover:text-[#33ccff] transition-all transform hover:scale-125"><Icons.Linkedin /></a>
            <a href="mailto:muhammadibrahimshuja34@gmail.com" className="text-slate-400 dark:text-zinc-600 hover:text-brand-cyan transition-all transform hover:scale-125"><Icons.Mail /></a>
          </div>
        </div>
        <div className="mt-20 text-center opacity-20 font-mono text-[9px] tracking-[1em] text-slate-500 uppercase">
          © 2025 // BUILT WITH CARE // ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
};

export default App;