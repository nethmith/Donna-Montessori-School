import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Toddler = () => {
  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Toddler | Donna Montessori</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-6xl md:text-8xl font-bold text-[#0D8F85] mb-4 tracking-tight ">
          Toddler<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
          For children ages 16 months to 3 years
        </p>

        <div className="mb-6">
          <Link to="/schools" className="text-gray-400 font-medium hover:text-[#0D8F85] transition-colors border-b-2 border-transparent hover:border-[#0D8F85] pb-1">
            Find a school near me
          </Link>
        </div>

        <div className="mb-12">
          <Link to="/admissions" className="inline-block border-2 border-[#0D8F85] text-[#0D8F85] px-10 py-3 rounded-full font-medium hover:bg-[#0D8F85] hover:text-white transition-colors">
            Admissions
          </Link>
        </div>
      </section>

      {/* Main Video/Image */}
      <section className="px-4 max-w-5xl mx-auto mb-16 relative">
        <div className="w-full h-[50vh] md:h-[60vh] rounded-[60px] overflow-hidden shadow-2xl relative">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" alt="Toddler exploring" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Intro Text */}
      <section className="px-4 max-w-3xl mx-auto mb-24 text-lg md:text-xl text-gray-700 leading-relaxed space-y-6 font-light">
        <p>
          The Donna Toddler Community is a rich, dynamic environment designed to meet the incredible developmental growth that occurs between 16 months and 3 years.
        </p>
        <p>
          During this time, children are filled with energy and an intense desire to "do it myself." Our program channels that energy into meaningful, hands-on activities that build language, coordination, and independence.
        </p>
      </section>

      {/* Features Heading */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D8F85] tracking-tight">
          Features of donna's toddler program<span className="text-terracotta-500">:</span>
        </h2>
      </section>

      {/* Features List */}
      <section className="px-4 max-w-3xl mx-auto pb-24 space-y-32">

        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden mb-10 shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Practical Life" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0D8F85] mb-6">Practical Life: Independence in action.</h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>Toddlers love to imitate adults. We harness this drive by offering real, purposeful work. Children learn to dress themselves, prepare snacks, sweep the floor, and care for plants.</p>
              <p>These activities aren't just chores; they build profound concentration, fine motor skills, and an incredible sense of self-worth when a child realizes they are a contributing member of their community.</p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden mb-10 shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" alt="Language Development" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0D8F85] mb-6">An explosion of language.</h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>The toddler years are a critical period for language acquisition. Our environment is filled with rich vocabulary, storytelling, singing, and precise naming of objects.</p>
              <p>Guides speak clearly and respectfully to the children, giving them the words they need to express their feelings and needs, which dramatically reduces toddler frustrations and tantrums.</p>
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
            By giving toddlers real tools, real responsibilities, and the freedom to choose, we help them develop a powerful foundation of confidence that lasts a lifetime.
          </p>
          <Link to="/admissions" className="inline-block bg-white text-[#0EA59A] hover:bg-slate-50 transition-colors px-12 py-4 rounded-full font-bold text-xl shadow-lg">
            Schedule a Tour
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Toddler;
