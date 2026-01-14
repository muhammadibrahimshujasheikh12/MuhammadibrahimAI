
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Icons } from '../constants';
import { getAIResponse } from '../services/geminiService';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Ibrahim's virtual assistant. How can I assist you with his portfolio today?",
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAIResponse(input, messages);
    
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: response || "I'm experiencing a temporary connection issue. Please try again or contact Ibrahim directly.",
      timestamp: new Date(),
    }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100]">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] max-h-[70vh] glass-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#33ccff]/40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 border-b border-[#33ccff]/30 flex items-center justify-between bg-black">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#33ccff]/10 rounded-xl flex items-center justify-center text-[#33ccff] border border-[#33ccff]/30">
                <Icons.Bot />
              </div>
              <div>
                <h4 className="font-bold text-[#33ccff] leading-none text-sm md:text-base">Ibrahim's Assistant</h4>
                <span className="text-[9px] text-[#33ccff]/60 uppercase tracking-widest font-bold">AI Support</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#33ccff] hover:text-white transition-colors p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] md:max-w-[85%] px-4 py-3 rounded-2xl text-xs md:text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-[#33ccff] text-black rounded-tr-none shadow-lg shadow-[#33ccff]/20' 
                  : 'bg-[#33ccff]/10 text-[#33ccff] rounded-tl-none border border-[#33ccff]/20'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#33ccff]/10 text-[#33ccff] px-4 py-3 rounded-2xl rounded-tl-none border border-[#33ccff]/20">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-[#33ccff] rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-[#33ccff] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1 h-1 bg-[#33ccff] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-[#33ccff]/30 bg-black">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How can I help you?"
                className="w-full bg-[#33ccff]/5 border border-[#33ccff]/30 rounded-xl px-4 py-3 pr-12 text-sm text-[#33ccff] focus:outline-none focus:border-[#33ccff] transition-colors placeholder-[#33ccff]/40"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#33ccff] hover:bg-[#22bbdd] disabled:opacity-50 disabled:hover:bg-[#33ccff] rounded-lg text-black transition-all"
              >
                <Icons.Send />
              </button>
            </div>
          </form>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-[#33ccff]/20 rotate-90 text-[#33ccff]' : 'bg-[#33ccff] text-black hover:bg-[#22bbdd] shadow-[#33ccff]/40'
        }`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <Icons.Bot />
        )}
      </button>
    </div>
  );
};

export default AIChatAssistant;
