import React, { useRef, useEffect, useState } from 'react';

interface PongGameProps {
  onScoreUpdate: (p1: number, p2: number) => void;
  isPlaying: boolean;
  gameStarted: boolean;
  setGameStarted: (started: boolean) => void;
}

export const PongGame: React.FC<PongGameProps> = ({ onScoreUpdate, isPlaying, gameStarted, setGameStarted }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  
  // Game state refs (mutable for performance in game loop)
  const gameState = useRef({
    ball: { x: 400, y: 225, dx: 5, dy: 5, radius: 8 },
    paddle1: { x: 20, y: 175, width: 15, height: 100, dy: 0, speed: 8 },
    paddle2: { x: 765, y: 175, width: 15, height: 100, dy: 0, speed: 6 }, // AI paddle slower
    score: { p1: 0, p2: 0 },
    keys: { w: false, s: false, up: false, down: false }
  });

  const resetBall = (direction: number) => {
    gameState.current.ball.x = 400;
    gameState.current.ball.y = 225;
    // Serve towards the player who just lost a point, or random
    gameState.current.ball.dx = direction * 5; 
    gameState.current.ball.dy = (Math.random() * 6 - 3);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'w') gameState.current.keys.w = true;
      if (e.key.toLowerCase() === 's') gameState.current.keys.s = true;
      if (e.key === 'ArrowUp') gameState.current.keys.up = true;
      if (e.key === 'ArrowDown') gameState.current.keys.down = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'w') gameState.current.keys.w = false;
      if (e.key.toLowerCase() === 's') gameState.current.keys.s = false;
      if (e.key === 'ArrowUp') gameState.current.keys.up = false;
      if (e.key === 'ArrowDown') gameState.current.keys.down = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 800;
    canvas.height = 450;

    const update = () => {
      if (!isPlaying || !gameStarted) return;

      const state = gameState.current;

      // Player 1 Movement
      if (state.keys.w) state.paddle1.y = Math.max(0, state.paddle1.y - state.paddle1.speed);
      if (state.keys.s) state.paddle1.y = Math.min(canvas.height - state.paddle1.height, state.paddle1.y + state.paddle1.speed);

      // AI Movement (Player 2)
      // Simple tracking with reaction delay logic simulated by speed
      const targetY = state.ball.y - state.paddle2.height / 2;
      if (targetY < state.paddle2.y) {
        state.paddle2.y = Math.max(0, state.paddle2.y - state.paddle2.speed);
      } else if (targetY > state.paddle2.y) {
        state.paddle2.y = Math.min(canvas.height - state.paddle2.height, state.paddle2.y + state.paddle2.speed);
      }

      // Ball Movement
      state.ball.x += state.ball.dx;
      state.ball.y += state.ball.dy;

      // Wall Collision (Top/Bottom)
      if (state.ball.y - state.ball.radius < 0 || state.ball.y + state.ball.radius > canvas.height) {
        state.ball.dy *= -1;
      }

      // Paddle Collision (Player 1)
      if (
        state.ball.x - state.ball.radius < state.paddle1.x + state.paddle1.width &&
        state.ball.y > state.paddle1.y &&
        state.ball.y < state.paddle1.y + state.paddle1.height
      ) {
        state.ball.dx *= -1.05; // Speed up slightly
        state.ball.x = state.paddle1.x + state.paddle1.width + state.ball.radius; // Push out
        
        // Add spin based on where it hits the paddle
        const hitPoint = state.ball.y - (state.paddle1.y + state.paddle1.height / 2);
        state.ball.dy = hitPoint * 0.2;
      }

      // Paddle Collision (Player 2 / AI)
      if (
        state.ball.x + state.ball.radius > state.paddle2.x &&
        state.ball.y > state.paddle2.y &&
        state.ball.y < state.paddle2.y + state.paddle2.height
      ) {
        state.ball.dx *= -1.05;
        state.ball.x = state.paddle2.x - state.ball.radius;
        
        const hitPoint = state.ball.y - (state.paddle2.y + state.paddle2.height / 2);
        state.ball.dy = hitPoint * 0.2;
      }

      // Scoring
      if (state.ball.x < 0) {
        state.score.p2 += 1;
        onScoreUpdate(state.score.p1, state.score.p2);
        resetBall(1);
      } else if (state.ball.x > canvas.width) {
        state.score.p1 += 1;
        onScoreUpdate(state.score.p1, state.score.p2);
        resetBall(-1);
      }
    };

    const draw = () => {
      // Clear background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Center Line
      ctx.setLineDash([10, 15]);
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.strokeStyle = '#2d0b4d'; // Retro purple dim
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.setLineDash([]);

      const state = gameState.current;

      // Draw Paddles
      ctx.fillStyle = '#00f0ff'; // Retro Cyan for P1
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00f0ff';
      ctx.fillRect(state.paddle1.x, state.paddle1.y, state.paddle1.width, state.paddle1.height);

      ctx.fillStyle = '#f43f8e'; // Retro Pink for P2
      ctx.shadowColor = '#f43f8e';
      ctx.fillRect(state.paddle2.x, state.paddle2.y, state.paddle2.width, state.paddle2.height);

      // Draw Ball
      ctx.beginPath();
      ctx.arc(state.ball.x, state.ball.y, state.ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#fffc40'; // Retro Yellow
      ctx.shadowColor = '#fffc40';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.closePath();
      
      // Reset Shadow
      ctx.shadowBlur = 0;

      if (!gameStarted) {
         ctx.fillStyle = 'rgba(0,0,0,0.7)';
         ctx.fillRect(0,0,canvas.width, canvas.height);
         ctx.font = '24px "Press Start 2P"';
         ctx.fillStyle = '#ffffff';
         ctx.textAlign = 'center';
         ctx.fillText("PRESS START", canvas.width/2, canvas.height/2);
      }
    };

    const loop = () => {
      update();
      draw();
      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, gameStarted, onScoreUpdate]);

  return (
    <div className="relative w-full aspect-[16/9] bg-black rounded-lg border-4 border-retro-cyan shadow-neon-cyan mb-8 overflow-hidden group">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-contain"
      />
      
      {!gameStarted && (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 hover:bg-black/20 transition-all z-10"
          onClick={() => setGameStarted(true)}
        >
          {/* Overlay managed by canvas draw, but this click handler ensures interactions work */}
        </div>
      )}

      {/* Retro scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,20,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[5] bg-[length:100%_2px,3px_100%] opacity-20"></div>
    </div>
  );
};

