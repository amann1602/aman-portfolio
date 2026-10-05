import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, RefreshCw } from 'lucide-react';
import { predefinedQuestions, matchQuery } from '../data/faqAssistant';

export default function AiAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: "Hello! I'm Aman AI, an interactive portfolio assistant. Ask me anything about Aman's skills, internships, research publications, projects, or contact information."
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleAsk = (queryText) => {
    if (!queryText || !queryText.trim() || isTyping) return;

    const userMessage = queryText.trim();
    setInputQuery('');

    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setIsTyping(true);

    setTimeout(() => {
      const matchedAnswer = matchQuery(userMessage);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: matchedAnswer
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'assistant',
        text: "Conversation reset. Feel free to click a prompt below or type your question!"
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-brand-indigo to-brand-blue text-white font-medium shadow-xl shadow-brand-indigo/30 hover:shadow-brand-blue/40 border border-white/20 backdrop-blur-md transition-all group"
          aria-label="Open Aman AI assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-dark-bg animate-pulse" />
          </div>
          <span className="text-sm font-bold tracking-wide hidden sm:inline">
            Aman AI
          </span>
        </motion.button>
      </div>

      {/* Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="fixed bottom-20 left-4 sm:left-6 w-[92vw] sm:w-[410px] max-h-[590px] h-[80vh] z-50 rounded-3xl bg-white/95 dark:bg-dark-card/95 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-200"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-dark-surface/90 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-brand-indigo/10 dark:bg-brand-indigo/20 text-brand-indigoDark dark:text-brand-blue border border-brand-indigo/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    Aman AI
                    <span className="px-1.5 py-0.2 rounded text-[10px] uppercase font-mono tracking-wider bg-brand-indigo/10 text-brand-indigoDark dark:text-brand-blue border border-brand-indigo/20">
                      Portfolio FAQ
                    </span>
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Ask about skills, research, internships</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close assistant"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="px-4 py-2.5 bg-slate-100/70 dark:bg-dark-surface/60 border-b border-slate-200 dark:border-slate-800 overflow-x-auto custom-scrollbar flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-cyan" /> Prompts:
              </span>
              {predefinedQuestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleAsk(q.label)}
                  className="px-2.5 py-1 rounded-full text-xs bg-white dark:bg-slate-800 hover:bg-brand-indigo/10 dark:hover:bg-brand-indigo/20 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shrink-0 transition-colors shadow-sm"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 custom-scrollbar text-xs sm:text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-6 h-6 rounded-full bg-brand-indigo/10 dark:bg-brand-indigo/20 text-brand-indigoDark dark:text-brand-cyan flex items-center justify-center shrink-0 mt-0.5 border border-brand-indigo/20">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[84%] px-3.5 py-2.5 rounded-2xl whitespace-pre-line leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-brand-indigo to-brand-blue text-white rounded-tr-none'
                        : 'bg-slate-100 dark:bg-dark-surface/90 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-center text-slate-500 text-xs pl-8">
                  <div className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span>Thinking...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAsk(inputQuery);
              }}
              className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-dark-surface/90 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about Aman's research, skills, projects..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-200 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand-indigo dark:focus:border-brand-blue transition-colors"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping}
                aria-label="Send query"
                className="p-2.5 rounded-xl bg-brand-indigo hover:bg-brand-indigo/90 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-sm transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
