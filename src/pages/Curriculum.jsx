import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Curriculum = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();
  
  const getTitle = () => {
    switch(path) {
      case 'literacy': return 'Literacy';
      case 'mathematics': return 'Mathematics';
      case 'practical-life': return 'Practical Life';
      case 'sensorial': return 'Sensorial';
      case 'grace-and-courtesy': return 'Grace & Courtesy';
      default: return 'Curriculum Overview';
    }
  };

  return (
    <div className="bg-cream-50 min-h-screen pt-12 pb-24 px-4 text-slate-700 font-sans">
      <Helmet>
        <title>{getTitle()} | Donna</title>
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0D8F85] mb-8 text-center ">{getTitle()}<span className="text-terracotta-500">.</span></h1>
        
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
           {path === 'curriculum' ? (
             <p className="text-xl leading-relaxed text-gray-500">
               Our curriculum is carefully structured to guide children through sequential learning experiences in all key developmental areas.
             </p>
           ) : (
             <p className="text-xl leading-relaxed text-gray-500">
               Welcome to the {getTitle()} curriculum page. In the Montessori environment, this area focuses on developing specific, foundational skills through hands-on materials and guided discovery.
             </p>
           )}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
