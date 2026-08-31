import React from 'react';

const GlowingBorder = ({ children, className = '', color = '#79c96e' }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated glow background */}
      <div 
        className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-md group-hover:duration-200"
        style={{ 
          background: `linear-gradient(45deg, ${color}, transparent, ${color})`,
          backgroundSize: '200% 200%',
          animation: 'gradient 3s ease infinite'
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative h-full w-full rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;
