"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-rose-400"></div>
            <span className="text-white/80 text-sm">CONSILIENCE Network</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Connect Through
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-white to-rose-300 bg-clip-text text-transparent">
              Skills & Passion
            </span>
          </h1>
          
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Revolutionary SAAS platform that matches people based on skills and passions, 
            enabling collaborative projects, crypto tokens, and NFT collections on Solana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Skills & Passion Matching</h3>
            <p className="text-white/70">Connect with like-minded individuals based on complementary skills and shared passions</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI-Guided Collaboration</h3>
            <p className="text-white/70">Smart group chats formed and guided by AI to maximize project success</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-xl">🪙</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Solana Integration</h3>
            <p className="text-white/70">Launch crypto tokens and create NFT collections directly on Solana blockchain</p>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  );
}