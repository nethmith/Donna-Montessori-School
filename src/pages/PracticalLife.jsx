import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PracticalLife = () => {
  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Practical Life Curriculum | Donna Montessori</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0D8F85] mb-6 tracking-tight ">
          Practical life at donna montessori<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto mb-10">
          Building independence, concentration, coordination, and a sense of order.
        </p>
        <div className="mb-12">
          <Link to="/schools" className="inline-block border-2 border-[#0D8F85] text-[#0D8F85] px-10 py-3 rounded-full font-medium hover:bg-[#0D8F85] hover:text-white transition-colors">
            Find a school near me
          </Link>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-4 max-w-5xl mx-auto mb-24">
        <div className="w-full h-[50vh] md:h-[60vh] rounded-[60px] overflow-hidden shadow-2xl relative">
          <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Child pouring water" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Features Heading */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D8F85] tracking-tight">
          features of donna montessori's practical life curriculum<span className="text-terracotta-500">:</span>
        </h2>
      </section>

      {/* Features List by Program */}
      <section className="px-4 max-w-4xl mx-auto pb-24 space-y-32">

        {/* Nido */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Nido practical life" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Nido</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>For infants, practical life begins with basic self-care and physical independence. We support babies as they learn to feed themselves, hold a cup, and participate in dressing.</p>
              <p>Simple, purposeful tasks—like returning a toy to a low shelf or wiping a spill with a small cloth—foster a sense of agency and confidence in their own physical abilities.</p>
            </div>
          </div>
        </div>

        {/* Toddler */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" alt="Toddler practical life" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Toddler</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>Toddlers have an intense drive to do things themselves. We harness this by introducing real, manageable tasks: washing tables, slicing soft fruit, pouring water, and buttoning clothes.</p>
              <p>These exercises develop gross and fine motor coordination, hand-eye control, and concentration, while building a deep pride in being able to contribute to their environment.</p>
            </div>
          </div>
        </div>

        {/* Children's House */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" alt="Children's House practical life" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Children's House</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>In the Children's House, practical life activities expand in complexity. Children engage in sophisticated tasks like polishing wood or metal, weaving, sewing, and preparing full recipes.</p>
              <p>These multi-step sequences require high levels of concentration, memory, and executive function. The physical control and left-to-right sequencing developed here directly prepare the child for writing and reading.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Capable Section */}
      <section className="py-24 bg-[#0EA59A] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            At Donna Montessori, we believe every child is tremendously capable<span className="text-yellow-300">.</span>
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            By giving children the freedom and tools to care for themselves and their environment, we cultivate a lifelong foundation of self-reliance and self-worth.
          </p>
          <Link to="/admissions" className="inline-block bg-white text-[#0EA59A] hover:bg-slate-50 transition-colors px-12 py-4 rounded-full font-bold text-xl shadow-lg">
            Schedule a Tour
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PracticalLife;
