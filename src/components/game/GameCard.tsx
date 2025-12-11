import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  // Map our internal color names to the specific Tailwind classes from config
  const glowClasses = {
    primary: 'group-hover:border-primary group-hover:shadow-glow-primary',
    cyan: 'group-hover:border-accent-cyan group-hover:shadow-glow-cyan',
    yellow: 'group-hover:border-accent-yellow group-hover:shadow-glow-yellow',
    purple: 'group-hover:border-accent-purple group-hover:shadow-glow-purple',
    pink: 'group-hover:border-accent-pink group-hover:shadow-glow-pink',
  };

  const flagColors = {
    primary: 'bg-primary',
    cyan: 'bg-accent-cyan',
    yellow: 'bg-accent-yellow',
    purple: 'bg-accent-purple',
    pink: 'bg-accent-pink'
  };

  return (
    <Link to={`/games/${game.slug}`} className="group flex flex-col items-center cursor-pointer">
      <div 
        className={`relative w-full overflow-hidden rounded-lg bg-background-dark shadow-lg transition-all duration-300 group-hover:scale-105 border-2 border-transparent ${glowClasses[game.glowColor]}`}
      >
        <div className="aspect-[3/4] w-full bg-gray-700 p-2">
          <div 
            className="h-full w-full bg-cover bg-center pixel-art rounded-sm"
            style={{ backgroundImage: `url("${game.thumbnail}")` }}
            role="img" 
            aria-label={`Pixel art for ${game.title}`}
          />
        </div>
        
        {/* Title Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-black/70 p-2 text-center">
          <p className="font-heading text-xs sm:text-sm uppercase text-white truncate px-1">
            {game.title}
          </p>
        </div>

        {/* Flag Decoration */}
        {game.isNew && (
          <div 
            className={`absolute -top-1 right-2 h-4 w-6 ${flagColors['primary']}`} 
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)' }}
          />
        )}
      </div>
    </Link>
  );
};

export default GameCard;

