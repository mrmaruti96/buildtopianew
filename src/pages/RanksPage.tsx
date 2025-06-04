import { useState } from 'react';
import { motion } from 'framer-motion';
import { ranks } from '../data/ranks';
import AnimatedBlock from '../components/AnimatedBlock';

const filters = [
  { id: 'all', label: 'All Ranks' },
  { id: 'upgraded', label: 'Upgraded Ranks' },
  { id: 'starter', label: 'Starter Only' },
];

export default function RanksPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredRanks = ranks.filter(rank => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'upgraded') return rank.id !== 'noob';
    if (activeFilter === 'starter') return rank.id === 'noob';
    return true;
  });

  return (
    <div className="page-container">
      <AnimatedBlock>
        <h1 className="section-title">Server Ranks</h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8">
          Support the server and unlock powerful perks. Choose from beginner to advanced ranks.
        </p>

        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`minecraft-btn px-5 py-1.5 transition-all ${
                activeFilter === filter.id ? 'bg-yellow-400 text-black' : ''
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </AnimatedBlock>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredRanks.map((rank, index) => (
          <AnimatedBlock key={rank.id} delay={index * 0.1 + 0.2}>
            <motion.div 
              className="fancy-border rounded-2xl shadow-md bg-neutral-900 flex flex-col h-full transition-all"
              whileHover={{ y: -6 }}
            >
              <div 
                className="py-3 text-center border-b border-gray-700"
                style={{ background: `linear-gradient(to right, transparent, ${rank.color}30, transparent)` }}
              >
                <h2 className="text-2xl font-bold" style={{ color: rank.color }}>
                  {rank.name}
                </h2>
              </div>

              <div className="text-center my-4">
                <span className="text-3xl font-extrabold">₹{rank.price}</span>
                {rank.id === 'vipplus' && (
                  <div className="mt-1 text-xs px-2 py-0.5 bg-green-500/30 rounded-full inline-block">
                    BEST VALUE
                  </div>
                )}
                {rank.id === 'noob' && (
                  <div className="mt-1 text-xs px-2 py-0.5 bg-gray-500/30 rounded-full inline-block">
                    STARTER
                  </div>
                )}
              </div>

              <div className="flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-center glow-text">Perks</h3>
                <ul className="space-y-2 px-6 pb-6 text-sm text-gray-200">
                  {rank.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 pb-6 mt-auto">
                <a 
                  href="https://discord.gg/gAeFJDKsnb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="minecraft-btn block text-center"
                >
                  Purchase
                </a>
              </div>
            </motion.div>
          </AnimatedBlock>
        ))}
      </div>

      <AnimatedBlock delay={0.6} className="mt-20 max-w-4xl mx-auto">
        <div className="fancy-border p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4 glow-text">How to Purchase</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>Join our Discord server using the button above.</li>
            <li>Go to the #rank-purchase channel.</li>
            <li>Create a ticket and mention your desired rank.</li>
            <li>Wait for a staff member to assist with payment.</li>
            <li>Rank will be activated within 24 hours after confirmation.</li>
          </ol>
          <p className="text-sm text-gray-400 mt-4">
            All purchases are final and non-refundable. By purchasing, you agree to follow our server rules and terms.
          </p>
        </div>
      </AnimatedBlock>
    </div>
  );
}
