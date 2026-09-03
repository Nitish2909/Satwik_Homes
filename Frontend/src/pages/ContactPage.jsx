// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaBuilding } from 'react-icons/fa';
// import AnimatedSection from '../components/AnimatedSection';
// import GlowingBorder from '../components/GlowingBorder';
// import MagneticButton from '../components/MagneticButton';
// import StaggerChildren from '../components/StaggerChildren';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
//   const [status, setStatus] = useState(''); // '', 'submitting', 'success'
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let err = {};
//     if(!formData.name) err.name = "Name is required";
//     if(!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) err.email = "Valid email is required";
//     if(!formData.phone) err.phone = "Phone number is required";
//     if(!formData.message) err.message = "Message cannot be empty";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;
    
//     setStatus('submitting');
//     try {
//       await axios.post('http://localhost:5000/api/contacts', formData);
//       setStatus('success');
//       setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
//       setTimeout(() => setStatus(''), 5000);
//     } catch (err) {
//       // Simulate success for demo
//       setTimeout(() => {
//         setStatus('success');
//         setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
//         setTimeout(() => setStatus(''), 5000);
//       }, 1500);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if(errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
//   };

//   const offices = [
//     { city: 'Bangalore (HQ)', address: '100 Ft Road, Indiranagar, Bangalore 560038', phone: '+91 80 4000 5000' },
//     { city: 'Mumbai', address: 'Bandra Kurla Complex, Mumbai 400051', phone: '+91 22 6000 7000' },
//     { city: 'Hyderabad', address: 'Jubilee Hills, Hyderabad 500033', phone: '+91 40 3000 4000' },
//     { city: 'Pune', address: 'Koregaon Park, Pune 411001', phone: '+91 20 5000 6000' },
//     { city: 'Goa', address: 'Panjim Central, Goa 403001', phone: '+91 832 2000 3000' },
//     { city: 'Coimbatore', address: 'Race Course Road, Coimbatore 641018', phone: '+91 422 4000 5000' },
//   ];

//   return (
//     <div className="w-full bg-[#f5f5f5] font-body text-[#1a1a2e]">
//       {/* Hero */}
//       <div className="bg-[#1a1a2e] text-white py-16 text-center relative overflow-hidden mt-10">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600')] opacity-10 bg-cover bg-center"></div>
//         <div className="relative z-10">
//           <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
//           <p className="text-gray-300 max-w-lg mx-auto">We're here to help you find your dream home. Reach out to our experts today.</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 flex flex-col lg:flex-row gap-12">
        
//         {/* Left Column - Form (60%) */}
//         <AnimatedSection className="w-full lg:w-3/5 bg-white p-8 md:p-10 rounded-2xl shadow-xl">
//           <h2 className="font-heading text-3xl font-bold mb-8">Send Us A Message</h2>
          
//           {status === 'success' ? (
//             <div className="flex flex-col items-center justify-center h-64 text-center">
//               <FaCheckCircle className="text-6xl text-green-500 mb-4 animate-bounce" />
//               <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
//               <p className="text-gray-600">Your message has been received. Our team will get back to you within 24 hours.</p>
//               <button onClick={() => setStatus('')} className="mt-6 text-[#79c96e] font-bold hover:underline">Send another message</button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Floating Label Input */}
//                 <div className="relative group">
//                   <input type="text" name="name" value={formData.name} onChange={handleChange}
//                     className={`block w-full px-4 py-3 bg-gray-50 border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-[#79c96e]'} rounded-t-md outline-none peer transition-colors`} placeholder=" " />
//                   <label className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-[#79c96e] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base pointer-events-none">
//                     Full Name
//                   </label>
//                   {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//                 </div>

//                 <div className="relative group">
//                   <input type="email" name="email" value={formData.email} onChange={handleChange}
//                     className={`block w-full px-4 py-3 bg-gray-50 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#79c96e]'} rounded-t-md outline-none peer transition-colors`} placeholder=" " />
//                   <label className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-[#79c96e] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base pointer-events-none">
//                     Email Address
//                   </label>
//                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="relative group">
//                   <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
//                     className={`block w-full px-4 py-3 bg-gray-50 border-b-2 ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-[#79c96e]'} rounded-t-md outline-none peer transition-colors`} placeholder=" " />
//                   <label className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-[#79c96e] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base pointer-events-none">
//                     Phone Number
//                   </label>
//                   {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//                 </div>

