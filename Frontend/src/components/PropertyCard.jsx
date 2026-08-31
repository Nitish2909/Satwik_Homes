import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaBed, FaBath, FaVectorSquare } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  const {
    _id,
    id,
    title = 'Luxury Property',
    price = 'Upon Request',
    images,
    image,
    location,
    bedrooms = 0,
    bathrooms = 0,
    area = 0,
    propertyType = 'Property',
    status = 'Ready to Move',
    newLaunch = false,
  } = property || {};

  // Handle both image formats: images array or single image string
  const displayImage = (images && images.length > 0)
    ? images[0]
    : (image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800');

  // Handle location as either string or object
  const displayLocation = typeof location === 'object'
    ? `${location.address || ''} ${location.city || ''}`.trim()
    : (location || 'Location not specified');

  // Format price
  const displayPrice = typeof price === 'number'
    ? `₹${(price / 10000000).toFixed(1)} Cr`
    : price;

  const propertyId = _id || id || '1';

  return (
    <Link to={`/properties/${propertyId}`} className="block w-full">
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(26,26,46,0.15)] transition-all duration-300 group h-[450px] flex flex-col border border-gray-100"
      >
        {/* Image Section (Top 60%) */}
        <div className="relative h-[60%] w-full overflow-hidden">
          <img
            src={displayImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {newLaunch && (
              <span className="bg-[#79c96e] text-[#1a1a2e] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-sm inline-block w-fit">
                New Launch
              </span>
            )}
            <span 
              className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-sm text-white w-fit ${
                status === 'ready-to-move' || status === 'Ready to Move' ? 'bg-emerald-600' : 'bg-blue-600'
              }`}
            >
              {status}
            </span>
          </div>

          {/* Favorite Button */}
          <button 
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors z-10 hover:shadow-lg active:scale-90"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <FiHeart size={18} className="transition-transform duration-300" />
          </button>

          {/* Price Tag (Slides in on hover) */}
          <div className="absolute bottom-4 right-4 z-10 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-[#1a1a2e]/90 backdrop-blur-sm text-[#79c96e] px-4 py-2 rounded font-sans font-semibold shadow-lg">
              {displayPrice}
            </div>
          </div>
        </div>

        {/* Content Section (Bottom 40%) */}
        <div className="p-3 h-[40%] flex flex-col justify-between bg-white relative z-20 ">
          <div>
            <span className="text-[#79c96e] text-xs font-semibold uppercase tracking-wider mb-1 block">
              {propertyType}
            </span>
            <h3 className="font-serif text-[#1a1a2e] text-xl font-bold mb-2 line-clamp-1 group-hover:text-[#79c96e] transition-colors">
              {title}
            </h3>
            <p className="flex items-center text-gray-500 text-sm font-sans mb-4 line-clamp-1">
              <FiMapPin className="mr-1.5 flex-shrink-0 text-gray-400" />
              {displayLocation}
            </p>
          </div>

          <div>
            <div className="w-full h-[1px] bg-gray-100 mb-4" />
            
            <div className="flex justify-between items-center text-gray-600 text-sm font-sans mb-4 px-1">
              <div className="flex items-center" title="Bedrooms">
                <FaBed className="text-[#79c96e] mr-2" />
                <span>{bedrooms} Beds</span>
              </div>
              <div className="flex items-center" title="Bathrooms">
                <FaBath className="text-[#79c96e] mr-2" />
                <span>{bathrooms} Baths</span>
              </div>
              <div className="flex items-center" title="Area">
                <FaVectorSquare className="text-[#79c96e] mr-2" />
                <span>{area} sq.ft</span>
              </div>
            </div>

            <div className="flex items-center text-[#1a1a2e] font-semibold text-sm group-hover:text-[#79c96e] transition-colors cursor-pointer ">
              View Details 
              <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PropertyCard;
