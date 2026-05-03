import React, { useState } from "react";
import { HiArrowRight, HiChevronLeft, HiCloudUpload, HiGlobeAlt, HiCurrencyDollar, HiExclamation } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const roles = [
  "General Contractor",
  "Builder / Developer",
  "Staffing & Placement Agency",
  "Sub Contractor",
  "Worker",
];

const workQuestions = [
  { id: "hiresIndividuals", label: "Do you hire individual or small group of workers?" },
  { id: "hiresSubcontractors", label: "Do you hire subcontractors or provide work to other small contractors?" },
  { id: "recruitsForOthers", label: "Do you mainly provide or recruit workers for others?" },
  { id: "workOnOwnLand", label: "Do you do construction work on your own land?" },
  { id: "workForOtherCompany", label: "Do you do construction work for other company projects?" },
  { id: "multipleProjects", label: "Do you handle more than one work / project at the same time?" },
  { id: "governmentContracts", label: "Do you take or manage government contracts/tenders?" },
  { id: "payrollDirectly", label: "Do you do construction work on your payroll directly?" },
];

const Onboarding = () => {
  const [step, setStep] = useState(1); 
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "",
    fullName: "",
    phone: "",
    email: "",
    projectName: "",
    projectType: "",
    budget: "",
    businessType: "",
    businessEmail: "",
    businessPhone: "",
    registrationNumber: "",
    gstNumber: "",
    registrationFile: null,
    gstFile: null,
    pincode: "",
    state: "",
    city: "",
    landmark: "",
    website: "",
    turnover: "",
    workDetails: {
      hiresIndividuals: null,
      hiresSubcontractors: null,
      recruitsForOthers: null,
      workOnOwnLand: null,
      workForOtherCompany: null,
      multipleProjects: null,
      governmentContracts: null,
      payrollDirectly: null,
    }
  });

  const validateStep = (currentStep) => {
    let newErrors = {};

    if (currentStep === 1) {
      if (!formData.role) newErrors.role = "Please select a role";
    }

    if (currentStep === 2) {
      const unanswered = workQuestions.find(q => formData.workDetails[q.id] === null);
      if (unanswered) newErrors.survey = "Please answer all questions before continuing";
    }

    if (currentStep === 3) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      const phoneDigits = formData.phone.replace(/\D/g, "");
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (phoneDigits.length < 10) newErrors.phone = "Must be at least 10 digits";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid format";
    }

    if (currentStep === 4) {
      if (!formData.projectName.trim()) newErrors.projectName = "Required";
      if (!formData.projectType.trim()) newErrors.projectType = "Required";
      if (!formData.businessType.trim()) newErrors.businessType = "Required";
      const bPhoneDigits = formData.businessPhone.replace(/\D/g, "");
      if (!formData.businessPhone.trim()) newErrors.businessPhone = "Required";
      else if (bPhoneDigits.length < 10) newErrors.businessPhone = "10 digits required";
      if (!formData.pincode.trim()) newErrors.pincode = "Required";
      if (!formData.state.trim()) newErrors.state = "Required";
      if (!formData.city.trim()) newErrors.city = "Required";
      if (!formData.landmark.trim()) newErrors.landmark = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
    setErrors({ ...errors, role: null });
    setStep(2);
  };

  const handleSurveyToggle = (id, value) => {
    setFormData({
      ...formData,
      workDetails: { ...formData.workDetails, [id]: value }
    });
    setErrors({ ...errors, survey: null });
  };

  const handleInputChange = (field, value) => {
    let cleanedValue = value;
    if (field === "phone" || field === "businessPhone") {
      cleanedValue = value.replace(/[^0-9+]/g, "");
      const digits = cleanedValue.replace(/\D/g, "");
      const maxDigits = cleanedValue.startsWith("+91") ? 12 : 10;
      if (digits.length > maxDigits) return;
    }
    if (field === "pincode") {
      cleanedValue = value.replace(/[^0-9]/g, "");
      if (cleanedValue.length > 6) return;
    }
    setFormData({ ...formData, [field]: cleanedValue });
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const handleNext = () => { if (validateStep(step)) setStep((prev) => prev + 1); };
  const handleBack = () => { setErrors({}); setStep((prev) => prev - 1); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(5)) {
      localStorage.setItem("onboardingData", JSON.stringify(formData));
      navigate("/dashboard");
    }
  };

  const ErrorMsg = ({ field }) => errors[field] ? (
    <span className="text-[10px] text-red-500 font-bold mt-1 flex items-center gap-1 animate-pulse"><HiExclamation /> {errors[field]}</span>
  ) : null;

  return (
    <div className="min-h-screen flex bg-white ltr">

      {/* DECORATIVE SIDE (LEFT SIDE - FIXED) */}
      <div className="hidden lg:flex lg:w-1/3 bg-indigo-950 text-white p-12 flex-col justify-between relative overflow-hidden h-screen sticky top-0 shadow-[20px_0_60px_rgba(0,0,0,0.1)]">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <div className="w-7 h-7 bg-indigo-600 rounded-lg"></div>
            </div>
            <h1 className="text-4xl font-black tracking-tighter">HireLabour</h1>
          </div>
          <h2 className="text-5xl font-black leading-[1.1] mb-10 italic">Professional <br /><span className="text-indigo-400">Identity.</span></h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-black">1</div>
              <div><h4 className="font-black text-indigo-50 text-lg tracking-tight">Verified</h4><p className="text-sm text-indigo-300/70">Secure your business.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-black">2</div>
              <div><h4 className="font-black text-indigo-50 text-lg tracking-tight">Community</h4><p className="text-sm text-indigo-300/70">Connect with experts.</p></div>
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-white/5 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/10 text-center font-black text-xl italic capitalize">
          Elevating Workflows.
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-400/10 rounded-full blur-[100px]"></div>
      </div>

      {/* ONBOARDING FLOW SIDE (RIGHT SIDE - SCROLLABLE) */}
      <div className="w-full lg:w-2/3 flex flex-col items-center bg-slate-50 min-h-screen relative py-8 px-4 sm:px-10 overflow-y-auto">
        
        {/* Progress Nav */}
        <div className="w-full max-w-3xl mb-10">
          <div className="flex justify-between items-center mb-4">
             <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? "w-8 bg-indigo-600 shadow-md shadow-indigo-100" : "w-2 bg-gray-200"}`}></div>
                ))}
             </div>
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-white px-3 py-1.5 rounded-full border border-indigo-50 shadow-sm">
              Page {step} of 5
            </span>
          </div>
        </div>

        <div className="w-full max-w-3xl">
          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] sm:rounded-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.02)] border border-gray-100">
            
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Choose your role</h2>
                  <p className="text-gray-500 mt-2 text-lg">Tell us how you plan to use HireLabour.</p>
                  <ErrorMsg field="role" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {roles.map((role, i) => (
                    <button key={i} onClick={() => handleRoleSelect(role)} className={`group relative text-left p-6 sm:p-8 rounded-[2.5rem] border-2 transition-all duration-300 ${formData.role === role ? "border-indigo-600 bg-indigo-50/30 shadow-xl shadow-indigo-100/50" : "border-gray-50 bg-gray-50/50 hover:border-indigo-100 hover:bg-white hover:shadow-lg"}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${formData.role === role ? "bg-indigo-600 text-white rotate-6" : "bg-white text-gray-400 group-hover:text-indigo-600"}`}><span className="text-lg font-black">{role[0]}</span></div>
                        {formData.role === role && <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce"></div>}
                      </div>
                      <span className={`font-black text-xl block ${formData.role === role ? "text-indigo-900" : "text-gray-800"}`}>{role}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-6 duration-700">
                <button onClick={handleBack} className="mb-8 flex items-center text-gray-400 hover:text-indigo-600 font-bold transition group"><HiChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform" /> Back</button>
                <div className="mb-10 text-left">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight italic">Tell us about your work</h2>
                  <p className="text-gray-500 mt-2 text-lg">Personalize your professional preference.</p>
                  <ErrorMsg field="survey" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar pb-4">
                  {workQuestions.map((q) => (
                    <div key={q.id} className="flex flex-col justify-between p-6 rounded-3xl bg-slate-50/50 border border-slate-100 hover:border-indigo-100 transition-all hover:bg-white hover:shadow-sm">
                      <p className="text-gray-700 font-bold leading-snug mb-4">{q.label}</p>
                      <div className="flex bg-gray-100 p-1.5 rounded-2xl w-full">
                        <button onClick={() => handleSurveyToggle(q.id, true)} className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${formData.workDetails[q.id] === true ? "bg-white text-indigo-600 shadow-md" : "text-gray-400 hover:text-gray-600"}`}>YES</button>
                        <button onClick={() => handleSurveyToggle(q.id, false)} className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${formData.workDetails[q.id] === false ? "bg-white text-indigo-600 shadow-md" : "text-gray-400 hover:text-gray-600"}`}>NO</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10"><button onClick={handleNext} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 sm:py-6 rounded-3xl transition shadow-2xl flex items-center justify-center gap-3 group transform hover:scale-[1.01]">CONTINUE <HiArrowRight className="group-hover:translate-x-1" /></button></div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-6 duration-700 text-left">
                <button onClick={handleBack} className="mb-8 flex items-center text-gray-400 hover:text-indigo-600 font-bold transition group"><HiChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform" /> Back</button>
                <div className="mb-10">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Basic Information</h2>
                  <p className="text-gray-500 mt-2 text-lg">Set up your profile identity.</p>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input type="text" placeholder="John Doe" className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold text-gray-700 ${errors.fullName ? "border-red-500 shadow-sm shadow-red-50" : "border-gray-100 focus:border-indigo-500 focus:bg-white"}`} value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} />
                        <ErrorMsg field="fullName" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                        <input type="text" placeholder="+91 98..." maxLength="14" className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold text-gray-700 ${errors.phone ? "border-red-500 shadow-sm shadow-red-50" : "border-gray-100 focus:border-indigo-500 focus:bg-white"}`} value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                        <ErrorMsg field="phone" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" placeholder="yourname@domain.com" className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold text-gray-700 ${errors.email ? "border-red-500 shadow-sm shadow-red-50" : "border-gray-100 focus:border-indigo-500 focus:bg-white"}`} value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
                    <ErrorMsg field="email" />
                  </div>
                  <div className="mt-10"><button onClick={handleNext} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 sm:py-6 rounded-3xl transition shadow-2xl flex items-center justify-center gap-3 group transform hover:scale-[1.01]">CONTINUE <HiArrowRight className="group-hover:translate-x-1" /></button></div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-right-6 duration-700 text-left">
                <button onClick={handleBack} className="mb-6 flex items-center text-gray-400 hover:text-indigo-600 font-bold transition group"><HiChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform" /> Back</button>
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight italic">Project & Business</h2>
                  <p className="text-gray-500 mt-2 text-lg">Detailed professional summary.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar pb-6">
                  <div className="space-y-1.5"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Project Name</label><input type="text" placeholder="Project Name" className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold ${errors.projectName ? "border-red-400" : "border-gray-100 focus:border-indigo-500"}`} value={formData.projectName} onChange={(e) => handleInputChange("projectName", e.target.value)} /><ErrorMsg field="projectName" /></div>
                  <div className="space-y-1.5"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Project Type</label><input type="text" placeholder="Civil" className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold ${errors.projectType ? "border-red-400" : "border-gray-100 focus:border-indigo-500"}`} value={formData.projectType} onChange={(e) => handleInputChange("projectType", e.target.value)} /><ErrorMsg field="projectType" /></div>
                  <div className="space-y-1.5"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Business Type</label><input type="text" placeholder="Proprietor" className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold ${errors.businessType ? "border-red-400" : "border-gray-100 focus:border-indigo-500"}`} value={formData.businessType} onChange={(e) => handleInputChange("businessType", e.target.value)} /><ErrorMsg field="businessType" /></div>
                  <div className="space-y-1.5"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Business Phone</label><input type="text" placeholder="+91 22XXXX" maxLength="14" className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold ${errors.businessPhone ? "border-red-400" : "border-gray-100 focus:border-indigo-500"}`} value={formData.businessPhone} onChange={(e) => handleInputChange("businessPhone", e.target.value)} /><ErrorMsg field="businessPhone" /></div>
                  <div className="space-y-1.5"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Pincode</label><input type="text" placeholder="000000" className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold ${errors.pincode ? "border-red-400" : "border-gray-100 focus:border-indigo-500"}`} value={formData.pincode} onChange={(e) => handleInputChange("pincode", e.target.value)} /><ErrorMsg field="pincode" /></div>
                  <div className="space-y-1.5"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">State</label><input type="text" placeholder="State" className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold ${errors.state ? "border-red-400" : "border-gray-100 focus:border-indigo-500"}`} value={formData.state} onChange={(e) => handleInputChange("state", e.target.value)} /><ErrorMsg field="state" /></div>
                  <div className="space-y-1.5"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">City</label><input type="text" placeholder="City" className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold ${errors.city ? "border-red-400" : "border-gray-100 focus:border-indigo-500"}`} value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} /><ErrorMsg field="city" /></div>
                  <div className="space-y-1.5"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Landmark</label><input type="text" placeholder="Near..." className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition font-bold ${errors.landmark ? "border-red-400" : "border-gray-100 focus:border-indigo-500"}`} value={formData.landmark} onChange={(e) => handleInputChange("landmark", e.target.value)} /><ErrorMsg field="landmark" /></div>
                </div>
                <div className="mt-10"><button onClick={handleNext} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 sm:py-6 rounded-3xl transition shadow-2xl flex items-center justify-center gap-3 group transform hover:scale-[1.01]">CONTINUE <HiArrowRight className="group-hover:translate-x-1" /></button></div>
              </div>
            )}

            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-right-6 duration-700 text-left">
                <button onClick={handleBack} className="mb-8 flex items-center text-gray-400 hover:text-indigo-600 font-bold transition group"><HiChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform" /> Back</button>
                <div className="mb-10 text-center"><h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight italic">Almost there!</h2><p className="text-gray-500 mt-2 text-lg">Final optional details and summary.</p></div>
                <div className="space-y-8 mb-10 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2"><HiGlobeAlt className="text-indigo-400" /> Website <span className="text-indigo-200 text-[8px] font-medium">(OPTIONAL)</span></label><input type="url" placeholder="https://..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-indigo-500 font-bold" value={formData.website} onChange={(e) => handleInputChange("website", e.target.value)} /></div>
                    <div className="space-y-3"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2"><HiCurrencyDollar className="text-indigo-400" /> turnover <span className="text-indigo-200 text-[8px] font-medium">(OPTIONAL)</span></label><input type="text" placeholder="e.g. 5 Cr" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-indigo-500 font-bold" value={formData.turnover} onChange={(e) => handleInputChange("turnover", e.target.value)} /></div>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">Summary Preview</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-slate-50/50 rounded-[2.5rem] border border-slate-100"><p className="text-[9px] font-black text-gray-400 uppercase mb-1">Assigned Role</p><p className="font-black text-indigo-900 truncate">{formData.role}</p></div>
                      <div className="p-6 bg-slate-50/50 rounded-[2.5rem] border border-slate-100"><p className="text-[9px] font-black text-gray-400 uppercase mb-1">Operational City</p><p className="font-black text-indigo-900 truncate">{formData.city}</p></div>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}><button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-6 rounded-[2.5rem] transition shadow-2xl scale-[1.02]">FINISH ONBOARDING <HiArrowRight /></button></form>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Onboarding;