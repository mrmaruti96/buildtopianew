import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';
import ServerStatus from '../components/ServerStatus';
import AnimatedBlock from '../components/AnimatedBlock';

export default function HomePage() {
  const showcaseRef = useRef(null);
  const isShowcaseInView = useInView(showcaseRef, { once: true, amount: 0.3 });

  // Gallery images
  const galleryImages = [
    'https://i.ibb.co/3LWYXjH/Screenshot-2025-05-14-170022.png?q=80&w=1374&auto=format&fit=crop',
    'https://i.ibb.co/4Z6Nttvq/2025-05-10-20-18-12.png?q=80&w=1471&auto=format&fit=crop',
    'https://i.ibb.co/6SwLbTB/2025-05-10-20-28-50.png?q=80&w=1470&auto=format&fit=crop',
    'https://i.ibb.co/KcprH40P/2025-04-14-15-00-28.png?q=80&w=1374&auto=format&fit=crop',
    'https://i.ibb.co/1G5FGTnd/2025-01-19-16-35-28.png?q=80&w=1470&auto=format&fit=crop',
    'https://i.ibb.co/S757zxSx/Screenshot-2025-05-14-165656.png?q=80&w=1470&auto=format&fit=crop',
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.1, 0.4, 0.2, 1],
      }
    })
  };

  return (
    <div className="page-container relative">
      {/* Subtle animated background particles */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero section */}
      <section className="relative py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-center"
              animate={{ 
                y: [0, -10, 0],
                textShadow: [
                  "0 0 10px rgba(34, 221, 255, 0.6)",
                  "0 0 20px rgba(34, 221, 255, 1)",
                  "0 0 10px rgba(34, 221, 255, 0.6)"
                ]
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                textShadow: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="block text-white">
                Welcome to
              </span>
              <span 
                className="block bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent relative"
              >
                Buildtopia SMP
                {/* Enhanced shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg mb-6 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Join our thriving Minecraft community with unique gameplay features, 
              regular events, and a friendly community waiting to welcome you!
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/gamemodes" className="minecraft-btn relative overflow-hidden group">
                  <span className="relative z-10">Explore Gamemodes</span>
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href="https://discord.gg/gAeFJDKsnb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="minecraft-btn relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join Our Discord
                    <motion.svg 
                      className="w-4 h-4 group-hover:rotate-12 transition-transform" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </motion.svg>
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="floating text-center w-full relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Enhanced glowing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              style={{
                background: "radial-gradient(circle, rgba(34, 221, 255, 0.3) 0%, transparent 60%)",
                filter: "blur(30px)",
              }}
            />
            
            <motion.img 
              src="https://mocha-cdn.com/0196e190-5e08-7ba2-99d5-e2009a9a3170/Untitled-1.png" 
              alt="Buildtopia SMP Logo" 
              className="h-auto max-w-full mx-auto mb-6 relative z-10"
              style={{ 
                maxHeight: "300px",
                filter: "drop-shadow(0 0 15px rgba(34, 221, 255, 0.8))"
              }}
              animate={{ 
                y: [0, -10, 0],
                filter: [
                  "drop-shadow(0 0 10px rgba(34, 221, 255, 0.6))", 
                  "drop-shadow(0 0 20px rgba(34, 221, 255, 1))", 
                  "drop-shadow(0 0 10px rgba(34, 221, 255, 0.6))"
                ]
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                filter: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.08 }}
            />
            <div className="mt-4 max-w-md mx-auto">
              <ServerStatus />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Server information */}
      <AnimatedBlock delay={0.3}>
        <section className="mb-16">
          <h2 className="section-title">Server Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="md:col-span-2 fancy-border relative overflow-hidden group"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 gradient-text flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="text-2xl"
                  >
                    ⚡
                  </motion.span>
                  How to Join
                </h3>
                <p className="mb-4">
                  Joining our server is easy! Just follow these steps to get started:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Launch Minecraft Java Edition or Bedrock Edition</li>
                  <li>Go to Multiplayer → Add Server</li>
                  <li>Enter our server address below</li>
                  <li>Connect and start playing!</li>
                </ol>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <motion.div 
                    className="fancy-border bg-opacity-50 relative overflow-hidden group/card"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-sm text-gray-400 mb-1">Java Edition</h4>
                    <div 
                      className="font-mono select-all cursor-pointer hover:text-cyan-300 transition-colors" 
                      onClick={() => navigator.clipboard.writeText('play.buildtopiasmp.fun')}
                    >
                      play.buildtopiasmp.fun
                    </div>
                    {/* Click indicator */}
                    <div className="absolute top-2 right-2 text-xs text-gray-500 opacity-0 group-hover/card:opacity-100 transition-opacity">
                      Click to copy
                    </div>
                  </motion.div>
                  <motion.div 
                    className="fancy-border bg-opacity-50"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-sm text-gray-400 mb-1">Bedrock Edition</h4>
                    <div className="font-mono">IP: play.buildtopiasmp.fun</div>
                    <div className="font-mono">Port: 6004</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <ServerStatus />
            </motion.div>
          </div>
        </section>
      </AnimatedBlock>

      {/* Gallery */}
      <AnimatedBlock delay={0.4}>
        <section className="mb-16">
          <h2 className="section-title">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden rounded-xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 group relative"
                custom={index}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={image} 
                  alt={`Buildtopia SMP Showcase ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Enhanced hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/15 to-cyan-500/0 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedBlock>

      {/* YouTube Embed */}
      <AnimatedBlock delay={0.5}>
        <section className="mb-16">
          <h2 className="section-title">Latest Videos</h2>
          <motion.div 
            ref={showcaseRef} 
            className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 group"
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            {/* Subtle hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {isShowcaseInView && (
              <ReactPlayer
                url="https://www.youtube.com/embed/aaMPKqA9hLs?si=i3RVA6znAOBcVMJH"
                width="100%"
                height="100%"
                controls={true}
              />
            )}
          </motion.div>
          <div className="text-center mt-4">
            <motion.a 
              href="https://www.youtube.com/@mrMaruti9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.svg 
                className="w-5 h-5 mr-2 text-red-500" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </motion.svg>
              Subscribe to our YouTube Channel
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
            </motion.a>
          </div>
        </section>
      </AnimatedBlock>
    </div>
  );
}