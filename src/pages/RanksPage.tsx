import { motion } from 'framer-motion';
import { ranks } from '../data/ranks';
import AnimatedBlock from '../components/AnimatedBlock';

export default function RanksPage() {
  return (
    <div className="page-container">
      <AnimatedBlock>
        <h1 className="section-title">Server Ranks</h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8">
          Support our server and enhance your gameplay experience with these premium ranks.
          Each rank comes with unique perks and benefits, from basic starter perks to premium features.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <div className="minecraft-btn">
            Upgraded Ranks
          </div>
          <div className="minecraft-btn">
            Permanent Benefits
          </div>
        </div>
      </AnimatedBlock>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {ranks.map((rank, index) => (
          <AnimatedBlock key={rank.id} delay={index * 0.1 + 0.2}>
            <motion.div 
              className="fancy-border h-full flex flex-col"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div 
                className="py-3 text-center border-b border-gray-700 mb-4"
                style={{ background: `linear-gradient(to right, transparent, ${rank.color}40, transparent)` }}
              >
                <h2 className="text-2xl font-bold" style={{ color: rank.color }}>{rank.name}</h2>
              </div>
              
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">₹{rank.price}</span>
                {rank.id === 'vipplus' && (
                  <div className="mt-1 text-xs inline-block px-2 py-0.5 bg-green-500/30 rounded-full">BEST VALUE</div>
                )}
                {rank.id === 'noob' && (
                  <div className="mt-1 text-xs inline-block px-2 py-0.5 bg-gray-500/30 rounded-full">STARTER</div>
                )}
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-semibold mb-3 glow-text px-4">Perks:</h3>
                <ul className="space-y-2 px-4 mb-6">
                  {rank.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" 
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
              
              <div className="mt-auto px-4 pb-4">
                <a 
                  href="https://discord.gg/gAeFJDKsnb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full minecraft-btn"
                >
                  Purchase
                </a>
              </div>
            </motion.div>
          </AnimatedBlock>
        ))}
      </div>
      
      <AnimatedBlock delay={0.5} className="mt-16 max-w-4xl mx-auto">
        <div className="fancy-border">
          <h2 className="text-xl font-bold mb-4 glow-text">How to Purchase</h2>
          <p className="mb-4">
            To purchase a rank and support the server, follow these steps:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>Join our Discord server using the link provided</li>
            <li>Navigate to the #rank-purchase channel</li>
            <li>Open a ticket and specify which rank you'd like to purchase</li>
            <li>A staff member will assist you with the payment process</li>
            <li>Once payment is confirmed, your rank will be activated within 24 hours</li>
          </ol>
          <p className="text-sm text-gray-400 mt-4">
            All purchases are final and non-refundable. Ranks are permanent and will not expire.
            By purchasing a rank, you agree to abide by our server rules and terms of service.
          </p>
        </div>
      </AnimatedBlock>
    </div>
  );
}
