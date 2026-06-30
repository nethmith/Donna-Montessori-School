import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaPercent, FaCalendarDay, FaHeartbeat, FaArrowUp, FaBriefcase } from 'react-icons/fa';

const Careers = () => {
  const openings = [
    "School Leadership",
    "Lead Guide",
    "Assistant Guide",
    "Substitute Guide"
  ];

  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Careers | Donna Montessori</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0D8F85] mb-6 tracking-tight ">
          Join the team reinventing education<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto mb-10">
          We are looking for those who envision a better kind of education—one that empowers children to flourish in life.
        </p>

        {/* Quick Openings Navigation */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {openings.map((role, idx) => (
            <button
              key={idx}
              className="bg-[#0EA59A] hover:bg-[#0C948A] text-white px-6 py-3 rounded-full font-semibold shadow-sm transition-colors flex items-center gap-2"
            >
              <FaBriefcase className="text-sm" /> Current {role} Openings
            </button>
          ))}
        </div>
      </section>

      {/* Intro Image */}
      <section className="px-4 max-w-5xl mx-auto mb-24">
        <div className="w-full h-[50vh] md:h-[60vh] rounded-[60px] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" alt="Donna teachers collaborating" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Two Columns: Visionaries & Doers / Strivers & Climbers */}
      <section className="py-20 bg-slate-50 border-y border-gray-100 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-[#0D8F85] mb-6 ">join a team of visionaries and doers<span className="text-terracotta-500">.</span></h2>
            <div className="space-y-4 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                We’re looking for those who envision a better kind of education—a kind that empowers children to flourish in life, from birth, to their senior graduation, and beyond.
              </p>
              <p>
                But we don’t just hire dreamers; we hire people who can get it done. We’re looking for those who see surmounting challenges as part of their work—and who won’t let obstacles dim their passion.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0D8F85] mb-6 ">join a team of strivers and climbers<span className="text-terracotta-500">.</span></h2>
            <div className="space-y-4 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                We’re looking for those always ready for the next challenge—those perpetually eager to learn, grow, and hone their craft.
              </p>
              <p>
                It’s why we’ve created the largest, most rigorous, and most innovative Montessori teacher training center in the world—and why we provide it to our team 100% free. We invest in your growth so you can give your all to every child you educate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0D8F85] mb-4 ">career pathways<span className="text-terracotta-500">.</span></h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Whether you're a working professional, a parent, or a recent graduate, we'll help you forge a path of lifelong learning and achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Natalie",
              path: ["Assistant Guide", "Lead Guide", "Assistant Head of School"],
              color: "border-[#0EA59A]"
            },
            {
              name: "Shanel",
              path: ["Assistant Head of School", "Head of School", "Senior Head of School", "Regional Manager"],
              color: "border-terracotta-400"
            },
            {
              name: "Angelli",
              path: ["Assistant Guide", "Lead Guide", "Regional Programs Support"],
              color: "border-[#0D8F85]"
            }
          ].map((profile, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-[40px] border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-slate-200 rounded-full mb-6 overflow-hidden">
                  <div className="w-full h-full bg-[#0D8F85] text-white flex items-center justify-center text-xl font-bold">
                    {profile.name[0]}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">{profile.name}</h3>
                <div className="space-y-4">
                  {profile.path.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full border-2 ${profile.color}`}></div>
                      <span className="text-slate-600 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-slate-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D8F85] mb-4 ">benefits<span className="text-terracotta-500">.</span></h2>
            <p className="text-xl text-gray-500 font-light">We hire and reward for excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Certification */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#0EA59A]/10 text-[#0EA59A] rounded-2xl">
                  <FaGraduationCap className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Sponsored Certification & Learning</h3>
                  <p className="text-sm text-slate-400">With Prepared Montessorian Institute (PMI)</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-4">
                Fully sponsored Montessori teacher Certification ($5,000+ value) through the world’s largest and most innovative MACTE accredited Montessori training center: Prepared Montessorian Institute.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                The certification program is highly customizable—blending online, in-person, and on-the-ground experiences integrated into your workday.
              </p>
            </div>

            {/* Tuition Discount */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-terracotta-500/10 text-terracotta-500 rounded-2xl">
                  <FaPercent className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Tuition Discounts</h3>
              </div>
              <ul className="space-y-3 text-gray-600 font-light text-lg">
                <li>• 75% tuition discount for up to 2 children for teachers.</li>
                <li>• 100% tuition discount for up to 2 children for school administrators.</li>
              </ul>
            </div>

            {/* PTO */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#0D8F85]/10 text-[#0D8F85] rounded-2xl">
                  <FaCalendarDay className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Flexible PTO</h3>
              </div>
              <ul className="space-y-3 text-gray-600 font-light text-lg">
                <li>• 10 paid company holidays each year.</li>
                <li>• 4 work weeks of flexible PTO for Lead Early Childhood Teachers in their 1st year.</li>
              </ul>
            </div>

            {/* Medical */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#0EA59A]/10 text-[#0EA59A] rounded-2xl">
                  <FaHeartbeat className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Full Medical Package</h3>
              </div>
              <p className="text-gray-600 font-light text-lg">
                Full medical, vision, and dental benefits with options to enroll in HSA and tele-medicine.
              </p>
            </div>

            {/* Growth */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#0D8F85]/10 text-[#0D8F85] rounded-2xl">
                  <FaArrowUp className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Growth & Promotion</h3>
              </div>
              <p className="text-gray-600 font-light text-lg">
                Whether your dream is to run your own classroom, a campus, or a whole region of schools, there is a promotion, bonus, and career path that grows with you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA / Find openings */}
      <section className="py-24 bg-[#0D8F85] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            ready to start your journey<span className="text-yellow-300">?</span>
          </h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">
            Apply today and help us shape the future of global education.
          </p>
          <button className="bg-white text-[#0D8F85] hover:bg-slate-50 transition-colors px-12 py-4 rounded-full font-bold text-xl shadow-lg">
            Find All Current Openings
          </button>
        </div>
      </section>

    </div>
  );
};

export default Careers;
