import React from 'react';

const EducationPage = () => {
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
            Education Portfolios
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Empowering <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 bg-clip-text text-transparent">
              Educational Excellence
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-slate-600 leading-relaxed">
            Designing modern learning environments, innovative curricula, and academic facilities built for future generations.
          </p>
        </div>
      </section>

      {/* Main Content Showcase */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
              alt="Students working together in a modern classroom" 
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80" 
              alt="Campus library with students studying" 
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" 
              alt="Teacher conducting a lecture" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;