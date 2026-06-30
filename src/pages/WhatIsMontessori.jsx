import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const WhatIsMontessori = () => {
  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>What Is Montessori? | Donna</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0D8F85] mb-6 tracking-tight ">
          What is montessori<span className="text-terracotta-500">?</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto">
          An education approach that nurtures a child's intrinsic desire to learn.
        </p>
      </section>

      <section className="px-4 max-w-5xl mx-auto mb-16">
        <div className="w-full h-[50vh] md:h-[60vh] rounded-[60px] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" alt="Montessori learning" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Content */}
      <section className="px-4 max-w-3xl mx-auto pb-24 space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-[#0D8F85] mb-6 ">the method<span className="text-terracotta-500">.</span></h2>
          <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
            <p>
              Developed by Dr. Maria Montessori over a century ago, Montessori is a scientifically based education approach that emphasizes independence, freedom within limits, and respect for a child's natural psychological, physical, and social development.
            </p>
            <p>
              It relies on carefully prepared environments where children can choose their own work and learn at their own pace, guided by trained educators who observe and support each child's unique developmental path.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold text-slate-700 mb-4">Child-Led Learning</h3>
            <p className="text-gray-600 font-light">Children learn best when they are interested. In a Montessori classroom, children choose their own activities from a carefully curated range of options, fostering deep concentration and a love of learning.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold text-slate-700 mb-4">The Prepared Environment</h3>
            <p className="text-gray-600 font-light">Classrooms are designed specifically for the child's size and abilities. Everything is accessible, beautiful, and purposeful, encouraging independence and order.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhatIsMontessori;
