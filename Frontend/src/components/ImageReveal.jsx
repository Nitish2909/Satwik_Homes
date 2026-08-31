import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ImageReveal = ({ src, alt, delay = 0, className = '', children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div
        initial={{ x: 0 }}
        animate={isInView ? { x: '100%' } : { x: 0 }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay }}
        className="absolute inset-0 bg-[#79c96e] z-10"
      />
      {children ? (
        <motion.div
          initial={{ scale: 1.2 }}
          animate={isInView ? { scale: 1 } : { scale: 1.2 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: delay + 0.2 }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      ) : (
        <motion.img
          initial={{ scale: 1.2 }}
          animate={isInView ? { scale: 1 } : { scale: 1.2 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: delay + 0.2 }}
          src={src}
          alt={alt || ''}
          className="w-full h-full object-cover block"
        />
      )}
    </div>
  );
};

export default ImageReveal;
