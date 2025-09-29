"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[#030303] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-rose-500/[0.08]" />
        
        {/* Floating Shapes */}
        <motion.div
          initial={{ opacity: 0, x: -200, rotate: -20 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute -left-20 top-1/4 w-96 h-24 bg-gradient-to-r from-indigo-500/30 to-transparent rounded-full blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, x: 200, rotate: 20 }}
          animate={{ opacity: 1, x: 0, rotate: -15 }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
          className="absolute -right-20 top-3/4 w-80 h-20 bg-gradient-to-l from-rose-500/30 to-transparent rounded-full blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 200, rotate: 30 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 2.5, delay: 0.6, ease: "easeOut" }}
          className="absolute left-1/4 bottom-20 w-60 h-16 bg-gradient-to-r from-violet-500/30 to-transparent rounded-full blur-sm"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-white/70 text-sm font-medium">CONSILIENCE Network</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <div className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Connect Through
            </div>
            <div className="bg-gradient-to-r from-indigo-300 via-white to-rose-300 bg-clip-text text-transparent">
              Skills & Passion
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Revolutionary SAAS platform that matches creators, launches Solana tokens, generates AI NFTs, and builds the future of collaborative work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105">
              Get Early Access
            </button>
            <button className="px-8 py-4 border border-white/20 text-white/90 font-semibold rounded-xl hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Experience the future of collaborative work with AI-powered matching and blockchain integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🎯",
                title: "Skills & Passion Matching",
                description: "Advanced AI connects you with perfect collaborators based on complementary skills and shared interests"
              },
              {
                emoji: "🤖",
                title: "AI-Guided Projects",
                description: "Smart assistance guides your team through project planning, execution, and success milestones"
              },
              {
                emoji: "⚡",
                title: "Solana Integration",
                description: "Launch tokens, create NFTs, and build on the fastest blockchain with seamless wallet integration"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group p-8 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/[0.08] rounded-2xl hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.emoji}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500/[0.05] via-purple-500/[0.05] to-rose-500/[0.05]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of creators building amazing projects, launching tokens, and shaping the new economy of collaborative work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="px-10 py-5 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105">
                Get Early Access
              </button>
              <button className="px-10 py-5 border border-white/20 text-white/90 font-semibold text-lg rounded-xl hover:bg-white/[0.05] transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-white/60 text-sm">Creators Ready</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-white/60 text-sm">Projects Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">$2M+</div>
                <div className="text-white/60 text-sm">Value Created</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}