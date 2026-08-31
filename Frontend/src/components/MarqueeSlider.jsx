import React from 'react';
import { motion } from 'framer-motion';

const MarqueeSlider = ({ children, speed = 30, direction = 'left', pauseOnHover = false, className = '' }) => {
  return (
    <div className={`overflow-hidden flex w-full ${className}`}>
      <motion.div
        className={`flex whitespace-nowrap ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed
        }}
      >
        <div className="flex w-max shrink-0">
          {children}
        </div>
        <div className="flex w-max shrink-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeSlider;
