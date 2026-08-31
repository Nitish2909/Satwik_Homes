import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt, speed = 0.5, className = '' }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', `${10 * speed}%`]);

  return (
    <div ref={ref} className={`overflow-hidden relative w-full h-full min-h-[300px] ${className}`}>
      <motion.img
        src={src}
        alt={alt || 'Parallax image'}
        style={{ y }}
        className="w-full h-[120%] object-cover absolute top-0 left-0"
      />
    </div>
  );
};

export default ParallaxImage;
