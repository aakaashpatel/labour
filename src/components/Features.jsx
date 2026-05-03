import React from "react";
import { HiBriefcase, HiShieldCheck, HiCurrencyDollar, HiIdentification, HiClock, HiStar } from "react-icons/hi";

const features = [
  {
    title: "Verified Identity",
    desc: "Every worker on our platform undergoes a strict document verification process to ensure safety and trust.",
    icon: HiIdentification,
    color: "bg-blue-500",
  },
  {
    title: "Project Management",
    desc: "Track multiple projects at once. Manage tenders, hirings, and daily progress from a single dashboard.",
    icon: HiBriefcase,
    color: "bg-indigo-500",
  },
  {
    title: "Secure Payments",
    desc: "Fair pricing and secure payment release once the work milestone is approved by you.",
    icon: HiCurrencyDollar,
    color: "bg-emerald-500",
  },
  {
    title: "24/7 Response",
    desc: "Facing an emergency? Our rapid response network connects you with local experts within minutes.",
    icon: HiClock,
    color: "bg-amber-500",
  },
  {
    title: "Quality Ratings",
    desc: "Transparency is key. View detailed work history and authentic reviews before making a choice.",
    icon: HiStar,
    color: "bg-purple-500",
  },
  {
    title: "Platform Shield",
    desc: "Insurance-backed protections for high-stakes commercial projects to give you peace of mind.",
    icon: HiShieldCheck,
    color: "bg-red-500",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full -mr-64 -mt-64 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 underline decoration-indigo-600 decoration-8 underline-offset-8">
            Built for Modern Work.
          </h3>
          <p className="text-lg text-slate-500 font-medium">
            We've redesigned the labor market in India with focus on transparency, speed, and professional identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                 <f.icon size={28} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{f.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed italic">
                "{f.desc}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