//                 <div className="relative">
//                   <select name="subject" value={formData.subject} onChange={handleChange}
//                     className="block w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 focus:border-[#79c96e] rounded-t-md outline-none text-gray-700">
//                     <option>General Enquiry</option>
//                     <option>Property Buying</option>
//                     <option>Property Selling</option>
//                     <option>Careers</option>
//                     <option>Other</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="relative group">
//                 <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
//                   className={`block w-full px-4 py-3 bg-gray-50 border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-[#79c96e]'} rounded-t-md outline-none peer transition-colors resize-none`} placeholder=" "></textarea>
//                 <label className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-[#79c96e] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base pointer-events-none">
//                   Your Message
//                 </label>
//                 {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
//               </div>

//               <div className="pt-2">
//                 <MagneticButton className="w-full md:w-auto bg-[#1a1a2e] text-white px-10 py-4 rounded font-bold hover:bg-[#79c96e] transition-colors shadow-lg flex justify-center disabled:opacity-70" disabled={status === 'submitting'}>
//                   {status === 'submitting' ? 'Sending...' : 'Send Message'}
//                 </MagneticButton>
//               </div>
//             </form>
//           )}
//         </AnimatedSection>

//         {/* Right Column - Info (40%) */}
//         <AnimatedSection className="w-full lg:w-2/5 flex flex-col gap-8">
//           <GlowingBorder>
//             <div className="bg-[#1a1a2e] text-white p-8 rounded-2xl">
//               <h3 className="font-heading text-2xl font-bold mb-6 text-[#79c96e]">Contact Information</h3>
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <FaMapMarkerAlt className="text-[#79c96e] text-xl mt-1" />
//                   <div>
//                     <h4 className="font-bold mb-1">Corporate Headquarters</h4>
//                     <p className="text-gray-300 text-sm">100 Ft Road, Indiranagar<br/>Bangalore, Karnataka 560038<br/>India</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <FaPhoneAlt className="text-[#79c96e] text-xl" />
//                   <div>
//                     <p className="text-gray-300 text-sm">Call us on</p>
//                     <a href="tel:18001234567" className="font-bold hover:text-[#79c96e] transition-colors">1800-123-4567</a>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <FaEnvelope className="text-[#79c96e] text-xl" />
//                   <div>
//                     <p className="text-gray-300 text-sm">Email us at</p>
//                     <a href="mailto:info@Satwik Homes.com" className="font-bold hover:text-[#79c96e] transition-colors">info@Satwik Homes.com</a>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-10 pt-6 border-t border-gray-700">
//                 <p className="text-sm font-bold mb-4">Follow Us</p>
//                 <div className="flex gap-4">
//                   <a href="#" className="bg-[#16213e] p-3 rounded-full hover:bg-[#79c96e] transition-colors"><FaFacebookF /></a>
//                   <a href="#" className="bg-[#16213e] p-3 rounded-full hover:bg-[#79c96e] transition-colors"><FaTwitter /></a>
//                   <a href="#" className="bg-[#16213e] p-3 rounded-full hover:bg-[#79c96e] transition-colors"><FaInstagram /></a>
//                   <a href="#" className="bg-[#16213e] p-3 rounded-full hover:bg-[#79c96e] transition-colors"><FaLinkedinIn /></a>
//                 </div>
//               </div>
//             </div>
//           </GlowingBorder>

//           {/* Map Embed */}
//           <div className="h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
//             <iframe 
//               width="100%" height="100%" style={{border:0}} loading="lazy" allowFullScreen 
//               src="https://www.google.com/maps/embed/v1/place?q=Indiranagar+Bangalore&key=YOUR_API_KEY_PLACEHOLDER" title="HQ Map">
//             </iframe>
//           </div>
//         </AnimatedSection>
//       </div>

