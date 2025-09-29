"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] relative overflow-hidden flex items-center justify-center">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10" />
      
      {/* Visible floating shapes */}
      <div className="absolute left-[-5%] top-[20%] w-[600px] h-[140px] rounded-full bg-gradient-to-r from-indigo-500/30 to-transparent border-2 border-white/20 backdrop-blur-sm animate-pulse" />
      <div className="absolute right-[-5%] top-[70%] w-[500px] h-[120px] rounded-full bg-gradient-to-r from-rose-500/30 to-transparent border-2 border-white/20 backdrop-blur-sm animate-pulse" />
      <div className="absolute left-[10%] bottom-[10%] w-[300px] h-[80px] rounded-full bg-gradient-to-r from-violet-500/30 to-transparent border-2 border-white/20 backdrop-blur-sm animate-pulse" />
      <div className="absolute right-[20%] top-[15%] w-[200px] h-[60px] rounded-full bg-gradient-to-r from-amber-500/30 to-transparent border-2 border-white/20 backdrop-blur-sm animate-pulse" />
      <div className="absolute left-[25%] top-[10%] w-[150px] h-[40px] rounded-full bg-gradient-to-r from-cyan-500/30 to-transparent border-2 border-white/20 backdrop-blur-sm animate-pulse" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-12">
          <div className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="text-white/80 text-sm font-medium">CONSILIENCE Network</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <div className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            Connect Through
          </div>
          <div className="bg-gradient-to-r from-indigo-300 via-white to-rose-300 bg-clip-text text-transparent">
            Skills & Passion
          </div>
        </h1>

        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
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
  );
}