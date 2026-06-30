import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Sensorial = () => {
  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Sensorial Curriculum | Donna Montessori</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0D8F85] mb-6 tracking-tight ">
          Sensorial at donna montessori<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto mb-10">
          Refining the senses to classify, order, and understand the physical world.
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
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" alt="Child with pink tower" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Features Heading */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D8F85] tracking-tight">
          Features of donna montessori's sensorial curriculum<span className="text-terracotta-500">:</span>
        </h2>
      </section>

      {/* Features List by Program */}
      <section className="px-4 max-w-4xl mx-auto pb-24 space-y-32">

        {/* Nido */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Nido sensory exploration" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Nido</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>Infants explore the world almost entirely through their senses. We provide a prepared environment rich in sensory experiences: textured fabrics, wooden grasping toys, and simple musical instruments.</p>
              <p>By offering safe, uncluttered spaces and objects with varying weights, sounds, and temperatures, we help babies refine their early tactile, auditory, and visual perceptions.</p>
            </div>
          </div>
        </div>

        {/* Toddler */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" alt="Toddler sensory exploration" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Toddler</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>Toddlers actively organize their sensory impressions. They engage with materials designed to isolate single properties, such as sorting objects by color, matching simple shapes, or ordering sizes.</p>
              <p>These activities satisfy the toddler's natural developmental need for order, helping them classify their experiences and build vocabulary related to physical dimensions.</p>
            </div>
          </div>
        </div>

        {/* Children's House */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" alt="Children's House sensorial materials" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Children's House</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>In the Children's House, the sensorial curriculum becomes highly sophisticated. Children work with iconic Montessori materials like the Pink Tower, Red Rods, and Color Tablets.</p>
              <p>These materials isolate specific qualities (dimension, color, pitch, texture) and include a built-in "control of error," allowing children to independently correct their own work, refining their discrimination and preparing them for geometry and mathematical concepts.</p>
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
            By refining their sensory capabilities, we give children the keys to explore, classify, and appreciate the immense beauty of the physical universe.
          </p>
          <Link to="/admissions" className="inline-block bg-white text-[#0EA59A] hover:bg-slate-50 transition-colors px-12 py-4 rounded-full font-bold text-xl shadow-lg">
            Schedule a Tour
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Sensorial;
