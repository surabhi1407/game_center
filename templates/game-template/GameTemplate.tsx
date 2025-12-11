import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
// Import your game engine component here
// import { YourGameEngine } from '../../games/your-game/YourGameEngine';

interface GameTemplateProps {
  gameTitle: string;
  gameSlug: string;
  creatorName: string;
  creatorBadge?: string;
}

/**
 * Game Template Component
 * 
 * This is a reusable template for creating new game pages.
 * Copy this file and customize it for your game.
 */
const GameTemplate: React.FC<GameTemplateProps> = ({ 
  gameTitle, 
  gameSlug, 
  creatorName,
  creatorBadge = "Featured"
}) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  const handleScoreUpdate = useCallback((newScore: number) => {
    setScore(newScore);
  }, []);

  return (
    <div className="relative flex flex-col w-full bg-retro-purple text-white font-display px-4 py-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Link className="text-white/60 hover:text-white text-sm font-medium leading-normal transition-colors" to="/">
            Home
          </Link>
          <span className="text-white/60 text-sm font-medium leading-normal">/</span>
          <Link className="text-white/60 hover:text-white text-sm font-medium leading-normal transition-colors" to="/games">
            Games
          </Link>
          <span className="text-white/60 text-sm font-medium leading-normal">/</span>
          <span className="text-white text-sm font-medium leading-normal">{gameTitle}</span>
        </div>

        {/* Title & Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <h1 className="text-retro-yellow font-arcade text-4xl sm:text-5xl uppercase" style={{ textShadow: "3px 3px 0px #f43f8e" }}>
            {gameTitle}
          </h1>
          <div className="flex gap-3">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-retro-pink/20 px-3 border border-retro-pink">
              <span className="material-symbols-outlined text-retro-yellow text-base">star</span>
              <p className="text-white text-sm font-medium leading-normal">{creatorBadge}</p>
            </div>
          </div>
        </div>

        {/* Score Display */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex w-full md:w-auto flex-wrap gap-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-lg p-4 bg-black/20 border border-white/10">
              <p className="text-white/80 font-arcade text-xs leading-normal">Score</p>
              <p className="text-retro-cyan font-arcade text-3xl leading-tight">{score}</p>
            </div>
          </div>
          
          {/* Controls Info - Customize for your game */}
          <div className="flex items-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-md border border-retro-cyan/50 bg-black/20 size-8 font-arcade text-sm text-retro-cyan">↑</div>
              <div className="flex items-center justify-center rounded-md border border-retro-cyan/50 bg-black/20 size-8 font-arcade text-sm text-retro-cyan">↓</div>
            </div>
            <p className="text-sm">to move</p>
          </div>
        </div>

        {/* Game Area - Replace with your game component */}
        <div className="relative w-full aspect-[16/9] bg-black rounded-lg border-4 border-retro-cyan shadow-neon-cyan mb-8 overflow-hidden">
          {/* <YourGameEngine 
            onScoreUpdate={handleScoreUpdate} 
            isPlaying={true} 
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
          /> */}
          <div className="flex items-center justify-center h-full">
            <p className="font-arcade text-white text-xl">Your Game Goes Here</p>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex w-full items-center justify-between gap-4 mt-8">
          <Link 
            to="/games"
            className="flex items-center justify-center gap-2 rounded-lg h-10 bg-white/10 hover:bg-white/20 text-white text-sm font-bold leading-normal tracking-[0.015em] px-4 transition-colors"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span> Back to Games
          </Link>
          <button 
            aria-label="Toggle full-screen mode" 
            className="flex items-center justify-center overflow-hidden rounded-lg size-10 bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <span className="material-symbols-outlined text-xl">fullscreen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameTemplate;