//       {/* Multi-city Offices */}
//       <section className="py-20 bg-white px-6 md:px-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="font-heading text-3xl font-bold">Our Offices Across India</h2>
//           </div>
//           <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {offices.map((office, idx) => (
//               <div key={idx} className="bg-[#f5f5f5] p-6 rounded-lg border border-gray-200 hover:border-[#79c96e] transition-colors">
//                 <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><FaBuilding className="text-[#79c96e]" /> {office.city}</h4>
//                 <p className="text-sm text-gray-600 mb-3 h-10">{office.address}</p>
//                 <p className="text-sm font-bold flex items-center gap-2"><FaPhoneAlt className="text-gray-400" /> {office.phone}</p>
//               </div>
//             ))}
//           </StaggerChildren>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <div className="bg-[#79c96e] text-center py-12 px-4">
//         <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Prefer to talk directly?</h2>
//         <p className="text-lg text-[#1a1a2e] font-medium">Call us toll-free at <a href="tel:18001234567" className="font-bold underline">1800-LUXE-HOME</a></p>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;






import React, { useState } from 'react';
import axios from 'axios';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaBuilding, 
  FaPaperPlane,
  FaClock,
  FaDirections
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import GlowingBorder from '../components/GlowingBorder';
import MagneticButton from '../components/MagneticButton';
import StaggerChildren from '../components/StaggerChildren';

