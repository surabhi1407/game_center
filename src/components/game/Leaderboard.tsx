import React from 'react';

const scores = [
  { rank: "1.", name: "PixelMaster", score: 9950, active: true },
  { rank: "2.", name: "ArcadeQueen", score: 8700, active: false },
  { rank: "3.", name: "RetroRider", score: 7500, active: false },
  { rank: "4.", name: "GlitchGamer", score: 6230, active: false },
  { rank: "5.", name: "SynthWavePro", score: 5100, active: false },
];

export const Leaderboard: React.FC = () => {
  return (
    <div className="w-full bg-black/30 border border-retro-pink/50 rounded-lg p-6 shadow-neon-pink">
      <h2 className="font-arcade text-retro-yellow text-2xl text-center mb-6">LEADERBOARD</h2>
      <div className="space-y-3">
        {scores.map((entry, index) => (
          <div 
            key={index}
            className={`flex justify-between items-center text-lg p-2 rounded ${
              entry.active 
                ? "bg-retro-yellow/20 border border-retro-yellow" 
                : ""
            }`}
          >
            <span className={`font-arcade ${entry.active ? 'text-retro-yellow' : 'text-white/80 opacity-' + (100 - index * 15)}`}>
              {entry.rank}
            </span>
            <span className={`font-display ${entry.active ? 'text-white' : 'text-white/80 opacity-' + (100 - index * 15)}`}>
              {entry.name}
            </span>
            <span className={`font-arcade ${entry.active ? 'text-retro-yellow' : 'text-white/80 opacity-' + (100 - index * 15)}`}>
              {entry.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

