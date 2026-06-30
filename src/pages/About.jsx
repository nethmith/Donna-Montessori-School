import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Our Mission & Values | Donna Montessori</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0D8F85] mb-6 tracking-tight">
          Why families choose Donna Montessori<span className="text-terracotta-500">.</span>
        </h1>
      </section>

      {/* Main Image */}
      <section className="px-4 max-w-5xl mx-auto mb-24">
        <div className="w-full h-[50vh] md:h-[60vh] rounded-[60px] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" alt="Donna community" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-4 max-w-4xl mx-auto pb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Mission */}
        <div>
          <h2 className="text-3xl font-bold text-[#0D8F85] mb-6">Our mission<span className="text-terracotta-500">.</span></h2>
          <p className="text-xl leading-relaxed text-gray-600 font-light">
            At Donna, our mission is simple: to give every child the opportunity to thrive in a high-quality Montessori environment. We do this with care, clarity, and respect—one school, one family, one child at a time.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-3xl font-bold text-[#0D8F85] mb-6">Our vision<span className="text-terracotta-500">.</span></h2>
          <p className="text-lg leading-relaxed text-gray-600 font-light mb-6">
            We believe education should honor the timeless wisdom of Montessori while preparing children for the world they are growing up in today. That means:
          </p>
          <ul className="space-y-3 text-gray-600 font-light text-lg">
            <li className="flex items-start">
              <span className="text-[#0EA59A] mr-3 font-bold">•</span>
              Classrooms where children feel confident, curious, and joyful.
            </li>
            <li className="flex items-start">
              <span className="text-[#0EA59A] mr-3 font-bold">•</span>
              A consistent, high-quality curriculum that helps children make real progress.
            </li>
            <li className="flex items-start">
              <span className="text-[#0EA59A] mr-3 font-bold">•</span>
              Welcoming school communities where families feel connected and supported.
            </li>
            <li className="flex items-start">
              <span className="text-[#0EA59A] mr-3 font-bold">•</span>
              Tools and ideas that make Montessori accessible to more children and families.
            </li>
          </ul>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-50 border-y border-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D8F85] mb-4">Our core values<span className="text-terracotta-500">.</span></h2>
            <p className="text-xl text-gray-500 font-light">
              At Donna, we believe children and families flourish when the right conditions are prepared.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "Be who you say you are",
                desc: "Trust is at the heart of every relationship. We model integrity by aligning our words and actions, even in challenging moments. Families can count on us to show up with consistency, care, and skill.",
                parents: "For parents, this means: you can trust that what we promise is what we deliver—reliable care, authentic Montessori, and educators who lead by example."
              },
              {
                title: "Hold the door",
                desc: "Belonging doesn’t just happen—it’s prepared with intention. From the way we greet your child in the morning to the small traditions that make a school feel like home, we focus on creating a warm, joyful space where everyone feels welcome.",
                parents: "For parents, this means: you and your child will always feel invited in, seen, and cared for."
              },
              {
                title: "Own your impact",
                desc: "Children watch and learn from how we show up each day. That’s why we take ownership of our actions, lead with purpose, and stay open to feedback and growth.",
                parents: "For parents, this means: your child’s teachers are thoughtful, prepared, and always looking for ways to make each experience meaningful and supportive of your child’s development."
              },
              {
                title: "Make it count",
                desc: "We focus on what matters most: the growth and well-being of each child. We combine careful observation with data and reflection to ensure children are thriving, and we continuously improve based on what we learn.",
                parents: "For parents, this means: your child’s progress is guided by both Montessori principles and a clear understanding of their individual journey."
              },
              {
                title: "The child at the center, always",
                desc: "Every decision we make comes back to one question: Does this help the child grow with confidence and joy? We honor each child’s individuality and trust in their natural drive to learn.",
                parents: "For parents, this means: your child is never just one of many. They are seen, respected, and supported to flourish on their own terms."
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{val.title}</h3>
                <p className="text-lg text-gray-600 font-light mb-6 leading-relaxed">{val.desc}</p>
                <div className="border-t border-slate-50 pt-4 text-[#0D8F85] font-medium text-lg">
                  {val.parents}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this means for your family */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0D8F85] mb-4">What this means for your family<span className="text-terracotta-500">.</span></h2>
          <p className="text-xl text-gray-500 font-light">
            When you choose Donna Montessori, you’re joining more than a school, you’re joining a community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Your child is respected as a capable, independent learner.",
              desc: "Our classrooms are carefully prepared environments where children take ownership of their learning, developing focus, self-discipline, and joy through meaningful work."
            },
            {
              title: "Your family is welcomed with warmth and hospitality.",
              desc: "We partner closely with parents, creating a sense of belonging that extends far beyond the classroom. Open communication, transparency, and genuine relationships are at the heart of our community."
            },
            {
              title: "Your child’s teachers are committed, prepared, and passionate.",
              desc: "Each Donna educator is trained in authentic Montessori practice, guided by a deep respect for the child and a belief in their unlimited potential. Their work reflects our core values of integrity, dedication, and compassion."
            },
            {
              title: "Every day is designed to spark curiosity, joy, and growth.",
              desc: "From the first smile at drop-off to the discoveries made during the day, every moment at Donna reflects our mission to help children build the skills and confidence to thrive — in school and in life."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-[40px] border border-gray-100 flex flex-col justify-between">
              <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-2xl font-serif italic text-slate-800">
          At the center of it all is your child. Always.
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#0EA59A] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight text-white">
            Find a school near you
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/schools" className="bg-white text-[#0EA59A] hover:bg-slate-50 transition-colors px-10 py-4 rounded-full font-bold text-lg shadow-md">
              Find Your School
            </Link>
            <Link to="/admissions" className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors px-10 py-4 rounded-full font-bold text-lg">
              Admissions Process
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
