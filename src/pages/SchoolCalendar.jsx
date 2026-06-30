import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';

const SchoolCalendar = () => {
  const calendarEvents = [
    { date: "July – August 2026", occasion: "Thrive School Prep Days", note: "Dates vary by location. Contact your campus for details." },
    { date: "September 7, 2026", occasion: "Labor Day", note: "" },
    { date: "October 23, 2026", occasion: "Professional Development Day", note: "" },
    { date: "November 26–27, 2026", occasion: "Thanksgiving Holiday", note: "" },
    { date: "December 24–25, 2026", occasion: "Winter Holiday", note: "" },
    { date: "January 1, 2027", occasion: "New Year's Day", note: "" },
    { date: "January 18, 2027", occasion: "Martin Luther King Jr. Day", note: "" },
    { date: "March 5, 2027", occasion: "Professional Development Day", note: "" },
    { date: "May 31, 2027", occasion: "Memorial Day", note: "" },
    { date: "June 18, 2027", occasion: "Juneteenth", note: "" },
    { date: "July 5, 2027", occasion: "Independence Day (Observed)", note: "" }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>School Calendar | Donna Montessori</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-16 px-4 max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0D8F85] mb-6 tracking-tight ">
          School calendar<span className="text-terracotta-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto mb-6">
          Planned closures for the 2026–27 school year.
        </p>
      </section>

      {/* Content intro with Analog Clock representation */}
      <section className="py-16 bg-slate-50 border-y border-gray-100 px-4 mb-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Visual representation container (analog clock aesthetic) */}
          <div className="w-48 h-48 rounded-full border-8 border-[#0EA59A] flex items-center justify-center relative bg-white shadow-inner shrink-0">
            <FaClock className="text-[#0D8F85] text-7xl" />
            <div className="absolute top-4 font-bold text-xs text-slate-400">12</div>
            <div className="absolute right-4 font-bold text-xs text-slate-400">3</div>
            <div className="absolute bottom-4 font-bold text-xs text-slate-400">6</div>
            <div className="absolute left-4 font-bold text-xs text-slate-400">9</div>
          </div>

          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#0D8F85] mb-4 ">we know your time matters<span className="text-terracotta-500">.</span></h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-4">
              Donna Montessori keeps school closures to a minimum out of respect for working families. When we do close, it’s intentional.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Our <strong className="text-slate-800 font-semibold">Thrive School Prep</strong> days allow teachers to set up thoughtfully prepared environments for your child, and <strong className="text-slate-800 font-semibold">Professional Development</strong> days ensure our educators are continuously growing in their Montessori practice. Every closure is in service of a better experience for your family.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Table Section */}
      <section className="px-4 max-w-4xl mx-auto pb-24">
        <div className="flex items-center gap-3 mb-8">
          <FaCalendarAlt className="text-terracotta-500 text-2xl" />
          <h2 className="text-2xl font-bold text-[#0D8F85]">2026-2027 school year</h2>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-gray-100 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-100">
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Occasion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {calendarEvents.map((event, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-slate-800 font-medium whitespace-nowrap">
                    {event.date}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-slate-700 font-semibold block">{event.occasion}</span>
                    {event.note && (
                      <span className="text-sm text-slate-400 mt-1 block">{event.note}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default SchoolCalendar;
