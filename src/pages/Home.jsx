import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      
      {/* Footer Hint */}
      <footer className="py-20 bg-slate-50 border-t border-slate-100 text-center">
         <div className="max-w-xl mx-auto px-6">
            <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-4 italic">Ready to Scale?</h4>
            <p className="text-slate-500 mb-10">Join thousands of businesses already growing with HireLabour.</p>
            <div className="flex justify-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-slate-200"></div>
               <div className="w-10 h-10 rounded-xl bg-slate-200"></div>
               <div className="w-10 h-10 rounded-xl bg-slate-200"></div>
            </div>
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mt-12">HireLabour • Premium Ecosystem</p>
         </div>
      </footer>
    </main>
  );
};

export default Home;
