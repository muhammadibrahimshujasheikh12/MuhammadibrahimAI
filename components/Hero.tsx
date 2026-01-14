
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  const typedStrings = [
    "Software Engineer", 
    "Frontend Specialist", 
    "Full-Stack Developer", 
    "UI/UX Advocate"
  ];

  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const currentFullText = typedStrings[currentIndex];
      
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(40);
      } else {
        setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % typedStrings.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typedStrings]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 md:pt-32 pb-20 overflow-hidden w-full transition-colors duration-500 px-4 sm:px-6">
      {/* Decorative Blueprint Background (Pointer events disabled for smooth scroll) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
        <div className="absolute top-[20%] left-[5%] w-[40vw] h-[1px] bg-gradient-to-r from-[#33ccff] to-transparent"></div>
        <div className="absolute top-[20%] left-[5%] w-[1px] h-[30vh] bg-gradient-to-b from-[#33ccff] to-transparent"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[40vw] h-[1px] bg-gradient-to-l from-[#33ccff] to-transparent"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[1px] h-[30vh] bg-gradient-to-t from-[#33ccff] to-transparent"></div>
      </div>

      <div className="w-full max-w-screen-2xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#33ccff]/30 bg-[#33ccff]/5 text-[#33ccff] mb-8 animate-fade-in transition-all">
          <div className="w-2 h-2 rounded-full bg-[#33ccff] animate-pulse"></div>
          <span className="text-[9px] font-black tracking-[0.4em] uppercase whitespace-nowrap">Available for Hire</span>
        </div>

        <h2 className="text-base sm:text-xl md:text-3xl font-bold text-slate-500 dark:text-zinc-500 mb-6 tracking-tight opacity-80">
          Hi, I'm <span className="text-slate-900 dark:text-white glow-text transition-colors">Muhammad Ibrahim</span>
        </h2>

        {/* FLUID TYPOGRAPHY with strict overflow control */}
        <div className="flex items-center justify-center w-full mb-10 md:mb-16 min-h-[16vw] sm:min-h-[12vw]">
          <h1 className="text-[clamp(1.5rem,9vw,9.5rem)] font-black text-[#33ccff] tracking-tighter leading-[0.9] inline-block uppercase italic break-words w-full">
            {displayText}
            <span className="animate-pulse ml-1 text-slate-900 dark:text-white font-thin">|</span>
          </h1>
        </div>
        
        <p className="text-slate-600 dark:text-zinc-500 text-xs sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-medium leading-relaxed mb-12 md:mb-16 opacity-70 transition-colors">
          Full-Stack Developer specializing in <span className="text-slate-900 dark:text-white font-bold">scalable web applications</span> and 
          <span className="text-slate-900 dark:text-white font-bold"> modern user experiences</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-xs sm:max-w-none">
          <button 
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-10 py-5 bg-[#33ccff] text-black rounded-2xl font-black text-[10px] tracking-[0.3em] hover:shadow-[0_0_40px_rgba(51,204,255,0.4)] active:scale-95 transition-all uppercase"
          >
            View Projects
          </button>
          
          <a
            href="Muhammadibrahim.pdf"
            download="Muhammad_Ibrahim_CV.pdf"
            className="w-full sm:w-auto px-10 py-5 border border-black dark:border-white/20 text-slate-900 dark:text-white rounded-2xl font-black text-[10px] tracking-[0.3em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all active:scale-95 uppercase flex items-center justify-center gap-3"
          >
            <Icons.Download />
            Download CV
          </a>

          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-10 py-5 border border-black dark:border-[#33ccff]/30 text-slate-900 dark:text-[#33ccff] rounded-2xl font-black text-[10px] tracking-[0.3em] hover:bg-black hover:text-white dark:hover:bg-[#33ccff]/10 dark:hover:text-[#33ccff] transition-all active:scale-95 uppercase"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Responsive Floor Data */}
      <div className="absolute bottom-8 left-0 right-0 px-10 hidden md:flex items-center justify-between text-slate-300 dark:text-zinc-900 font-mono text-[9px] tracking-[0.5em] uppercase select-none transition-colors pointer-events-none">
        <div className="flex gap-10">
          <span>PORTFOLIO // 2025</span>
          <span>BASED IN KARACHI</span>
        </div>
        <div className="flex gap-10">
          <span>{new Date().toLocaleDateString()}</span>
          <span>HIREABLE: YES</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
