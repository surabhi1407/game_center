import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-8 px-4 text-center">
      <p className="mb-4 text-lg text-white/80">
        Like our game selections? Help us keep the arcade running!
      </p>
      <a
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-arcade-pink px-8 py-4 font-arcade text-lg text-white shadow-lg transition-transform hover:scale-105 hover:bg-opacity-90"
        href="#"
      >
        <span className="material-symbols-outlined text-2xl">coffee</span>
        <span>Buy us a Coffee</span>
      </a>
    </div>
  );
};

export default Footer;