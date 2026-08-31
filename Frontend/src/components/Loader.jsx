import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SatwikHomes from "../assets/SatwikHomes.png"

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[10000] bg-primary flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="font-heading text-5xl md:text-7xl text-green-400 font-bold tracking-wider mb-8"
      >
        <img src={SatwikHomes} alt='' />
      </motion.div>
      <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="w-full h-full bg-accent rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
