export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  skills: string[];
  passions: string[];
  bio?: string;
  walletAddress?: string;
  createdAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  creatorId: string;
  collaborators: User[];
  skills: string[];
  status: 'planning' | 'active' | 'completed';
  tokenAddress?: string;
  nftCollection?: string;
  chatRoomId: string;
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  content: string;
  senderId: string;
  sender: User;
  roomId: string;
  type: 'user' | 'ai' | 'system';
  timestamp: Date;
}

export interface ChatRoom {
  id: string;
  name: string;
  type: 'direct' | 'group' | 'project';
  participants: User[];
  projectId?: string;
  aiGuided: boolean;
  createdAt: Date;
}

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
}

export interface TokenLaunch {
  id: string;
  projectId: string;
  name: string;
  symbol: string;
  supply: number;
  mintAddress?: string;
  status: 'pending' | 'launched' | 'failed';
  createdAt: Date;
}