import React from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/game/GameCard';
import CreatorCard from '../components/creator/CreatorCard';
import { games } from '../data/games';
import { creators } from '../data/creators';

const Home: React.FC = () => {
  const featuredGames = games.filter(g => g.isNew).slice(0, 5);
  const featuredCreators = creators.slice(0, 2);

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
              GAME HUB
            </h1>
            <h2 className="text-base font-normal leading-relaxed text-white/80 sm:text-lg">
              Welcome to the ultimate arcade gaming platform for kids aged 7-15!
              Play awesome games created by young developers just like you.
            </h2>
            <div className="flex justify-center mt-4">
              <Link
                to="/games"
                className="flex h-12 items-center justify-center rounded-lg bg-arcade-cyan px-6 font-arcade text-sm text-white transition-transform hover:scale-105"
              >
                Play Games
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Games */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-arcade text-3xl text-arcade-yellow" style={{ textShadow: '2px 2px 0 #4F46E5' }}>
            Featured Games
          </h2>
          <Link to="/games" className="text-arcade-cyan hover:text-arcade-yellow transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {featuredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      {/* Featured Creators */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-arcade text-3xl text-arcade-pink" style={{ textShadow: '2px 2px 0 #22D3EE' }}>
            Top Creators
          </h2>
          <Link to="/creators" className="text-arcade-cyan hover:text-arcade-yellow transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredCreators.map(creator => (
            <CreatorCard key={creator.id} member={creator} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

