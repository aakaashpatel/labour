import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Panel */}
      <div className="hidden lg:flex w-5/12 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />

        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 mb-6 mx-auto">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
              />
              <circle cx="9" cy="7" r="4" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
              />
            </svg>
          </div>

          <h1 className="text-white text-4xl font-semibold tracking-tight mb-2">
            HireLabour
          </h1>
          <p className="text-purple-200 text-lg max-w-[260px]">
            India's trusted platform for hiring daily wage workers
          </p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-white min-h-screen">
        <div className="w-full max-w-[340px]">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
            Welcome back
          </h1>
          <p className="text-gray-600 mb-8">
            Enter your mobile number to receive a one-time password
          </p>

          {/* Phone Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>

            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium pointer-events-none">
                +91
              </div>

              <input
                type="tel"
                inputMode="numeric"
                placeholder="98765 43210"
                value={phone}
                onChange={handleChange}
                className={`w-full pl-16 pr-5 py-4 text-lg border-2 rounded-2xl outline-none transition-all duration-200
                  ${
                    phone.length === 10
                      ? "border-purple-600 focus:ring-4 focus:ring-purple-100"
                      : "border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  }`}
                disabled={isLoading}
                autoFocus
              />
            </div>

            {/* Error Message */}
            <div className="mt-2 min-h-[20px]">
              <p className="text-sm text-red-600 font-medium">{error}</p>
            </div>
          </div>

          {/* Send OTP Button */}
          <button
            onClick={handleSendOtp}
            disabled={phone.length !== 10 || isLoading}
            className="w-full flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 
                       active:scale-[0.985] transition-all py-4 rounded-2xl text-white font-semibold text-lg 
                       shadow-lg shadow-purple-200 disabled:shadow-none disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending OTP...
              </>
            ) : (
              <>
                Send OTP
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </>
            )}
          </button>

          {/* Terms */}
          <p className="text-center text-xs text-gray-500 mt-8 leading-relaxed">
            By continuing, you agree to our{" "}
            <span className="text-purple-600 hover:underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-purple-600 hover:underline cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
