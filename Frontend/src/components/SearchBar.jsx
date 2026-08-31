import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMapPin, FiHome, FiDollarSign, FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const SearchBar = ({ onSearch, variant = 'hero', initialFilters = {} }) => {
  const [filters, setFilters] = useState({
    location: initialFilters.location || '',
    type: initialFilters.type || '',
    budget: initialFilters.budget || '',
    bhk: initialFilters.bhk || [],
    status: initialFilters.status || [],
    minPrice: initialFilters.minPrice || '',
    maxPrice: initialFilters.maxPrice || '',
  });

  const [expandedSection, setExpandedSection] = useState(null);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleArrayFilterToggle = (key, value) => {
    setFilters((prev) => {
      const array = prev[key];
      if (array.includes(value)) {
        return { ...prev, [key]: array.filter((item) => item !== value) };
      }
      return { ...prev, [key]: [...array, value] };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(filters);
  };

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="w-full relative z-20">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl flex flex-col md:flex-row items-center gap-3 shadow-2xl">
          
          {/* Location Dropdown */}
          <div className="flex-1 w-full relative bg-white rounded-lg flex items-center px-4 py-3 group">
            <FiMapPin className="text-[#79c96e] mr-3 text-lg" />
            <select 
              className="w-full bg-transparent border-none outline-none text-[#1a1a2e] font-sans text-sm appearance-none cursor-pointer"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="" disabled hidden>Select Location</option>
              <option value="all">All Cities</option>
              <option value="karnal">Karnal</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="goa">Goa</option>
            </select>
            <FiChevronDown className="absolute right-4 text-gray-400 pointer-events-none group-hover:text-[#79c96e] transition-colors" />
          </div>

          {/* Property Type Dropdown */}
          <div className="flex-1 w-full relative bg-white rounded-lg flex items-center px-4 py-3 group">
            <FiHome className="text-[#79c96e] mr-3 text-lg" />
            <select 
              className="w-full bg-transparent border-none outline-none text-[#1a1a2e] font-sans text-sm appearance-none cursor-pointer"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="" disabled hidden>Property Type</option>
              <option value="all">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="plot">Plot</option>
              <option value="penthouse">Penthouse</option>
            </select>
            <FiChevronDown className="absolute right-4 text-gray-400 pointer-events-none group-hover:text-[#79c96e] transition-colors" />
          </div>

          {/* Budget Dropdown */}
          <div className="flex-1 w-full relative bg-white rounded-lg flex items-center px-4 py-3 group">
            <FiDollarSign className="text-[#79c96e] mr-3 text-lg" />
            <select 
              className="w-full bg-transparent border-none outline-none text-[#1a1a2e] font-sans text-sm appearance-none cursor-pointer"
              value={filters.budget}
              onChange={(e) => handleFilterChange('budget', e.target.value)}
            >
              <option value="" disabled hidden>Budget Range</option>
              <option value="under-50l">Under ₹50L</option>
              <option value="50l-1cr">₹50L - 1Cr</option>
              <option value="1cr-3cr">₹1Cr - 3Cr</option>
              <option value="3cr-5cr">₹3Cr - 5Cr</option>
              <option value="5cr-plus">₹5Cr+</option>
            </select>
            <FiChevronDown className="absolute right-4 text-gray-400 pointer-events-none group-hover:text-[#79c96e] transition-colors" />
          </div>

          {/* Search Button */}
          <button 
            type="submit"
            className="w-full md:w-auto bg-[#79c96e] text-[#1a1a2e] px-8 py-3.5 rounded-lg font-sans font-semibold flex items-center justify-center hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(201,169,110,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          >
            <FiSearch className="mr-2 text-lg" />
            Search
          </button>
        </div>
      </form>
    );
  }

  // Page Variant (Sidebar)
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col w-full font-sans">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <h2 className="text-[#1a1a2e] font-serif text-xl font-bold flex items-center">
          <FiFilter className="mr-2 text-[#79c96e]" /> Filters
        </h2>
        <button 
          onClick={() => setFilters({ location: '', type: '', budget: '', bhk: [], status: [], minPrice: '', maxPrice: '' })}
          className="text-sm text-gray-500 hover:text-[#79c96e] transition-colors"
        >
          Reset All
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Location Section */}
        <div>
          <label className="block text-sm font-semibold text-[#1a1a2e] mb-3">Location</label>
          <div className="relative border border-gray-200 rounded-lg group hover:border-[#79c96e] transition-colors">
            <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#79c96e]" />
            <select 
              className="w-full pl-10 pr-4 py-2.5 bg-transparent border-none outline-none text-sm appearance-none cursor-pointer"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="">All Cities</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="goa">Goa</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-[#79c96e]" />
          </div>
        </div>

        {/* Property Type Section */}
        <div>
          <label className="block text-sm font-semibold text-[#1a1a2e] mb-3">Property Type</label>
          <div className="relative border border-gray-200 rounded-lg group hover:border-[#79c96e] transition-colors">
            <FiHome className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#79c96e]" />
            <select 
              className="w-full pl-10 pr-4 py-2.5 bg-transparent border-none outline-none text-sm appearance-none cursor-pointer"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="plot">Plot</option>
              <option value="penthouse">Penthouse</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-[#79c96e]" />
          </div>
        </div>

        {/* BHK Filter - Chips */}
        <div>
          <label className="block text-sm font-semibold text-[#1a1a2e] mb-3">BHK Config</label>
          <div className="flex flex-wrap gap-2">
            {['1', '2', '3', '4', '5+'].map((bhk) => (
              <button
                key={bhk}
                type="button"
                onClick={() => handleArrayFilterToggle('bhk', bhk)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filters.bhk.includes(bhk) 
                    ? 'bg-[#1a1a2e] text-[#79c96e]' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {bhk}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter - Checkboxes */}
        <div>
          <label className="block text-sm font-semibold text-[#1a1a2e] mb-3">Construction Status</label>
          <div className="space-y-2">
            {['Under Construction', 'Ready to Move'].map((status) => (
              <label key={status} className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox"
                    className="w-4 h-4 border-2 border-gray-300 rounded text-[#1a1a2e] focus:ring-[#79c96e] transition-all"
                    checked={filters.status.includes(status)}
                    onChange={() => handleArrayFilterToggle('status', status)}
                  />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-[#1a1a2e] transition-colors">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Accordion */}
        <div className="border-t border-gray-100 pt-4">
          <button 
            type="button"
            className="flex items-center justify-between w-full text-sm font-semibold text-[#1a1a2e]"
            onClick={() => toggleSection('price')}
          >
            Price Range
            {expandedSection === 'price' ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          
          <AnimatePresence>
            {expandedSection === 'price' && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-3 mt-4">
                  <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input 
                      type="number" 
                      placeholder="Min"
                      className="w-full pl-7 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#79c96e]"
                      value={filters.minPrice}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                    />
                  </div>
                  <span className="text-gray-400">-</span>
                  <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input 
                      type="number" 
                      placeholder="Max"
                      className="w-full pl-7 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#79c96e]"
                      value={filters.maxPrice}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full bg-[#1a1a2e] text-[#79c96e] py-3 rounded-lg font-semibold hover:bg-[#79c96e] hover:text-[#1a1a2e] transition-all duration-300 shadow-md mt-4"
        >
          Apply Filters
        </button>

      </form>
    </div>
  );
};

export default SearchBar;
