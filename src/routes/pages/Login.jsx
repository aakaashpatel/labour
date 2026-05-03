import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiArrowRight, HiShieldCheck, HiLightningBolt } from "react-icons/hi";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(val);
    if (error) setError("");
  };

  const handleSendOtp = async () => {
    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    localStorage.setItem("phone", phone);
    navigate("/verify-otp");

    setIsLoading(false);
  };

  // Handle Enter key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && !isLoading) {
        handleSendOtp();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phone, isLoading]);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden">
      
      {/* Left Panel - Branding & Security (Responsive: Hidden on small screens or shown at top) */}
      <div className="hidden lg:flex w-[40%] bg-indigo-950 text-white flex-col justify-between p-16 relative overflow-hidden h-screen sticky top-0">
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 mb-16 group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-[10deg] transition-transform duration-500">
               <span className="text-indigo-600 text-lg font-black tracking-tighter">HL</span>
            </div>
            <h1 className="text-3xl font-black tracking-tighter italic text-white flex flex-col">
              HireLabour
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none mt-1">Security First</span>
            </h1>
          </Link>

          <h2 className="text-5xl font-black leading-[1.1] mb-8 italic tracking-tighter">
            Access Your <br />
            <span className="text-indigo-400">Professional Identity.</span>
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-5 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-all cursor-default">
               <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <HiShieldCheck className="text-white text-xl" />
               </div>
               <div>
                  <p className="text-xs font-black text-indigo-200 uppercase tracking-widest">End-to-End</p>
                  <p className="text-sm font-bold text-slate-100">Verified Credentials</p>
               </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-all cursor-default">
               <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <HiLightningBolt className="text-white text-xl" />
               </div>
               <div>
                  <p className="text-xs font-black text-indigo-200 uppercase tracking-widest">Rapid</p>
                  <p className="text-sm font-bold text-slate-100">Instant Matching</p>
               </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-white/5 p-8 rounded-[3rem] border border-white/10 text-center font-black text-sm tracking-widest uppercase italic text-indigo-300">
          Scale your workforce today.
        </div>
      </div>

      {/* Right Panel - Login Interaction */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-20 bg-slate-50 min-h-screen relative">
        
        {/* Mobile Header (Visible only on small screens) */}
        <div className="lg:hidden absolute top-8 left-8">
           <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center">
                 <span className="text-white text-[10px] font-black">HL</span>
              </div>
              <span className="text-lg font-black text-slate-900 tracking-tighter">HireLabour</span>
           </Link>
        </div>

        <div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="bg-white p-10 sm:p-14 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(30,41,59,0.05)] border border-white relative overflow-hidden">
             {/* Decorative Background for Card */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-50 rounded-full opacity-50"></div>

             <div className="relative z-10 text-center sm:text-left">
                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">Welcome Back.</h3>
                <p className="text-slate-400 font-bold mb-10 text-lg leading-snug italic">Enter your secure credentials.</p>

                <div className="space-y-8">
                  {/* Phone Input */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Mobile Number</label>
                    <div className="relative group">
                       <div className={`absolute left-6 top-1/2 -translate-y-1/2 font-black transition-colors ${phone.length === 10 ? "text-indigo-600" : "text-slate-300 group-hover:text-slate-400"}`}>+91</div>
                       <input 
                         type="tel" 
                         inputMode="numeric"
                         placeholder="XXXXX XXXXX"
                         maxLength="10"
                         className={`w-full pl-16 pr-8 py-5 rounded-3xl bg-slate-50 border-2 outline-none transition-all font-black text-lg ${error ? "border-red-400 bg-red-50" : "border-slate-50 focus:border-indigo-600 focus:bg-white focus:shadow-xl focus:shadow-indigo-100"}`}
                         value={phone}
                         onChange={handleChange}
                         disabled={isLoading}
                         autoFocus
                       />
                       {phone.length === 10 && (
                         <div className="absolute right-6 top-1/2 -translate-y-1/2 text-emerald-500 animate-[zoom-in_0.3s_ease-out]">
                            <HiShieldCheck size={24} />
                         </div>
                       )}
                    </div>
                    {error && (
                      <p className="text-[10px] font-black text-red-500 uppercase tracking-widest ml-4 flex items-center gap-1 animate-pulse italic">
                        <HiLightningBolt /> {error}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button 
                    onClick={handleSendOtp}
                    disabled={phone.length !== 10 || isLoading}
                    className="w-full h-20 bg-indigo-600 hover:bg-slate-900 disabled:bg-slate-200 text-white rounded-3xl font-black text-lg transition-all shadow-2xl flex items-center justify-center gap-4 group active:scale-95 disabled:shadow-none disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        CONTINUE TO SECURE OTP 
                        <HiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform duration-500" />
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-50 text-center">
                   <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">New here?</p>
                   <Link to="/signup" className="text-sm font-black text-indigo-600 hover:text-slate-900 transition-colors uppercase tracking-[0.2em]">Create a partner account</Link>
                </div>
             </div>
          </div>

          <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mt-12">
            Secure Shield Encryption • 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
