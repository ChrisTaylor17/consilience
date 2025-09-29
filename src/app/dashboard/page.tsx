"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectCard } from '@/components/projects/project-card';
import { Project, User } from '@/types';

// Mock data
const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  username: 'creator',
  skills: ['React', 'Design', 'Web3'],
  passions: ['Innovation', 'Art', 'Technology'],
  createdAt: new Date()
};

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'DeFi Art Platform',
    description: 'Revolutionary platform combining DeFi protocols with digital art marketplace',
    creatorId: '1',
    collaborators: [mockUser],
    skills: ['Solidity', 'React', 'Design'],
    status: 'active',
    chatRoomId: '1',
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'Sustainable NFT Collection',
    description: 'Eco-friendly NFT collection promoting environmental awareness',
    creatorId: '2',
    collaborators: [mockUser],
    skills: ['Art', 'Marketing', 'Blockchain'],
    status: 'planning',
    chatRoomId: '2',
    createdAt: new Date()
  }
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'planning' | 'active' | 'completed'>('all');

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, {mockUser.username}!
            </h1>
            <p className="text-white/60">
              Discover amazing projects and connect with passionate creators
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-6 py-3 rounded-lg font-semibold",
              "bg-gradient-to-r from-indigo-500 to-rose-500",
              "text-white shadow-lg",
              "flex items-center gap-2"
            )}
          >
            <Plus className="h-5 w-5" />
            New Project
          </motion.button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Projects', value: '3', icon: Sparkles },
            { label: 'Collaborators', value: '12', icon: Plus },
            { label: 'Tokens Launched', value: '2', icon: Plus },
            { label: 'NFTs Created', value: '8', icon: Plus }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white/[0.02] border border-white/[0.08] rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className="h-5 w-5 text-indigo-400" />
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects..."
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-lg",
                "bg-white/[0.05] border border-white/[0.1]",
                "text-white placeholder-white/40",
                "focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08]",
                "transition-all duration-200"
              )}
            />
          </div>
          
          <div className="flex gap-2">
            {['all', 'planning', 'active', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status as any)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium capitalize transition-all duration-200",
                  filterStatus === status
                    ? "bg-gradient-to-r from-indigo-500 to-rose-500 text-white"
                    : "bg-white/[0.05] border border-white/[0.1] text-white/70 hover:bg-white/[0.08]"
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onJoin={() => console.log('Join project:', project.id)}
              onView={() => console.log('View project:', project.id)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg mb-4">No projects found</p>
            <p className="text-white/40">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}