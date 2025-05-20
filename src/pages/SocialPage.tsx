import { motion } from 'framer-motion';
import AnimatedBlock from '../components/AnimatedBlock';

export default function SocialPage() {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@mrMaruti9',
      color: '#FF0000',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
      ),
      description: 'Subscribe to our channel for gameplay videos, tutorials, and server events!'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/gAeFJDKsnb',
      color: '#5865F2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 5.5-1 9 0"/><path d="M7.5 16.5c3.5 1 5.5 1 9 0"/><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.333.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"/><path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.333-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"/></svg>
      ),
      description: 'Join our community Discord for announcements, support, and to connect with other players!'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/not_maruti/?hl=en',
      color: '#E1306C',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      ),
      description: 'Follow us on Instagram for behind-the-scenes content and server updates!'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/mr_Maruti96',
      color: '#1DA1F2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 7.9-5.1 1.1 1.1 2 2.1 2.1 2.1z"/></svg>
      ),
      description: 'Follow us on Twitter for quick updates and server announcements!'
    }
  ];

  return (
    <div className="page-container">
      <AnimatedBlock>
        <h1 className="section-title">Connect With Us</h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Join our community across various platforms to stay updated, 
          chat with other players, and never miss exciting server events!
        </p>
      </AnimatedBlock>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {socialLinks.map((social, index) => (
          <AnimatedBlock key={social.name} delay={index * 0.1 + 0.2}>
            <motion.a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="fancy-border block h-full hover:border-opacity-80"
              whileHover={{ 
                y: -5, 
                borderColor: social.color,
                transition: { duration: 0.2 } 
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full" style={{ color: social.color, backgroundColor: `${social.color}20` }}>
                  {social.icon}
                </div>
                <h2 className="text-2xl font-bold" style={{ color: social.color }}>{social.name}</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                {social.description}
              </p>
              
              <div className="flex items-center text-sm font-medium mt-auto" style={{ color: social.color }}>
                Visit {social.name}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="m10 14 10-10"/></svg>
              </div>
            </motion.a>
          </AnimatedBlock>
        ))}
      </div>
      
      <AnimatedBlock delay={0.5} className="mt-16 max-w-4xl mx-auto">
        <div className="fancy-border">
          <h2 className="text-xl font-bold mb-4 glow-text">Community Events</h2>
          <p className="mb-4">
            We regularly host special events for our community across all platforms:
          </p>
          <ul className="space-y-4 mb-4">
            <li className="flex items-start">
              <div className="p-2 rounded-full bg-primary/20 text-primary mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7 3 5 5 3"/><path d="M9 3h1"/><path d="m13 3 2 2-2 2"/><path d="M19 3h2v2"/><path d="M21 7v1"/><path d="m21 13 2 2-2 2"/><path d="M21 19v2h-2"/><path d="M17 21h-1"/><path d="m13 21-2-2 2-2"/><path d="M5 21H3v-2"/><path d="M3 17v-1"/><path d="M3 9v4"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Build Competitions</h3>
                <p>Monthly themed building contests with exciting prizes for the winners.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="p-2 rounded-full bg-secondary/20 text-secondary mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Live Streams</h3>
                <p>Weekly live streams on YouTube showcasing server progress and player creations.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="p-2 rounded-full bg-primary/20 text-primary mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16v-3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7h7"/><path d="M18 16h.01"/><path d="M18 13h.01"/><path d="M16 10h.01"/><path d="M13 10h.01"/><path d="M13 13h.01"/><path d="M13 16h.01"/><path d="m20 7-5-5-5 5h10"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Discord Tournaments</h3>
                <p>PvP and mini-game tournaments with exclusive ranks and in-game rewards.</p>
              </div>
            </li>
          </ul>
          <p className="text-sm text-gray-400 mt-6">
            Make sure to follow us on all platforms to stay updated about upcoming events!
          </p>
        </div>
      </AnimatedBlock>
    </div>
  );
}
