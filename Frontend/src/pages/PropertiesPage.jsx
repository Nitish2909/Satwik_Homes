import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import StaggerChildren from '../components/StaggerChildren';

const PropertiesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const query = Object.fromEntries([...searchParams]);
        const res = await axios.get('http://localhost:5000/api/properties', {
          params: { ...query, page, sort }
        });
        setProperties(res.data.properties || res.data);
        setTotalPages(res.data.totalPages || 1);
        setTotalResults(res.data.totalCount || (res.data.properties || res.data).length);
        setLoading(false);
      } catch (err) {
        // Fallback dummy data
        setTimeout(() => {
          setProperties([
            { id: 1, title: 'Opulence Marina', location: 'Marina Bay', price: '₹4.5 Cr', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', type: 'Apartment', bhk: '4 BHK' },
            { id: 2, title: 'Eco Retreat', location: 'Green Valley', price: '₹2.1 Cr', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', type: 'Villa', bhk: '3 BHK' },
            { id: 3, title: 'Skyline Penthouse', location: 'City Center', price: '₹8.0 Cr', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800', type: 'Penthouse', bhk: '5 BHK' },
            { id: 4, title: 'Luxe Heights', location: 'Downtown', price: '₹3.5 Cr', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800', type: 'Apartment', bhk: '3 BHK' },
            { id: 5, title: 'Serenity Woods', location: 'West End', price: '₹5.2 Cr', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', type: 'Villa', bhk: '4 BHK' },
          ]);
          setTotalPages(3);
          setTotalResults(15);
          setLoading(false);
        }, 1000);
      }
    };
    fetchProperties();
  }, [searchParams, page, sort]);

  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] font-body text-[#1a1a2e]">
      {/* Hero Banner */}
      <div className="relative h-64 bg-[#1a1a2e] flex flex-col items-center justify-center text-white px-6 mt-10">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600" alt="Properties Banner" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Properties</h1>
          <p className="text-gray-300 text-sm">Home / Properties</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h3 className="font-bold text-xl mb-6 border-b pb-2">Filters</h3>
            <SearchBar variant="page" />
          </div>
        </div>

        {/* Properties Grid */}
        <div className="w-full lg:w-3/4">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm mb-8">
            <p className="text-gray-600 font-medium mb-4 sm:mb-0">
              Showing <span className="font-bold text-[#1a1a2e]">{totalResults}</span> results
            </p>
            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-sm text-gray-500">Sort by:</label>
              <select 
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border-gray-300 rounded text-sm p-2 focus:ring-[#79c96e] focus:border-[#79c96e] outline-none"
              >
                <option value="newest">Newest First</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-gray-200 animate-pulse h-80 rounded-lg"></div>
              ))}
            </div>
          ) : properties.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-500 mb-2">No properties found</h3>
              <p className="text-gray-400">Try adjusting your filters to find what you're looking for.</p>
            </div>
          ) : (
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map(prop => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </StaggerChildren>
          )}

          {/* Pagination */}
          {!loading && properties.length > 0 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button 
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 disabled:opacity-50 hover:bg-[#79c96e] hover:text-white hover:border-[#79c96e] transition-colors"
              >
                <FaChevronLeft />
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded border transition-colors ${page === i + 1 ? 'bg-[#79c96e] text-white border-[#79c96e]' : 'border-gray-300 hover:bg-gray-100'}`}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 disabled:opacity-50 hover:bg-[#79c96e] hover:text-white hover:border-[#79c96e] transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
