"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating shapes - exact original positions */}
      <motion.div
        initial={{ opacity: 0, y: -150, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: 12 }}
        transition={{ duration: 2.4, delay: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
        className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-[600px] h-[140px] relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -150, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: -15 }}
        transition={{ duration: 2.4, delay: 0.5, ease: [0.23, 0.86, 0.39, 0.96] }}
        className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-[500px] h-[120px] relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -150, rotate: 7 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 2.4, delay: 0.4, ease: [0.23, 0.86, 0.39, 0.96] }}
        className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-[300px] h-[80px] relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -150, rotate: 35 }}
        animate={{ opacity: 1, y: 0, rotate: 20 }}
        transition={{ duration: 2.4, delay: 0.6, ease: [0.23, 0.86, 0.39, 0.96] }}
        className="absolute right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-[200px] h-[60px] relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -150, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: -25 }}
        transition={{ duration: 2.4, delay: 0.7, ease: [0.23, 0.86, 0.39, 0.96] }}
        className="absolute left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-[150px] h-[40px] relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>
      </motion.div>

      {/* Main content - exact original layout */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <div className="h-2 w-2 rounded-full bg-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">CONSILIENCE Network</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Connect Through
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                Skills & Passion
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Crafting exceptional digital experiences through innovative design and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay - exact original */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}