
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('transmitting');
    setTimeout(() => setStatus('success'), 2000);
  };

  if (status === 'success') {
    return (
      <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
        <div className="w-20 h-20 bg-[#33ccff]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#33ccff]/40 shadow-[0_0_30px_#33ccff]/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#33ccff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Message Sent</h3>
        <p className="text-slate-500 dark:text-zinc-500 font-medium">Thank you for reaching out. I will get back to you as soon as possible.</p>
        <button 
          onClick={() => { setStatus('idle'); setFormState({ name: '', email: '', subject: '', message: '' }); }}
          className="mt-10 text-[#33ccff] font-bold text-[10px] tracking-[0.4em] uppercase hover:underline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-6 md:space-y-8 text-left relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-3">
          <label className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400 dark:text-zinc-600 ml-4 block">Your Name</label>
          <input 
            required
            type="text" 
            placeholder="ENTER YOUR FULL NAME"
            value={formState.name}
            onChange={(e) => setFormState({...formState, name: e.target.value})}
            className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl px-6 py-5 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#33ccff] focus:ring-1 focus:ring-[#33ccff]/30 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-700 font-medium uppercase tracking-widest"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400 dark:text-zinc-600 ml-4 block">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="ENTER YOUR EMAIL ADDRESS"
            value={formState.email}
            onChange={(e) => setFormState({...formState, email: e.target.value})}
            className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl px-6 py-5 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#33ccff] focus:ring-1 focus:ring-[#33ccff]/30 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-700 font-medium uppercase tracking-widest"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400 dark:text-zinc-600 ml-4 block">Subject</label>
        <input 
          required
          type="text" 
          placeholder="HOW CAN I HELP YOU?"
          value={formState.subject}
          onChange={(e) => setFormState({...formState, subject: e.target.value})}
          className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl px-6 py-5 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#33ccff] focus:ring-1 focus:ring-[#33ccff]/30 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-700 font-medium uppercase tracking-widest"
        />
      </div>

      <div className="space-y-3">
        <label className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400 dark:text-zinc-600 ml-4 block">Message</label>
        <textarea 
          required
          rows={5}
          placeholder="ENTER YOUR MESSAGE HERE..."
          value={formState.message}
          onChange={(e) => setFormState({...formState, message: e.target.value})}
          className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl px-6 py-5 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#33ccff] focus:ring-1 focus:ring-[#33ccff]/30 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-700 font-medium uppercase tracking-widest resize-none"
        ></textarea>
      </div>

      <button 
        type="submit"
        disabled={status === 'transmitting'}
        className="w-full py-6 md:py-8 bg-[#33ccff] text-black rounded-2xl font-black text-xs md:text-sm tracking-[0.5em] uppercase hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(51,204,255,0.2)] disabled:opacity-50"
      >
        {status === 'transmitting' ? (
          <>
            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
            SENDING MESSAGE...
          </>
        ) : (
          <>
            SEND MESSAGE
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
