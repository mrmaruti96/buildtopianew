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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.1, 0.4, 0.2, 1],
      }
    }
  };

  return (
    <div className="page-container relative overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero section */}
      <section className="relative py-16 md:py-24">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-black leading-tight text-center lg:text-left"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.span 
                  className="block text-white mb-2"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255, 255, 255, 0.3)",
                      "0 0 20px rgba(255, 255, 255, 0.5)",
                      "0 0 10px rgba(255, 255, 255, 0.3)"
                    ]
                  }}
                  transition={{
                    textShadow: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                  }}
                >
                  Welcome to
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent relative"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    backgroundPosition: { repeat: Infinity, duration: 4, ease: "linear" }
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Buildtopia SMP
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-relaxed text-gray-300 max-w-2xl text-center lg:text-left"
                variants={itemVariants}
              >
                Embark on an epic journey in our thriving Minecraft community featuring 
                <span className="text-cyan-400 font-semibold"> unique gameplay mechanics</span>, 
                <span className="text-sky-400 font-semibold"> exciting events</span>, and 
                <span className="text-blue-400 font-semibold"> an amazing community</span> ready to welcome you home!
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/gamemodes" 
                  className="minecraft-btn group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10">Explore Gamemodes</span>
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
                  className="minecraft-btn group bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join Discord
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative group"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
            >
              {/* Glowing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                style={{
                  background: "radial-gradient(circle, rgba(34, 221, 255, 0.3) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              
              <motion.img 
                src="https://mocha-cdn.com/0196e190-5e08-7ba2-99d5-e2009a9a3170/Untitled-1.png" 
                alt="Buildtopia SMP Logo" 
                className="relative z-10 h-auto max-w-full mx-auto"
                style={{ 
                  maxHeight: "350px",
                  filter: "drop-shadow(0 0 25px rgba(34, 221, 255, 0.8))"
                }}
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 15px rgba(34, 221, 255, 0.6))", 
                    "drop-shadow(0 0 30px rgba(34, 221, 255, 1))", 
                    "drop-shadow(0 0 15px rgba(34, 221, 255, 0.6))"
                  ]
                }}
                transition={{ 
                  filter: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 0 40px rgba(34, 221, 255, 1))"
                }}
              />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-gray-900/80 via-gray-800/90 to-gray-900/80 backdrop-blur-md rounded-2xl p-4 border border-cyan-500/30 shadow-2xl">
                <ServerStatus />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Server information */}
      <AnimatedBlock delay={0.3}>
        <section className="mb-20">
          <motion.h2 
            className="section-title text-center mb-12"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Server Information
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-2 fancy-border relative overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center"
                  >
                    ⚡
                  </motion.div>
                  How to Join
                </h3>
                <p className="mb-6 text-gray-300 text-lg leading-relaxed">
                  Ready to start your adventure? Follow these simple steps to join our amazing community:
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Launch Minecraft Java Edition or Bedrock Edition",
                    "Navigate to Multiplayer → Add Server",
                    "Enter our server address from below",
                    "Connect and begin your epic journey!"
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-lg bg-gray-800/30 border border-gray-700/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-300 pt-1">{step}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div 
                    className="fancy-border bg-gradient-to-br from-green-900/20 to-emerald-900/20 hover:from-green-800/30 hover:to-emerald-800/30 transition-all duration-300 group/card"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                      Java Edition
                    </h4>
                    <div 
                      className="font-mono text-lg select-all cursor-pointer text-white bg-gray-900/50 p-3 rounded-lg border border-gray-700/50 hover:border-green-400/50 transition-colors group-hover/card:bg-gray-800/50" 
                      onClick={() => navigator.clipboard.writeText('play.buildtopiasmp.fun')}
                      title="Click to copy"
                    >
                      play.buildtopiasmp.fun
                    </div>
                  </motion.div>
                  <motion.div 
                    className="fancy-border bg-gradient-to-br from-blue-900/20 to-indigo-900/20 hover:from-blue-800/30 hover:to-indigo-800/30 transition-all duration-300 group/card"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                      <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                      Bedrock Edition
                    </h4>
                    <div className="space-y-2">
                      <div className="font-mono text-white bg-gray-900/50 p-2 rounded border border-gray-700/50 hover:border-blue-400/50 transition-colors group-hover/card:bg-gray-800/50">
                        <span className="text-gray-400 text-sm">IP:</span> play.buildtopiasmp.fun
                      </div>
                      <div className="font-mono text-white bg-gray-900/50 p-2 rounded border border-gray-700/50 hover:border-blue-400/50 transition-colors group-hover/card:bg-gray-800/50">
                        <span className="text-gray-400 text-sm">Port:</span> 6004
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="sticky top-8">
                <ServerStatus />
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedBlock>

      {/* Gallery */}
      <AnimatedBlock delay={0.4}>
        <section className="mb-20">
          <motion.h2 
            className="section-title text-center mb-12"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Epic Gallery
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="group aspect-square overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 relative"
                custom={index}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <motion.img 
                  src={image} 
                  alt={`Buildtopia SMP Showcase ${index + 1}`}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100"
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
        <section className="mb-20">
          <motion.h2 
            className="section-title text-center mb-12"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Latest Adventures
          </motion.h2>
          <motion.div 
            ref={showcaseRef} 
            className="relative aspect-video rounded-3xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 group"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isShowcaseInView && (
              <ReactPlayer
                url="https://www.youtube.com/embed/aaMPKqA9hLs?si=i3RVA6znAOBcVMJH"
                width="100%"
                height="100%"
                controls={tr