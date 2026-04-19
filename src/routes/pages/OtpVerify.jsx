import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";

const OtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [msg, setMsg] = useState({ text: "", type: "" });
  const [timer, setTimer] = useState(299);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRefs = useRef([]);

  const phone = localStorage.getItem("phone") || "";

  // Redirect if no phone number
  useEffect(() => {
    if (!phone) {
      navigate("/login");
    }
  }, [phone, navigate]);

  // Timer
  useEffect(() => {
    if (timer <= 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const formatTimer = () => {
    const m = String(Math.floor(timer / 60)).padStart(2, "0");
    const s = String(timer % 60).padStart(2, "0");
    return timer > 0 ? `Expires in ${m}:${s}` : "Code has expired";
  };

  const maskedPhone = phone ? phone.replace(/(\d{5})(\d{4})/, "***** $2") : "";

  const handleChange = (val, i) => {
    const v = val.replace(/\D/g, "").slice(-1);
    const updated = [...otp];
    updated[i] = v;
    setOtp(updated);

    if (v && i < 3) {
      inputRefs.current[i + 1]?.focus();
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
    if (e.key === "Enter" && otp.join("").length === 4) {
      handleVerify();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    const updated = data.split("").slice(0, 4);
    setOtp([...updated, ...Array(4 - updated.length).fill("")]);

    if (updated.length < 4) {
      inputRefs.current[updated.length]?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("").trim();

    if (code.length !== 4) {
      setMsg({ text: "Please enter all 4 digits.", type: "error" });
      return;
    }

    setIsLoading(true);
    setMsg({ text: "", type: "" });

    try {
      // TODO: Replace this simulation with your actual API call later
      // For now, keeping your original test case
      await new Promise((resolve) => setTimeout(resolve, 800)); // simulate network delay

      if (phone === "9625122279" && code === "1234") {
        const userData = { phone, isLoggedIn: true };

        // Redux login
        dispatch(loginSuccess(userData));

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(userData));

        setMsg({ text: "Login successful! Redirecting...", type: "success" });

        setTimeout(() => {
          navigate("/onboarding");
        }, 1200);
      } else {
        setMsg({ text: "Invalid OTP. Please try again.", type: "error" });
        setOtp(["", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    } catch (error) {
      setMsg({ text: "Something went wrong. Please try again.", type: error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    if (timer > 0) return;

    setOtp(["", "", "", ""]);
    setMsg({ text: "", type: "" });
    setTimer(299);
    inputRefs.current[0]?.focus();

    // TODO: Add your resend OTP API call here
    alert("Resend OTP functionality will be added with backend integration");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left Decorative Panel */}
      <div className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 flex-col items-center justify-center p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 mb-6 mx-auto">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2 className="text-white text-3xl font-semibold tracking-tight mb-3">Verify OTP</h2>
          <p className="text-purple-200 text-lg max-w-[280px]">
            Confirm your identity with the code sent to your mobile number
          </p>
        </div>
      </div>

      {/* OTP Form Panel */}
      <div className="flex-1 flex items-center justify-center p-5 sm:p-8 bg-white min-h-screen">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Login
          </button>

          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            STEP 2 OF 3
          </div>

          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Enter OTP</h1>
          <p className="text-gray-600 mb-8">
            We have sent a 4-digit verification code to{" "}
            <span className="font-medium text-gray-900">{maskedPhone}</span>
          </p>

          {/* Message Alert */}
          {msg.text && (
            <div
              className={`px-4 py-3 rounded-xl text-sm mb-6 ${
                msg.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-100"
                  : "bg-red-50 text-red-600 border border-red-100"
              }`}
            >
              {msg.text}
            </div>
          )}

          {/* OTP Input Fields */}
          <div className="flex gap-4 sm:gap-5 mb-8">
            {otp.map((val, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onPaste={handlePaste}
                disabled={isLoading}
                className={`w-full h-16 sm:h-20 text-3xl font-semibold text-center border-2 rounded-2xl outline-none transition-all duration-200
                  ${val
                    ? "border-purple-600 bg-purple-50 text-purple-700"
                    : "border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  }`}
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={otp.join("").length !== 4 || isLoading}
            className="w-full flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 active:scale-[0.985] transition-all py-4 rounded-2xl text-white font-semibold text-lg shadow-lg shadow-purple-200"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </button>

          {/* Resend Code */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{" "}
              <span
                onClick={handleResend}
                className={`font-medium cursor-pointer transition-colors ${
                  timer > 0 ? "text-gray-400 cursor-not-allowed" : "text-purple-600 hover:text-purple-700"
                }`}
              >
                Resend code
              </span>
            </p>
            <p className="text-xs text-gray-400 mt-1.5">{formatTimer()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;