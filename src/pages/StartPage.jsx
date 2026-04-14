import React from 'react';
import { useNavigate } from 'react-router-dom';
import friendlyAstronaut from '../assets/Crayon Astronaut Ill.png';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 relative w-full h-full my-auto">
      {/* Decorative stars */}
      <div className="absolute top-20 right-10 animate-pulse text-secondary-container">
        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
      </div>
      <div className="absolute bottom-40 left-10 animate-pulse delay-700 text-secondary-container opacity-60">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
      </div>

      {/* Main Card */}
      <div className="bg-surface-container/60 backdrop-blur-2xl border border-outline-variant/20 rounded-[2rem] p-10 max-w-2xl w-full text-center relative z-10 shadow-[0_20px_40px_-15px_rgba(37,0,89,0.3)] shadow-[#6d28d9]/20">
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 flex items-center justify-center">
            <img 
              src={friendlyAstronaut} 
              alt="Friendly astronaut floating in space" 
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(109,40,217,0.4)]"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center animate-bounce shadow-[0_0_20px_rgba(255,219,60,0.4)]">
            <span className="material-symbols-outlined text-on-secondary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_awesome
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-white mb-4 tracking-[-0.02em]">
          Welcome to the<br />Space Academy!
        </h1>
        
        <p className="text-xl text-on-surface-variant mb-10 max-w-lg mx-auto leading-relaxed">
          Are you ready to explore the solar system? Put on your space suit and let's discover the planets!
        </p>

        <button
          onClick={() => navigate('/quiz')}
          className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold text-2xl py-6 px-12 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(109,40,217,0.3)] hover:shadow-[0_0_60px_rgba(211,187,255,0.4)] w-full sm:w-auto"
        >
          <div className="absolute inset-0 bg-white/20 group-hover:bg-white/0 transition-colors"></div>
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            flight_takeoff
          </span>
          <span>Start Mission!</span>
        </button>
      </div>
    </div>
  );
};

export default StartPage;