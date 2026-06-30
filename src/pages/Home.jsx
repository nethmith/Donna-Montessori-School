import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Home = () => {
  const [videoIndex, setVideoIndex] = React.useState(0);

  const videos = [
    "https://guidepostmontessori.com/wp-content/uploads/2025/09/01-a-global-network.mp4",
    "https://guidepostmontessori.com/wp-content/uploads/2025/09/02-family-first.mp4",
    "https://guidepostmontessori.com/wp-content/uploads/2025/09/03-high-fidelity.mp4"
  ];

  return (
    <>
      <Helmet>
        <title>Donna Montessori | Authentic Montessori Education</title>
        <meta name="description" content="Welcome to Donna Montessori. We provide an authentic Montessori education for children from infancy through middle school." />
      </Helmet>

      {/* Promotional Banner */}
      <div className="bg-terracotta-500 text-white text-center py-2 text-sm font-medium">
        Enroll by July 1 — Save up to $4,000! <Link to="/admissions" className="underline ml-2 font-semibold">Learn More</Link>
      </div>

      {/* Hero Section with Video Carousel */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[#0D8F85] text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.video
            key={videoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            autoPlay
            muted
            onEnded={() => setVideoIndex((prev) => (prev + 1) % videos.length)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videos[videoIndex]} type="video/mp4" />
          </motion.video>
        </AnimatePresence>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
          >
            Welcome to Donna
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-white/90 font-light max-w-2xl mx-auto"
          >
            Empowering children to understand the world and choose their place within it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-full p-2 flex max-w-lg mx-auto shadow-2xl"
          >
            <input
              type="text"
              placeholder="Find a school near me (city or zip)..."
              className="flex-grow bg-transparent px-4 py-3 outline-none text-slate-700 rounded-l-full placeholder-slate-400 font-medium"
            />
            <Link to="/schools" className="bg-[#0EA59A] hover:bg-[#0C948A] transition-colors text-white px-8 py-3 rounded-full font-semibold flex items-center">
              Search
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D8F85] mb-4 tracking-tight">Who we are<span className="text-terracotta-500">.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Global Network', desc: 'Over 100 campuses worldwide dedicated to the highest standards.', img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80' },
              { title: 'Family-First', desc: 'Flexible schedules and year-round programs to support modern families.', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80' },
              { title: 'High-Fidelity Montessori', desc: 'Authentic materials and mixed-age classrooms led by expert guides.', img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80' },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="text-center group"
              >
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-8 shadow-lg">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{card.title}</h3>
                <p className="text-gray-500 text-lg">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-slate-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#0D8F85] mb-8 tracking-tight">Our Mission<span className="text-terracotta-500">.</span></h2>
          <p className="text-2xl text-gray-500 leading-relaxed font-light mb-12">
            Our mission is to mainstream authentic Montessori education, bringing its benefits to families everywhere and empowering children to become the best versions of themselves through joyful discovery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about" className="bg-[#0D8F85] hover:bg-[#0A7068] transition-colors text-white px-8 py-4 rounded-full font-bold text-lg">
              Our Mission
            </Link>
            <Link to="/what-is-montessori" className="bg-white border-2 border-[#0D8F85] text-[#0D8F85] hover:bg-gray-50 transition-colors px-8 py-4 rounded-full font-bold text-lg">
              About Montessori
            </Link>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D8F85] mb-4 tracking-tight">Our programs<span className="text-terracotta-500">.</span></h2>
            <p className="text-xl text-gray-500">Programs designed for every stage of your child's development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nido */}
            <div className="bg-cream-50 rounded-[40px] p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <h3 className="text-3xl font-bold text-slate-800 mb-2">Nido</h3>
              <p className="text-terracotta-500 font-semibold mb-6">6 weeks - 16 months</p>
              <p className="text-gray-600 mb-8 flex-grow">A safe, comforting "nest" where infants build trust, coordination, and independence at their own pace.</p>
              <Link to="/nido" className="text-[#0D8F85] font-bold hover:underline">Learn more &rarr;</Link>
            </div>

            {/* Toddler */}
            <div className="bg-cream-50 rounded-[40px] p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <h3 className="text-3xl font-bold text-slate-800 mb-2">Toddler</h3>
              <p className="text-terracotta-500 font-semibold mb-6">16 months - 3 years</p>
              <p className="text-gray-600 mb-8 flex-grow">An environment focused on language acquisition, practical life skills, and social development.</p>
              <Link to="/toddler" className="text-[#0D8F85] font-bold hover:underline">Learn more &rarr;</Link>
            </div>

            {/* Children's House */}
            <div className="bg-cream-50 rounded-[40px] p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <h3 className="text-3xl font-bold text-slate-800 mb-2">Children's House</h3>
              <p className="text-terracotta-500 font-semibold mb-6">3 years - 6 years</p>
              <p className="text-gray-600 mb-8 flex-grow">A vibrant mixed-age classroom where children independently explore math, language, and cultural studies.</p>
              <Link to="/childrens-house" className="text-[#0D8F85] font-bold hover:underline">Learn more &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Parents Are Saying */}
      <section className="py-24 bg-[#0EA59A] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">What parents are saying<span className="text-yellow-300">.</span></h2>

          <div className="bg-white/10 p-10 md:p-16 rounded-[40px] backdrop-blur-sm">
            <div className="text-yellow-300 text-4xl mb-6">★★★★★</div>
            <p className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
              "The transformation in our daughter since starting at Donna is incredible. She is so independent, confident, and genuinely loves going to school every day. The guides truly understand her."
            </p>
            <p className="font-bold text-lg uppercase tracking-wide">— Sarah T., Donna Parent</p>
          </div>
        </div>
      </section>

      {/* Latest from our blog */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#0D8F85] mb-16 tracking-tight">Latest from our blog<span className="text-terracotta-500">.</span></h2>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 text-left mb-12">
            <div className="h-64 bg-slate-200">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" alt="Blog post" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="text-terracotta-500 font-bold text-sm uppercase tracking-wider mb-2">Montessori at Home</div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">How to create a Montessori friendly environment at home</h3>
              <p className="text-gray-500 text-lg mb-6">Creating a Montessori environment at home doesn't require buying expensive materials. It's about changing your perspective to support your child's independence...</p>
              <Link to="/blog" className="text-[#0D8F85] font-bold hover:underline">Read full article &rarr;</Link>
            </div>
          </div>

          <Link to="/blog" className="inline-block bg-white border-2 border-[#0D8F85] text-[#0D8F85] hover:bg-gray-50 transition-colors px-10 py-4 rounded-full font-bold text-lg">
            Read more on our blog
          </Link>
        </div>
      </section>

      {/* Start your journey with us */}
      <section className="py-24 bg-[#0EA59A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-white">
            Start your journey with us<span className="text-yellow-300">.</span>
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of families worldwide who have discovered the power of authentic Montessori education.
          </p>
          <Link to="/admissions" className="inline-block bg-white text-[#0EA59A] hover:bg-slate-50 transition-colors px-12 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
