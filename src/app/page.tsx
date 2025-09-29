"use client";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] w-[600px] h-[140px] rounded-full bg-gradient-to-r from-indigo-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
      <div className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%] w-[500px] h-[120px] rounded-full bg-gradient-to-r from-rose-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
      <div className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] w-[300px] h-[80px] rounded-full bg-gradient-to-r from-violet-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
      <div className="absolute right-[15%] md:right-[20%] top-[10%] md:top-[15%] w-[200px] h-[60px] rounded-full bg-gradient-to-r from-amber-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
      <div className="absolute left-[20%] md:left-[25%] top-[5%] md:top-[10%] w-[150px] h-[40px] rounded-full bg-gradient-to-r from-cyan-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12">
            <div className="h-2 w-2 rounded-full bg-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">CONSILIENCE Network</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
              Connect Through
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 block">
              Skills & Passion
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
            Revolutionary SAAS platform that matches creators, launches Solana tokens, generates AI NFTs, and builds the future of collaborative work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Early Access
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}