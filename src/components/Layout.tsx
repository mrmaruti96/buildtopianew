import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Check, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import ParticleBackground from './ParticleBackground';
import MinecraftBackground from './MinecraftBackground';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [copied, copy] = useCopyToClipboard();

  useEffect(() => {
    // Load Google fonts
    const googleFontLink = document.createElement('link');
    googleFontLink.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
    googleFontLink.rel = 'stylesheet';
    document.head.appendChild(googleFontLink);
    
    return () => {
      document.head.removeChild(googleFontLink);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gamemodes', path: '/gamemodes' },
    { name: 'Ranks', path: '/ranks' },
    { name: 'Crates', path: '/crates' },
    { name: 'Social', path: '/social' },
    { name: 'Credits', path: '/credits' },
  ];

  const handleCopyIP = (text: string) => {
    copy(text);
  };

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <MinecraftBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-primary/20 rounded-b-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <Link to="/" className="flex items-center space-x-2">
              <motion.img 
                src="https://i.ibb.co/RkLNZJnd/buildtopia.gif" 
                alt="Buildtopia SMP Logo" 
                className="h-11"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active-nav-link' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://discord.gg/gAeFJDKsnb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="minecraft-btn"
              >
                Join Discord
              </a>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-blue/80 backdrop-blur-md">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      location.pathname === link.path 
                        ? 'bg-primary/20 text-primary' 
                        : 'text-white hover:bg-gray-800'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <a 
                  href="https://discord.gg/gAeFJDKsnb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full minecraft-btn mt-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Discord
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Main content */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-background/90 backdrop-blur-md border-t border-primary/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 glow-text">Server IP</h3>
              <div className="minecraft-panel mb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm pixel-text">Java Edition</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="font-minecraft w-full bg-gray-800/70 px-2 py-1 cursor-pointer border-2 border-gray-900 rounded-lg"
                    onClick={() => handleCopyIP('mc.buildtopiasmp.fun')}
                  >
                    mc.buildtopiasmp.fun
                    {copied && <Check className="inline ml-2 text-green-500 h-4 w-4" />}
                  </div>
                </div>
              </div>
              <div className="minecraft-panel">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm pixel-text">Bedrock Edition</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-sm text-gray-300 pixel-text">IP:</div>
                  <div 
                    className="col-span-2 font-minecraft bg-gray-800/70 px-2 py-1 border-2 border-gray-900 cursor-pointer flex items-center justify-between rounded-lg"
                    onClick={() => handleCopyIP('mcpe.buildtopiasmp.fun')}
                  >
                    <span>mcpe.buildtopiasmp.fun</span>
                    {copied && <Check className="inline ml-2 text-green-500 h-4 w-4" />}
                  </div>
                  <div className="text-sm text-gray-300 pixel-text">Port:</div>
                  <div 
                    className="col-span-2 font-minecraft bg-gray-800/70 px-2 py-1 border-2 border-gray-900 cursor-pointer flex items-center justify-between"
                    onClick={() => handleCopyIP('25569')}
                  >
                    <span>25569</span>
                    {copied && <Check className="inline ml-2 text-green-500 h-4 w-4" />}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 glow-text">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <ChevronRight size={16} className="mr-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 glow-text">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://discord.gg/gAeFJDKsnb" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 5.5-1 9 0"/><path d="M7.5 16.5c3.5 1 5.5 1 9 0"/><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.333.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"/><path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.333-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"/></svg>
                </a>
                <a href="https://www.youtube.com/@mrMaruti9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
                <a href="https://www.instagram.com/not_maruti/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://x.com/mr_Maruti96" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 7.9-5.1 1.1 1.1 2 2.1 2.1 2.1z"/></svg>
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Buildtopia SMP. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
