import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '../data/team';
import AnimatedBlock from '../components/AnimatedBlock';

export default function CreditsPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="page-container">
      <AnimatedBlock>
        <h1 className="section-title">Meet The Team</h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          The dedicated individuals who work hard behind the scenes to make Buildtopia SMP the best possible experience.
        </p>
      </AnimatedBlock>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <AnimatedBlock key={member.id} delay={index * 0.1 + 0.2}>
            <motion.div 
              className="fancy-border text-center cursor-pointer"
              whileHover={{ 
                y: -5,
                boxShadow: `0 0 20px ${member.role === 'Owner' ? 'rgba(255, 102, 34, 0.4)' : 'rgba(34, 221, 255, 0.4)'}`,
                transition: { duration: 0.2 } 
              }}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative mb-4 pt-4">
                <div className="size-24 mx-auto rounded-full overflow-hidden border-2 border-primary/50">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ 
                    backgroundColor: member.role === 'Owner' ? 'var(--dark-orange)' : member.role === 'Admin' ? 'var(--primary)' : 'var(--background)',
                    border: '2px solid var(--background)'
                  }}
                >
                  {member.role}
                </div>
              </div>
              
              <h2 className={`text-xl font-bold mb-2 ${member.role === 'Owner' ? 'orange-glow-text' : 'glow-text'}`}>{member.name}</h2>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{member.bio}</p>
              
              <button className="text-primary text-sm hover:underline mb-4">
                View Full Bio
              </button>
            </motion.div>
          </AnimatedBlock>
        ))}
      </div>
      
      <AnimatedBlock delay={0.5} className="mt-16 max-w-4xl mx-auto">
        <div className="fancy-border">
          <h2 className="text-xl font-bold mb-4 glow-text">Special Thanks</h2>
          <p className="mb-4">
            We'd like to extend our gratitude to everyone who has contributed to making Buildtopia SMP a success:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              All our dedicated players who bring life to our server
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Our moderation team for keeping the community safe and friendly
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Builders who have contributed to our spawn and event areas
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Plugin developers who made our custom features possible
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Content creators who have showcased our server
            </li>
          </ul>
          <p className="text-center text-gray-400 mt-6">
            Want to join our team? Reach out on our Discord server!
          </p>
        </div>
      </AnimatedBlock>
      
      {/* Member Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="fancy-border max-w-lg w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="size-16 rounded-full overflow-hidden border-2 border-primary/50 mr-4">
                    <img 
                      src={selectedMember.avatar} 
                      alt={selectedMember.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${selectedMember.role === 'Owner' ? 'orange-glow-text' : 'glow-text'}`}>
                      {selectedMember.name}
                    </h2>
                    <div 
                      className="px-2 py-0.5 rounded-full text-xs font-bold inline-block"
                      style={{ 
                        backgroundColor: selectedMember.role === 'Owner' ? 'var(--dark-orange)' : selectedMember.role === 'Admin' ? 'var(--primary)' : 'var(--background)',
                      }}
                    >
                      {selectedMember.role}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{selectedMember.bio}</p>
                
                <div className="flex justify-center">
                  <button 
                    className="minecraft-btn"
                    onClick={() => setSelectedMember(null)}
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
