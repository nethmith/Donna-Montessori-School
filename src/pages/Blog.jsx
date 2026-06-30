import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const articles = [
    {
      title: "How to Create a Montessori-Friendly Home Environment",
      category: "Montessori at Home",
      excerpt: "Creating a Montessori environment at home doesn't require buying expensive materials. It is about shifting your perspective to foster independence, order, and coordination.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
      date: "June 25, 2026"
    },
    {
      title: "Understanding the Sensitive Periods in Early Childhood",
      category: "Child Development",
      excerpt: "Dr. Maria Montessori identified developmental windows where children are uniquely motivated to acquire specific skills, such as language, order, and movement.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80",
      date: "June 18, 2026"
    },
    {
      title: "Why Mixed-Age Classrooms Work So Well",
      category: "Classroom Insights",
      excerpt: "In a Montessori classroom, children of different ages collaborate side-by-side. Discover the social and academic benefits of this unique educational dynamic.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      date: "June 10, 2026"
    },
    {
      title: "The Importance of Practical Life Activities",
      category: "Curriculum Focus",
      excerpt: "Pouring, sweeping, and table washing are more than just chores. Learn how these simple tasks build concentration, coordination, and executive function.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      date: "May 28, 2026"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Blog | Donna Montessori</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0D8F85] mb-6 tracking-tight ">
          The donna montessori blog<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto mb-10">
          Insights, stories, and practical guides on child development and authentic Montessori education.
        </p>

        {/* Subscribe Button */}
        <div>
          <a
            href="https://www.instagram.com/donna.montessori/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0D8F85] hover:bg-[#0A7068] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-md"
          >
            Click here to subscribe
          </a>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 max-w-6xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className="h-64 bg-slate-100">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-terracotta-500 font-bold text-sm uppercase tracking-wider block mb-2">
                    {article.category}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 font-light mb-6">
                    {article.excerpt}
                  </p>
                </div>
                <div className="text-sm text-gray-400 font-medium border-t border-gray-50 pt-4">
                  {article.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
