"use client";

import { motion } from 'framer-motion';
import { Users, MessageCircle, Coins, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onJoin?: () => void;
  onView?: () => void;
}

export function ProjectCard({ project, onJoin, onView }: ProjectCardProps) {
  const statusColors = {
    planning: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
    active: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    completed: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30'
  };

  const statusText = {
    planning: 'Planning',
    active: 'Active',
    completed: 'Completed'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={cn(
        "p-6 rounded-2xl border border-white/[0.08] backdrop-blur-sm",
        "bg-gradient-to-br from-white/[0.02] to-white/[0.05]",
        "hover:border-white/[0.15] transition-all duration-300",
        "group cursor-pointer"
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm line-clamp-2 mb-3">
            {project.description}
          </p>
        </div>
        <div className={cn(
          "px-3 py-1 rounded-full text-xs font-medium border",
          "bg-gradient-to-r", statusColors[project.status]
        )}>
          <span className="text-white">{statusText[project.status]}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs rounded-full bg-white/[0.1] text-white/80 border border-white/[0.1]"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-full bg-white/[0.1] text-white/60 border border-white/[0.1]">
              +{project.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>{project.collaborators.length}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="h-4 w-4" />
          <span>Chat</span>
        </div>
        {project.tokenAddress && (
          <div className="flex items-center gap-1">
            <Coins className="h-4 w-4" />
            <span>Token</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{new Date(project.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Collaborators */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.collaborators.slice(0, 4).map((collaborator, index) => (
            <div
              key={collaborator.id}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500 border-2 border-[#030303] flex items-center justify-center"
              style={{ zIndex: 10 - index }}
            >
              <span className="text-xs font-semibold text-white">
                {collaborator.username[0]?.toUpperCase()}
              </span>
            </div>
          ))}
          {project.collaborators.length > 4 && (
            <div className="w-8 h-8 rounded-full bg-white/[0.1] border-2 border-[#030303] flex items-center justify-center">
              <span className="text-xs text-white/60">
                +{project.collaborators.length - 4}
              </span>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          {onJoin && project.status !== 'completed' && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onJoin();
              }}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium",
                "bg-gradient-to-r from-indigo-500 to-rose-500",
                "text-white shadow-lg",
                "transition-all duration-200"
              )}
            >
              Join
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onView?.();
            }}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium",
              "border border-white/[0.15] text-white/90",
              "hover:bg-white/[0.05] hover:border-white/[0.25]",
              "transition-all duration-200",
              "flex items-center gap-1"
            )}
          >
            View
            <ArrowRight className="h-3 w-3" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}