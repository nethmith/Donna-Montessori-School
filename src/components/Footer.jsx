import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0EA59A] text-white pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center">
                <svg className="w-12 h-12 mr-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stylized tree of leaves matching the image */}
                  <path d="M50 15 C55 12, 62 18, 58 24 C54 28, 48 24, 50 15 Z" fill="#ffffff" />
                  <path d="M38 25 C42 21, 48 26, 46 32 C43 37, 36 32, 38 25 Z" fill="#E8F5E9" />
                  <path d="M62 25 C66 21, 72 26, 70 32 C67 37, 60 32, 62 25 Z" fill="#C8E6C9" />
                  <path d="M28 40 C31 35, 38 38, 37 45 C35 50, 28 46, 28 40 Z" fill="#A5D6A7" />
                  <path d="M72 40 C75 35, 82 38, 81 45 C79 50, 72 46, 72 40 Z" fill="#81C784" />
                  <path d="M32 58 C34 52, 42 54, 42 60 C41 66, 33 63, 32 58 Z" fill="#66BB6A" />
                  <path d="M68 58 C70 52, 78 54, 78 60 C77 66, 69 63, 68 58 Z" fill="#4CAF50" />
                  <path d="M50 35 C42 35, 38 45, 45 55 C48 50, 52 50, 50 35 Z" fill="#C8E6C9" opacity="0.9" />
                  <path d="M50 35 C58 35, 62 45, 55 55 C52 50, 48 50, 50 35 Z" fill="#E8F5E9" opacity="0.9" />
                </svg>
                <div className="leading-none text-white">
                  <div className="font-bold text-2xl tracking-tight uppercase font-sans">Donna</div>
                  <div className="font-light text-xs tracking-widest uppercase -mt-0.5 opacity-90">Montessori School</div>
                </div>
              </div>
            </Link>
            <p className="text-lg leading-relaxed mb-8 max-w-sm text-white/95">
              Donna Montessori enables children to understand the world and choose their place within it.
            </p>
            <Link to="/schools" className="inline-block bg-white text-[#0EA59A] hover:bg-slate-100 transition-colors px-8 py-3 rounded-full font-bold shadow-md">
              Find a school near me
            </Link>
          </div>

          {/* Column 2: Admissions & Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-tight text-white">
              admissions &<br />programs<span className="text-yellow-300">.</span>
            </h3>
            <ul className="space-y-3 text-white/90">
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/nido" className="hover:text-white transition-colors">Nido</Link></li>
              <li><Link to="/toddler" className="hover:text-white transition-colors">Toddler</Link></li>
              <li><Link to="/childrens-house" className="hover:text-white transition-colors">Children's House</Link></li>
              <li><Link to="/language-immersion" className="hover:text-white transition-colors">Language Immersion</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Approach */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-tight text-white">
              our approach<span className="text-yellow-300">.</span>
            </h3>
            <ul className="space-y-3 text-white/90">
              <li><Link to="/what-is-montessori" className="hover:text-white transition-colors">What is Montessori?</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Mission & Values</Link></li>
              <li><Link to="/curriculum" className="hover:text-white transition-colors">Curriculum</Link></li>
              <li><Link to="/language" className="hover:text-white transition-colors">Language</Link></li>
              <li><Link to="/math" className="hover:text-white transition-colors">Math</Link></li>
              <li><Link to="/practical-life" className="hover:text-white transition-colors">Practical Life</Link></li>
              <li><Link to="/sensorial" className="hover:text-white transition-colors">Sensorial</Link></li>
              <li><Link to="/grace-and-courtesy" className="hover:text-white transition-colors">Grace & Courtesy</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-tight text-white">
              resources<span className="text-yellow-300">.</span>
            </h3>
            <ul className="space-y-3 text-white/90">
              <li><Link to="/parent-handbook" className="hover:text-white transition-colors">Parent Handbook</Link></li>
              <li><Link to="/school-calendar" className="hover:text-white transition-colors">School Calendar</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/store" className="hover:text-white transition-colors">The Donna Store</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <FaTiktok className="text-2xl" />
            </a>
          </div>
          <div className="text-sm text-gray-100">
            &copy; 2026 Donna Montessori. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
