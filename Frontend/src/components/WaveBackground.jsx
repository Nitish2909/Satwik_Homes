import React from 'react';
import { motion } from 'framer-motion';

const WaveBackground = ({ color = '#1a1a2e', flip = false, className = '' }) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <motion.svg
        animate={{ x: [0, -100, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        className="relative block w-[200%] h-16 md:h-24 lg:h-32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          style={{ fill: color }}
        ></path>
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          style={{ fill: color, opacity: 0.3 }}
        ></path>
      </motion.svg>
    </div>
  );
};

export default WaveBackground;
