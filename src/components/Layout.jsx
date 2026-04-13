import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full top-0 sticky bg-[#11131d]/60 backdrop-blur-xl z-50 shadow-[0_0_20px_rgba(211,187,255,0.08)] border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#d3bbff] to-[#6d28d9] rounded-lg flex items-center justify-center rotate-12 transition-transform hover:rotate-0">
            <span className="material-symbols-outlined text-on-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>
              rocket_launch
            </span>
          </div>
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#d3bbff] to-[#6d28d9] font-['Plus_Jakarta_Sans'] tracking-tight">
            CosmoQuiz
          </h1>
        </Link>
      </div>
    </header>
  );
};

export const Layout = ({ children }) => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen overflow-x-hidden star-grid flex flex-col relative w-full">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-[80px] pointer-events-none"></div>
      <Header />
      <main className="flex-grow w-full flex flex-col pt-0">{children}</main>
    </div>
  );
};