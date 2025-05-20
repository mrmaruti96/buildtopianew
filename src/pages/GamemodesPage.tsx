import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gameModes } from '../data/gameModes';
import AnimatedBlock from '../components/AnimatedBlock';

export default function GamemodesPage() {
  const [activeMode, setActiveMode] = useState(gameModes[0]);

  return (
    <div className="page-container">
      <AnimatedBlock>
        <h1 className="section-title">Game Modes</h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Explore our diverse range of gameplay experiences designed to offer something for every type of Minecraft player.
        </p>
      </AnimatedBlock>
      
      {/* Mode Selector */}
      <AnimatedBlock delay={0.2}>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {gameModes.map((mode) => (
            <button
              key={mode.id}
              className={`minecraft-btn ${activeMode.id === mode.id ? 'border-primary text-primary' : ''}`}
              onClick={() => setActiveMode(mode)}
            >
              {mode.name}
            </button>
          ))}
        </div>
      </AnimatedBlock>
      
      {/* Mode Details */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="fancy-border overflow-hidden">
              <img 
                src={activeMode.image} 
                alt={activeMode.name} 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-tertiary mb-4">{activeMode.name}</h2>
              <p className="text-gray-300 mb-6">{activeMode.description}</p>
              
              <h3 className="text-lg font-semibold mb-3 glow-text">Features:</h3>
              <ul className="space-y-2">
                {activeMode.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <svg 
                      className="h-5 w-5 text-primary mt-0.5 mr-2" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Additional Gameplay Information */}
      <AnimatedBlock delay={0.4} className="mt-16">
        <div className="fancy-border max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4 glow-text">Server Rules & Guidelines</h2>
          <p className="mb-4">
            To ensure everyone has a great experience on Buildtopia SMP, please follow these important rules:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              No griefing or stealing from other players
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Be respectful in chat and avoid excessive swearing
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              No hacking, cheating, or using exploits
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              PvP is only allowed in designated areas or with consent
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Build at least 200 blocks away from others unless invited
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Have fun and help create an amazing community!
            </li>
          </ul>
          <p className="text-sm text-gray-400">
            For a complete list of rules, please visit our Discord server.
          </p>
        </div>
      </AnimatedBlock>
    </div>
  );
}
