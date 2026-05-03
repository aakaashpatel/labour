import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiShieldCheck, HiLightningBolt, HiUsers, HiLightningBolt as HiFastForward } from "react-icons/hi";
import heroImg from "../assets/image/hero.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Dynamic Background Image with subtle parallax effect simulation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[pulse_8s_ease-in-out_infinite] opacity-40 blur-[2px]"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Modern Gradient Overlay - Premium Dark Identity */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/80 to-indigo-900/40"></div>
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse delay-700"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <HiLightningBolt className="text-amber-400" />
             <span className="text-[10px] font-black text-white uppercase tracking-widest">New: Instant Matching Live</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Build Your <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent italic">
              Future Today.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            Connecting India's finest skilled labor with professional projects. 
            From commercial construction to home repairs — <span className="text-white font-bold underline decoration-indigo-500 decoration-2 underline-offset-4">find experts in seconds.</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <Link
              to="/signup"
              className="group h-16 sm:h-20 px-10 bg-indigo-600 text-white rounded-3xl font-black text-lg flex items-center justify-center gap-4 hover:bg-white hover:text-indigo-600 transition-all duration-500 shadow-2xl shadow-indigo-500/20 active:scale-95 w-full sm:w-auto"
            >
              Get Started Now
              <HiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform duration-500" />
            </Link>

            <Link
              to="/about"
              className="h-16 sm:h-20 px-10 border-2 border-white/10 bg-white/5 backdrop-blur-md text-white rounded-3xl font-black text-lg hover:bg-white/10 transition-all duration-500 active:scale-95 w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </div>

          {/* Featured Trust */}
          <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 delay-500">
             <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest"><HiShieldCheck size={20} /> Verified Pros</div>
             <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest"><HiUsers size={20} /> Community First</div>
             <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest"><HiFastForward size={20} /> Rapid Response</div>
          </div>
        </div>

        {/* Right side is intentionally empty or could house other assets later */}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
         <span className="text-[9px] font-black text-white uppercase tracking-[0.5em] rotate-90">Scroll</span>
         <div className="w-[1px] h-12 bg-white"></div>
      </div>
    </div>
  );
};

export default Hero;
