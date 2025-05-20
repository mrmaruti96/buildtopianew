import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { crates } from '../data/crates';
import AnimatedBlock from '../components/AnimatedBlock';
import { ChevronRight, Package } from 'lucide-react';

export default function CratesPage() {
  const [selectedCrate, setSelectedCrate] = useState(null);

  return (
    <div className="page-container">
      <AnimatedBlock>
        <h1 className="section-title">Crates</h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Unlock amazing rewards with our selection of crates. Each crate contains different items and perks to enhance your gameplay experience.
        </p>
      </AnimatedBlock>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {crates.map((crate, index) => (
          <AnimatedBlock key={crate.id} delay={index * 0.1 + 0.2}>
            <motion.div 
              className="fancy-border h-full flex flex-col"
              whileHover={{ 
                y: -5, 
                boxShadow: `0 0 20px ${crate.color}80`
              }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCrate(crate)}
            >
              <div className="relative overflow-hidden rounded-t-xl h-48">
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"
                />
                <img 
                  src={crate.image} 
                  alt={crate.name} 
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute top-0 left-0 right-0 py-2 text-center z-20"
                  style={{ background: `linear-gradient(to right, transparent, ${crate.color}40, transparent)` }}
                >
                  <h2 className="text-xl font-bold" style={{ color: crate.color }}>{crate.name}</h2>
                </div>
                <div className="absolute bottom-2 right-2 z-20">
                  <div className="bg-black/70 px-3 py-1 rounded-full text-lg font-bold" style={{ color: crate.color }}>
                    ₹{crate.price}
                  </div>
                </div>
              </div>
              
              <div className="p-4 flex-grow">
                <p className="text-gray-300 mb-4 text-sm">{crate.description}</p>
                
                <div className="mt-auto">
                  <button 
                    className="w-full minecraft-btn flex items-center justify-center"
                    style={{ borderColor: `${crate.color}40` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCrate(crate);
                    }}
                  >
                    <Package size={16} className="mr-2" />
                    View Rewards
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatedBlock>
        ))}
      </div>
      
      <AnimatedBlock delay={0.5} className="mt-16 max-w-4xl mx-auto">
        <div className="fancy-border">
          <h2 className="text-xl font-bold mb-4 glow-text">How To Get Crates</h2>
          <p className="mb-4">
            There are multiple ways to obtain crates on our server:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><span className="text-primary font-medium">Purchase:</span> Buy crates directly from our store</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><span className="text-primary font-medium">Vote Rewards:</span> Get free crates by voting for our server daily</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><span className="text-primary font-medium">Special Events:</span> Participate in server events for a chance to win crates</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><span className="text-primary font-medium">Playtime Rewards:</span> Earn crates automatically by playing on the server</span>
            </li>
          </ul>
          <p className="text-sm text-gray-400 mt-4">
            All crate purchases help support the server and ensure we can continue providing a great experience for everyone.
          </p>
        </div>
      </AnimatedBlock>
      
      {/* Crate Details Modal */}
      <AnimatePresence>
        {selectedCrate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCrate(null)}
          >
            <motion.div
              className="fancy-border max-w-lg w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10" />
                <img 
                  src={selectedCrate.image} 
                  alt={selectedCrate.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h2 className="text-3xl font-bold" style={{ color: selectedCrate.color }}>
                    {selectedCrate.name}
                  </h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{selectedCrate.description}</p>
                
                <h3 className="text-lg font-semibold mb-3 glow-text">Possible Rewards:</h3>
                <ul className="space-y-2 mb-6">
                  {selectedCrate.rewards.map((reward, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" 
                        style={{ color: selectedCrate.color }}
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <rect width="8" height="8" x="8" y="8" rx="2" />
                        <path d="M12 2v4" />
                        <path d="M12 18v4" />
                        <path d="M2 12h4" />
                        <path d="M18 12h4" />
                      </svg>
                      <span>{reward}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold" style={{ color: selectedCrate.color }}>
                    Price: ₹{selectedCrate.price}
                  </div>
                  
                  <button 
                    className="minecraft-btn"
                    onClick={() => setSelectedCrate(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
