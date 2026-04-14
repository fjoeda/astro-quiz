import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import perfectBadge from '../assets/perfect-badge.png';
import cartoonRocket from '../assets/Cartoon rocket with fiery exhaust trail.png';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const score = location.state?.score || 0;
  const total = location.state?.total || 1;
  const percentage = (score / total) * 100;
  
  const isPerfect = score === total;
  const message = isPerfect 
    ? "Galactic Champion!" 
    : score >= total / 2 
      ? "Great Job, Space Explorer!" 
      : "Keep Exploring, Cadet!";

  return (
    <div className="flex-1 flex items-center justify-center p-4 md:p-8 w-full min-h-screen relative w-full h-full my-auto">
       <div className="bg-surface-container/60 backdrop-blur-2xl border border-outline-variant/10 rounded-[3rem] p-10 md:p-16 max-w-3xl w-full text-center relative z-10 shadow-[0_30px_60px_-15px_rgba(37,0,89,0.5)]">
       
          {/* Confetti / Stars */}
          <div className="absolute -top-10 left-10 animate-bounce text-secondary-container">
             <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>grade</span>
          </div>
          <div className="absolute -top-10 right-20 animate-pulse text-tertiary">
             <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>

          <div className="mb-12 relative inline-block">
             <div className="w-48 h-48 bg-gradient-to-tr from-primary-container to-tertiary-container rounded-full flex mx-auto items-center justify-center shadow-[0_0_80px_rgba(109,40,217,0.6)] relative z-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_50%)]"></div>
                <img 
                  src={isPerfect ? perfectBadge : cartoonRocket} 
                  alt={isPerfect ? 'Perfect Badge' : 'Rocket'}
                  className="w-32 h-32 object-contain drop-shadow-2xl relative z-10"
                />
             </div>
             
             {/* Score Badge */}
             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-surface-container-high border-[3px] border-surface-variant text-transparent bg-clip-text bg-gradient-to-br from-secondary to-secondary-container font-black text-4xl px-8 py-3 rounded-[2rem] shadow-2xl z-30 min-w-max flex items-center gap-2">
               {score} / {total}
               <span className="material-symbols-outlined text-secondary-container text-3xl shrink-0">star</span>
             </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-none mt-8">
             {message}
          </h2>
          
          <p className="text-2xl text-on-surface-variant mb-12 max-w-xl mx-auto leading-relaxed">
             You have completed this mission and learned so much about our amazing solar system.
          </p>

          <button
             onClick={() => navigate('/')}
             className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold text-2xl py-6 px-16 rounded-[2rem] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(109,40,217,0.3)] hover:shadow-[0_0_60px_rgba(211,187,255,0.4)] w-full sm:w-auto"
          >
             <div className="absolute inset-0 bg-white/20 group-hover:bg-white/0 transition-colors"></div>
             <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>refresh</span>
             <span>Play Again!</span>
          </button>
       </div>
    </div>
  );
};

export default ResultPage;