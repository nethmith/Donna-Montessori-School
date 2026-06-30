import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MathPage = () => {
  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Math Curriculum | Donna Montessori</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0D8F85] mb-6 tracking-tight ">
          Math at donna montessori<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto mb-10">
          Moving from concrete understanding to abstract mastery.
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
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" alt="Child using math beads" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Features Heading */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D8F85] tracking-tight">
          Features of donna montessori's math curriculum<span className="text-terracotta-500">:</span>
        </h2>
      </section>

      {/* Features List by Program */}
      <section className="px-4 max-w-4xl mx-auto pb-24 space-y-32">

        {/* Nido */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Nido math foundation" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Nido</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>In the Nido environment, the foundation for mathematical thinking begins not with numbers, but with order and sequence. The carefully organized environment helps infants build a sense of predictability and logic.</p>
              <p>Through grasping objects, observing cause and effect, and recognizing spatial relationships, the youngest children begin developing the neural pathways required for later mathematical reasoning.</p>
            </div>
          </div>
        </div>

        {/* Toddler */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" alt="Toddler math exploration" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Toddler</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>Toddlers are introduced to math indirectly through sorting, matching, and grading activities. They learn to differentiate sizes, shapes, and quantities through practical life and sensorial materials.</p>
              <p>They naturally begin counting objects in their environment—like pieces of snack or steps to the playground—laying a concrete, experiential foundation for recognizing numbers and quantities.</p>
            </div>
          </div>
        </div>

        {/* Children's House */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" alt="Children's House math materials" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold text-[#0D8F85] mb-4 ">Children's House</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
              <p>In the Children's House, math becomes a hands-on exploration. Children don't memorize abstract symbols first; they physically hold quantities. They carry a "thousand cube" and compare its weight to a single unit bead.</p>
              <p>With materials like the Golden Beads and Spindle Boxes, children joyfully master addition, subtraction, multiplication, and division by physically manipulating quantities, resulting in a deep, conceptual understanding of math that traditional methods rarely achieve.</p>
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
            By providing concrete, tactile experiences, we demystify mathematics, turning it into a subject of joyful discovery and profound mastery.
          </p>
          <Link to="/admissions" className="inline-block bg-white text-[#0EA59A] hover:bg-slate-50 transition-colors px-12 py-4 rounded-full font-bold text-xl shadow-lg">
            Schedule a Tour
          </Link>
        </div>
      </section>

    </div>
  );
};

export default MathPage;
