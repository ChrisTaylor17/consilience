"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, MessageCircle, FolderOpen, Palette, User, Wallet, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: MessageCircle, label: 'Chat', href: '/chat' },
  { icon: FolderOpen, label: 'Projects', href: '/projects' },
  { icon: Palette, label: 'NFTs', href: '/nft' },
  { icon: User, label: 'Profile', href: '/profile' }
];

export function Navigation() {
  const [activeItem, setActiveItem] = useState('/dashboard');
  const { connected } = useWallet();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">CONSILIENCE</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveItem(item.href)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
                  activeItem === item.href
                    ? "bg-gradient-to-r from-indigo-500/20 to-rose-500/20 text-white border border-indigo-500/30"
                    : "text-white/70 hover:text-white hover:bg-white/[0.05]"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Wallet Connection */}
          <div className="flex items-center gap-4">
            <div className="wallet-adapter-button-trigger">
              <WalletMultiButton />
            </div>
            
            {connected && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm text-green-300">Connected</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}