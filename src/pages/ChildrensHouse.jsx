import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ChildrensHouse = () => {
  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Children's House | Donna Montessori</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-6xl md:text-8xl font-bold text-[#0D8F85] mb-4 tracking-tight ">
          Children's house<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
          For children ages 3 to 6 years
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
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" alt="Children's House classroom" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Intro Text */}
      <section className="px-4 max-w-3xl mx-auto mb-24 text-lg md:text-xl text-gray-700 leading-relaxed space-y-6 font-light">
        <p>
          The Children's House is the traditional Montessori environment for preschool and kindergarten. It is a vibrant, mixed-age community where children ages 3 to 6 learn side-by-side.
        </p>
        <p>
          Here, learning isn't a spectator sport. Children actively engage with beautiful, scientifically designed materials that allow them to explore math, language, science, and geography with their own hands.
        </p>
      </section>

      {/* Features Heading */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D8F85] tracking-tight">
          Features of donna's children's house<span className="text-terracotta-500">:</span>
        </h2>
      </section>

      {/* Features List */}
      <section className="px-4 max-w-3xl mx-auto pb-24 space-y-32">

        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden mb-10 shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" alt="Mixed age classroom" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0D8F85] mb-6">The magic of the mixed-age classroom.</h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>In a mixed-age setting, younger children are inspired by observing the advanced work of the older children. When they are ready, they eagerly approach those same materials.</p>
              <p>Older children reinforce their own knowledge by serving as leaders and mentors to the younger ones, building immense confidence and empathy that serves them for a lifetime.</p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden mb-10 shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" alt="Academic exploration" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0D8F85] mb-6">Deep academic exploration through materials.</h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>Instead of memorizing abstract concepts from a chalkboard, a Donna child physically holds a "thousand cube" in math, or traces sandpaper letters in language.</p>
              <p>This hands-on approach transforms complex academic concepts into concrete, understandable realities, allowing children to joyfully achieve academic milestones well beyond traditional expectations.</p>
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
            By trusting the child and providing a carefully prepared environment, we witness them blossom into focused, curious, and deeply capable young individuals.
          </p>
          <Link to="/admissions" className="inline-block bg-white text-[#0EA59A] hover:bg-slate-50 transition-colors px-12 py-4 rounded-full font-bold text-xl shadow-lg">
            Schedule a Tour
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ChildrensHouse;
