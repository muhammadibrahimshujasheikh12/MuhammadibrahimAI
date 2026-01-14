
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-48 px-4 sm:px-10 lg:px-20 max-w-[2200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
        {/* Section Title & Header */}
        <div className="lg:col-span-5 space-y-8 md:space-y-12">
          <div className="space-y-6">
            <span className="text-[#33ccff] font-mono text-[10px] sm:text-xs font-black tracking-[0.8em] uppercase block opacity-60">Identity // The Architect</span>
            <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase transition-colors">
              About <br/><span className="text-[#33ccff] italic">Me.</span>
            </h2>
          </div>
          
          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-[#33ccff]/10 bg-[#33ccff]/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#33ccff]/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[#33ccff]/20 transition-all duration-700"></div>
            <p className="text-xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight italic tracking-tight">
              "Building modern, scalable web applications with a focus on quality-driven architecture and AI-enhanced user experiences."
            </p>
          </div>
        </div>

        {/* Biography Content */}
        <div className="lg:col-span-7 space-y-10 md:space-y-16">
          <div className="space-y-8">
            <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-2xl leading-relaxed font-medium">
              Hi, I’m <span className="text-slate-900 dark:text-white font-black">Muhammad Ibrahim</span>, a Software Engineering student, Full-Stack Developer, and AI-focused learner with a strong interest in building modern, scalable web applications.
            </p>

            <div className="space-y-6 border-l-2 border-black/5 dark:border-white/5 pl-8 md:pl-12">
              <p className="text-slate-500 dark:text-zinc-500 text-base md:text-xl leading-relaxed">
                I am currently enrolled in the <span className="text-slate-900 dark:text-white font-bold">ACCP-AI (Advanced Certificate in Computer Programming – Artificial Intelligence)</span> program at Aptech Learning Pakistan (2024 – Present). Through this program, I have completed coursework in web development, databases, and software engineering fundamentals, and have built responsive web applications using HTML, CSS, JavaScript, and modern UI frameworks.
              </p>
              
              <p className="text-slate-500 dark:text-zinc-500 text-base md:text-xl leading-relaxed">
                I have hands-on experience working with MySQL and SQL Server, as well as backend technologies including PHP, Laravel, and .NET Core MVC. I am also actively advancing my skills in TypeScript, C#, and structured full-stack application development.
              </p>
            </div>

            <div className="space-y-6 border-l-2 border-[#33ccff]/20 pl-8 md:pl-12 bg-gradient-to-r from-[#33ccff]/5 to-transparent py-6 rounded-r-3xl">
              <p className="text-slate-500 dark:text-zinc-500 text-base md:text-xl leading-relaxed">
                Alongside my formal studies, I am pursuing the <span className="text-slate-900 dark:text-white font-bold">Frontend Developer Path at Scrimba</span> (2026 – Present), where I focus heavily on project-based learning and real-world frontend challenges. 
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className="px-4 py-2 bg-[#33ccff] text-black font-black text-[10px] tracking-widest uppercase rounded-full shadow-[0_0_20px_#33ccff44]">Scrimba Ambassador</span>
                <p className="text-slate-500 dark:text-zinc-500 text-base md:text-xl leading-relaxed">
                  I promote interactive coding education while strengthening my own skills in building responsive interfaces.
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-2xl leading-relaxed font-medium pt-4">
              My approach to development is practical and quality-driven. I focus on clean, maintainable code, strong fundamentals, and continuous improvement through real projects. I enjoy learning by building and refining solutions that are both user-friendly and technically sound.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {[
              { label: 'Location', value: 'Karachi, PK' },
              { label: 'Availability', value: 'Open for Hire' },
              { label: 'Focus', value: 'Full-Stack' },
              { label: 'Ambassador', value: 'Scrimba' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#33ccff] opacity-60">{stat.label}</span>
                <span className="text-slate-900 dark:text-white font-bold text-sm md:text-lg">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
