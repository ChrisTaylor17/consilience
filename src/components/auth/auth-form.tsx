"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onSubmit: (data: any) => void;
  onModeChange: (mode: 'login' | 'signup') => void;
}

export function AuthForm({ mode, onSubmit, onModeChange }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    skills: '',
    passions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
      passions: formData.passions.split(',').map(p => p.trim()).filter(Boolean)
    };
    onSubmit(data);
  };

  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span className="text-sm text-white/70">CONSILIENCE</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Join the Network'}
            </h1>
            <p className="text-white/60">
              {mode === 'login' 
                ? 'Connect with your creative community' 
                : 'Start building amazing projects together'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    className={cn(
                      "w-full pl-10 pr-4 py-3 rounded-lg",
                      "bg-white/[0.05] border border-white/[0.1]",
                      "text-white placeholder-white/40",
                      "focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08]",
                      "transition-all duration-200"
                    )}
                    placeholder="Choose a username"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-lg",
                    "bg-white/[0.05] border border-white/[0.1]",
                    "text-white placeholder-white/40",
                    "focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08]",
                    "transition-all duration-200"
                  )}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-lg",
                    "bg-white/[0.05] border border-white/[0.1]",
                    "text-white placeholder-white/40",
                    "focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08]",
                    "transition-all duration-200"
                  )}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {mode === 'signup' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Skills (comma separated)
                  </label>
                  <input
                    type="text"
                    value={formData.skills}
                    onChange={(e) => setFormData({...formData, skills: e.target.value})}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-white/[0.05] border border-white/[0.1]",
                      "text-white placeholder-white/40",
                      "focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08]",
                      "transition-all duration-200"
                    )}
                    placeholder="React, Design, Marketing..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Passions (comma separated)
                  </label>
                  <input
                    type="text"
                    value={formData.passions}
                    onChange={(e) => setFormData({...formData, passions: e.target.value})}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-white/[0.05] border border-white/[0.1]",
                      "text-white placeholder-white/40",
                      "focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08]",
                      "transition-all duration-200"
                    )}
                    placeholder="Web3, Art, Sustainability..."
                  />
                </div>
              </>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={cn(
                "w-full py-3 rounded-lg font-semibold",
                "bg-gradient-to-r from-indigo-500 to-rose-500",
                "text-white shadow-lg shadow-indigo-500/25",
                "hover:shadow-xl hover:shadow-indigo-500/30",
                "transition-all duration-300"
              )}
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => onModeChange(mode === 'login' ? 'signup' : 'login')}
              className="text-white/60 hover:text-white transition-colors"
            >
              {mode === 'login' 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"
              }
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}