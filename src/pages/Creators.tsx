import React from 'react';
import { Link } from 'react-router-dom';
import CreatorCard from '../components/creator/CreatorCard';
import { creators, gameMaster } from '../data/creators';

const Creators: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <div className="px-4">
        <div
          className="flex h-[350px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 text-center sm:gap-8"
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

      {/* Young Creators Section */}
      <div className="px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} member={creator} />
          ))}
        </div>
      </div>

      {/* Game Master Section */}
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-arcade-pink bg-gradient-to-br from-arcade-purple/20 to-arcade-cyan/20 p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div
                  className="h-40 w-40 rounded-full bg-cover bg-center border-4 border-arcade-pink shadow-lg"
                  role="img"
                  aria-label="Game Master avatar"
                  style={{ backgroundImage: `url("${gameMaster.imageUrl}")` }}
                ></div>
              </div>
              
              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-arcade text-2xl text-white mb-2">{gameMaster.name}</h3>
                <p className="text-arcade-yellow font-bold text-lg mb-4">Game Master</p>
                <p className="text-white/90 leading-relaxed mb-4">
                  I use AI to transform kids' creative ideas into playable games, making coding fun and accessible for everyone. Every game submission becomes a reality through the magic of AI-powered development!
                </p>
                
                {/* GitHub Link */}
                <a
                  href={gameMaster.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-black/50 border-2 border-white/20 px-4 py-2 text-white transition-all hover:border-arcade-cyan hover:bg-black/70"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View GitHub</span>
                </a>
              </div>
            </div>
            
            {/* Call to Action - Clickable Link */}
            <Link 
              to="/submit"
              className="w-full mt-4 p-4 rounded-lg bg-arcade-yellow/10 border border-arcade-yellow hover:bg-arcade-yellow/20 transition-all cursor-pointer"
            >
              <p className="text-white/90 text-center">
                <span className="material-symbols-outlined text-arcade-yellow text-base align-middle mr-2">lightbulb</span>
                <span className="underline">Submit your ideas and see them come alive!</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;

