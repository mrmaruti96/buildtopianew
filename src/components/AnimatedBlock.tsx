import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedBlockProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedBlock({ 
  children, 
  delay = 0,
  className = '' 
}: AnimatedBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.7, 
        delay: delay,
        ease: [0.1, 0.4, 0.2, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
