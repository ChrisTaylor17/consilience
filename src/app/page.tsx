"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-rose-500/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      
      {/* Animated floating shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3], 
          scale: [0.8, 1.1, 0.8],
          rotate: [10, 15, 10],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[15%] w-[600px] h-[140px] rounded-full bg-gradient-to-r from-indigo-500/40 via-indigo-400/20 to-transparent border-2 border-indigo-300/30 backdrop-blur-md shadow-2xl shadow-indigo-500/20"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
        animate={{ 
          opacity: [0.3, 0.7, 0.3], 
          scale: [0.8, 1.2, 0.8],
          rotate: [-15, -10, -15],
          y: [0, 15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[-8%] top-[70%] w-[500px] h-[120px] rounded-full bg-gradient-to-l from-rose-500/40 via-pink-400/20 to-transparent border-2 border-rose-300/30 backdrop-blur-md shadow-2xl shadow-rose-500/20"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4], 
          scale: [0.9, 1.3, 0.9],
          rotate: [-8, -3, -8],
          x: [0, 10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-[8%] bottom-[8%] w-[350px] h-[90px] rounded-full bg-gradient-to-r from-violet-500/40 via-purple-400/20 to-transparent border-2 border-violet-300/30 backdrop-blur-md shadow-2xl shadow-violet-500/20"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 30 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3], 
          scale: [0.8, 1.1, 0.8],
          rotate: [20, 25, 20],
          y: [0, -10, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-[18%] top-[12%] w-[220px] h-[70px] rounded-full bg-gradient-to-r from-amber-500/40 via-yellow-400/20 to-transparent border-2 border-amber-300/30 backdrop-blur-md shadow-2xl shadow-amber-500/20"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
        animate={{ 
          opacity: [0.4, 0.7, 0.4], 
          scale: [0.9, 1.2, 0.9],
          rotate: [-25, -20, -25],
          x: [0, -8, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute left-[22%] top-[8%] w-[180px] h-[50px] rounded-full bg-gradient-to-r from-cyan-500/40 via-teal-400/20 to-transparent border-2 border-cyan-300/30 backdrop-blur-md shadow-2xl shadow-cyan-500/20"
      />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/30 mb-16 backdrop-blur-xl shadow-lg"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 shadow-lg shadow-rose-500/50" 
            />
            <span className="text-white/90 text-sm font-semibold tracking-wider">CONSILIENCE Network</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-7xl md:text-9xl font-black mb-12 leading-none"
          >
            <motion.div 
              className="bg-gradient-to-b from-white via-white/95 to-white/80 bg-clip-text text-transparent mb-6"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Connect Through
            </motion.div>
            <motion.div 
              className="bg-gradient-to-r from-indigo-300 via-purple-300 via-pink-300 to-rose-300 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Skills & Passion
            </motion.div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="text-2xl text-white/70 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Revolutionary SAAS platform connecting creators through AI, launching Solana tokens, generating NFTs, and building the future of collaborative work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-indigo-500/30 backdrop-blur-sm border border-white/20 transition-all duration-300"
            >
              Get Early Access
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border-2 border-white/30 text-white font-semibold text-lg rounded-2xl hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-[#030303]/60 pointer-events-none" />
    </div>
  );
}