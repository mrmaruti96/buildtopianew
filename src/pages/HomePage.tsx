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
    <div className="page-container">
      {/* Hero section */}
      <section className="relative py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 
  className="relative text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-center"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <span className="block text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
    Welcome to
  </span>
  <span 
    className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent 
               drop-shadow-[0_0_6px_rgba(34,221,255,0.7)] 
               drop-shadow-[0_0_12px_rgba(34,221,255,0.9)]"
  >
    Buildtopia SMP
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
              <Link to="/gamemodes" className="minecraft-btn">
                Explore Gamemodes
              </Link>
              <a 
                href="https://discord.gg/gAeFJDKsnb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="minecraft-btn"
              >
                Join Our Discord
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="floating text-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.img 
  src="https://mocha-cdn.com/0196e190-5e08-7ba2-99d5-e2009a9a3170/Untitled-1.png" 
  alt="Buildtopia SMP Logo" 
  className="h-auto max-w-full mx-auto mb-6"
  style={{ 
    maxHeight: "300px", // increased from 220px
    filter: "drop-shadow(0 0 15px rgba(34, 221, 255, 0.8))" // brighter base glow
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
  whileHover={{ scale: 1.08 }} // slightly more scale on hover
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
            <div className="md:col-span-2 fancy-border">
              <h3 className="text-xl font-bold mb-4 gradient-text">How to Join</h3>
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
                <div className="fancy-border bg-opacity-50">
                  <h4 className="text-sm text-gray-400 mb-1">Java Edition</h4>
                  <div className="font-mono select-all cursor-pointer" onClick={() => navigator.clipboard.writeText('play.buildtopiasmp.fun')}>play.buildtopiasmp.fun</div>
                </div>
                <div className="fancy-border bg-opacity-50">
                  <h4 className="text-sm text-gray-400 mb-1">Bedrock Edition</h4>
                  <div className="font-mono">IP: play.buildtopiasmp.fun</div>
                  <div className="font-mono">Port: 6004</div>
                </div>
              </div>
            </div>
            <div>
              <ServerStatus />
            </div>
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
                className="aspect-square overflow-hidden rounded-xl border-2 border-primary/30"
                custom={index}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <img 
                  src={image} 
                  alt={`Buildtopia SMP Showcase ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
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
          <div ref={showcaseRef} className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/30">
            {isShowcaseInView && (
              <ReactPlayer
                url="https://www.youtube.com/embed/aaMPKqA9hLs?si=i3RVA6znAOBcVMJH"
                width="100%"
                height="100%"
                controls={true}
              />
            )}
          </div>
          <div className="text-center mt-4">
            <a 
              href="https://www.youtube.com/@mrMaruti9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Subscribe to our YouTube Channel
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </section>
      </AnimatedBlock>
    </div>
  );
}
