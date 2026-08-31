import React from 'react';

const ResidentialPage = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern Luxury Home Exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      alt: "Contemporary Villa Architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      alt: "Residential Apartment Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      alt: "Modern Living Room Space"
    },
    {
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury Villa Patio and Garden"
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      alt: "Elegant Open-Concept Kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      alt: "Spacious Master Bedroom Suite"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-slate-100/50 to-white border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-amber-800 uppercase bg-amber-50 border border-amber-200/60 rounded-full">
            Residential Portfolios
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Satwik Homes <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 bg-clip-text text-transparent">
              Residential Living
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-slate-600 leading-relaxed">
            Crafting premium modern living spaces tailored for comfort, luxury, and sustainable community living.
          </p>
        </div>
      </section>

      {/* Main Content Showcase */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg ${
                index === 0 ? "sm:col-span-2 md:col-span-3 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${
                  index === 0 ? "h-80 lg:h-full min-h-[320px]" : "h-64"
                }`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResidentialPage;