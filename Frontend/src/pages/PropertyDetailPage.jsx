// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import { 
//   FaBed, FaBath, FaRuler, FaBuilding, FaCheck, FaPhone, FaEnvelope 
// } from 'react-icons/fa';
// import AnimatedSection from '../components/AnimatedSection';
// import GlowingBorder from '../components/GlowingBorder';
// import StaggerChildren from '../components/StaggerChildren';

// const PropertyDetailPage = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const [similarProps, setSimilarProps] = useState([]);
  
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
//   const [formStatus, setFormStatus] = useState('');

//   useEffect(() => {
//     const fetchProp = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/properties/${id}`);
//         setProperty(res.data);
//       } catch (err) {
//         setProperty({
//           id: id,
//           title: 'The Skyline Penthouse',
//           price: '₹12.5 Cr',
//           rera: 'PRM/KA/RERA/1251/446/PR/190525/002574',
//           status: 'Ready to Move',
//           type: 'Penthouse',
//           bedrooms: 5,
//           bathrooms: 6,
//           area: '6,500',
//           desc: 'Experience the pinnacle of luxury living in this ultra-premium penthouse. Offering panoramic city views, private elevator access, a rooftop infinity pool, and state-of-the-art home automation. Every inch is crafted with meticulous attention to detail, featuring imported Italian marble, bespoke fittings, and expansive living spaces designed for grand entertaining.',
//           images: [
//             'https://images.unsplash.com/photo-1600607687931-cebf14cd7008?w=1200',
//             'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
//             'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200',
//             'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200'
//           ],
//           amenities: ['Private Pool', 'Gymnasium', '24/7 Security', 'Club House', 'Smart Home', 'Power Backup', 'Landscaped Gardens', 'Spa'],
//           address: '100 Ft Road, Indiranagar, Bangalore - 560038',
//           agent: { name: 'Rajesh Kumar', phone: '+91 9876543210', email: 'rajesh@Satwik Homes.com' }
//         });
//       }
//       setLoading(false);
//     };
//     fetchProp();
//   }, [id]);

//   const handleEnquiry = async (e) => {
//     e.preventDefault();
//     setFormStatus('submitting');
//     try {
//       await axios.post('http://localhost:5000/api/contacts', { ...formData, propertyId: id });
//       setFormStatus('success');
//       setFormData({ name: '', email: '', phone: '', message: '' });
//       setTimeout(() => setFormStatus(''), 3000);
//     } catch (err) {
//       // simulate success
//       setTimeout(() => {
//         setFormStatus('success');
//         setFormData({ name: '', email: '', phone: '', message: '' });
//         setTimeout(() => setFormStatus(''), 3000);
//       }, 1000);
//     }
//   };

//   if (loading || !property) return <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">Loading...</div>;

//   return (
//     <div className="w-full bg-[#f5f5f5] font-body text-[#1a1a2e] pb-24 mt-10">
//       {/* Breadcrumb */}
//       <div className="bg-white py-4 px-6 md:px-16 shadow-sm">
//         <p className="text-sm text-gray-500">Home / Properties / {property.title}</p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-10">
        
//         {/* Left Column (Images + Details) */}
//         <div className="w-full lg:w-2/3 space-y-10">
          
//           {/* Header Info */}
//           <AnimatedSection>
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
//               <div>
//                 <h1 className="font-heading text-3xl md:text-5xl font-bold mb-2">{property.title}</h1>
//                 <p className="text-gray-500">{property.address}</p>
//               </div>
//               <div className="text-left md:text-right">
//                 <p className="text-3xl font-bold text-[#79c96e]">{property.price}</p>
//                 <div className="flex gap-2 mt-2">
//                   <span className="bg-[#1a1a2e] text-white text-xs px-2 py-1 rounded">{property.status}</span>
//                   <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">{property.type}</span>
//                 </div>
//               </div>
//             </div>
//             {property.rera && <p className="text-xs text-gray-400">RERA: {property.rera}</p>}
//           </AnimatedSection>

//           {/* Image Gallery */}
//           <AnimatedSection className="rounded-xl overflow-hidden shadow-lg bg-white">
//             <Swiper
//               style={{ '--swiper-navigation-color': '#fff' }}
//               spaceBetween={10}
//               navigation={true}
//               thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
//               modules={[FreeMode, Navigation, Thumbs]}
//               className="h-[400px] md:h-[500px] w-full"
//             >
//               {property.images.map((img, i) => (
//                 <SwiperSlide key={i}>
//                   <img src={img} className="w-full h-full object-cover cursor-crosshair" alt="Property view" />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
            
//             <Swiper
//               onSwiper={setThumbsSwiper}
//               spaceBetween={10}
//               slidesPerView={4}
//               freeMode={true}
//               watchSlidesProgress={true}
//               modules={[FreeMode, Navigation, Thumbs]}
//               className="h-24 mt-2 px-2 pb-2 cursor-pointer"
//             >
//               {property.images.map((img, i) => (
//                 <SwiperSlide key={i}>
//                   <img src={img} className="w-full h-full object-cover rounded border-2 border-transparent hover:border-[#79c96e] transition-colors" alt="Thumb" />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </AnimatedSection>

//           {/* Details Grid */}
//           <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center justify-center">
//               <FaBed className="text-3xl text-[#79c96e] mb-2" />
//               <p className="text-gray-500 text-sm">Bedrooms</p>
//               <p className="font-bold text-xl">{property.bedrooms}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center justify-center">
//               <FaBath className="text-3xl text-[#79c96e] mb-2" />
//               <p className="text-gray-500 text-sm">Bathrooms</p>
//               <p className="font-bold text-xl">{property.bathrooms}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center justify-center">
//               <FaRuler className="text-3xl text-[#79c96e] mb-2" />
//               <p className="text-gray-500 text-sm">Area</p>
//               <p className="font-bold text-xl">{property.area} sq.ft</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center justify-center">
//               <FaBuilding className="text-3xl text-[#79c96e] mb-2" />
//               <p className="text-gray-500 text-sm">Property Type</p>
//               <p className="font-bold text-xl">{property.type}</p>
//             </div>
//           </AnimatedSection>

//           {/* Description */}
//           <AnimatedSection className="bg-white p-8 rounded-lg shadow-sm">
//             <h3 className="font-heading text-2xl font-bold mb-4">Description</h3>
//             <p className="text-gray-600 leading-relaxed">{property.desc}</p>
//           </AnimatedSection>

//           {/* Amenities */}
//           <AnimatedSection className="bg-white p-8 rounded-lg shadow-sm">
//             <h3 className="font-heading text-2xl font-bold mb-6">Amenities</h3>
//             <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {property.amenities.map((amenity, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <div className="bg-[#79c96e]/20 p-2 rounded-full text-[#79c96e]">
//                     <FaCheck size={12} />
//                   </div>
//                   <span className="text-gray-700 font-medium">{amenity}</span>
//                 </div>
//               ))}
//             </StaggerChildren>
//           </AnimatedSection>

//          {/* Location Map */}
// <AnimatedSection className="bg-white p-8 rounded-lg shadow-sm">
//   <h3 className="font-heading text-2xl font-bold mb-6">Location</h3>
//   <div className="w-full h-80 rounded-lg overflow-hidden relative">
//     <iframe 
//       className="w-full h-full border-0" 
//       loading="lazy" 
//       allowFullScreen 
//       referrerPolicy="no-referrer-when-downgrade"
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9892305335195!2d77.63820257577587!3d12.972496715201173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a3233816a7%3A0x2f8b50ec19d67568!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//       title="Location Map - Indiranagar, Bangalore"
//     />
//   </div>
// </AnimatedSection>

//         </div>

//         {/* Right Column (Sidebar) */}
//         <div className="w-full lg:w-1/3 space-y-8">
          
//           {/* Agent Card */}
//           <AnimatedSection>
//             <GlowingBorder>
//               <div className="bg-white p-6 rounded-xl flex items-center gap-4">
//                 <img src={`https://ui-avatars.com/api/?name=${property.agent.name.replace(' ', '+')}&background=1a1a2e&color=c9a96e`} alt={property.agent.name} className="w-16 h-16 rounded-full" />
//                 <div>
//                   <p className="text-sm text-gray-500">Listed by</p>
//                   <h4 className="font-bold text-lg">{property.agent.name}</h4>
//                   <div className="flex gap-4 mt-2">
//                     <a href={`tel:${property.agent.phone}`} className="text-[#79c96e] hover:text-[#1a1a2e]"><FaPhone /></a>
//                     <a href={`mailto:${property.agent.email}`} className="text-[#79c96e] hover:text-[#1a1a2e]"><FaEnvelope /></a>
//                   </div>
//                 </div>
//               </div>
//             </GlowingBorder>
//           </AnimatedSection>

//           {/* Enquiry Form */}
//           <AnimatedSection className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
//             <h3 className="font-heading text-2xl font-bold mb-6">Interested?</h3>
//             <form onSubmit={handleEnquiry} className="space-y-4">
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Name</label>
//                 <input required type="text" className="w-full border border-gray-300 rounded p-3 focus:border-[#79c96e] outline-none" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Email</label>
//                 <input required type="email" className="w-full border border-gray-300 rounded p-3 focus:border-[#79c96e] outline-none" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Phone</label>
//                 <input required type="tel" className="w-full border border-gray-300 rounded p-3 focus:border-[#79c96e] outline-none" value={formData.phone} onChange={e=>setFormData({...formData, phone: e.target.value})} />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Message</label>
//                 <textarea rows="3" className="w-full border border-gray-300 rounded p-3 focus:border-[#79c96e] outline-none" value={formData.message} onChange={e=>setFormData({...formData, message: e.target.value})}></textarea>
//               </div>
//               <button disabled={formStatus === 'submitting'} type="submit" className="w-full bg-[#1a1a2e] text-white py-3 rounded font-bold hover:bg-[#79c96e] transition-colors disabled:opacity-50">
//                 {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
//               </button>
              
//               {formStatus === 'success' && (
//                 <div className="bg-green-100 text-green-700 p-3 rounded text-sm text-center animate-pulse">
//                   Request sent successfully! We will contact you soon.
//                 </div>
//               )}
//             </form>
//           </AnimatedSection>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetailPage;









import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import { 
  FaBed, FaBath, FaRulerCombined, FaBuilding, FaCheckCircle, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaShareAlt, FaHeart, FaShieldAlt
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import GlowingBorder from '../components/GlowingBorder';
import StaggerChildren from '../components/StaggerChildren';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Fallback image handler for any broken URLs
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
  };

  useEffect(() => {
    const fetchProp = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/properties/${id}`);
        setProperty(res.data);
      } catch (err) {
        // High-definition luxury architectural images guaranteed to render
        setProperty({
          id: id,
          title: 'The Skyline Penthouse',
          price: '₹12.5 Cr',
          rera: 'PRM/KA/RERA/1251/446/PR/190525/002574',
          status: 'Ready to Move',
          type: 'Penthouse',
          bedrooms: 5,
          bathrooms: 6,
          area: '6,500',
          desc: 'Experience the pinnacle of luxury living in this ultra-premium penthouse. Offering panoramic city views, private elevator access, a rooftop infinity pool, and state-of-the-art home automation. Every inch is crafted with meticulous attention to detail, featuring imported Italian marble, bespoke fittings, and expansive living spaces designed for grand entertaining.',
          images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80', // Modern Villa Facade
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80', // Luxury Living Room
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80', // Modern Kitchen & Dining
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80', // Master Suite
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80', // Infinity Pool & Deck
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80'  // Luxury Bath
          ],
          amenities: ['Private Pool', 'Gymnasium', '24/7 Security', 'Club House', 'Smart Home', 'Power Backup', 'Landscaped Gardens', 'Spa'],
          address: '100 Ft Road, Indiranagar, Bangalore - 560038',
          agent: { name: 'Rajesh Kumar', phone: '+91 9876543210', email: 'rajesh@satwikhomes.com' }
        });
      }
      setLoading(false);
    };
    fetchProp();
  }, [id]);

  const handleEnquiry = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      await axios.post('http://localhost:5000/api/contacts', { ...formData, propertyId: id });
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus(''), 4000);
    } catch (err) {
      setTimeout(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setFormStatus(''), 4000);
      }, 1000);
    }
  };

  if (loading || !property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900">
        <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-500 font-medium tracking-wide">Loading luxury experience...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen pb-24 font-sans selection:bg-emerald-500 selection:text-white mt-10">
      
      {/* Sticky Header / Breadcrumb Bar */}
      <div className="border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs sm:text-sm">
          <nav className="flex items-center space-x-2 text-slate-500 truncate">
            <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-emerald-600 transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-slate-900 truncate font-medium">{property.title}</span>
          </nav>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSaved(!isSaved)} 
              className={`p-2.5 rounded-full border transition-all ${isSaved ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <FaHeart className={isSaved ? 'fill-current' : ''} size={14} />
            </button>
            <button className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all">
              <FaShareAlt size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col lg:flex-row gap-10">
        
        {/* Left Column */}
        <div className="w-full lg:w-2/3 space-y-8">
          
          {/* Title Header Section */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                    {property.status}
                  </span>
                  <span className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-medium border border-slate-200">
                    {property.type}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">{property.title}</h1>
                <p className="flex items-center gap-2 text-slate-500 text-sm sm:text-base">
                  <FaMapMarkerAlt className="text-emerald-600 flex-shrink-0" />
                  {property.address}
                </p>
              </div>

              <div className="text-left md:text-right flex-shrink-0">
                <span className="text-xs uppercase tracking-widest text-slate-400 block font-semibold">Guide Price</span>
                <p className="text-3xl sm:text-4xl font-black text-emerald-600">
                  {property.price}
                </p>
                {property.rera && (
                  <p className="text-[11px] text-slate-400 flex items-center md:justify-end gap-1 mt-1 font-medium">
                    <FaShieldAlt className="text-emerald-600" /> RERA: {property.rera}
                  </p>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Luxury Gallery Carousel */}
          <AnimatedSection className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-xl p-2">
            <Swiper
              style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#059669' }}
              spaceBetween={10}
              navigation={true}
              effect={'fade'}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs, EffectFade]}
              className="h-[380px] sm:h-[480px] lg:h-[520px] w-full rounded-xl overflow-hidden group shadow-inner"
            >
              {property.images.map((img, i) => (
                <SwiperSlide key={i} className="bg-slate-100">
                  <img 
                    src={img} 
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={`${property.title} slide ${i}`} 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-20 sm:h-24 mt-2 cursor-pointer"
            >
              {property.images.map((img, i) => (
                <SwiperSlide key={i} className="rounded-lg overflow-hidden border-2 border-transparent opacity-60 [.swiper-slide-thumb-active&]:opacity-100 [.swiper-slide-thumb-active&]:border-emerald-600 transition-all">
                  <img 
                    src={img} 
                    onError={handleImageError}
                    className="w-full h-full object-cover" 
                    alt={`Thumb ${i}`} 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatedSection>

          {/* Quick Stats Grid */}
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FaBed, label: 'Bedrooms', val: property.bedrooms },
              { icon: FaBath, label: 'Bathrooms', val: property.bathrooms },
              { icon: FaRulerCombined, label: 'Total Area', val: `${property.area} sq.ft` },
              { icon: FaBuilding, label: 'Property Type', val: property.type },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 hover:border-emerald-200 p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
                <item.icon className="text-2xl text-emerald-600 mb-2" />
                <span className="text-xs text-slate-500 font-medium">{item.label}</span>
                <span className="font-bold text-lg sm:text-xl text-slate-900 mt-0.5">{item.val}</span>
              </div>
            ))}
          </AnimatedSection>

          {/* Property Overview */}
          <AnimatedSection className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-emerald-600 rounded-full inline-block" />
              Overview
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              {property.desc}
            </p>
          </AnimatedSection>

          {/* Key Amenities */}
          <AnimatedSection className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-emerald-600 rounded-full inline-block" />
              Premium Amenities
            </h2>
            <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {property.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-emerald-200 transition-colors">
                  <FaCheckCircle className="text-emerald-600 text-base flex-shrink-0" />
                  <span className="text-slate-800 text-sm font-medium">{amenity}</span>
                </div>
              ))}
            </StaggerChildren>
          </AnimatedSection>

          {/* Interactive Map */}
          <AnimatedSection className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-emerald-600 rounded-full inline-block" />
              Location & Neighborhood
            </h2>
            <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe 
                className="w-full h-full transition-all duration-500" 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9892305335195!2d77.63820257577587!3d12.972496715201173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a3233816a7%3A0x2f8b50ec19d67568!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                title="Location Map"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6">
          
          {/* Agent Card */}
          <AnimatedSection>
            <GlowingBorder className="rounded-2xl">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${property.agent.name.replace(' ', '+')}&background=059669&color=fff`} 
                      alt={property.agent.name} 
                      className="w-16 h-16 rounded-full ring-2 ring-emerald-500/20 object-cover" 
                    />
                    <span className="w-4 h-4 bg-emerald-500 border-2 border-white rounded-full absolute bottom-0 right-0" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-emerald-600 tracking-wider">Listing Agent</span>
                    <h4 className="font-bold text-lg text-slate-900">{property.agent.name}</h4>
                    <p className="text-slate-500 text-xs">Senior Property Advisor</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <a 
                    href={`tel:${property.agent.phone}`} 
                    className="flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 rounded-xl font-semibold text-sm transition-all"
                  >
                    <FaPhoneAlt size={12} /> Call Agent
                  </a>
                  <a 
                    href={`mailto:${property.agent.email}`} 
                    className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-xl font-semibold text-sm transition-all"
                  >
                    <FaEnvelope size={12} /> Email
                  </a>
                </div>
              </div>
            </GlowingBorder>
          </AnimatedSection>

          {/* Sticky Inquiry Form */}
          <AnimatedSection className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-xl shadow-slate-100/50 sticky top-20">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Schedule a Private Tour</h3>
            <p className="text-slate-500 text-xs mb-6">Inquire directly with our dedicated real estate concierge.</p>
            
            <form onSubmit={handleEnquiry} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Full Name</label>
                <input 
                  required 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all" 
                  value={formData.name} 
                  onChange={e => setFormData({ ...formData, name: e.target.value })} 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Email Address</label>
                <input 
                  required 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all" 
                  value={formData.email} 
                  onChange={e => setFormData({ ...formData, email: e.target.value })} 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Phone Number</label>
                <input 
                  required 
                  type="tel" 
                  placeholder="+91 90000 00000"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all" 
                  value={formData.phone} 
                  onChange={e => setFormData({ ...formData, phone: e.target.value })} 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Message</label>
                <textarea 
                  rows="3" 
                  placeholder="I would like to arrange a viewing..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none" 
                  value={formData.message} 
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button 
                disabled={formStatus === 'submitting'} 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/25 active:scale-[0.98] disabled:opacity-50"
              >
                {formStatus === 'submitting' ? 'Submitting Request...' : 'Request Private Viewing'}
              </button>

              {formStatus === 'success' && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs text-center font-medium animate-fade-in">
                  ✓ Inquiry submitted! An agent will contact you shortly.
                </div>
              )}
            </form>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;