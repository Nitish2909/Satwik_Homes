import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaLeaf, FaTrophy, FaHandshake } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import ParallaxImage from '../components/ParallaxImage';
import ImageReveal from '../components/ImageReveal';
import StaggerChildren from '../components/StaggerChildren';
import MorphingText from '../components/MorphingText';

const AboutPage = () => {
  const timeline = [
    { year: '1993', title: 'The Genesis', desc: 'Satwik Homes was founded with a vision to redefine luxury real estate.' },
    { year: '2000', title: 'First Landmark', desc: 'Completed our first major luxury residential complex in Mumbai.' },
    { year: '2005', title: 'National Expansion', desc: 'Expanded operations to 5 major cities across India.' },
    { year: '2010', title: '10M Sq.Ft Milestone', desc: 'Successfully delivered over 10 million sq.ft of premium spaces.' },
    { year: '2015', title: 'Hospitality Venture', desc: 'Entered the luxury hospitality segment with 5-star properties.' },
    { year: '2020', title: 'Going Green', desc: 'Committed to 100% sustainable and IGBC-certified new developments.' },
    { year: '2024', title: '50M+ Sq.Ft Delivered', desc: 'Celebrating a legacy of trust and architectural brilliance.' },
  ];

  const team = [
    { name: 'Rohan Mehta', role: 'Chairman & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', bio: 'Visionary leader with 35 years of industry experience.' },
    { name: 'Aisha Sharma', role: 'CEO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', bio: 'Driving innovation and strategic growth globally.' },
    { name: 'Vikram Singh', role: 'Head of Architecture', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', bio: 'Award-winning architect passionate about sustainable design.' },
    { name: 'Neha Kapoor', role: 'Chief Financial Officer', img: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400', bio: 'Ensuring financial robustness and investor trust.' },
  ];

  const values = [
    { title: 'Trust', icon: <FaHandshake className="text-4xl text-[#79c96e]"/>, desc: 'Transparency and integrity in every transaction.' },
    { title: 'Innovation', icon: <FaGem className="text-4xl text-[#79c96e]"/>, desc: 'Pioneering designs and smart home technologies.' },
    { title: 'Sustainability', icon: <FaLeaf className="text-4xl text-[#79c96e]"/>, desc: 'Building green spaces for a better tomorrow.' },
    { title: 'Excellence', icon: <FaTrophy className="text-4xl text-[#79c96e]"/>, desc: 'Uncompromising quality in construction and service.' },
  ];

  return (
    <div className="w-full bg-[#f5f5f5] font-body text-[#1a1a2e] overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600" alt="Company Building" />
          <div className="absolute inset-0 bg-[#1a1a2e]/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">Our Journey</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"><MorphingText texts={['Building Dreams', 'Crafting Legacies', 'Inspiring Lives']} /></p>
        </div>
      </div>

      {/* Corporate Overview */}
      <AnimatedSection className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="font-heading text-4xl font-bold">A Legacy of <span className="text-[#79c96e]">Brilliance</span></h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Since our inception in 1993, Satwik Homes has transformed the skyline of modern India. We are not just builders; we are creators of lifestyles. Our commitment to excellence, coupled with our passion for innovation, has positioned us as a premier real estate developer.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              From ultra-luxury residences to cutting-edge commercial spaces, every Satwik Homes project is a testament to our unwavering dedication to quality, sustainability, and customer satisfaction.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center gap-6">
  <ImageReveal>
    <img 
      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600" 
      alt="Modern Interior Design" 
      className="w-64 h-80 object-cover rounded-lg shadow-xl translate-y-8" 
    />
  </ImageReveal>
  <ImageReveal>
    <img 
      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600" 
      alt="Modern Home Exterior" 
      className="w-64 h-80 object-cover rounded-lg shadow-xl" 
    />
  </ImageReveal>
</div>
        </div>
      </AnimatedSection>

      {/* Timeline Section */}
      {/* Timeline Section */}
<section className="py-24 bg-[#1a1a2e] text-white px-6 md:px-16 overflow-hidden">
  <div className="text-center mb-20">
    <span className="text-[#79c96e] text-sm uppercase tracking-widest font-semibold">Our Journey</span>
    <h2 className="font-heading text-4xl md:text-5xl font-extrabold mt-2 tracking-tight">
      Milestones
    </h2>
    <div className="w-16 h-1 bg-[#79c96e] mx-auto mt-4 rounded-full"></div>
  </div>

  <div className="max-w-5xl mx-auto relative">
    {/* Vertical Line - Left on mobile, center on md+ screens */}
    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#79c96e] via-[#79c96e]/40 to-transparent"></div>

    <StaggerChildren>
      {timeline.map((item, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div 
            key={idx} 
            className={`relative flex flex-col md:flex-row items-center mb-16 w-full ${
              isEven ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Empty Spacer Column for Desktop */}
            <div className="hidden md:block w-1/2"></div>

            {/* Content Card Column */}
            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
              <div 
                className={`group p-6 md:p-8 bg-[#16213e]/80 backdrop-blur-sm rounded-2xl border border-white/5 shadow-xl hover:border-[#79c96e]/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${
                  isEven ? 'md:text-left' : 'md:text-right'
                }`}
              >
                {/* Accent top border gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#79c96e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <span className="inline-block px-3 py-1 bg-[#79c96e]/10 text-[#79c96e] text-sm font-bold rounded-full mb-3">
                  {item.year}
                </span>
                <h4 className="font-heading text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#79c96e] transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Center Glowing Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#79c96e] border-4 border-[#1a1a2e] shadow-[0_0_12px_rgba(121,201,110,0.8)] z-10"></div>
            </div>
          </div>
        );
      })}
    </StaggerChildren>
  </div>
</section>

      {/* Core Values */}
      <AnimatedSection className="py-24 px-6 md:px-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-[#1a1a2e]">Our Core Values</h2>
        </div>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <div key={i} className="bg-[#f5f5f5] p-8 rounded-xl text-center hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-[#79c96e]">
              <div className="flex justify-center mb-6">{val.icon}</div>
              <h3 className="font-heading text-2xl font-bold mb-4">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </div>
          ))}
        </StaggerChildren>
      </AnimatedSection>

      {/* Leadership Team */}
      <section className="py-24 px-6 md:px-16 bg-[#e0e0e0]">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-[#1a1a2e]">Leadership Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="relative w-full h-80 perspective-1000 group cursor-pointer">
              <motion.div 
                className="w-full h-full transition-all duration-700 preserve-3d group-hover:my-rotate-y-180"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6 border-b-4 border-[#79c96e]">
                  <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 shadow-md" />
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-[#79c96e] text-sm font-medium">{member.role}</p>
                </div>
                {/* Back */}
                <div 
                  className="absolute w-full h-full backface-hidden bg-[#1a1a2e] text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6 my-rotate-y-180"
                  style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                  <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                  <div className="w-10 h-1 bg-[#79c96e] mb-4"></div>
                  <p className="text-sm text-center text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CSR Section */}
      <AnimatedSection className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full lg:w-1/2 h-96 relative">
            <ParallaxImage src="https://images.unsplash.com/photo-1593113563332-ce147ee1ce7d?w=800" alt="CSR Activity" />
          </div>
          <div className="w-full lg:w-1/2 p-12 text-white">
            <span className="text-[#79c96e] font-bold text-sm tracking-widest uppercase">CSR Initiatives</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">Building Communities</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              At Satwik Homes, we believe in giving back. Our CSR foundation focuses on education, healthcare, and sustainable community development. By partnering with local NGOs, we actively contribute to uplifting underprivileged sections of society.
            </p>
            <button className="border border-[#79c96e] text-[#79c96e] px-6 py-2 rounded hover:bg-[#79c96e] hover:text-white transition-colors">
              Read Our Impact Report
            </button>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
};

export default AboutPage;
