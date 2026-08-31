import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TextReveal = ({ text, type = 'word', delay = 0, className = '', tag: Tag = 'p' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const elements = type === 'word' ? text.split(' ') : text.split('');

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      <Tag className="inline-block">
        {elements.map((element, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block"
            style={{ marginRight: type === 'word' ? '0.25em' : '0' }}
          >
            {element === ' ' ? '\u00A0' : element}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
};

export default TextReveal;
