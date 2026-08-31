import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalculator, FaShoePrints, FaTasks, FaChartLine, FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import CountUpNumber from '../components/CountUpNumber';
import StaggerChildren from '../components/StaggerChildren';

const BuyersGuidePage = () => {
  const [activeTab, setActiveTab] = useState('emi');

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);
  
  const [emiResults, setEmiResults] = useState({ emi: 0, totalInterest: 0, totalPayment: 0, principalRatio: 0 });

  useEffect(() => {
    // Formula: M = P × r × (1+r)^n / ((1+r)^n - 1)
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;
    
    if (r === 0) {
      const emi = P / n;
      setEmiResults({ emi, totalInterest: 0, totalPayment: P, principalRatio: 100 });
    } else {
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - P;
      const principalRatio = (P / totalPayment) * 100;
      
      setEmiResults({
        emi: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalPayment: Math.round(totalPayment),
        principalRatio
      });
    }
  }, [loanAmount, interestRate, tenureYears]);

  // Checklist State
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Determine budget and get loan pre-approval', done: false },
    { id: 2, text: 'Identify preferred locations and neighborhoods', done: false },
    { id: 3, text: 'Research builders and read reviews', done: false },
    { id: 4, text: 'Shortlist properties and schedule site visits', done: false },
    { id: 5, text: 'Verify RERA registration and legal documents', done: false },
    { id: 6, text: 'Check amenities and future infrastructure plans', done: false },
    { id: 7, text: 'Negotiate price and payment plans', done: false },
    { id: 8, text: 'Pay booking amount and sign agreement', done: false },
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };
  const checkProgress = Math.round((checklist.filter(i => i.done).length / checklist.length) * 100);

  const tabs = [
    { id: 'emi', label: 'EMI Calculator', icon: <FaCalculator /> },
    { id: 'steps', label: 'First Steps', icon: <FaShoePrints /> },
    { id: 'checklist', label: 'Checklist', icon: <FaTasks /> },
    { id: 'trends', label: 'Current Trends', icon: <FaChartLine /> },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] font-body text-[#1a1a2e]">
      
      {/* Hero */}
      <div className="bg-[#1a1a2e] text-white py-16 text-center mt-10">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Buyer's Guide</h1>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">Everything you need to know about buying your dream home, simplified.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 border-b-2 border-gray-200 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-4 py-3 font-bold text-sm md:text-base transition-colors ${activeTab === tab.id ? 'text-[#79c96e]' : 'text-gray-500 hover:text-[#1a1a2e]'}`}
            >
              {tab.icon} {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="underline" className="absolute left-0 bottom-[-2px] w-full h-[3px] bg-[#79c96e]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* EMI Calculator */}
            {activeTab === 'emi' && (
              <motion.div key="emi" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration: 0.3}}>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="w-full lg:w-1/2 space-y-8">
                    <h3 className="font-heading text-2xl font-bold mb-6">Calculate Your Home Loan EMI</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="font-bold text-gray-700">Loan Amount</label>
                          <span className="font-bold text-[#79c96e]">₹{(loanAmount/100000).toFixed(1)} Lakhs</span>
                        </div>
                        <input type="range" min="1000000" max="50000000" step="500000" value={loanAmount} onChange={(e)=>setLoanAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#79c96e]" />
                        <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹10L</span><span>₹5Cr</span></div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="font-bold text-gray-700">Interest Rate</label>
                          <span className="font-bold text-[#79c96e]">{interestRate}%</span>
                        </div>
                        <input type="range" min="6" max="15" step="0.1" value={interestRate} onChange={(e)=>setInterestRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#79c96e]" />
                        <div className="flex justify-between text-xs text-gray-400 mt-1"><span>6%</span><span>15%</span></div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="font-bold text-gray-700">Loan Tenure</label>
                          <span className="font-bold text-[#79c96e]">{tenureYears} Years</span>
                        </div>
                        <input type="range" min="5" max="30" step="1" value={tenureYears} onChange={(e)=>setTenureYears(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#79c96e]" />
                        <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5 Yr</span><span>30 Yr</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 bg-[#1a1a2e] p-8 rounded-xl text-white flex flex-col items-center justify-center">
                    <div className="text-center mb-8">
                      <p className="text-gray-400 mb-2">Monthly EMI</p>
                      <h2 className="text-4xl md:text-5xl font-bold text-[#79c96e]">₹<CountUpNumber end={emiResults.emi} /></h2>
                    </div>

                    <div className="relative w-48 h-48 mb-8">
                      <svg viewBox="0 0 36 36" className="w-full h-full circular-chart">
                        <path className="text-gray-700 stroke-current" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path className="text-[#79c96e] stroke-current" strokeWidth="3" strokeDasharray={`${emiResults.principalRatio}, 100`} fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-sm text-gray-300">Principal</span>
                        <span className="font-bold text-[#79c96e]">{emiResults.principalRatio.toFixed(0)}%</span>
                      </div>
                    </div>

                    <div className="w-full space-y-4 text-sm">
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#79c96e] rounded-full"></span> Principal Amount</span>
                        <span className="font-bold">₹{(loanAmount).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="flex items-center gap-2"><span className="w-3 h-3 bg-gray-700 rounded-full"></span> Total Interest</span>
                        <span className="font-bold">₹{(emiResults.totalInterest).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Payment</span>
                        <span className="font-bold">₹{(emiResults.totalPayment).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {/* First Steps */}
            {activeTab === 'steps' && (
              <motion.div key="steps" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration: 0.3}}>
                <div className="text-center mb-10">
                  <h3 className="font-heading text-3xl font-bold mb-4">6 Steps to Homeownership</h3>
                </div>
                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { num: '01', title: 'Financial Assessment', desc: 'Evaluate savings, calculate EMI capacity, and get a loan pre-approval.' },
                    { num: '02', title: 'Location Scouting', desc: 'Analyze connectivity, infrastructure, and future appreciation potential.' },
                    { num: '03', title: 'Builder Background Check', desc: 'Verify track record, financial stability, and past project quality.' },
                    { num: '04', title: 'Legal Due Diligence', desc: 'Ensure title clears, RERA registration, and approved building plans.' },
                    { num: '05', title: 'Negotiation', desc: 'Discuss final price, payment schedules, and any customized modifications.' },
                    { num: '06', title: 'Registration', desc: 'Sign the Sale Deed, pay stamp duty, and complete property registration.' },
                  ].map((step, i) => (
                    <div key={i} className="bg-[#f5f5f5] p-6 rounded-xl relative overflow-hidden group hover:bg-[#1a1a2e] hover:text-white transition-colors duration-300">
                      <span className="absolute -right-4 -top-6 text-8xl font-black text-gray-200 group-hover:text-white/10 transition-colors z-0">{step.num}</span>
                      <div className="relative z-10">
                        <h4 className="text-xl font-bold mb-3 text-[#79c96e]">{step.title}</h4>
                        <p className="text-gray-600 group-hover:text-gray-300 transition-colors">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </StaggerChildren>
              </motion.div>
            )}

            {/* Checklist */}
            {activeTab === 'checklist' && (
              <motion.div key="checklist" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration: 0.3}}>
                <div className="max-w-3xl mx-auto">
                  <h3 className="font-heading text-2xl font-bold mb-6 text-center">Your Buying Checklist</h3>
                  
                  <div className="mb-8">
                    <div className="flex justify-between text-sm font-bold mb-2 text-gray-600">
                      <span>Progress</span>
                      <span>{checkProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-[#79c96e] h-3 rounded-full transition-all duration-500" style={{ width: `${checkProgress}%` }}></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {checklist.map(item => (
                      <div 
                        key={item.id} 
                        onClick={() => toggleCheck(item.id)}
                        className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all ${item.done ? 'bg-green-50 border-green-200' : 'hover:border-[#79c96e] border-gray-200'}`}
                      >
                        {item.done ? <FaCheckSquare className="text-2xl text-green-500 flex-shrink-0" /> : <FaRegSquare className="text-2xl text-gray-400 flex-shrink-0" />}
                        <span className={`text-lg transition-all ${item.done ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Trends */}
            {activeTab === 'trends' && (
              <motion.div key="trends" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration: 0.3}}>
                <h3 className="font-heading text-2xl font-bold mb-8 text-center">Real Estate Market Trends</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600', tag: 'Market Insight', title: 'Why Luxury Villas are High in Demand in 2024', desc: 'Post-pandemic preferences have shifted towards spacious homes with private amenities.' },
                    { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600', tag: 'Investment', title: 'Emerging Tech Corridors: Where to Invest Next', desc: 'A look at suburban areas experiencing rapid infrastructure growth and IT parks.' },
                    { img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600', tag: 'Sustainability', title: 'Green Buildings: The Future of Urban Living', desc: 'How IGBC certified homes save money and promote healthier lifestyles.' },
                    { img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600', tag: 'Finance', title: 'Repo Rate Changes & Impact on Home Loans', desc: 'Expert analysis on the recent RBI announcements and what it means for buyers.' },
                  ].map((blog, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-4 group cursor-pointer">
                      <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden rounded-lg">
                        <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="sm:w-3/5 py-2">
                        <span className="text-xs font-bold text-[#79c96e] uppercase tracking-wider">{blog.tag}</span>
                        <h4 className="font-heading font-bold text-xl mt-2 mb-3 group-hover:text-[#79c96e] transition-colors">{blog.title}</h4>
                        <p className="text-gray-600 text-sm line-clamp-3">{blog.desc}</p>
                        <span className="inline-block mt-4 text-sm font-bold border-b border-gray-900 group-hover:border-[#79c96e] group-hover:text-[#79c96e]">Read Full Article</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BuyersGuidePage;
