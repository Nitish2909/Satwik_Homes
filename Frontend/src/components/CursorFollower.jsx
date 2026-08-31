// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const CursorFollower = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(true);

//   useEffect(() => {
//     // Only show on desktop
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//       if (!isVisible) setIsVisible(true);
//     };

//     const handleMouseLeave = () => setIsVisible(false);
//     const handleMouseEnter = () => setIsVisible(true);

//     window.addEventListener('mousemove', handleMouseMove);
//     document.body.addEventListener('mouseleave', handleMouseLeave);
//     document.body.addEventListener('mouseenter', handleMouseEnter);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', checkMobile);
//       document.body.removeEventListener('mouseleave', handleMouseLeave);
//       document.body.removeEventListener('mouseenter', handleMouseEnter);
//     };
//   }, [isVisible]);

//   if (isMobile) return null;

//   return (
//     <>
//       {/* Small dot */}
//       <motion.div
//         className="fixed w-2 h-2 bg-[#79c96e] rounded-full pointer-events-none z-[99999] mix-blend-difference"
//         animate={{
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//           opacity: isVisible ? 1 : 0,
//         }}
//         transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
//       />
//       {/* Larger ring */}
//       <motion.div
//         className="fixed w-8 h-8 border border-[#79c96e]/50 rounded-full pointer-events-none z-[99998]"
//         animate={{
//           x: mousePosition.x - 16,
//           y: mousePosition.y - 16,
//           opacity: isVisible ? 0.6 : 0,
//         }}
//         transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
//       />
//     </>
//   );
// };

// export default CursorFollower;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react'; // Import Lucide Home icon

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Only show on desktop
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Home Icon in place of small dot (16x16 px) */}
      <motion.div
        className="fixed pointer-events-none z-[99999] text-[#79c96e] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8, // Offset by half width (16/2)
          y: mousePosition.y - 8, // Offset by half height (16/2)
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <Home size={16} />
      </motion.div>

      {/* Larger ring */}
      <motion.div
        className="fixed w-8 h-8 border border-[#79c96e]/50 rounded-full pointer-events-none z-[99998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

export default CursorFollower;