
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[110] px-4 sm:px-10 py-4 sm:py-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm' : 'bg-transparent'}`}>
        <div 
          className="flex items-center gap-3 cursor-pointer group z-[120]"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-xl rounded-xl transition-all group-hover:bg-[#33ccff] group-hover:rotate-6">MI</div>
          <div className="hidden xs:flex flex-col">
            <span className="font-black text-black dark:text-white tracking-widest text-xs sm:text-sm uppercase leading-none">Muhammad Ibrahim</span>
            <span className="text-[#33ccff] text-[8px] sm:text-[9px] font-bold tracking-[0.3em] uppercase mt-1">Digital Architect</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 px-8 py-3 glass-panel rounded-full">
          {['ABOUT', 'PROJECTS', 'SKILLS', 'EXPERIENCE', 'CONTACT'].map((item) => (
            <button
              key={item}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-[10px] font-black tracking-[0.25em] text-slate-500 dark:text-zinc-400 hover:text-[#33ccff] transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#33ccff] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-[#33ccff] transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </button>

          <a 
            href="/Muhammadibrahim.pdf"
            download="Muhammad_Ibrahim_CV.pdf"
            className="hidden sm:flex px-5 py-3 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white rounded-xl font-black text-[10px] tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase items-center gap-2"
          >
            CV
          </a>

          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-5 sm:px-7 py-3 bg-[#33ccff] text-black rounded-xl font-black text-[10px] tracking-[0.2em] hover:shadow-[0_0_30px_#33ccff] active:scale-95 transition-all shadow-lg shadow-[#33ccff]/20"
          >
            HIRE ME
          </button>

          {/* Hamburger Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-900 dark:text-white group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[105] bg-white/95 dark:bg-black/95 backdrop-blur-2xl lg:hidden transition-all duration-500 flex flex-col items-center justify-center gap-12 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {['ABOUT', 'PROJECTS', 'SKILLS', 'EXPERIENCE', 'CONTACT'].map((item) => (
          <button
            key={item}
            onClick={(e) => scrollToSection(e, item.toLowerCase())}
            className="text-4xl font-black tracking-tighter text-slate-400 dark:text-zinc-500 hover:text-[#33ccff] transition-colors uppercase italic"
          >
            {item}
          </button>
        ))}
        <a 
          href="/Muhammadibrahim.pdf"
          download="Muhammad_Ibrahim_CV.pdf"
          className="mt-4 text-slate-900 dark:text-white font-black tracking-widest text-lg uppercase underline decoration-[#33ccff] decoration-4 underline-offset-8"
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default Navbar;
