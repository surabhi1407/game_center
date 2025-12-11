import React, { useRef } from 'react';
import GameCard from '../components/game/GameCard';
import { games, getGamesByCreator } from '../data/games';
import { creators } from '../data/creators';

const Games: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Banner */}
      <div className="px-4">
        <div
          className="flex h-[350px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 text-center sm:gap-8"
          style={{
            backgroundImage:
              'linear-gradient(rgba(16, 25, 34, 0.6) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDir9WmGR9O1-iqrJqLCW_-SK7Cf8CZICP7YZGStAn0OCACbwA2VvJeL2Fl9BbkMBfga1FkmKFsSH3m_rhdB9CiSDvpCcMFLwWyjb8LNd7Qu4cdl_t8rLE7x8AV1-JlyJnQqM5mmeOz2HzfIEOXbC4g5mM-2l9_x7_FUwFTQiAcqgM2BbP21gJRPfEPZ5R4ac1wQB2t8n3LQEbWAtWd5AWQooSc6n499BvmATWI_IdG-thzOrjQ9_t59PP8t0HCC0C5ealfz9R0sqk6")',
          }}
        >
          <div className="flex max-w-2xl flex-col gap-4">
            <h1 className="font-arcade text-4xl leading-tight text-white sm:text-6xl text-shadow">
              ALL GAMES
            </h1>
            <h2 className="text-base font-normal leading-relaxed text-white/80 sm:text-lg">
              Explore our collection of awesome arcade games!
            </h2>
          </div>
        </div>
      </div>

      {/* Games by Creator - Carousel */}
      {creators.map(creator => {
        const creatorGames = getGamesByCreator(creator.id);
        if (creatorGames.length === 0) return null;

        return (
          <GameCarousel 
            key={creator.id} 
            creatorName={creator.name} 
            games={creatorGames} 
          />
        );
      })}
    </div>
  );
};

// Carousel Component
interface GameCarouselProps {
  creatorName: string;
  games: any[];
}

const GameCarousel: React.FC<GameCarouselProps> = ({ creatorName, games }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 
          className="text-accent-cyan text-3xl sm:text-4xl font-heading leading-tight tracking-tighter"
          style={{ textShadow: '2px 2px 0px #A855F7' }}
        >
          {creatorName}'s Picks
        </h2>
        
        {/* Navigation Buttons */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-arcade-cyan/20 border-2 border-arcade-cyan text-arcade-cyan hover:bg-arcade-cyan hover:text-black transition-all"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-arcade-cyan/20 border-2 border-arcade-cyan text-arcade-cyan hover:bg-arcade-cyan hover:text-black transition-all"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {games.map(game => (
            <div key={game.id} className="flex-shrink-0 w-[200px] sm:w-[220px]">
              <GameCard game={game} />
            </div>
          ))}
        </div>

        {/* Gradient Overlays for visual effect */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-background-dark to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-background-dark to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Games;

