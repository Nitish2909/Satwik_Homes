// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import SearchBar from './SearchBar';

// const HeroVideo = () => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   const videos = [
//     'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
//     'https://videos.pexels.com/video-files/3773486/3773486-uhd_2560_1440_30fps.mp4',
//     'https://videos.pexels.com/video-files/7578554/7578554-uhd_2560_1440_30fps.mp4',
//   ];

//   const heroSlides = [
//   {
//     title: 'Find Your Dream',
//     highlight: 'Luxury Home',
//     subtitle: 'Discover extraordinary properties in the world\'s most coveted locations',
//   },
//   {
//     title: 'Experience',
//     highlight: 'Modern Living',
//     subtitle: 'Curated collection of contemporary masterpieces designed for refined taste',
//   },
//   {
//     title: 'Invest in',
//     highlight: 'Your Future',
//     subtitle: 'Premium real estate opportunities that appreciate in value and lifestyle',
//   },
// ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
//     }, 8000);
//     return () => clearInterval(timer);
//   }, [videos.length]);

//   const handlePrev = () => {
//     setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-[#1a1a2e]">
//       {/* Video Backgrounds */}
//       <AnimatePresence initial={false}>
//         <motion.div
//           key={currentVideoIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, scale: 1.1 }}
//           exit={{ opacity: 0 }}
//           transition={{
//             opacity: { duration: 1.5, ease: 'easeInOut' },
//             scale: { duration: 8, ease: 'linear' },
//           }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <video
//             src={videos[currentVideoIndex]}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Dark Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

//       {/* Main Content */}
//       <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20">
//         <div className="text-center w-full max-w-5xl mx-auto flex flex-col items-center">
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mb-6"
//           >
//             <span className="inline-block border border-[#79c96e] text-[#79c96e] uppercase tracking-[0.2em] text-xs font-semibold px-4 py-1.5 backdrop-blur-sm bg-black/20 rounded-sm">
//               Luxury Living Redefined
//             </span>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="overflow-hidden mb-6"
//           >
//             <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-wide drop-shadow-lg leading-tight">
//               Discover Your <span className="text-[#79c96e] italic">Dream Home</span>
//             </h1>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="text-gray-200 text-lg md:text-xl font-sans max-w-2xl mb-12 drop-shadow-md font-light"
//           >
//             Premium properties across India's most sought-after locations
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.2, type: 'spring', stiffness: 100 }}
//             className="w-full max-w-4xl"
//           >
//             <SearchBar variant="hero" />
//           </motion.div>

//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <div className="absolute inset-y-0 left-4 z-30 flex items-center">
//         <button
//           onClick={handlePrev}
//           className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-[#79c96e]/80 hover:border-transparent transition-all duration-300 opacity-0 md:opacity-100 hover:scale-110"
//         >
//           <FiChevronLeft size={24} />
//         </button>
//       </div>
//       <div className="absolute inset-y-0 right-4 z-30 flex items-center">
//         <button
//           onClick={handleNext}
//           className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-[#79c96e]/80 hover:border-transparent transition-all duration-300 opacity-0 md:opacity-100 hover:scale-110"
//         >
//           <FiChevronRight size={24} />
//         </button>
//       </div>

//       {/* Bottom Indicators */}
//       <div className="absolute bottom-8 left-0 w-full z-20 flex flex-col items-center">
//         {/* Progress Dots */}
//         <div className="flex space-x-3 mb-6">
//           {videos.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentVideoIndex(index)}
//               className={`h-1.5 rounded-full transition-all duration-500 ${
//                 index === currentVideoIndex ? 'w-8 bg-[#79c96e]' : 'w-2 bg-white/40 hover:bg-white/70'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Scroll Down */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
//           className="flex flex-col items-center text-white/70 cursor-pointer hover:text-[#79c96e] transition-colors"
//           onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
//         >
//           <span className="text-[10px] uppercase tracking-widest mb-2 font-sans">Scroll to Explore</span>
//           <FiChevronDown size={20} />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroVideo;



import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SearchBar from './SearchBar';
import Firstvideo from "../assets/Firstvideo.mp4"
import Secondvideo from "../assets/Secondvideo.mp4"

const HeroVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const videos = [
    // 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
   'https://www.pexels.com/download/video/34345704/',
    // 'https://videos.pexels.com/video-files/3773486/3773486-uhd_2560_1440_30fps.mp4',
    Secondvideo,
    // 'https://videos.pexels.com/video-files/7578554/7578554-uhd_2560_1440_30fps.mp4',
    'https://www.pexels.com/download/video/7578550/',
  ];

  const heroSlides = [
    {
      title: 'Find Your Dream',
      highlight: 'Luxury Home',
      subtitle: "Discover extraordinary properties in the world's most coveted locations",
    },
    {
      title: 'Experience',
      highlight: 'Modern Living',
      subtitle: 'Curated collection of contemporary masterpieces designed for refined taste',
    },
    {
      title: 'Invest in',
      highlight: 'Your Future',
      subtitle: 'Premium real estate opportunities that appreciate in value and lifestyle',
    },
  ];

  // Auto-advance slides timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [videos.length]);

  // Programmatically trigger play on index change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay was prevented:", error);
        });
      }
    }
  }, [currentVideoIndex]);

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1a1a2e]">
      {/* Video Backgrounds */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentVideoIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
            scale: { duration: 8, ease: 'linear' },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            ref={videoRef}
            src={videos[currentVideoIndex]}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" /> */}

      {/* Main Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block border border-[#79c96e] text-[#79c96e] uppercase tracking-[0.2em] text-xs font-semibold px-4 py-1.5 backdrop-blur-sm bg-black/20 rounded-sm">
              Luxury Living Redefined
            </span>
          </motion.div> */}

          {/* Dynamic Animated Text Content */}
          {/* <AnimatePresence mode="wait">
            <motion.div
              key={currentVideoIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-wide drop-shadow-lg leading-tight mb-6">
                {heroSlides[currentVideoIndex].title}{' '}
                <span className="text-[#79c96e] italic">
                  {heroSlides[currentVideoIndex].highlight}
                </span>
              </h1>

              <p className="text-gray-200 text-lg md:text-xl font-sans max-w-2xl mb-12 drop-shadow-md font-light">
                {heroSlides[currentVideoIndex].subtitle}
              </p>
            </motion.div>
          </AnimatePresence> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 100 }}
            className="w-full max-w-4xl"
          >
            <SearchBar variant="hero" />
          </motion.div> */}
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <div className="absolute inset-y-0 left-4 z-30 flex items-center">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-[#79c96e]/80 hover:border-transparent transition-all duration-300 opacity-0 md:opacity-100 hover:scale-110"
        >
          <FiChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 z-30 flex items-center">
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-[#79c96e]/80 hover:border-transparent transition-all duration-300 opacity-0 md:opacity-100 hover:scale-110"
        >
          <FiChevronRight size={24} />
        </button>
      </div> */}

      {/* Bottom Indicators */}
      <div className="absolute bottom-8 left-0 w-full z-20 flex flex-col items-center">
        {/* Progress Dots */}
        {/* <div className="flex space-x-3 mb-6">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentVideoIndex ? 'w-8 bg-[#79c96e]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}

        {/* Scroll Down */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center text-white/70 cursor-pointer hover:text-[#79c96e] transition-colors"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest mb-2 font-sans">Scroll to Explore</span>
          <FiChevronDown size={20} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroVideo;