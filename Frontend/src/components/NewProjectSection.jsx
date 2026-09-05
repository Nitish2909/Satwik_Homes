import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaMapMarkerAlt, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";
import TextReveal from "./TextReveal";

export default function NewProjectsSection() {
  return (
    <section className="relative py-28 bg-[#0b0c10] text-white px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#79c96e]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#79c96e]/10 text-[#79c96e] border border-[#79c96e]/20 tracking-wider uppercase">
            Exclusive Listings
          </span>

          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              <TextReveal text="New Projects" />
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg font-light">
            Redefining modern living through sustainable architectural mastery.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="pb-16 !overflow-visible custom-swiper"
        >
          {newProjects.map((proj) => (
            <SwiperSlide key={proj.id} className="h-auto">
              <div className="h-full flex flex-col bg-[#121824]/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden group hover:border-[#79c96e]/50 hover:shadow-[0_12px_40px_rgba(121,201,110,0.15)] transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-black/30 z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Status Tag */}
                  <span className="absolute top-4 left-4 z-20 backdrop-blur-md bg-[#79c96e]/90 text-slate-950 text-[11px] font-extrabold px-3.5 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                    Newly Launched
                  </span>

                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#79c96e] transition-colors duration-300">
                      {proj.title}
                    </h3>

                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#79c96e] shrink-0" />
                      <span className="truncate">{proj.location}</span>
                    </p>
                  </div>

                  {/* Highlights / Features */}
                  <div className="flex items-center justify-between text-xs font-medium text-gray-300 border-t border-white/10 pt-4">
                    <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      {proj.bhk}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400">
                      <FaShieldAlt className="text-[#79c96e]/80" />
                      RERA:{" "}
                      <strong className="text-gray-200 font-semibold">
                        {proj.rera}
                      </strong>
                    </span>
                  </div>

                  {/* Action Link */}
                  <Link
                    to={`/project/${proj.id}`}
                    className="relative group/btn overflow-hidden flex items-center justify-center gap-2 w-full mt-2 bg-[#79c96e] text-slate-950 font-bold py-3 rounded-xl transition-all duration-300 hover:bg-[#8ae07f] hover:shadow-lg hover:shadow-[#79c96e]/20 active:scale-[0.98]"
                  >
                    <span>View Property</span>
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
