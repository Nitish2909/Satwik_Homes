import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { 
  FaBuilding, FaRuler, FaUsers, FaMapMarkerAlt, FaTrophy, FaArrowRight 
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import ParallaxImage from '../components/ParallaxImage';
import CountUpNumber from '../components/CountUpNumber';
import TextReveal from '../components/TextReveal';
import MarqueeSlider from '../components/MarqueeSlider';
import MagneticButton from '../components/MagneticButton';
import ImageReveal from '../components/ImageReveal';
import StaggerChildren from '../components/StaggerChildren';
import TiltCard from '../components/TiltCard';
import WaveBackground from '../components/WaveBackground';
import GlowingBorder from '../components/GlowingBorder';
import ParticleBackground from '../components/ParticleBackground';
import HeroVideo from '../components/HeroVideo';
import PropertyCard from '../components/PropertyCard';
import WhatsApp from '../components/Whatsapp';
import SatwikDesign from '../components/SatwikDesign';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [newProjects, setNewProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [stats, setStats] = useState({ years: 30, sqft: 50, families: 25000, cities: 15 });
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      try {
        const newRes = await axios.get('http://localhost:5000/api/properties/new-launches');
        setNewProjects(newRes.data);
      } catch (err) {
        setNewProjects([
          { id: 1, title: 'Luxe Heights', location: 'Downtown', bhk: '3, 4 BHK', rera: 'PRM/123', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800' },
          { id: 2, title: 'Serenity Woods', location: 'West End', bhk: '4 BHK Villas', rera: 'PRM/124', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800' },
          { id: 3, title: 'Azure Tower', location: 'Seaface', bhk: '2, 3 BHK', rera: 'PRM/125', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
          { id: 4, title: 'The Crest', location: 'Uptown', bhk: '3 BHK', rera: 'PRM/126', image: 'https://images.unsplash.com/photo-1600607687931-cebf14cd7008?w=800' },
        ]);
      }

      try {
        const featRes = await axios.get('http://localhost:5000/api/properties/featured');
        setFeaturedProjects(featRes.data);
      } catch (err) {
        setFeaturedProjects([
          { id: 11, title: 'Opulence Marina', location: 'Marina Bay', price: '₹4.5 Cr', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800' },
          { id: 12, title: 'Eco Retreat', location: 'Green Valley', price: '₹2.1 Cr', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800' },
          { id: 13, title: 'Skyline Penthouse', location: 'City Center', price: '₹8.0 Cr', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800' },
        ]);
      }

      try {
        const statRes = await axios.get('http://localhost:5000/api/stats');
        if(statRes.data) setStats(statRes.data);
      } catch (err) {
        // use default stats
      }

      try {
        const newsRes = await axios.get('http://localhost:5000/api/news');
        setNews(newsRes.data);
      } catch (err) {
        setNews([
          { id: 1, source: 'Economic Times', date: 'Oct 12, 2024', headline: 'Satwik Homes launches ultra-luxury project in Mumbai', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400' },
          { id: 2, source: 'Mint', date: 'Sep 28, 2024', headline: 'Record sales in Q3 for Satwik Homes commercial division', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400' },
          { id: 3, source: 'Times of India', date: 'Sep 15, 2024', headline: 'Satwik Homes wins Developer of the Year Award', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400' },
          { id: 4, source: 'CNBC', date: 'Aug 30, 2024', headline: 'New Co-living vertical announced by Satwik Homes', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400' },
        ]);
      }
    };
    fetchData();
  }, []);

  const verticals = [
    { title: 'Residential', icon: <FaBuilding className="text-4xl text-[#79c96e]" />, desc: 'Luxury homes for modern living.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
    { title: 'Commercial', icon: <FaBuilding className="text-4xl text-[#79c96e]" />, desc: 'Premium office spaces.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800' },
    { title: 'Co-Living', icon: <FaUsers className="text-4xl text-[#79c96e]" />, desc: 'Community-driven spaces.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800' },
    { title: 'Hospitality', icon: <FaBuilding className="text-4xl text-[#79c96e]" />, desc: 'World-class hotels.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' },
    { title: 'Retail', icon: <FaBuilding className="text-4xl text-[#79c96e]" />, desc: 'Iconic shopping destinations.', image: 'https://images.unsplash.com/photo-1519567241046-7f4f6b6eb74a?w=800' },
    { title: 'Data Centres', icon: <FaBuilding className="text-4xl text-[#79c96e]" />, desc: 'Next-gen infrastructure.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800' },
  ];

  const awards = [
    { title: 'Best Developer 2023', year: '2023', body: 'Real Estate Times' },
    { title: 'Excellence in Design', year: '2022', body: 'Architecture Digest' },
    { title: 'Sustainable Project', year: '2024', body: 'Green Building Council' },
    { title: 'Luxury Project of the Year', year: '2023', body: 'Property Awards' },
    { title: 'Most Trusted Brand', year: '2021', body: 'Consumer Choice' },
    { title: 'Innovation Award', year: '2023', body: 'Tech Real Estate' },
  ];

  return (
    <div className="w-full bg-[#f5f5f5] font-body text-[#1a1a2e] overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroVideo />

      {/* 2. Company Story */}
      <AnimatedSection className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-[#79c96e] font-bold text-sm tracking-widest uppercase">Our Story</span>
            <div className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              <TextReveal text="Built on Trust," />
              <TextReveal text="Driven by Innovation" />
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              For over 30 years, Satwik Homes has been synonymous with excellence in real estate. We blend visionary design with impeccable craftsmanship to create spaces that inspire and elevate everyday living.
            </p>
            <MagneticButton className="bg-[#79c96e] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#b08d55] transition-colors">
              Know More
            </MagneticButton>
          </div>
          <div className="w-full lg:w-1/2 h-[500px]">
            <ImageReveal>
              <ParallaxImage src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" alt="Satwik Homes Building" />
            </ImageReveal>
          </div>
        </div>
      </AnimatedSection>

      <SatwikDesign/>

      <WaveBackground />

      {/* 3. New Projects Carousel */}
      <section className="relative py-24 bg-[#1a1a2e] text-white px-6 md:px-16 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10">
          <div className="mb-12 text-center">
            <div className="font-heading text-4xl font-bold inline-block border-b-2 border-[#79c96e] pb-2">
              <TextReveal text="New Projects" />
            </div>
            <p className="text-gray-300 mt-4">Redefining modern living with sustainability</p>
          </div>
          
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            autoplay={{ delay: 3000 }}
            navigation
            className="pb-12 custom-swiper"
          >
            {newProjects.map((proj) => (
              <SwiperSlide key={proj.id}>
                <div className="bg-[#16213e] rounded-lg overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <span className="absolute top-4 left-4 bg-[#79c96e] text-white text-xs px-3 py-1 rounded z-10 font-bold uppercase">Newly Launched</span>
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading text-2xl font-bold">{proj.title}</h3>
                    <p className="text-gray-400 flex items-center gap-2"><FaMapMarkerAlt className="text-[#79c96e]"/> {proj.location}</p>
                    <div className="flex justify-between text-sm text-gray-300 border-t border-gray-700 pt-3 mt-3">
                      <span>{proj.bhk}</span>
                      <span>RERA: {proj.rera}</span>
                    </div>
              
<Link 
  to={`/project/${proj.id}`} 
  className="block w-full text-center mt-4 border border-[#79c96e] text-[#79c96e] py-2 rounded hover:bg-[#79c96e] hover:text-white transition-colors"
>
  View Property
</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 4. Featured Projects Grid */}
      <AnimatedSection className="py-24 px-6 md:px-16 bg-[#f5f5f5]">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-[#1a1a2e]">Featured Projects <span className="text-[#79c96e]">.</span></h2>
        </div>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(proj => (
            <PropertyCard key={proj.id} property={proj} />
          ))}
        </StaggerChildren>
        <div className="text-center mt-12">
          <a href="/properties" className="inline-flex items-center gap-2 font-bold text-[#1a1a2e] hover:text-[#79c96e] transition-colors border-b-2 border-transparent hover:border-[#79c96e]">
            View All Properties <FaArrowRight />
          </a>
        </div>
      </AnimatedSection>

      <WaveBackground />

      {/* 5. Business Verticals */}
      <section className="py-24 px-6 md:px-16 bg-[#e0e0e0]">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-[#1a1a2e]">Our Business Verticals</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticals.map((vert, idx) => (
            <TiltCard key={idx}>
              <GlowingBorder>
                <div className="relative h-80 rounded-xl overflow-hidden group">
                  <img src={vert.image} alt={vert.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-4 transform group-hover:-translate-y-4 transition-transform duration-500">
                      {vert.icon}
                    </div>
                    <h3 className="text-white font-heading text-2xl font-bold transform group-hover:-translate-y-4 transition-transform duration-500">{vert.title}</h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                      {vert.desc}
                    </p>
                  </div>
                </div>
              </GlowingBorder>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 6. Stats Counter */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white px-6 md:px-16">
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <FaBuilding className="text-5xl text-[#79c96e] mx-auto mb-4" />
            <div className="text-4xl font-bold font-heading text-[#79c96e]">
              <CountUpNumber end={stats.years} />+
            </div>
            <p className="mt-2 text-gray-300 font-medium">Years Experience</p>
          </div>
          <div>
            <FaRuler className="text-5xl text-[#79c96e] mx-auto mb-4" />
            <div className="text-4xl font-bold font-heading text-[#79c96e]">
              <CountUpNumber end={stats.sqft} />M+
            </div>
            <p className="mt-2 text-gray-300 font-medium">Sq.Ft. Developed</p>
          </div>
          <div>
            <FaUsers className="text-5xl text-[#79c96e] mx-auto mb-4" />
            <div className="text-4xl font-bold font-heading text-[#79c96e]">
              <CountUpNumber end={stats.families} />+
            </div>
            <p className="mt-2 text-gray-300 font-medium">Happy Families</p>
          </div>
          <div>
            <FaMapMarkerAlt className="text-5xl text-[#79c96e] mx-auto mb-4" />
            <div className="text-4xl font-bold font-heading text-[#79c96e]">
              <CountUpNumber end={stats.cities} />+
            </div>
            <p className="mt-2 text-gray-300 font-medium">Cities</p>
          </div>
        </StaggerChildren>
      </AnimatedSection>

      {/* 7. Awards */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-[#1a1a2e]">Awards & Recognitions</h2>
          <p className="text-gray-500 mt-2">Merits We Have Earned</p>
        </div>
        <MarqueeSlider pauseOnHover={true}>
          {awards.map((award, i) => (
            <div key={i} className="mx-4 bg-white border border-[#79c96e] p-6 rounded-lg shadow-lg w-72 flex-shrink-0">
              <FaTrophy className="text-4xl text-[#79c96e] mb-4" />
              <h4 className="font-bold text-lg text-[#1a1a2e] mb-1">{award.title}</h4>
              <p className="text-sm text-gray-500">{award.year} | {award.body}</p>
            </div>
          ))}
        </MarqueeSlider>
      </section>

      {/* 8. News */}
      <AnimatedSection className="py-24 px-6 md:px-16 bg-[#f5f5f5]">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-[#1a1a2e]">In The News</h2>
        </div>
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 snap-x">
          {news.map(item => (
            <div key={item.id} className="min-w-[280px] bg-white rounded-lg overflow-hidden shadow-md snap-center flex-shrink-0">
              <img src={item.image} alt="news" className="w-full h-48 object-cover" />
              <div className="p-5">
                <p className="text-xs text-[#79c96e] font-bold mb-2 uppercase">{item.source} • {item.date}</p>
                <h4 className="font-heading font-bold text-lg mb-4 line-clamp-2">{item.headline}</h4>
                <a href="#" className="text-sm font-bold text-[#1a1a2e] hover:text-[#79c96e] underline transition-colors">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 9. Contact CTA */}
      <AnimatedSection className="py-20 bg-[#79c96e] text-center px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">Start Your Journey Home Today</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <MagneticButton className="bg-[#1a1a2e] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#16213e] transition-colors">
            Contact Us
          </MagneticButton>
          <span className="text-white font-bold text-2xl flex items-center gap-2">
             1800-LUXE-HOME
          </span>
        </div>
      </AnimatedSection>

      <WhatsApp/>

    </div>
  );
};

export default HomePage;
