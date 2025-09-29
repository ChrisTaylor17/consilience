"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10" />
      
      {/* Animated floating shapes */}
      <motion.div
        initial={{ opacity: 0, y: -100, rotate: -15 }}
        animate={{ opacity: 1, y: 0, rotate: 12 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute left-[-5%] top-[20%] w-[600px] h-[140px] rounded-full bg-gradient-to-r from-indigo-500/20 to-transparent border-2 border-white/10 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, y: -100, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: -15 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute right-[0%] top-[75%] w-[500px] h-[120px] rounded-full bg-gradient-to-r from-rose-500/20 to-transparent border-2 border-white/10 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, y: -100, rotate: 7 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute left-[10%] bottom-[10%] w-[300px] h-[80px] rounded-full bg-gradient-to-r from-violet-500/20 to-transparent border-2 border-white/10 backdrop-blur-sm"
      />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-12"
          >
            <div className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-white/70 text-sm">CONSILIENCE Network</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tight"
          >
            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent block">
              Connect Through
            </span>
            <span className="bg-gradient-to-r from-indigo-300 via-white to-rose-300 bg-clip-text text-transparent block">
              Skills & Passion
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Revolutionary platform matching creators through AI, launching tokens on Solana, and building the future of collaborative work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Early Access
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features section */}
      <div className="relative z-10 py-24 bg-gradient-to-b from-transparent to-indigo-500/5">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
          >
            Revolutionary Features
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👥",
                title: "Skills & Passion Matching",
                description: "AI-powered matching connects you with perfect collaborators based on complementary skills and shared passions"
              },
              {
                icon: "🤖",
                title: "AI-Guided Collaboration",
                description: "Smart group chats and project guidance powered by advanced AI to maximize your success"
              },
              {
                icon: "🪙",
                title: "Solana Integration",
                description: "Launch crypto tokens and create NFT collections directly on Solana blockchain"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative z-10 py-24 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-rose-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Join CONSILIENCE and connect with passionate creators, launch innovative projects, and participate in the new economy.
            </p>
            <button className="px-12 py-6 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-bold text-lg rounded-lg shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105">
              Get Early Access
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}