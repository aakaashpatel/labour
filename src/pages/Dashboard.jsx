import React, { useEffect, useState } from "react";
import { HiUser, HiBriefcase, HiClipboardCheck, HiLocationMarker, HiLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("onboardingData");
    if (!savedData) {
      navigate("/onboarding");
    } else {
      setData(JSON.parse(savedData));
    }
  }, [navigate]);

  if (!data) return null;

  const handleLogout = () => {
    localStorage.removeItem("onboardingData");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row h-screen overflow-hidden">
      
      {/* SIDEBAR (LEFT SIDE - FIXED) */}
      <aside className="w-full lg:w-80 bg-indigo-950 text-white p-10 flex flex-col justify-between relative overflow-hidden lg:h-screen lg:sticky lg:top-0 shadow-[20px_0_60px_rgba(0,0,0,0.1)]">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
              <div className="w-6 h-6 bg-indigo-600 rounded-lg"></div>
            </div>
            <h1 className="text-2xl font-black tracking-tighter">HireLabour</h1>
          </div>
          
          <nav className="space-y-6">
            <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest ml-4 mb-4">Command Center</div>
            <button className="flex items-center gap-4 w-full p-4 bg-indigo-600 rounded-[1.5rem] font-black text-sm shadow-xl shadow-indigo-500/20 group transition-all">
               <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <HiUser className="text-white" />
               </div>
               My Overview
            </button>
            <button className="flex items-center gap-4 w-full p-4 hover:bg-white/5 rounded-[1.5rem] font-bold text-sm transition text-indigo-200 group">
               <div className="w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-all">
                  <HiBriefcase className="text-indigo-300" />
               </div>
               Active Tenders
            </button>
            <button className="flex items-center gap-4 w-full p-4 hover:bg-white/5 rounded-[1.5rem] font-bold text-sm transition text-indigo-200 group">
               <div className="w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-all">
                  <HiClipboardCheck className="text-indigo-300" />
               </div>
               Work History
            </button>
          </nav>

          <div className="mt-12 p-6 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
             <p className="text-[9px] font-black text-indigo-400 uppercase mb-4">Verification Score</p>
             <div className="flex items-end gap-2">
                <span className="text-4xl font-black">98</span>
                <span className="text-indigo-400 font-bold mb-1">%</span>
             </div>
             <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-green-400 h-full w-[98%] shadow-[0_0_10px_#4ade80]"></div>
             </div>
          </div>
        </div>

        <button 
          onClick={() => setShowLogoutModal(true)}
          className="flex items-center justify-center gap-3 w-full p-5 bg-white/5 hover:bg-red-500/10 text-indigo-300 hover:text-red-400 rounded-2xl font-black text-xs uppercase tracking-widest transition border border-white/5 relative z-10"
        >
          <HiLogout /> Sign Out
        </button>

        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
      </aside>

      {/* MAIN CONTENT (RIGHT SIDE - SCROLLABLE) */}
      <main className="flex-1 overflow-y-auto p-6 sm:p-12 lg:p-20">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
               <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase tracking-wider">Verified Business</span>
               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 tracking-tighter">Hi, {data.fullName.split(" ")[0]}!</h2>
            <p className="text-gray-400 font-bold mt-2 text-lg">Welcome to your professional dashboard.</p>
          </div>
          <div className="px-8 py-4 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm flex items-center gap-3">
             <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
             <span className="font-black text-indigo-900 text-sm tracking-tight">{data.role}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl">
          <section className="bg-white p-10 rounded-[3rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.04)] border border-white hover:border-indigo-100 transition-all">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-8">
              <HiUser />
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-8 tracking-tight">Identity Details</h3>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Owner Name</p>
                <p className="text-xl font-black text-slate-800">{data.fullName}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Primary Phone</p>
                   <p className="font-black text-slate-700">{data.phone}</p>
                 </div>
                 <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Email Access</p>
                   <p className="font-black text-slate-700 truncate">{data.email}</p>
                 </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-10 rounded-[3rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.04)] border border-white hover:border-indigo-100 transition-all">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-8">
              <HiBriefcase />
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-8 tracking-tight">Project Context</h3>
            <div className="grid grid-cols-2 gap-y-10 gap-x-6">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Active Project</p>
                <p className="font-black text-slate-800 text-lg leading-tight">{data.projectName}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Focus Area</p>
                <p className="font-black text-slate-700 text-lg">{data.projectType}</p>
              </div>
              <div className="col-span-2 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                <p className="text-[10px] font-black text-gray-400 uppercase mb-1">GST Number</p>
                <p className="text-xl font-black text-indigo-900 tracking-wider font-mono">{data.gstNumber || "N/A"}</p>
              </div>
            </div>
          </section>

          <section className="md:col-span-2 bg-indigo-900 p-10 sm:p-14 rounded-[3.5rem] shadow-2xl shadow-indigo-100 relative overflow-hidden text-white">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
               <div className="lg:col-span-5">
                  <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center text-2xl mb-6">
                    <HiLocationMarker />
                  </div>
                  <h3 className="text-4xl font-black mb-4 tracking-tighter">Operational Area</h3>
                  <p className="text-indigo-200 font-bold text-lg leading-relaxed">{data.landmark}, {data.city}, {data.state} - {data.pincode}</p>
               </div>
               <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                     <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Turnover</p>
                     <p className="text-3xl font-black">{data.turnover || "N/A"}</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                     <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Website</p>
                     <p className="text-sm font-black truncate">{data.website || "N/A"}</p>
                  </div>
               </div>
            </div>
          </section>

          <section className="md:col-span-2 bg-white p-10 sm:p-14 rounded-[4rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.06)] border border-slate-100">
             <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-xl">
                    <HiClipboardCheck />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 tracking-tight">Work Profile Survey</h3>
                </div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {Object.entries(data.workDetails || {}).map(([key, value]) => {
                  const labelMap = {
                    hiresIndividuals: "Hiring Individuals",
                    hiresSubcontractors: "Subcontracting",
                    recruitsForOthers: "Recruitment",
                    workOnOwnLand: "Own Land Work",
                    workForOtherCompany: "Corporate Work",
                    multipleProjects: "Multi-Management",
                    governmentContracts: "Govt. Contracts",
                    payrollDirectly: "Direct Payroll",
                  };
                  return (
                    <div key={key} className="p-7 rounded-[2rem] border border-slate-100 bg-white flex flex-col justify-between h-40">
                       <span className="text-xs font-black text-slate-500 uppercase tracking-tight">{labelMap[key]}</span>
                       <span className={`text-3xl font-black ${value ? "text-indigo-600" : "text-slate-300"}`}>{value ? "YES" : "NO"}</span>
                    </div>
                  );
                })}
             </div>
          </section>
        </div>

        <p className="text-center text-slate-300 text-[10px] font-black uppercase tracking-[0.5em] mt-20">
          HireLabour • &copy; 2024
        </p>
      </main>

      {/* SIGNOUT CONFIRMATION MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-indigo-950/40 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowLogoutModal(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-md rounded-[3rem] p-10 shadow-2xl border border-white animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-sm">
               <HiLogout />
            </div>
            
            <div className="text-center mb-10">
               <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-3">Sign Out?</h3>
               <p className="text-gray-400 font-bold leading-relaxed">
                 Are you sure you want to end your current session and return to the home page?
               </p>
            </div>

            <div className="flex flex-col gap-3">
               <button 
                 onClick={handleLogout}
                 className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-red-200"
               >
                 YES, SIGN ME OUT
               </button>
               <button 
                 onClick={() => setShowLogoutModal(false)}
                 className="w-full py-5 bg-slate-50 hover:bg-slate-100 text-slate-500 font-black rounded-2xl transition-all"
               >
                 CANCEL
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
