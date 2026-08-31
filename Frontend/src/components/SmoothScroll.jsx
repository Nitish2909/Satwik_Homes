import { useEffect } from 'react';

// A custom hook to enable smooth scrolling on the document
export const useSmoothScroll = () => {
  useEffect(() => {
    // Adding smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
};

const SmoothScroll = ({ children }) => {
  useSmoothScroll();
  return <>{children}</>;
};

export default SmoothScroll;
