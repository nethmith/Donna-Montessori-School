import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ParentHandbook = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    {
      id: "welcome",
      title: "Welcome to Donna!",
      content: `We are very excited to welcome your child and family to Donna Montessori! Our mission is to empower your child’s independence—and to deepen the joy you have in watching your child grow and achieve great things.

Our Parent Handbook is designed to make sure you have answers to common questions at your fingertips. We encourage you to bookmark the link to the Parent Handbook, and carefully review our policies before your child’s first day.

If you have any questions about the handbook, your child’s experience, or any other aspect of the school, don’t hesitate to reach out to your child’s guide (teacher) or your campus leadership team. We are dedicated to clear, open communication, and are eager to help!`
    },
    {
      id: "contact",
      title: "Who to Contact",
      content: `• Contact your child’s guide (teacher) with questions about your child’s academic or social development, classroom or school events, or to schedule a meeting.
• Contact your campus leadership team in case of emergency, to report a short-term or extended absence, and for administrative questions regarding tuition, school events, or policies.
• Contact your Head of School or school leader to share feedback, request support with issues that cannot be solved through your child’s guide, or to arrange a formal meeting.`
    },
    {
      id: "why-guide",
      title: "Why \"Guide\"?",
      content: `Montessori teachers are referred to as “guides” to describe their role in the classroom more precisely. In a Montessori environment, children actively engage with intentionally-designed materials that help them build knowledge independently. Guides help with this process by providing individual and small group lessons, modeling rich vocabulary and classroom expectations, and helping cultivate a supportive community.`
    },
    {
      id: "programs",
      title: "Our Programs",
      content: `• Nido (Infant Community): For children approximately 6 weeks to 16 months old. Designed to support early developmental milestones, movement, and exploration.
• Toddler Community: For children 16 months to 3 years old. Encourages rapid growth in independence, language development, practical life activities, and social interaction.
• Children’s House (Preschool & Kindergarten): For children ages 3 to 6 years old. A mixed-age classroom where children build foundational academic, social, and practical life skills.
• Elementary: For children ages 6 to 12 years old. Fosters curiosity, collaborative project work, and deep intellectual exploration.`
    },
    {
      id: "philosophy",
      title: "Program Philosophy",
      content: `Donna’s programs and methods follow the Montessori philosophy. Maria Montessori was an Italian doctor and educator in the early 20th century. She designed a sequence of purposeful learning materials that allow children to move from one achievement to the next independently and at their own pace. We provide 1:1 guidance and support to meet children right where they are, alongside a supportive, mixed-age community.`
    },
    {
      id: "work-period",
      title: "Montessori Work Period",
      content: `A core part of the daily schedule at Donna is a Montessori Work Period. This is a dedicated time where guides provide 1:1 and small group lessons, children work independently or in small groups, and each child’s ability to concentrate is fostered and respected. Children have access to a vast range of intentionally designed materials.`
    },
    {
      id: "playtime",
      title: "Gross Motor Playtime & Outdoors",
      content: `Gross Motor playtime is an important part of the daily schedule. This unstructured playtime provides a crucial developmental opportunity to explore, be creative, and develop fine and gross motor skills. Typically, outdoor play happens for a minimum of 30 minutes daily, weather permitting (canceled under 25°F or over 90°F).`
    },
    {
      id: "financial-policies",
      title: "Financial & Tuition Policies",
      content: `Tuition is billed monthly and due by the 20th of the prior month. All billing, invoices, and payments are managed conveniently through the Illumine Parent App. Families can set up autopay, view rate sheets, and manage sibling discounts or subsidy payments directly inside the app.`
    }
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Parent Handbook | Donna Montessori</title>
      </Helmet>

      {/* Header Banner */}
      <section className="bg-[#0EA59A] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight mb-4 ">
            Parent handbook.
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
            Everything you need to know about your child's journey, policies, and daily life at Donna.
          </p>
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4 shrink-0">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-28">

              {/* Search Bar */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search handbook..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-slate-100 border-none outline-none focus:ring-2 focus:ring-[#0EA59A] text-sm text-slate-800"
                />
              </div>

              <h3 className="font-bold text-[#0D8F85] mb-4 text-sm uppercase tracking-wider">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {sections.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-slate-500 hover:text-[#0EA59A] hover:translate-x-1 transition-all duration-150"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Handbook Text Content */}
          <main className="lg:w-3/4 space-y-12">
            {filteredSections.length > 0 ? (
              filteredSections.map(section => (
                <article
                  key={section.id}
                  id={section.id}
                  className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 scroll-mt-24"
                >
                  <h2 className="text-3xl font-bold text-[#0D8F85] mb-6 tracking-tight border-b border-slate-100 pb-4">
                    {section.title}
                  </h2>
                  <div className="text-lg text-slate-600 leading-relaxed font-light whitespace-pre-line">
                    {section.content}
                  </div>
                </article>
              ))
            ) : (
              <div className="bg-white p-12 rounded-[40px] text-center border border-gray-100">
                <p className="text-xl text-slate-400 font-light">No sections matched your search.</p>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};

export default ParentHandbook;
