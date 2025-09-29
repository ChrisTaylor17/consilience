"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Download, Sparkles, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AIService } from '@/lib/ai/service';

interface NFTGeneratorProps {
  projectTitle: string;
  projectDescription: string;
  onGenerate: (metadata: any) => void;
}

export function NFTGenerator({ projectTitle, projectDescription, onGenerate }: NFTGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState('');
  const aiService = new AIService();

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      // Generate AI art prompt
      const artPrompt = customPrompt || await aiService.generateNFTPrompt(projectTitle, projectDescription);
      
      // Mock image generation - in real app, integrate with DALL-E or Midjourney
      const mockImageUrl = `https://picsum.photos/512/512?random=${Date.now()}`;
      
      setTimeout(() => {
        setGeneratedImage(mockImageUrl);
        setIsGenerating(false);
        
        const metadata = {
          name: `${projectTitle} Collection #1`,
          description: `Unique NFT from the ${projectTitle} project`,
          image: mockImageUrl,
          attributes: [
            { trait_type: "Project", value: projectTitle },
            { trait_type: "Type", value: "Genesis" },
            { trait_type: "Rarity", value: "Rare" }
          ]
        };
        
        onGenerate(metadata);
      }, 3000);
    } catch (error) {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-6 bg-white/[0.02] border border-white/[0.08] rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <Palette className="h-5 w-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">NFT Generator</h3>
          <p className="text-sm text-white/60">Create unique artwork for your project</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Custom Art Prompt (Optional)
          </label>
          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="Describe the style and elements you want in your NFT..."
            className={cn(
              "w-full px-4 py-3 rounded-lg resize-none",
              "bg-white/[0.05] border border-white/[0.1]",
              "text-white placeholder-white/40",
              "focus:outline-none focus:border-purple-400/50 focus:bg-white/[0.08]",
              "transition-all duration-200"
            )}
            rows={3}
          />
        </div>

        {generatedImage ? (
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={generatedImage}
                alt="Generated NFT"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                className={cn(
                  "flex-1 py-3 rounded-lg font-medium",
                  "bg-gradient-to-r from-purple-500 to-pink-500",
                  "text-white shadow-lg",
                  "transition-all duration-200",
                  "flex items-center justify-center gap-2"
                )}
              >
                <Sparkles className="h-4 w-4" />
                Generate New
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium",
                  "border border-white/[0.15] text-white/90",
                  "hover:bg-white/[0.05] hover:border-white/[0.25]",
                  "transition-all duration-200"
                )}
              >
                <Download className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGenerate}
            disabled={isGenerating}
            className={cn(
              "w-full py-12 rounded-lg border-2 border-dashed border-white/[0.1]",
              "hover:border-purple-400/50 hover:bg-white/[0.02]",
              "transition-all duration-200",
              "flex flex-col items-center gap-3",
              isGenerating && "animate-pulse"
            )}
          >
            {isGenerating ? (
              <>
                <Sparkles className="h-8 w-8 text-purple-400 animate-spin" />
                <span className="text-white/80">Generating your NFT...</span>
                <span className="text-sm text-white/60">This may take a few moments</span>
              </>
            ) : (
              <>
                <ImageIcon className="h-8 w-8 text-white/40" />
                <span className="text-white/80">Generate NFT Artwork</span>
                <span className="text-sm text-white/60">Click to create unique art for your project</span>
              </>
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
}