"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, Users, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChatMessage, User, ChatRoom } from '@/types';
import { AIService } from '@/lib/ai/service';

interface ChatInterfaceProps {
  room: ChatRoom;
  currentUser: User;
  messages: ChatMessage[];
  onSendMessage: (content: string) => void;
}

export function ChatInterface({ room, currentUser, messages, onSendMessage }: ChatInterfaceProps) {
  const [newMessage, setNewMessage] = useState('');
  const [isAITyping, setIsAITyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const aiService = new AIService();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const content = newMessage;
    setNewMessage('');
    onSendMessage(content);

    // If AI-guided room, generate AI response
    if (room.aiGuided && !content.startsWith('/')) {
      setIsAITyping(true);
      try {
        const aiResponse = await aiService.generateResponse(
          [...messages, {
            id: Date.now().toString(),
            content,
            senderId: currentUser.id,
            sender: currentUser,
            roomId: room.id,
            type: 'user',
            timestamp: new Date()
          }]
        );
        
        setTimeout(() => {
          onSendMessage(aiResponse);
          setIsAITyping(false);
        }, 1000);
      } catch (error) {
        setIsAITyping(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#030303]">
      {/* Chat Header */}
      <div className="p-4 border-b border-white/[0.08] bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {room.aiGuided && <Bot className="h-5 w-5 text-indigo-400" />}
            <Users className="h-5 w-5 text-white/60" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{room.name}</h3>
            <p className="text-sm text-white/60">
              {room.participants.length} participants
              {room.aiGuided && ' • AI Guided'}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                "flex gap-3",
                message.senderId === currentUser.id ? "justify-end" : "justify-start"
              )}
            >
              {message.senderId !== currentUser.id && (
                <div className="flex-shrink-0">
                  {message.type === 'ai' ? (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">
                        {message.sender.username?.[0]?.toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div
                className={cn(
                  "max-w-xs lg:max-w-md px-4 py-2 rounded-2xl",
                  message.senderId === currentUser.id
                    ? "bg-gradient-to-r from-indigo-500 to-rose-500 text-white"
                    : message.type === 'ai'
                    ? "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-white"
                    : "bg-white/[0.05] border border-white/[0.1] text-white"
                )}
              >
                {message.senderId !== currentUser.id && message.type !== 'ai' && (
                  <p className="text-xs text-white/60 mb-1">{message.sender.username}</p>
                )}
                <p className="text-sm">{message.content}</p>
                <p className="text-xs text-white/50 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isAITyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 justify-start"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 px-4 py-2 rounded-2xl">
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-indigo-400 animate-pulse" />
                <span className="text-sm text-white/80">AI is thinking...</span>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-white/[0.08] bg-white/[0.02]">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className={cn(
              "flex-1 px-4 py-3 rounded-lg",
              "bg-white/[0.05] border border-white/[0.1]",
              "text-white placeholder-white/40",
              "focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08]",
              "transition-all duration-200"
            )}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className={cn(
              "px-4 py-3 rounded-lg",
              "bg-gradient-to-r from-indigo-500 to-rose-500",
              "text-white shadow-lg",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-all duration-200"
            )}
          >
            <Send className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}