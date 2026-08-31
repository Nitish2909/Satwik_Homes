import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import SatwikHomes from "../assets/SatwikHomes.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Buyer's Guide", path: "/buyers-guide" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const businessCategories = [
    { label: "Residential", href: "/our-business/residential" },
    { label: "Office Spaces", href: "/our-business/office-spaces" },
    { label: "Education", href: "/our-business/education" },
    { label: "Hospitality", href: "/our-business/hospitality" },
    { label: "Retail", href: "/our-business/retail" },
    { label: "Facility Management", href: "/our-business/facility-management" },
     { label: "Facility Management", href: "/our-business/facility-management" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1a1a2e] shadow-lg py-4"
            : "bg-transparent py-6 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 z-50">
              <img
                src={SatwikHomes}
                alt="Satwik Homes Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white font-sans text-base tracking-wide transition-colors hover:text-[#79c96e] relative group ${
                    isActive ? "text-[#79c96e]" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Home
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#79c96e] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>

              {/* Properties Mega Menu Trigger */}
              <div
                className="relative group h-full py-2"
                onMouseEnter={() => setIsPropertiesOpen(true)}
                onMouseLeave={() => setIsPropertiesOpen(false)}
              >
                <button className="flex items-center text-white font-sans text-base tracking-wide transition-colors hover:text-[#79c96e]">
                  Properties <FiChevronDown className="ml-1" />
                </button>

                {/* Mega Dropdown Panel */}
                <AnimatePresence>
                  {isPropertiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 15, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-[#16213e]/95 backdrop-blur-md shadow-2xl rounded-b-lg overflow-hidden border-t-2 border-[#79c96e] mt-4"
                    >
                      <div className="p-8 grid grid-cols-4 gap-8">
                        <div>
                          <h3 className="font-serif text-[#79c96e] text-lg mb-4">
                            By Type
                          </h3>
                          <ul className="space-y-3">
                            {[
                              "Apartments",
                              "Villas",
                              "Row Houses",
                              "Plots",
                              "Penthouses",
                            ].map((type) => (
                              <li key={type}>
                                <Link
                                  to={`/properties?type=${type.toLowerCase()}`}
                                  className="text-gray-300 hover:text-white transition-colors text-sm font-sans flex items-center group"
                                >
                                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                                    <FiArrowRight className="text-[#79c96e] text-xs" />
                                  </span>
                                  {type}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-serif text-[#79c96e] text-lg mb-4">
                            By Status
                          </h3>
                          <ul className="space-y-3">
                            {[
                              "Under Construction",
                              "Ready to Move",
                              "New Launch",
                            ].map((status) => (
                              <li key={status}>
                                <Link
                                  to={`/properties?status=${status.replace(/ /g, "-").toLowerCase()}`}
                                  className="text-gray-300 hover:text-white transition-colors text-sm font-sans flex items-center group"
                                >
                                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                                    <FiArrowRight className="text-[#79c96e] text-xs" />
                                  </span>
                                  {status}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-serif text-[#79c96e] text-lg mb-4">
                            By City
                          </h3>
                          <ul className="space-y-3">
                            {[
                              "Bangalore",
                              "Hyderabad",
                              "Mumbai",
                              "Pune",
                              "Goa",
                            ].map((city) => (
                              <li key={city}>
                                <Link
                                  to={`/properties?city=${city.toLowerCase()}`}
                                  className="text-gray-300 hover:text-white transition-colors text-sm font-sans flex items-center group"
                                >
                                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                                    <FiArrowRight className="text-[#79c96e] text-xs" />
                                  </span>
                                  {city}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-[#1a1a2e] p-4 rounded-lg border border-[#79c96e]/20">
                          <img
                            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                            alt="Featured"
                            className="w-full h-32 object-cover rounded mb-3"
                          />
                          <h4 className="font-serif text-white text-sm mb-1">
                            The Golden Crest
                          </h4>
                          <p className="text-[#79c96e] text-xs mb-3">
                            Starting at ₹2.5 Cr
                          </p>
                          <Link
                            to="/properties/featured"
                            className="text-xs text-white bg-[#79c96e]/20 hover:bg-[#79c96e] hover:text-[#1a1a2e] px-4 py-2 rounded transition-colors inline-block w-full text-center"
                          >
                            View Property
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Our Businesses Mega Menu Trigger */}
              <div
                className="relative group h-full py-2"
                onMouseEnter={() => setIsBusinessOpen(true)}
                onMouseLeave={() => setIsBusinessOpen(false)}
              >
                <button className="flex items-center text-white font-sans text-base tracking-wide transition-colors hover:text-[#79c96e]">
                  Our Businesses <FiChevronDown className="ml-1" />
                </button>

                {/* Mega Dropdown Panel */}
                <AnimatePresence>
                  {isBusinessOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 15, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-[#16213e]/95 backdrop-blur-md shadow-2xl rounded-b-lg overflow-hidden border-t-2 border-[#79c96e] mt-4"
                    >
                      <div className="p-8 grid grid-cols-2 gap-6">
                        {businessCategories.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="text-gray-300 hover:text-white transition-colors text-sm font-sans flex items-center group"
                          >
                            <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                              <FiArrowRight className="text-[#79c96e] text-xs" />
                            </span>
                            <span className="border-l-2 border-[#79c96e]/40 pl-2 group-hover:border-[#79c96e]">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-white font-sans text-base tracking-wide transition-colors hover:text-[#79c96e] relative group ${
                      isActive ? "text-[#79c96e]" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#79c96e] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right side CTA & Contact */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+918001234567"
                className="flex items-center text-white hover:text-[#79c96e] transition-colors"
              >
                <FiPhone className="mr-2" />
                <span className="font-sans text-sm">1800 123 4567</span>
              </a>
              <Link
                to="/contact"
                className="bg-[#34b834] text-white px-6 py-2 rounded font-sans font-medium hover:bg-white hover:text-[#1a1a2e] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-[#79c96e] z-50 transition-colors"
              >
                {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1a1a2e] z-40 flex flex-col justify-center items-center h-[100vh]"
          >
            <div className="flex flex-col items-center space-y-6 w-full px-6 overflow-y-auto max-h-[85vh]">
              {[
                ...navLinks,
                { name: "Properties", path: "/properties" },
                { name: "Our Businesses", path: "/our-business" },
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white font-serif text-2xl tracking-wide hover:text-[#79c96e] transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="pt-4 flex flex-col items-center space-y-6 w-full"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#79c96e] text-[#1a1a2e] px-8 py-3 rounded-full font-sans font-medium w-full max-w-xs text-center"
                >
                  Enquire Now
                </Link>

                <div className="flex space-x-6 text-white pt-2">
                  <a
                    href="#"
                    className="hover:text-[#79c96e] transition-colors"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#79c96e] transition-colors"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#79c96e] transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#79c96e] transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#79c96e] transition-colors"
                  >
                    <FaYoutube size={24} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;