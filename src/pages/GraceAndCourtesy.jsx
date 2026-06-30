import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GraceAndCourtesy = () => {
  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Grace & Courtesy Curriculum | Donna Montessori</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0D8F85] mb-6 tracking-tight ">
          Grace & courtesy at donna montessori<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto mb-10">
          Learning to navigate social situations with kindness, empathy, and respect.
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
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" alt="Children interacting" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Features Heading */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D8F85] tracking-tight">
          Features of donna montessori's grace & courtesy curriculum<span className="text-terracotta-500">:</span>
        </h2>
      </section>

      {/* Features List by Program */}
      <section className="px-4 max-w-4xl mx-auto pb-24 space-y-32">

        {/* Nido */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Nido social interactions" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Nido</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>For infants, social development begins with respectful, gentle interactions. Guides model grace by speaking softly, handling babies with care, and narrating their actions before initiating them.</p>
              <p>This atmosphere of deep respect teaches infants that their bodies are their own and that their community is a safe, trustworthy place, laying the foundation for future empathetic interactions.</p>
            </div>
          </div>
        </div>

        {/* Toddler */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" alt="Toddler social interactions" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Toddler</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>Toddlers are learning to navigate their first social group outside the home. We teach them simple social scripts: how to greet a friend, how to say "no thank you," and how to wait for a turn.</p>
              <p>By giving toddlers the explicit vocabulary to express their boundaries and desires, we help them build social confidence and minimize the frustrations of early peer interactions.</p>
            </div>
          </div>
        </div>

        {/* Children's House */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" alt="Children's House social interactions" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Children's House</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>In the Children's House, grace and courtesy lessons are taught through formal role-playing. Children practice how to welcome a guest, apologize sincerely, offer help, and resolve conflicts peacefully.</p>
              <p>These exercises create a harmonious, self-regulating classroom community where children take pride in their manners and demonstrate genuine empathy and respect for their peers.</p>
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
            By teaching children how to move gracefully and interact courteously, we empower them to build strong, respectful, and peaceful relationships with others.
          </p>
          <Link to="/admissions" className="inline-block bg-white text-[#0EA59A] hover:bg-slate-50 transition-colors px-12 py-4 rounded-full font-bold text-xl shadow-lg">
            Schedule a Tour
          </Link>
        </div>
      </section>

    </div>
  );
};

export default GraceAndCourtesy;
