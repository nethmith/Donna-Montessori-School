import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Schools from './pages/Schools';
import Admissions from './pages/Admissions';
import Blog from './pages/Blog';

// Academics Pages
import WhatIsMontessori from './pages/WhatIsMontessori';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Language from './pages/Language';
import MathPage from './pages/MathPage';
import PracticalLife from './pages/PracticalLife';
import Sensorial from './pages/Sensorial';
import GraceAndCourtesy from './pages/GraceAndCourtesy';
import ParentHandbook from './pages/ParentHandbook';
import SchoolCalendar from './pages/SchoolCalendar';
import Careers from './pages/Careers';

// Program Pages
import Nido from './pages/Nido';
import Toddler from './pages/Toddler';
import ChildrensHouse from './pages/ChildrensHouse';
import LanguageImmersion from './pages/LanguageImmersion';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schools" element={<Schools />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/parent-handbook" element={<ParentHandbook />} />
              <Route path="/school-calendar" element={<SchoolCalendar />} />
              <Route path="/careers" element={<Careers />} />
              
              {/* Academics Routes */}
              <Route path="/what-is-montessori" element={<WhatIsMontessori />} />
              <Route path="/about" element={<About />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/language" element={<Language />} />
              <Route path="/math" element={<MathPage />} />
              <Route path="/practical-life" element={<PracticalLife />} />
              <Route path="/sensorial" element={<Sensorial />} />
              <Route path="/grace-and-courtesy" element={<GraceAndCourtesy />} />
              
              {/* Program Routes */}
              <Route path="/nido" element={<Nido />} />
              <Route path="/toddler" element={<Toddler />} />
              <Route path="/childrens-house" element={<ChildrensHouse />} />
              <Route path="/language-immersion" element={<LanguageImmersion />} />
              
              {/* Catch all for missing pages to show an error or placeholder */}
              <Route path="*" element={
                <div className="min-h-[50vh] flex items-center justify-center text-slate-600">
                  <h2 className="text-2xl font-serif">Page Coming Soon</h2>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
