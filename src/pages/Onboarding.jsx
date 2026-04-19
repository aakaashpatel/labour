import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiUser, HiBriefcase, HiArrowRight, HiChevronLeft } from "react-icons/hi";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
  });
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving profile data
    console.log("Saving profile:", { role, ...formData });
    navigate("/");
  };

  return (
    <div className="min-h-[calc(100-64px)] bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Progress Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Step {step} of 2
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {step === 1 ? "Choose your role" : "Complete your profile"}
          </h1>
          <p className="text-gray-500 mt-2">
            {step === 1 
              ? "Tell us how you plan to use HireLabour" 
              : "Help us personalize your experience"}
          </p>
        </div>

        {step === 1 ? (
          /* Step 1: Role Selection */
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => handleRoleSelect("employer")}
              className="group bg-white p-8 rounded-3xl border-2 border-transparent hover:border-indigo-600 transition-all duration-300 text-left shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <HiUser size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hire Labour</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                I am looking for skilled workers for my projects, home repairs, or construction.
              </p>
            </button>

            <button
              onClick={() => handleRoleSelect("worker")}
              className="group bg-white p-8 rounded-3xl border-2 border-transparent hover:border-purple-600 transition-all duration-300 text-left shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <HiBriefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Join as Worker</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                I am a skilled worker looking for daily wage jobs or permanent work opportunities.
              </p>
            </button>
          </div>
        ) : (
          /* Step 2: Details Form */
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 sm:p-10">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors"
              >
                <HiChevronLeft size={20} />
                Back to role selection
              </button>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City / Location
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Where are you located?"
                    className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-100 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                  >
                    Finish Setup
                    <HiArrowRight size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;

