"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bot, Users, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChatInterface } from '@/components/chat/chat-interface';
import { ChatRoom, ChatMessage, User } from '@/types';

// Mock data
const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  username: 'creator',
  skills: ['React', 'Design'],
  passions: ['Innovation', 'Art'],
  createdAt: new Date()
};

const mockRooms: ChatRoom[] = [
  {
    id: '1',
    name: 'AI Assistant',
    type: 'direct',
    participants: [mockUser],
    aiGuided: true,
    createdAt: new Date()
  },
  {
    id: '2',
    name: 'DeFi Art Platform',
    type: 'project',
    participants: [mockUser],
    projectId: '1',
    aiGuided: true,
    createdAt: new Date()
  },
  {
    id: '3',
    name: 'Web3 Designers',
    type: 'group',
    participants: [mockUser],
    aiGuided: false,
    createdAt: new Date()
  }
];

const mockMessages: ChatMessage[] = [
  {
    id: '1',
    content: 'Welcome to CONSILIENCE! I\'m here to help you build amazing projects. What would you like to work on today?',
    senderId: 'ai',
    sender: { id: 'ai', username: 'AI Assistant', email: '', skills: [], passions: [], createdAt: new Date() },
    roomId: '1',
    type: 'ai',
    timestamp: new Date(Date.now() - 3600000)
  },
  {
    id: '2',
    content: 'Hi! I\'m interested in creating a DeFi platform that combines art and finance.',
    senderId: '1',
    sender: mockUser,
    roomId: '1',
    type: 'user',
    timestamp: new Date(Date.now() - 3000000)
  },
  {
    id: '3',
    content: 'That\'s an exciting concept! DeFi art platforms are at the intersection of creativity and innovation. Let me help you break this down into actionable steps and find the right collaborators.',
    senderId: 'ai',
    sender: { id: 'ai', username: 'AI Assistant', email: '', skills: [], passions: [], createdAt: new Date() },
    roomId: '1',
    type: 'ai',
    timestamp: new Date(Date.now() - 2400000)
  }
];

export default function Chat() {
  const [selectedRoom, setSelectedRoom] = useState<ChatRoom>(mockRooms[0]);
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      senderId: content.startsWith('AI:') ? 'ai' : mockUser.id,
      sender: content.startsWith('AI:') 
        ? { id: 'ai', username: 'AI Assistant', email: '', skills: [], passions: [], createdAt: new Date() }
        : mockUser,
      roomId: selectedRoom.id,
      type: content.startsWith('AI:') ? 'ai' : 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
  };

  const roomMessages = messages.filter(msg => msg.roomId === selectedRoom.id);

  return (
    <div className="h-screen bg-[#030303] flex">
      {/* Sidebar */}
      <div className="w-80 border-r border-white/[0.08] bg-white/[0.02] flex flex-col">
        <div className="p-4 border-b border-white/[0.08]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Chats</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white"
            >
              <Plus className="h-4 w-4" />
            </motion.button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {mockRooms.map((room) => (
            <motion.div
              key={room.id}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              onClick={() => setSelectedRoom(room)}
              className={cn(
                "p-4 cursor-pointer border-b border-white/[0.05] transition-colors",
                selectedRoom.id === room.id && "bg-white/[0.05] border-l-2 border-l-indigo-500"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {room.type === 'direct' && room.aiGuided ? (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  ) : room.type === 'project' ? (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-white truncate">{room.name}</h3>
                    {room.aiGuided && (
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    )}
                  </div>
                  <p className="text-sm text-white/60 capitalize">{room.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Interface */}
      <div className="flex-1">
        <ChatInterface
          room={selectedRoom}
          currentUser={mockUser}
          messages={roomMessages}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}