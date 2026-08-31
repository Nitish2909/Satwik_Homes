import React from 'react';

const OfficeSpacePage = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern Corporate Office Lobby"
    },
    {
      src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      alt: "Open Workspace & Desks"
    },
    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      alt: "Executive Conference Room"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      alt: "Collaborative Office Lounge"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      alt: "Commercial Office Building Exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      alt: "Meeting Room with Glass Walls"
    },
    {
      src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80",
      alt: "Private Executive Suite"
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
            Office Portfolios
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Satwik Homes <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 bg-clip-text text-transparent capitalize">
              Office Spaces
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-slate-600 leading-relaxed">
            Crafting premium modern corporate environments tailored for productivity, collaboration, and executive distinction.
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

export default OfficeSpacePage;