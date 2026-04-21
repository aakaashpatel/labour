import React, { useState } from "react";
import { HiArrowRight, HiChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const roles = [
  "General Contractor",
  "Builder / Developer",
  "Staffing Agency",
  "Sub Contractor",
  "Worker",
];

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "",
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10 flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            HireLabour
          </h1>
          <p className="mt-4 text-indigo-100">
            Connect with the right people for your construction projects.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1581091870627-3c3d6bdfb2c1"
          alt="construction"
          className="rounded-2xl object-cover h-72 w-full"
        />

        <p className="text-sm text-indigo-200">
          ⚡ Fast hiring. Trusted workers.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">

          {/* Header */}
          <div className="mb-6">
            <p className="text-xs text-indigo-600 font-semibold uppercase">
              Step {step} of 2
            </p>

            <h2 className="text-2xl font-bold mt-1">
              {step === 1 && "Basic Information"}
              {step === 2 && "Select Your Role"}
            </h2>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:border-indigo-500 outline-none"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:border-indigo-500 outline-none"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:border-indigo-500 outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
              >
                Continue <HiArrowRight />
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">

              {roles.map((role, index) => (
                <button
                  key={index}
                  onClick={() => handleRoleSelect(role)}
                  className={`w-full text-left px-4 py-3 rounded-xl border ${
                    formData.role === role
                      ? "border-indigo-600 bg-indigo-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  {role}
                </button>
              ))}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleBack}
                  className="w-1/2 bg-gray-200 py-3 rounded-xl flex items-center justify-center"
                >
                  <HiChevronLeft /> Back
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={!formData.role}
                  className="w-1/2 bg-indigo-600 text-white py-3 rounded-xl flex items-center justify-center disabled:opacity-50"
                >
                  Submit <HiArrowRight />
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;