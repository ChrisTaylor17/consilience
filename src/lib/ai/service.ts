"use client";

import { ChatMessage, User, Project } from '@/types';

export class AIService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_AI_API_KEY || '';
    this.baseUrl = process.env.NEXT_PUBLIC_AI_BASE_URL || 'https://api.openai.com/v1';
  }

  async generateResponse(
    messages: ChatMessage[],
    context?: { users?: User[]; project?: Project }
  ): Promise<string> {
    try {
      const systemPrompt = this.buildSystemPrompt(context);
      const chatHistory = messages.map(msg => ({
        role: msg.type === 'ai' ? 'assistant' : 'user',
        content: msg.content
      }));

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            { role: 'system', content: systemPrompt },
            ...chatHistory
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      const data = await response.json();
      return data.choices[0]?.message?.content || 'I apologize, but I cannot generate a response right now.';
    } catch (error) {
      console.error('AI Service Error:', error);
      return 'I apologize, but I cannot generate a response right now.';
    }
  }

  async generateNFTPrompt(projectTitle: string, description: string): Promise<string> {
    const prompt = `Create a detailed art prompt for an NFT collection based on this project:
    Title: ${projectTitle}
    Description: ${description}
    
    Generate a creative, detailed prompt for AI art generation that captures the essence of this project.`;

    try {
      const response = await this.generateResponse([
        { id: '1', content: prompt, senderId: 'system', sender: {} as User, roomId: 'temp', type: 'user', timestamp: new Date() }
      ]);
      return response;
    } catch (error) {
      return `A vibrant, futuristic digital artwork representing ${projectTitle}`;
    }
  }

  async suggestCollaborators(user: User, project: Project): Promise<string[]> {
    // Mock implementation - in real app, this would use ML matching
    const suggestions = [
      'Based on the project requirements, I suggest looking for:',
      '• Frontend developers with React/Next.js experience',
      '• UI/UX designers familiar with Web3 interfaces',
      '• Blockchain developers with Solana experience',
      '• Marketing specialists for community building'
    ];
    
    return suggestions;
  }

  private buildSystemPrompt(context?: { users?: User[]; project?: Project }): string {
    let prompt = `You are CONSILIENCE AI, an intelligent assistant that helps people collaborate on creative projects. You are knowledgeable about:
    - Project management and collaboration
    - Blockchain technology and Solana
    - NFT creation and marketing
    - Creative processes and ideation
    - Team building and skill matching
    
    Be helpful, encouraging, and provide actionable advice. Keep responses concise but informative.`;

    if (context?.project) {
      prompt += `\n\nCurrent project context: ${context.project.title} - ${context.project.description}`;
    }

    if (context?.users) {
      prompt += `\n\nParticipants: ${context.users.map(u => u.username).join(', ')}`;
    }

    return prompt;
  }
}