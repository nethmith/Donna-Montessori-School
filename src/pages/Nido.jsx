import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Nido = () => {
  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Nido | Donna Montessori</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-6xl md:text-8xl font-bold text-[#0D8F85] mb-4 tracking-tight ">
          Nido<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
          For children ages 6 weeks to 16 months (ages vary by campus)
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
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-toddler-learning-to-walk-with-mother-4395-large.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Intro Text */}
      <section className="px-4 max-w-3xl mx-auto mb-24 text-lg md:text-xl text-gray-700 leading-relaxed space-y-6 font-light">
        <p>
          A Donna nido, or "nest" in Italian, is designed to provide a safe, comforting, and predictable environment for infants. This environment serves as a secure home base from which babies can confidently begin exploring and learning about everything around them.
        </p>
        <p>
          As babies learn and grow rapidly, Donna's specialized materials and methods empower them to achieve each new milestone at their own pace and with maximum self-confidence.
        </p>
      </section>

      {/* Features Heading */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D8F85] tracking-tight">
          Features of donna's nido program<span className="text-terracotta-500">:</span>
        </h2>
      </section>

      {/* Features List */}
      <section className="px-4 max-w-3xl mx-auto pb-24 space-y-32">

        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden mb-10 shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Nurturing environment" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0D8F85] mb-6">Building trust in a nurturing environment.</h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>Nido Guides (teachers) bond with every child one-on-one. They establish predictable routines, while starting from each child's own unique schedule for feeding, sleeping, and diapering—making the transition between home and Donna as smooth and seamless as possible.</p>
              <p>Routines and respect encourage the child to recognize and understand their own body's signals, to anticipate cause and effect, and to trust that their caregiver sees them, loves them, and will always meet their needs.</p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden mb-10 shadow-lg shrink-0 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" alt="Developing strength" className="w-full h-full object-cover" />
          </div>
          <div className="text-left w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0D8F85] mb-6">Freedom to develop strength, coordination, and dexterity.</h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>Babies have a profound developmental need to move—to wiggle, stretch, roll, and reach! At Donna, we don't confine babies using things like playpens, highchairs, or walkers. In addition to causing frustration and encouraging dangerous escape attempts, baby-containers limit a child's opportunity to strengthen and coordinate their body.</p>
              <p>In a Donna Nido, we support a child's natural development with ample safe space to move, and beautiful environments that entice them to explore.</p>
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
            From the very beginning, your child is respected as an individual. We help them build the foundation they need to live a joyful, independent, and fulfilling life.
          </p>
          <Link to="/admissions" className="inline-block bg-white text-[#0EA59A] hover:bg-slate-50 transition-colors px-12 py-4 rounded-full font-bold text-xl shadow-lg">
            Schedule a Tour
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Nido;
