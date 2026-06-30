import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCheck, FaStar, FaRegPaperPlane } from 'react-icons/fa';

const Admissions = () => {
  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Admissions | Donna Montessori</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-8 px-4 max-w-6xl mx-auto mb-16">
        <div className="relative w-full h-[60vh] md:h-[70vh] rounded-b-[100px] md:rounded-b-[200px] overflow-hidden mb-12 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" 
            alt="Child working with Montessori materials" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0D8F85] mb-8 tracking-tight">admissions.</h1>
          
          <p className="text-xl leading-relaxed mb-6 text-gray-500 font-light">
            At Donna Montessori, we believe the admissions<br/>
            journey should be clear, welcoming, and inspiring.
          </p>
          <p className="text-xl leading-relaxed mb-10 text-gray-500 font-light">
            Whether you're just beginning to explore Montessori or<br/>
            ready to secure your child's start date, our process is<br/>
            designed to be simple, transparent, and supportive so your<br/>
            family feels confident every step of the way.
          </p>
          
          <button className="text-gray-400 font-medium hover:text-[#0D8F85] transition-colors border-b-2 border-transparent hover:border-[#0D8F85] pb-1">
            Find a school near me
          </button>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0D8F85] mb-6 tracking-tight">How to Apply<span className="text-terracotta-500">:</span></h2>
          <p className="text-xl mb-16 text-gray-500 font-light">Applying is straightforward:</p>
          
          <div className="space-y-24">
            {/* Step 1 */}
            <div>
              <div className="w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg">
                 <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" alt="School building" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-bold text-[#0D8F85] mb-4">1. Schedule a Tour or Visit</h3>
              <p className="text-lg text-gray-500">See our classrooms in action, meet our educators, and experience the Montessori<br/>environment firsthand.</p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg">
                 <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Teacher and child" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-bold text-[#0D8F85] mb-4">2. Confirm Placement</h3>
              <p className="text-lg text-gray-500">Based on your child's age and stage of development, our admissions team will<br/>guide you into the right program: Nido (Infants), Toddler, or Children's House<br/>(Preschool & Kindergarten).</p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg">
                 <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" alt="Child cutting food" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-bold text-[#0D8F85] mb-4">3. Complete Registration</h3>
              <p className="text-lg mb-8 text-gray-500">Submit the New Student Registration Form along with a one-time application fee<br/>and tuition deposit to secure your child's place.</p>
              
              <div className="bg-[#0D8F85] text-white p-8 rounded-[40px] inline-block shadow-lg">
                <p className="text-xl font-light mb-2">Our Admissions Team is here to help at every step.</p>
                <p className="text-xl font-light">Contact us anytime at <a href="mailto:aoteam-us@donnaeducation.com" className="underline font-bold">aoteam-us@donnaeducation.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours and Open Houses */}
      <section className="py-24 px-4 bg-slate-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0D8F85] mb-8 text-center tracking-tight">Tours and Open Houses<span className="text-terracotta-500">.</span></h2>
          <p className="text-xl text-center mb-10 text-gray-500 font-light">
            We host open houses, personal tours, and community events throughout the<br/>
            year, giving families the chance to:
          </p>
          
          <ul className="space-y-6 text-lg mb-16 text-gray-600">
            <li className="flex items-start">
              <FaCheck className="text-[#0EA59A] mt-1 mr-4 flex-shrink-0" />
              <span>Explore classrooms and outdoor learning spaces.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-[#0EA59A] mt-1 mr-4 flex-shrink-0" />
              <span>Meet guides, staff, and current families.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-[#0EA59A] mt-1 mr-4 flex-shrink-0" />
              <span>Learn how Montessori builds independence, focus, and joy.</span>
            </li>
            <li className="flex items-start border-b border-gray-200 pb-8">
              <FaCheck className="text-[#0EA59A] mt-1 mr-4 flex-shrink-0" />
              <span>Ask questions about curriculum, routines, and school life.</span>
            </li>
          </ul>
          
          <p className="text-xl font-bold text-center text-slate-700">
            Prefer a more personal option? We're happy to arrange a private<br/>
            tour at a time that works best for your family.
          </p>
          <div className="text-center mt-8">
             <button className="bg-terracotta-500 hover:bg-terracotta-600 transition-colors text-white px-10 py-3 rounded-full font-bold shadow-md">
               Schedule a Tour
             </button>
          </div>
        </div>
      </section>

      {/* Core Focus Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-full h-80 md:h-[500px] rounded-[60px] overflow-hidden mb-12 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" alt="Children in classroom" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex justify-center mb-6 text-terracotta-400 text-3xl">
            <FaRegPaperPlane />
          </div>
          
          <h2 className="text-4xl font-bold text-slate-400 mb-8 tracking-tight">Our Core Focus in the Admissions Process<span className="text-terracotta-500">.</span></h2>
          
          <p className="text-xl mb-6 text-gray-500 font-light">
            Enrolling at Donna means joining a partnership built on transparency,<br/>
            visibility, and progress.
          </p>
          <p className="text-xl mb-16 text-gray-500 font-light">
            Every family receives access to Illumine, our secure parent app, which provides<br/>
            progress tracking, daily updates, photos, and direct communication with your<br/>
            school team.
          </p>

          {/* Feature List */}
          <div className="text-left space-y-8 bg-slate-50 p-10 md:p-16 rounded-[40px] border border-gray-100">
            <div className="flex">
              <FaStar className="text-[#0EA59A] text-2xl mt-1 mr-6 flex-shrink-0" />
              <p className="text-lg text-gray-500"><span className="font-bold text-slate-700">Stability</span> – Every placement is planned with care, ensuring a consistent environment where your child feels safe and supported. Families receive updates on transitions and milestones.</p>
            </div>
            <div className="flex">
              <FaStar className="text-[#0EA59A] text-2xl mt-1 mr-6 flex-shrink-0" />
              <p className="text-lg text-gray-500"><span className="font-bold text-slate-700">Community</span> – From your first tour to your child's first day, you'll feel the warmth of our community. Illumine updates give you a clear view of your child's social growth and independence.</p>
            </div>
            <div className="flex">
              <FaStar className="text-[#0EA59A] text-2xl mt-1 mr-6 flex-shrink-0" />
              <p className="text-lg text-gray-500"><span className="font-bold text-slate-700">Staff</span> – Our Montessori-trained educators focus on outcomes that matter most: independence, concentration, and joy. You'll hear directly from them through notes and classroom highlights.</p>
            </div>
            <div className="flex">
              <FaStar className="text-[#0EA59A] text-2xl mt-1 mr-6 flex-shrink-0" />
              <p className="text-lg text-gray-500"><span className="font-bold text-slate-700">Curriculum</span> – Our curriculum is hands-on, screen-free, and outcome-driven. Parents receive progress tracking aligned to developmental milestones, so you can celebrate growth step by step.</p>
            </div>
            <div className="flex">
              <FaStar className="text-[#0EA59A] text-2xl mt-1 mr-6 flex-shrink-0" />
              <p className="text-lg text-gray-500"><span className="font-bold text-slate-700">Classrooms</span> – Every space is designed for independence. Through Illumine photos and updates, you'll see how your child engages with materials and routines in a carefully prepared environment.</p>
            </div>
            <div className="flex">
              <FaStar className="text-[#0EA59A] text-2xl mt-1 mr-6 flex-shrink-0" />
              <p className="text-lg text-gray-500"><span className="font-bold text-slate-700">Visibility</span> – We believe parents deserve transparency. Illumine provides daily updates, photos, and progress snapshots—so you stay connected to your child's Montessori journey every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition, Scholarships, Referral - Grouped Section */}
      <section className="py-24 px-4 bg-slate-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          
          <div className="w-full h-80 md:h-[500px] rounded-[60px] overflow-hidden mb-16 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" alt="Parent hugging child" className="w-full h-full object-cover" />
          </div>
          
          {/* Tuition & Policies */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-[#0D8F85] mb-10 text-center tracking-tight">Tuition & Payment Policies<span className="text-terracotta-500">.</span></h2>
            <ul className="space-y-6 text-lg max-w-2xl mx-auto text-gray-600">
              <li className="flex items-start border-b border-gray-200 pb-4">
                <FaCheck className="text-[#0EA59A] mt-1 mr-4 flex-shrink-0" />
                <span>Tuition is billed monthly and due by the 20th of the prior month.</span>
              </li>
              <li className="flex items-start border-b border-gray-200 pb-4">
                <FaCheck className="text-[#0EA59A] mt-1 mr-4 flex-shrink-0" />
                <span>First payment must be submitted before your child begins.</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-[#0EA59A] mt-1 mr-4 flex-shrink-0" />
                <span>Billing is managed through Illumine, which also supports autopay, attendance tracking, and school communication.</span>
              </li>
            </ul>
          </div>

          {/* Scholarships */}
          <div className="mb-20 bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-[#0D8F85] mb-6 tracking-tight">scholarships, financial assistance & military families<span className="text-terracotta-500">.</span></h2>
            <p className="text-lg text-gray-600 mb-6">
              We are committed to making our authentic Montessori programs as accessible as possible. We offer tuition assistance programs for eligible families and accept state subsidy programs where applicable. 
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Donna is also proud to support military families with special tuition rates at participating campuses. 
            </p>
            <button className="text-[#0D8F85] font-bold border-b-2 border-[#0D8F85] hover:text-[#0EA59A] hover:border-[#0EA59A] transition-colors pb-1">
              Learn more about financial aid
            </button>
          </div>

          {/* Referral Program */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-[#0D8F85] mb-6 tracking-tight">Referral Program<span className="text-terracotta-500">.</span></h2>
            <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto font-light">
              Love your Donna experience? Share it with a friend! When a new family enrolls based on your referral, both families receive a tuition credit as our thank you.
            </p>
            <button className="bg-[#0D8F85] hover:bg-[#0A7068] transition-colors text-white px-8 py-3 rounded-full font-bold shadow-md">
              Refer a Family
            </button>
          </div>

        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 px-4 bg-[#0EA59A] text-white text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Next Steps<span className="text-yellow-300">.</span></h2>
            <p className="text-2xl mb-10 font-light">
              We are so excited to welcome you and your child into the Donna community. The first step is to find a campus near you.
            </p>
            <button className="bg-white text-[#0EA59A] hover:bg-slate-50 transition-colors px-12 py-4 rounded-full font-bold text-xl shadow-lg">
              Find Your School
            </button>
         </div>
      </section>
    </div>
  );
};

export default Admissions;
