import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MorphingText = ({ texts, interval = 3000, className = '' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  if (!texts || texts.length === 0) return null;

  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 whitespace-nowrap"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder to maintain width */}
      <span className="invisible whitespace-nowrap">
        {texts.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
    </div>
  );
};

export default MorphingText;