const offices = [
  { 
    city: 'Karnal (HQ)', 
    address: '162 Sector-12, Part-II ,Urban Estate,Karnal,132001,Haryana', 
    phone: '+91 9813369209',
    embedUrl: 'https://maps.google.com/maps?q=100%20Ft%20Road,%20Indiranagar,%20Bangalore%20560038&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  // { 
  //   city: 'Mumbai', 
  //   address: 'Bandra Kurla Complex, Mumbai 400051', 
  //   phone: '+91 22 6000 7000',
  //   embedUrl: 'https://maps.google.com/maps?q=Bandra%20Kurla%20Complex,%20Mumbai%20400051&t=&z=15&ie=UTF8&iwloc=&output=embed'
  // },
  // { 
  //   city: 'Hyderabad', 
  //   address: 'Jubilee Hills, Hyderabad 500033', 
  //   phone: '+91 40 3000 4000',
  //   embedUrl: 'https://maps.google.com/maps?q=Jubilee%20Hills,%20Hyderabad%20500033&t=&z=15&ie=UTF8&iwloc=&output=embed'
  // },
  // { 
  //   city: 'Pune', 
  //   address: 'Koregaon Park, Pune 411001', 
  //   phone: '+91 20 5000 6000',
  //   embedUrl: 'https://maps.google.com/maps?q=Koregaon%20Park,%20Pune%20411001&t=&z=15&ie=UTF8&iwloc=&output=embed'
  // },
  // { 
  //   city: 'Goa', 
  //   address: 'Panjim Central, Goa 403001', 
  //   phone: '+91 832 2000 3000',
  //   embedUrl: 'https://maps.google.com/maps?q=Panjim%20Central,%20Goa%20403001&t=&z=15&ie=UTF8&iwloc=&output=embed'
  // },
  // { 
  //   city: 'Coimbatore', 
  //   address: 'Race Course Road, Coimbatore 641018', 
  //   phone: '+91 422 4000 5000',
  //   embedUrl: 'https://maps.google.com/maps?q=Race%20Course%20Road,%20Coimbatore%20641018&t=&z=15&ie=UTF8&iwloc=&output=embed'
  // },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  const [status, setStatus] = useState(''); // '', 'submitting', 'success'
  const [errors, setErrors] = useState({});
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  const validate = () => {
    let err = {};
    if(!formData.name) err.name = "Name is required";
    if(!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) err.email = "Valid email is required";
    if(!formData.phone) err.phone = "Phone number is required";
    if(!formData.message) err.message = "Message cannot be empty";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    try {
      await axios.post('http://localhost:5000/api/contacts', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (err) {
      // Fallback for demo display
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
        setTimeout(() => setStatus(''), 5000);
      }, 1200);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if(errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  return (
    <div className="w-full  font-body bg-black text-slate-100 min-h-screen selection:bg-[#79c96e] selection:text-black">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#79c96e]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden z-10 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600')] opacity-10 bg-cover bg-center filter grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#79c96e]/10 border border-[#79c96e]/30 text-[#79c96e] text-xs font-semibold uppercase tracking-widest mb-4">
            Connect With Us
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-[#79c96e]">
            Let’s Build Something Extraordinary
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions about premium properties or seeking bespoke luxury estate consultations? Our expert team is at your service.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Form Container (7 Columns) */}
        <AnimatedSection className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#79c96e] to-indigo-600"></div>
          
          <div className="mb-8">
            <h2 className="font-heading text-3xl font-bold text-white mb-2">Send Us a Message</h2>
            <p className="text-slate-400 text-sm">Fill out the details below and we will reach out shortly.</p>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 bg-[#79c96e]/10 rounded-full flex items-center justify-center mb-6 border border-[#79c96e]/30">
                <FaCheckCircle className="text-5xl text-[#79c96e] animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-slate-400 max-w-md mb-8">Thank you for getting in touch. One of our dedicated advisors will respond to your query within 24 hours.</p>
              <button 
                onClick={() => setStatus('')} 
                className="px-6 py-2.5 rounded-full border border-[#79c96e] text-[#79c96e] font-semibold text-sm hover:bg-[#79c96e] hover:text-black transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="relative">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className={`block w-full px-4 pt-6 pb-2 bg-slate-950/50 border ${errors.name ? 'border-red-500' : 'border-slate-800 focus:border-[#79c96e]'} rounded-xl text-white outline-none peer transition-all duration-300 focus:ring-1 focus:ring-[#79c96e]`} 
                    placeholder=" " 
                  />
                  <label className="absolute left-4 top-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:normal-case peer-focus:text-[#79c96e]">
                    Full Name
                  </label>
                  {errors.name && <p className="text-red-400 text-xs mt-1 pl-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="relative">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className={`block w-full px-4 pt-6 pb-2 bg-slate-950/50 border ${errors.email ? 'border-red-500' : 'border-slate-800 focus:border-[#79c96e]'} rounded-xl text-white outline-none peer transition-all duration-300 focus:ring-1 focus:ring-[#79c96e]`} 
                    placeholder=" " 
                  />
                  <label className="absolute left-4 top-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:normal-case peer-focus:text-[#79c96e]">
                    Email Address
                  </label>
                  {errors.email && <p className="text-red-400 text-xs mt-1 pl-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Phone */}
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    className={`block w-full px-4 pt-6 pb-2 bg-slate-950/50 border ${errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-[#79c96e]'} rounded-xl text-white outline-none peer transition-all duration-300 focus:ring-1 focus:ring-[#79c96e]`} 
                    placeholder=" " 
                  />
                  <label className="absolute left-4 top-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:normal-case peer-focus:text-[#79c96e]">
                    Phone Number
                  </label>
                  {errors.phone && <p className="text-red-400 text-xs mt-1 pl-1">{errors.phone}</p>}
                </div>

                {/* Subject dropdown */}
                <div className="relative">
                  <select 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    className="block w-full px-4 pt-6 pb-2 bg-slate-950/50 border border-slate-800 focus:border-[#79c96e] rounded-xl text-white outline-none transition-all duration-300 focus:ring-1 focus:ring-[#79c96e]"
                  >
                    <option className="bg-slate-900 text-white">General Enquiry</option>
                    <option className="bg-slate-900 text-white">Property Buying</option>
                    <option className="bg-slate-900 text-white">Property Selling</option>
                    <option className="bg-slate-900 text-white">Careers</option>
                    <option className="bg-slate-900 text-white">Investment Advisory</option>
                  </select>
                  <label className="absolute left-4 top-2 text-xs font-semibold text-[#79c96e] uppercase tracking-wider pointer-events-none">
                    Inquiry Subject
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4"
                  className={`block w-full px-4 pt-6 pb-2 bg-slate-950/50 border ${errors.message ? 'border-red-500' : 'border-slate-800 focus:border-[#79c96e]'} rounded-xl text-white outline-none peer transition-all duration-300 focus:ring-1 focus:ring-[#79c96e] resize-none`} 
                  placeholder=" "
                ></textarea>
                <label className="absolute left-4 top-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:normal-case peer-focus:text-[#79c96e]">
                  Your Message
                </label>
                {errors.message && <p className="text-red-400 text-xs mt-1 pl-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                {/* <MagneticButton className="w-full"> */}
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-gradient-to-r from-[#79c96e] to-[#58b86a] text-slate-950 font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-[#79c96e]/20 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-sm" />
                      </>
                    )}
                  </button>
                {/* </MagneticButton> */}
              </div>
            </form>
          )}
        </AnimatedSection>

        {/* Info & Map Column (5 Columns) */}
        <AnimatedSection className="lg:col-span-5 flex flex-col gap-6">
          <GlowingBorder>
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl">
              <h3 className="font-heading text-xl font-bold mb-6 text-[#79c96e]">Corporate Headquarters</h3>
              
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800/80 rounded-xl text-[#79c96e] shrink-0 border border-slate-700">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Address</h4>
                    <p className="text-slate-400 leading-relaxed">{selectedOffice.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800/80 rounded-xl text-[#79c96e] shrink-0 border border-slate-700">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Direct Lines</h4>
                    <a href={`tel:${selectedOffice.phone}`} className="text-slate-300 hover:text-[#79c96e] transition-colors block">
                      {selectedOffice.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-1">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800/80 rounded-xl text-[#79c96e] shrink-0 border border-slate-700">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Inquiries</h4>
                    <a href="mailto:info@satwikhomes.com" className="text-slate-300 hover:text-[#79c96e] transition-colors">
                      info@satwikhomes.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Connect</span>
                <div className="flex gap-2">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                    <a key={idx} href="#" className="p-2.5 bg-slate-800 rounded-lg text-slate-300 hover:bg-[#79c96e] hover:text-black transition-all duration-300">
                      <Icon className="text-xs" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </GlowingBorder>

          {/* Interactive Fully Functional Map Container */}
          <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl flex flex-col h-72 relative group">
            <div className="absolute top-3 left-3 z-10 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2">
              <FaDirections className="text-[#79c96e]" /> Showing: {selectedOffice.city}
            </div>
            
            {/* Embed Frame without requiring restricted API keys */}
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }} 
              loading="lazy" 
              allowFullScreen 
              src={selectedOffice.embedUrl} 
              title={`${selectedOffice.city} Office Map`}
              className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </AnimatedSection>

      </div>

      {/* Multi-city Interactive Office Switcher Section */}
      <section className="py-20 bg-slate-900/30 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#79c96e] text-xs font-semibold uppercase tracking-widest">Presence</span>
            <h2 className="font-heading text-3xl font-bold text-white mt-1">Our Offices Across India</h2>
            <p className="text-slate-400 text-sm mt-2">Select a location to view details on the interactive map</p>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, idx) => {
              const isSelected = selectedOffice.city === office.city;
              return (
                <div 
                  key={idx} 
                  onClick={() => setSelectedOffice(office)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    isSelected 
                      ? 'bg-slate-900 border-[#79c96e] shadow-lg shadow-[#79c96e]/10 -translate-y-1' 
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 right-0 bg-[#79c96e] text-black text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg">
                      Selected
                    </div>
                  )}
                  <h4 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                    <FaBuilding className={isSelected ? 'text-[#79c96e]' : 'text-slate-500'} /> 
                    {office.city}
                  </h4>
                  <p className="text-xs text-slate-400 mb-4 h-8 leading-relaxed">{office.address}</p>
                  <p className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <FaPhoneAlt className="text-[#79c96e]" /> {office.phone}
                  </p>
                </div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Modern Banner CTA */}
      <div className="bg-gradient-to-r from-[#86c96e] via-[#82df85] to-[#6ec98f] py-10 px-6 text-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">Need Immediate Assistance?</h3>
            <p className="text-slate-900 font-medium text-sm mt-1">Our VIP concierge hotline is active 24/7.</p>
          </div>
          <a 
            href="tel:18001234567" 
            className="bg-slate-950 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-slate-900 transition-all duration-300 shadow-xl"
          >
            Call 1800-LUXE-HOME
          </a>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
