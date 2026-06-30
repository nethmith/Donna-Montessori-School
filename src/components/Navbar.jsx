import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white text-slate-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center">
              <svg className="w-12 h-12 mr-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Stylized tree of leaves matching the image */}
                <path d="M50 15 C55 12, 62 18, 58 24 C54 28, 48 24, 50 15 Z" fill="#0EA59A" />
                <path d="M38 25 C42 21, 48 26, 46 32 C43 37, 36 32, 38 25 Z" fill="#4CAF50" />
                <path d="M62 25 C66 21, 72 26, 70 32 C67 37, 60 32, 62 25 Z" fill="#81C784" />
                <path d="M28 40 C31 35, 38 38, 37 45 C35 50, 28 46, 28 40 Z" fill="#12A59C" />
                <path d="M72 40 C75 35, 82 38, 81 45 C79 50, 72 46, 72 40 Z" fill="#2E7D32" />
                <path d="M32 58 C34 52, 42 54, 42 60 C41 66, 33 63, 32 58 Z" fill="#66BB6A" />
                <path d="M68 58 C70 52, 78 54, 78 60 C77 66, 69 63, 68 58 Z" fill="#00796B" />
                <path d="M50 35 C42 35, 38 45, 45 55 C48 50, 52 50, 50 35 Z" fill="#81C784" opacity="0.9" />
                <path d="M50 35 C58 35, 62 45, 55 55 C52 50, 48 50, 50 35 Z" fill="#4CAF50" opacity="0.9" />
                {/* Trunk negative space represented implicitly */}
              </svg>
              <div className="leading-none text-[#0D8F85]">
                <div className="font-bold text-2xl tracking-tight uppercase font-sans">Donna</div>
                <div className="font-light text-xs tracking-widest uppercase -mt-0.5 text-slate-500">Montessori School</div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-[#0D8F85] font-semibold">

            {/* Admissions & Programs Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-terracotta-500 transition-colors py-2">
                Admissions & Programs <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="absolute left-0 mt-0 w-80 bg-white shadow-xl rounded-md hidden group-hover:block border border-gray-100 z-50">
                <div className="py-2">
                  <Link to="/admissions" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-slate-700 font-bold border-b border-gray-100">
                    Our Admissions Process
                  </Link>
                  <Link to="/nido" className="block px-6 py-3 hover:bg-slate-50 transition-colors border-b border-gray-100 text-slate-500">
                    <span className="font-bold text-slate-700">Nido</span>- Ages 6 Weeks To 2 Years
                  </Link>
                  <Link to="/toddler" className="block px-6 py-3 hover:bg-slate-50 transition-colors border-b border-gray-100 text-slate-500">
                    <span className="font-bold text-slate-700">Toddler</span>- Ages 2 To 3 Years
                  </Link>
                  <Link to="/childrens-house" className="block px-6 py-3 hover:bg-slate-50 transition-colors border-b border-gray-100 text-slate-500">
                    <span className="font-bold text-slate-700">Children's House</span>- Ages 3 To 6 Years
                  </Link>
                  <Link to="/language-immersion" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A] font-bold">
                    Language Immersion
                  </Link>
                </div>
              </div>
            </div>

            {/* Academics Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-terracotta-500 transition-colors py-2">
                Academics <FaChevronDown className="ml-1 text-xs" />
              </button>

              <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-md hidden group-hover:block border border-gray-100 z-50">
                <div className="py-2">
                  <Link to="/what-is-montessori" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-slate-500 border-b border-gray-100">
                    What Is Montessori?
                  </Link>
                  <Link to="/about" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A] border-b border-gray-100">
                    Our Mission & Values
                  </Link>

                  {/* Nested Curriculum Dropdown */}
                  <div className="relative group/sub">
                    <Link to="/curriculum" className="flex items-center justify-between w-full px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A]">
                      Curriculum Overview <FaChevronRight className="text-xs text-[#0EA59A]" />
                    </Link>

                    <div className="absolute left-full top-0 mt-0 w-48 bg-white shadow-xl rounded-md hidden group-hover/sub:block border border-gray-100">
                      <div className="py-2">
                        <Link to="/language" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A]">Language</Link>
                        <Link to="/math" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A] border-t border-gray-50">Math</Link>
                        <Link to="/practical-life" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A] border-t border-gray-50">Practical Life</Link>
                        <Link to="/sensorial" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A] border-t border-gray-50">Sensorial</Link>
                        <Link to="/grace-and-courtesy" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A] border-t border-gray-50">Grace & Courtesy</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/blog" className="hover:text-terracotta-500 transition-colors py-2">Blog</Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-terracotta-500 transition-colors py-2">
                Resources <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-md overflow-hidden hidden group-hover:block border border-gray-100 z-50">
                <Link to="/parent-handbook" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A] border-b border-gray-100">Parent Handbook</Link>
                <Link to="/school-calendar" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A] border-b border-gray-100">School Calendar</Link>
                <Link to="/careers" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A] border-b border-gray-100">Careers</Link>
                <Link to="/store" className="block px-6 py-3 hover:bg-slate-50 transition-colors text-[#0EA59A]">The Donna Store</Link>
              </div>
            </div>

          </div>
          <div className="hidden md:flex items-center">
            <Link to="/schools" className="bg-[#0EA59A] hover:bg-[#0C948A] transition-colors text-white px-6 py-3 rounded-full font-bold shadow-md">
              Find a school near me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
