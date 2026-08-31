
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaBed, 
  FaShieldAlt, 
  FaArrowLeft, 
  FaPhone, 
  FaRulerCombined, 
  FaCalendarAlt, 
  FaDownload, 
  FaSwimmingPool, 
  FaDumbbell, 
  FaParking, 
  FaTree,
  FaCheck 
} from 'react-icons/fa';

// Sample Data Array
const newProjects = [
  {
    id: 1,
    title: "Green Valley Apartments",
    builder: "Greenfield Developers",
    location: "Downtown, Cityville",
    priceRange: "₹85.0 Lacs - ₹1.2 Cr",
    bhk: "2, 3 BHK",
    carpetArea: "1,150 - 1,850 sq.ft.",
    possessionDate: "December 2026",
    rera: "P12345678",
    status: "Under Construction",
    mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    floorPlans: [
      { type: "2 BHK Apartment", size: "1,150 sq.ft.", price: "₹85.0 Lacs", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80" },
      { type: "3 BHK Apartment", size: "1,850 sq.ft.", price: "₹1.2 Cr", image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80" }
    ],
    amenities: [
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Fitness Gym", icon: <FaDumbbell /> },
      { name: "Reserved Parking", icon: <FaParking /> },
      { name: "Landscaped Garden", icon: <FaTree /> }
    ],
    locationHighlights: [
      "5 mins from Central Metro Station",
      "10 mins to City Mall & Entertainment Hub",
      "Top International Schools within 2 km radius",
      "15 mins drive to International Airport"
    ]
  },
  {
    id: 2,
    title: "Eco Residency",
    builder: "EcoLiving Group",
    location: "Suburbs, Metro",
    priceRange: "₹60.0 Lacs - ₹92.0 Lacs",
    bhk: "2 BHK",
    carpetArea: "950 - 1,200 sq.ft.",
    possessionDate: "Ready to Move",
    rera: "P87654321",
    status: "Ready to Move",
    mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
    ],
    floorPlans: [
      { type: "2 BHK Luxury", size: "1,200 sq.ft.", price: "₹92.0 Lacs", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80" }
    ],
    amenities: [
      { name: "Fitness Gym", icon: <FaDumbbell /> },
      { name: "Reserved Parking", icon: <FaParking /> }
    ],
    locationHighlights: [
      "Direct access to Highway 44",
      "Near Healthcare City Hospital"
    ]
  }
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = newProjects.find((p) => p.id === parseInt(id || '1'));

  const [activeImage, setActiveImage] = useState(project ? project.mainImage : '');

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <Link to="/" className="mt-4 text-[#79c96e] hover:underline flex items-center gap-2">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 md:px-16 py-20">
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#79c96e] mb-8 transition-colors font-medium">
        <FaArrowLeft /> Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Details Section */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Gallery Showcase */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <span className="absolute top-4 left-4 bg-[#79c96e] text-white text-xs px-3 py-1 rounded z-10 font-bold uppercase tracking-wider shadow">
                {project.status}
              </span>
              <img src={activeImage || project.mainImage} alt={project.title} className="w-full h-full object-cover transition-all duration-300" />
            </div>
            
            {/* Gallery Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {project.gallery.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveImage(img)}
                  className={`relative flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-[#79c96e] scale-105 shadow' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Header & Basic Info */}
          <div className="space-y-2">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 font-heading">{project.title}</h1>
                <p className="text-gray-500 text-sm mt-1">By <span className="text-gray-800 font-semibold">{project.builder}</span></p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500 block">Starting From</span>
                <span className="text-3xl font-bold text-[#79c96e]">{project.priceRange}</span>
              </div>
            </div>
            <p className="text-gray-600 flex items-center gap-2 text-lg pt-2">
              <FaMapMarkerAlt className="text-[#79c96e]" /> {project.location}
            </p>
          </div>

          {/* Key Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-gray-200">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <span className="text-gray-500 text-xs uppercase font-semibold block">Configuration</span>
              <span className="font-semibold text-lg flex items-center gap-2 mt-1 text-gray-900">
                <FaBed className="text-[#79c96e]" /> {project.bhk}
              </span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <span className="text-gray-500 text-xs uppercase font-semibold block">Carpet Area</span>
              <span className="font-semibold text-lg flex items-center gap-2 mt-1 text-gray-900">
                <FaRulerCombined className="text-[#79c96e]" /> {project.carpetArea}
              </span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <span className="text-gray-500 text-xs uppercase font-semibold block">Possession</span>
              <span className="font-semibold text-lg flex items-center gap-2 mt-1 text-gray-900">
                <FaCalendarAlt className="text-[#79c96e]" /> {project.possessionDate}
              </span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <span className="text-gray-500 text-xs uppercase font-semibold block">RERA Status</span>
              <span className="font-semibold text-lg flex items-center gap-2 mt-1 text-gray-900 truncate">
                <FaShieldAlt className="text-[#79c96e]" /> {project.rera}
              </span>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-[#79c96e] inline-block pb-1">About the Project</h3>
            <p className="text-gray-600 leading-relaxed">
              Designed with sustainable architecture and modern amenities, {project.title} offers an exceptional standard of living in {project.location}. Featuring eco-friendly infrastructure, smart home integration, spacious layouts, and premium international-grade finishes.
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-[#79c96e] inline-block pb-1">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.amenities.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <span className="text-[#79c96e] text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floor Plans */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-[#79c96e] inline-block pb-1">Floor Plans</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.floorPlans.map((plan, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <img src={plan.image} alt={plan.type} className="w-full h-48 object-cover" />
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-lg text-gray-900">{plan.type}</h4>
                      <span className="text-[#79c96e] font-bold">{plan.price}</span>
                    </div>
                    <p className="text-sm text-gray-500">Super Area: {plan.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Advantages */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-[#79c96e] inline-block pb-1">Location Advantages</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.locationHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <FaCheck className="text-[#79c96e] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lead Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl sticky top-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Interested in this property?</h3>
              <p className="text-gray-500 text-sm mt-1">Request a callback or download the official brochure.</p>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full bg-white border border-gray-300 rounded p-3 text-sm text-gray-900 focus:outline-none focus:border-[#79c96e]" />
              <input type="email" placeholder="Email Address" className="w-full bg-white border border-gray-300 rounded p-3 text-sm text-gray-900 focus:outline-none focus:border-[#79c96e]" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-gray-300 rounded p-3 text-sm text-gray-900 focus:outline-none focus:border-[#79c96e]" />
              
              <button className="w-full bg-[#79c96e] text-white py-3 rounded font-bold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 shadow-sm">
                <FaPhone /> Request Callback
              </button>
              
              <button type="button" className="w-full bg-white border border-[#79c96e] text-[#79c96e] py-3 rounded font-bold hover:bg-[#79c96e] hover:text-white transition-colors flex items-center justify-center gap-2">
                <FaDownload /> Download Brochure
              </button>
            </form>

            <div className="pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
              RERA Reg: <span className="text-gray-800 font-medium">{project.rera}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}