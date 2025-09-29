"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.03] via-purple-500/[0.03] to-rose-500/[0.03]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-white/70">Join the Revolution</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-rose-200">
              Ready to Build the Future?
            </span>
          </h2>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join CONSILIENCE and connect with passionate creators, launch innovative projects, and participate in the new economy of collaborative work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-8 py-4 rounded-full font-semibold text-lg",
                "bg-gradient-to-r from-indigo-500 to-rose-500",
                "text-white shadow-lg shadow-indigo-500/25",
                "hover:shadow-xl hover:shadow-indigo-500/30",
                "transition-all duration-300",
                "flex items-center gap-2"
              )}
            >
              Get Early Access
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-8 py-4 rounded-full font-semibold text-lg",
                "border border-white/[0.15] text-white/90",
                "hover:bg-white/[0.05] hover:border-white/[0.25]",
                "transition-all duration-300"
              )}
            >
              Learn More
            </motion.button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/60">Creators Ready</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/60">Projects Launched</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$2M+</div>
              <div className="text-white/60">Value Created</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}