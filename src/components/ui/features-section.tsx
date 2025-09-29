"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, Coins, Palette, Bot, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Users,
    title: "Skills & Passion Matching",
    description: "Connect with like-minded individuals based on complementary skills and shared passions",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: MessageCircle,
    title: "AI-Guided Collaboration",
    description: "Smart group chats formed and guided by AI to maximize project success",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Coins,
    title: "Solana Token Launch",
    description: "Launch crypto tokens for your projects directly on the Solana blockchain",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Palette,
    title: "AI-Generated NFTs",
    description: "Create unique NFT collections with AI-generated artwork for your projects",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Bot,
    title: "Personal AI Assistant",
    description: "Direct chat with AI for guidance, project planning, and creative inspiration",
    gradient: "from-indigo-500/20 to-violet-500/20"
  },
  {
    icon: Zap,
    title: "New Economic Model",
    description: "Capture real work value through blockchain-grounded collaborative economy",
    gradient: "from-yellow-500/20 to-amber-500/20"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
            Revolutionary Features
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Experience the future of collaborative work with AI-powered matching, blockchain integration, and creative tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "p-6 rounded-2xl border border-white/[0.08] backdrop-blur-sm",
                "bg-gradient-to-br", feature.gradient,
                "hover:border-white/[0.15] transition-all duration-300",
                "group cursor-pointer"
              )}
            >
              <div className="mb-4">
                <feature.icon className="h-8 w-8 text-white/80 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}