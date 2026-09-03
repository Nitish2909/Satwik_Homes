import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import SatwikHomes from "../assets/SatwikHomes.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById('main-footer');
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }
  }, [isVisible, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="w-full flex flex-col font-sans" id="main-footer">
      {/* Top CTA Band */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#6ec9b4] py-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a2e2c] font-bold">
            Ready to find your dream home?
          </h2>
          <Link 
            to="/contact" 
            className="bg-[#1a1a2e] text-white px-8 py-3 rounded text-lg font-medium hover:bg-white hover:text-[#1a1a2e] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="bg-[#1a1a2e] text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
               <img
                              src={SatwikHomes}
                              alt="Satwik Homes Logo"
                              className="h-16 w-auto object-contain"
                            />
            </Link>
            <p className="text-sm leading-relaxed mb-8 text-gray-400">
              Built on trust, driven by innovation. Satwik Homes is one of India's leading property development organizations, redefining luxury living.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#16213e] flex items-center justify-center hover:bg-[#79c96e] hover:text-[#1a1a2e] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(201,169,110,0.5)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Our Journey */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-[#79c96e] text-xl mb-6">Our Journey</h3>
            <ul className="space-y-3 text-sm">
              {['Corporate Overview', 'Leadership', 'Our Values', 'CSR', 'Awards'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#79c96e] transition-colors flex items-center group">
                    <span className="h-[1px] w-0 bg-[#79c96e] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Buyer's Guide */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-[#79c96e] text-xl mb-6">Buyer's Guide</h3>
            <ul className="space-y-3 text-sm">
              {['EMI Calculator', 'First Steps', 'Checklist', 'Current Trends'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#79c96e] transition-colors flex items-center group">
                    <span className="h-[1px] w-0 bg-[#79c96e] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Business Verticals */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-[#79c96e] text-xl mb-6">Business Verticals</h3>
            <ul className="space-y-3 text-sm">
              {['Residential', 'Commercial', 'Co-Living', 'Co-Working', 'Hospitality', 'Retail'].map((item) => (
                <li key={item}>
                  <Link to={`/verticals/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#79c96e] transition-colors flex items-center group">
                    <span className="h-[1px] w-0 bg-[#79c96e] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-[#79c96e] text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <FiMapPin className="text-[#79c96e] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>162 Sector-12, Part-2,<br/>Urban Estate,Karnal<br/>,132001,Haryana</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-[#79c96e] mr-3 flex-shrink-0" size={18} />
                <a href="tel:+918001234567" className="hover:text-[#79c96e] transition-colors">9813369209</a>
              </li>
              <li className="flex items-center">
                <FiMail className="text-[#79c96e] mr-3 flex-shrink-0" size={18} />
                <a href="mailto:info@satwikhomes.com" className="hover:text-[#79c96e] transition-colors">info@satwikhomes.com</a>
              </li>
              <li className="pt-2">
                <span className="text-[#79c96e] font-medium mb-2 block">Offices in:</span>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Bangalore | Hyderabad | Mumbai | Pune | Goa
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#12182c] border-t border-gray-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Satwik Homes Properties. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-[#79c96e] transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-services" className="hover:text-[#79c96e] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
