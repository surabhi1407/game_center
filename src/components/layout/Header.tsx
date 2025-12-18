import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="flex w-full items-center justify-between border-b-2 border-arcade-purple/50 bg-black/30 p-4 font-arcade text-white backdrop-blur-sm sm:px-6">
      <Link to="/" className="flex items-center gap-3 text-2xl tracking-tighter">
        <svg
          className="h-8 w-8 text-arcade-cyan"
          fill="currentColor"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 0L48 24 24 48 0 24 24 0ZM21.75 35.25V12.75L9.75 24l12 11.25Z"></path>
        </svg>
        <span className="text-shadow" style={{ textShadow: '2px 2px 0 #4F46E5' }}>
          GameHub
        </span>
      </Link>
      
      {/* Desktop Nav */}
      <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
        <Link 
          to="/" 
          className={`nav-link text-base ${isActive('/') ? 'active font-bold text-arcade-pink' : 'text-arcade-yellow'}`}
        >
          Home
        </Link>
        <Link 
          to="/games" 
          className={`nav-link text-base ${isActive('/games') ? 'active font-bold text-arcade-pink' : 'text-arcade-cyan'}`}
        >
          Games
        </Link>
        <Link 
          to="/creators" 
          className={`nav-link text-base ${isActive('/creators') ? 'active font-bold text-arcade-pink' : 'text-arcade-yellow'}`}
        >
          Creators
        </Link>
        <Link 
          to="/submit" 
          className={`nav-link text-base ${isActive('/submit') ? 'active font-bold text-arcade-pink' : 'text-arcade-cyan'}`}
        >
          Submit Game
        </Link>
      </nav>

      {/* Desktop Action */}
      <div className="hidden items-center gap-4 md:flex">
        <Link
          to="/support"
          className="flex h-10 items-center gap-2 rounded-md bg-arcade-pink px-4 py-2 text-sm transition-transform hover:scale-105"
        >
          <span className="material-symbols-outlined text-base">favorite</span>
          <span>Support Us</span>
        </Link>
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

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 flex flex-col bg-background-dark border-b-2 border-arcade-purple/50 p-4 shadow-lg md:hidden">
          <Link to="/" className={`nav-link py-2 text-base ${isActive('/') ? 'font-bold text-arcade-pink' : 'text-arcade-yellow'}`}>
            Home
          </Link>
          <Link to="/games" className={`nav-link py-2 text-base ${isActive('/games') ? 'font-bold text-arcade-pink' : 'text-arcade-cyan'}`}>
            Games
          </Link>
          <Link to="/creators" className={`nav-link py-2 text-base ${isActive('/creators') ? 'font-bold text-arcade-pink' : 'text-arcade-yellow'}`}>
            Creators
          </Link>
          <Link to="/submit" className={`nav-link py-2 text-base ${isActive('/submit') ? 'font-bold text-arcade-pink' : 'text-arcade-cyan'}`}>
            Submit Game
          </Link>
          <Link to="/support" className="mt-2 flex items-center justify-center gap-2 rounded-md bg-arcade-pink px-4 py-2 text-base">
            <span className="material-symbols-outlined text-base">favorite</span>
            <span>Support Us</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

