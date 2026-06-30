import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Program = ({ title, ageRange, mainImage, introText, features }) => {
  // Use default data if props aren't provided
  const programTitle = title || "nido";
  const programAge = ageRange || "For children ages 6 weeks to 16 months (ages vary by campus)";
  const imgUrl = mainImage || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80";
  const intro = introText || [
    `A Donna ${programTitle.toLowerCase()}, or "nest" in Italian, is designed to provide a safe, comforting, and predictable environment for infants. This environment serves as a secure home base from which babies can confidently begin exploring and learning about everything around them.`,
    "As babies learn and grow rapidly, Donna's specialized materials and methods empower them to achieve each new milestone at their own pace and with maximum self-confidence."
  ];
  
  const programFeatures = features || [
    {
      img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80",
      title: "Building trust in a nurturing environment.",
      desc: [
        "Nido Guides (teachers) bond with every child one-on-one. They establish predictable routines, while starting from each child's own unique schedule for feeding, sleeping, and diapering—making the transition between home and Donna as smooth and seamless as possible.",
        "Routines and respect encourage the child to recognize and understand their own body's signals, to anticipate cause and effect, and to trust that their caregiver sees them, loves them, and will always meet their needs."
      ]
    },
    {
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80",
      title: "Freedom to develop strength, coordination, and dexterity.",
      desc: [
        "Babies have a profound developmental need to move—to wiggle, stretch, roll, and reach! At Donna, we don't confine babies using things like playpens, highchairs, or walkers. In addition to causing frustration and encouraging dangerous escape attempts, baby-containers limit a child's opportunity to strengthen and coordinate their body.",
        "In a Donna Nido, we support a child's natural development with ample safe space to move, and beautiful environments that entice them to explore."
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>{programTitle} | Donna Montessori</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-6xl md:text-8xl font-bold text-[#0D8F85] mb-4 tracking-tight ">
          {programTitle}<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
          {programAge}
        </p>
        
        <div className="mb-6">
          <Link to="/schools" className="text-gray-400 font-medium hover:text-[#0D8F85] transition-colors">
            Find a school near me
          </Link>
        </div>
        
        <div className="mb-12">
          <Link to="/admissions" className="inline-block border-2 border-[#0D8F85] text-[#0D8F85] px-10 py-3 rounded-full font-medium hover:bg-[#0D8F85] hover:text-white transition-colors">
            Admissions
          </Link>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-4 max-w-5xl mx-auto mb-16">
        <div className="w-full h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={imgUrl} 
            alt={programTitle} 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Intro Text */}
      <section className="px-4 max-w-3xl mx-auto mb-24 text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
        {intro.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </section>

      {/* Features Heading */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D8F85] tracking-tight">
          features of donna's {programTitle} program<span className="text-terracotta-500">:</span>
        </h2>
      </section>

      {/* Features List */}
      <section className="px-4 max-w-3xl mx-auto pb-24 space-y-24">
        {programFeatures.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden mb-10 shadow-lg shrink-0">
              <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-left w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">{feature.title}</h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                {feature.desc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Program;
