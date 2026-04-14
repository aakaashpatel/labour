import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/image/hero.png";
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Darker Blackish Gradient Overlay (as requested) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 pb-16">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          Find Skilled Labour <br />
          <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
            Near You Instantly
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Builder, Electrician, Plumber, Painter — sab ek jagah.
          <br />
          HireLabour ke saath apna kaam ab aur bhi aasaan.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/find-labour"
            className="group bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg 
                       flex items-center justify-center gap-3 hover:bg-gray-100 
                       active:scale-95 transition-all duration-300 shadow-xl w-full sm:w-auto"
          >
            Find Labour
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>

          <Link
            to="/signup"
            className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg 
                       hover:bg-white hover:text-black transition-all duration-300 
                       active:scale-95 w-full sm:w-auto"
          >
            Join as Worker
          </Link>
        </div>

        {/* Trust Stats - Removed Numbers (Now Zero as requested) */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center text-white/70 text-sm md:text-base">
          <div>
            <div className="font-semibold text-2xl md:text-3xl text-white">
              0
            </div>
            <div className="mt-1">Workers</div>
          </div>
          <div>
            <div className="font-semibold text-2xl md:text-3xl text-white">
              0
            </div>
            <div className="mt-1">Cities</div>
          </div>
          <div>
            <div className="font-semibold text-2xl md:text-3xl text-white">
              0
            </div>
            <div className="mt-1">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
