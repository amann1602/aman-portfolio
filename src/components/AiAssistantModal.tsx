'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  X,
  Send,
  Sparkles,
  User,
  RotateCcw,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { predefinedQuestions, matchQuery } from '@/data/faqAssistant';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
}

export default function AiAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hello! I'm Aman's AI Portfolio Assistant. Ask me anything about Aman's background, research publications, technical skills, projects, or work experience!",
      timestamp: 'Just now'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isTyping]);

  // Listen for global custom events to open chat from Hero or other components
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  const handleAsk = (queryText: string) => {
    if (!queryText || !queryText.trim() || isTyping) return;

    const userMessage = queryText.trim();
    setInputQuery('');

    const newMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: userMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const matchedAnswer = matchQuery(userMessage);
      const replyMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: matchedAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, replyMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'reset',
        sender: 'assistant',
        text: "Conversation refreshed. Click a suggested question below or type your inquiry!",
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Widget */}
      <div className="fixed bottom-6 right-6 z-[9990]">
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold shadow-xl hover:shadow-2xl border border-slate-700/50 dark:border-slate-200/50 transition-all duration-300 group cursor-pointer"
          aria-label="Open Aman AI Chatbot"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="w-5 h-5 text-indigo-400 dark:text-indigo-600 transition-transform group-hover:rotate-12" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-tight">
            Ask Aman AI
          </span>
        </motion.button>
      </div>

      {/* Interactive AI Chat Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-[9999] flex items-end sm:items-auto justify-center sm:justify-end">
            {/* Backdrop overlay on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs sm:hidden"
            />

            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full sm:w-[420px] h-[85vh] sm:h-[580px] max-h-[650px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-200 z-50"
            >
              {/* Header */}
              <div className="p-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        Aman AI
                      </h3>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        Online
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Interactive Portfolio Assistant
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleReset}
                    title="Reset chat"
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close chat"
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Suggested Questions Pills */}
              <div className="p-2.5 bg-slate-100/60 dark:bg-slate-850/40 border-b border-slate-200/70 dark:border-slate-800/70 overflow-x-auto no-scrollbar flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold shrink-0 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-500" /> Prompts:
                </span>
                {predefinedQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleAsk(q.label)}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 shrink-0 transition-all shadow-2xs"
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              {/* Messages Scroll Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'assistant' && (
                      <div className="w-7 h-7 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-200 dark:border-indigo-800">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl whitespace-pre-line leading-relaxed shadow-2xs ${
                        msg.sender === 'user'
                          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-br-xs font-normal'
                          : 'bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 rounded-bl-xs'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.sender === 'user' && (
                      <div className="w-7 h-7 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-2 items-center text-slate-400 text-xs pl-9">
                    <div className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span>Aman AI is typing...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAsk(inputQuery);
                }}
                className="p-3 bg-slate-50 dark:bg-slate-850 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="Ask about Aman's research, skills, projects..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
