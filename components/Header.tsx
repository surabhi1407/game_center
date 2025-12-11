import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex w-full items-center justify-between border-b-2 border-arcade-purple/50 bg-black/30 p-4 font-arcade text-white backdrop-blur-sm sm:px-6">
      <a className="flex items-center gap-3 text-2xl tracking-tighter" href="#">
        <svg
          className="h-8 w-8 text-arcade-cyan"
          fill="currentColor"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 0L48 24 24 48 0 24 24 0ZM21.75 35.25V12.75L9.75 24l12 11.25Z"></path>
        </svg>
        <span className="text-shadow" style={{ textShadow: '2px 2px 0 #4F46E5' }}>
          GameZone
        </span>
      </a>
      
      {/* Desktop Nav */}
      <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
        <a className="nav-link text-arcade-yellow" href="#">
          Home
        </a>
        <a className="nav-link text-arcade-cyan" href="#">
          Games
        </a>
        <a className="nav-link active font-bold text-arcade-pink" href="#">
          About
        </a>
      </nav>

      {/* Desktop Action */}
      <div className="hidden items-center gap-4 md:flex">
        <a
          className="flex h-10 items-center gap-2 rounded-md bg-arcade-pink px-4 py-2 text-sm transition-transform hover:scale-105"
          href="#"
        >
          <span className="material-symbols-outlined text-base">coffee</span>
          <span>Buy Coffee</span>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden">
        <button 
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown (Simple implementation) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 flex flex-col bg-background-dark border-b-2 border-arcade-purple/50 p-4 shadow-lg md:hidden">
           <a className="nav-link text-arcade-yellow py-2" href="#">Home</a>
           <a className="nav-link text-arcade-cyan py-2" href="#">Games</a>
           <a className="nav-link active font-bold text-arcade-pink py-2" href="#">About</a>
           <a className="mt-2 flex items-center justify-center gap-2 rounded-md bg-arcade-pink px-4 py-2 text-sm" href="#">
              <span className="material-symbols-outlined text-base">coffee</span>
              <span>Buy Coffee</span>
           </a>
        </div>
      )}
    </header>
  );
};

export default Header;