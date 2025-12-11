import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="px-4">
      <div
        className="flex min-h-[400px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 text-center sm:gap-8"
        aria-label="Abstract colorful sci-fi nebula background"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16, 25, 34, 0.6) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDir9WmGR9O1-iqrJqLCW_-SK7Cf8CZICP7YZGStAn0OCACbwA2VvJeL2Fl9BbkMBfga1FkmKFsSH3m_rhdB9CiSDvpCcMFLwWyjb8LNd7Qu4cdl_t8rLE7x8AV1-JlyJnQqM5mmeOz2HzfIEOXbC4g5mM-2l9_x7_FUwFTQiAcqgM2BbP21gJRPfEPZ5R4ac1wQB2t8n3LQEbWAtWd5AWQooSc6n499BvmATWI_IdG-thzOrjQ9_t59PP8t0HCC0C5ealfz9R0sqk6")',
        }}
      >
        <div className="flex max-w-2xl flex-col gap-4">
          <h1 className="font-arcade text-5xl leading-tight text-white sm:text-7xl text-shadow">
            MEET THE CREW
          </h1>
          <h2 className="text-base font-normal leading-relaxed text-white/80 sm:text-lg">
            Welcome, gamer! Ever wonder who finds all the awesome games on this
            site? Meet our team of expert curators! They play tons of games to
            bring you the very best.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;