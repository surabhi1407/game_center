import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PongGame } from '../../games/pong/PongEngine';

const Pong: React.FC = () => {
  const [scores, setScores] = useState({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<'p1' | 'p2' | null>(null);
  const [playerName, setPlayerName] = useState('Player');
  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: "PixelMaster", score: 9950 },
    { rank: 2, name: "ArcadeQueen", score: 8700 },
    { rank: 3, name: "RetroRider", score: 7500 },
    { rank: 4, name: "GlitchGamer", score: 6230 },
    { rank: 5, name: "SynthWavePro", score: 5100 },
  ]);

  const WINNING_SCORE = 11;

  const handleScoreUpdate = useCallback((p1: number, p2: number) => {
    setScores({ p1, p2 });
    
    // Check for winner
    if (p1 >= WINNING_SCORE) {
      setGameOver(true);
      setWinner('p1');
      setGameStarted(false);
      // Add to leaderboard if top 5
      updateLeaderboard(p1);
    } else if (p2 >= WINNING_SCORE) {
      setGameOver(true);
      setWinner('p2');
      setGameStarted(false);
    }
  }, [playerName]);

  const updateLeaderboard = (finalScore: number) => {
    // Check if score qualifies for top 5
    if (finalScore > leaderboard[4].score) {
      const newEntry = { rank: 0, name: playerName, score: finalScore };
      const updatedBoard = [...leaderboard, newEntry]
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map((entry, index) => ({ ...entry, rank: index + 1 }));
      
      setLeaderboard(updatedBoard);
    }
  };

  const handleRestart = () => {
    setScores({ p1: 0, p2: 0 });
    setGameOver(false);
    setWinner(null);
    setGameStarted(true);
  };

  return (
    <div className="relative flex w-full bg-retro-purple text-white font-display px-4 py-8">
      <div className="w-full max-w-7xl mx-auto flex gap-6">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0 space-y-6">
          {/* Player Name Section */}
          <div className="bg-black/30 border border-retro-cyan/50 rounded-lg p-4">
            <h3 className="font-arcade text-retro-cyan text-sm mb-3">PLAYER NAME</h3>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              maxLength={15}
              className="w-full bg-black/50 border-2 border-retro-cyan/50 rounded px-3 py-2 text-white text-sm focus:border-retro-yellow focus:outline-none"
              placeholder="Enter name"
            />
            <p className="text-white/60 text-xs mt-2">Your name will appear on the leaderboard if you win!</p>
          </div>

          {/* How to Play Section */}
          <div className="bg-black/30 border border-retro-pink/50 rounded-lg p-4">
            <h3 className="font-arcade text-retro-yellow text-sm mb-3">HOW TO PLAY</h3>
            <div className="space-y-3 text-sm text-white/80">
              <div>
                <p className="font-bold text-retro-cyan mb-1">Controls:</p>
                <p>• Press <span className="font-arcade text-retro-cyan">W</span> to move up</p>
                <p>• Press <span className="font-arcade text-retro-cyan">S</span> to move down</p>
              </div>
              <div>
                <p className="font-bold text-retro-cyan mb-1">Goal:</p>
                <p>First to <span className="font-arcade text-retro-yellow">{WINNING_SCORE}</span> points wins!</p>
              </div>
              <div>
                <p className="font-bold text-retro-cyan mb-1">Scoring:</p>
                <p>Get the ball past your opponent's paddle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="flex-1 min-w-0">
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
            <span className="text-white text-sm font-medium leading-normal">Ping Pong</span>
          </div>

          {/* Title & Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h1 className="text-retro-yellow font-arcade text-4xl sm:text-5xl" style={{ textShadow: "3px 3px 0px #f43f8e" }}>
              PING PONG
            </h1>
            <div className="flex gap-3">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-retro-pink/20 px-3 border border-retro-pink">
                <span className="material-symbols-outlined text-retro-yellow text-base">star</span>
                <p className="text-white text-sm font-medium leading-normal">Marshal's Pick</p>
              </div>
            </div>
          </div>

          {/* Scoreboard */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex w-full md:w-auto flex-wrap gap-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-lg p-4 bg-black/20 border border-white/10">
                <p className="text-white/80 font-arcade text-xs leading-normal">{playerName}</p>
                <p className="text-retro-cyan font-arcade text-3xl leading-tight">{scores.p1}</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-lg p-4 bg-black/20 border border-white/10">
                <p className="text-white/80 font-arcade text-xs leading-normal">AI</p>
                <p className="text-white font-arcade text-3xl leading-tight">{scores.p2}</p>
              </div>
            </div>
            
            {/* Controls Info - Mobile */}
            <div className="flex lg:hidden items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-md border border-retro-cyan/50 bg-black/20 size-8 font-arcade text-sm text-retro-cyan">W</div>
                <div className="flex items-center justify-center rounded-md border border-retro-cyan/50 bg-black/20 size-8 font-arcade text-sm text-retro-cyan">S</div>
              </div>
              <p className="text-sm">to move</p>
            </div>
          </div>

          {/* Game Over Message */}
          {gameOver && (
            <div className="mb-4 p-4 rounded-lg bg-retro-yellow/20 border-2 border-retro-yellow text-center">
              <p className="font-arcade text-2xl text-retro-yellow mb-2">
                {winner === 'p1' ? `${playerName} WINS!` : 'AI WINS!'}
              </p>
              <p className="text-white/80 mb-3">
                Final Score: {scores.p1} - {scores.p2}
              </p>
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 rounded-lg bg-retro-cyan px-6 py-2 font-arcade text-sm text-black hover:bg-retro-cyan/80 transition-all"
              >
                <span className="material-symbols-outlined text-base">replay</span>
                Play Again
              </button>
            </div>
          )}

          {/* Game Area */}
          <PongGame 
            onScoreUpdate={handleScoreUpdate} 
            isPlaying={true} 
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
            gameOver={gameOver}
          />

          {/* Leaderboard */}
          <div className="w-full bg-black/30 border border-retro-pink/50 rounded-lg p-6 shadow-neon-pink mt-8">
            <h2 className="font-arcade text-retro-yellow text-2xl text-center mb-6">LEADERBOARD</h2>
            <div className="space-y-3">
              {leaderboard.map((entry, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center text-lg p-2 rounded"
                >
                  <span className="font-arcade text-white/80">
                    {entry.rank}.
                  </span>
                  <span className="font-display text-white/80">
                    {entry.name}
                  </span>
                  <span className="font-arcade text-white/80">
                    {entry.score}
                  </span>
                </div>
              ))}
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
    </div>
  );
};

export default Pong;
