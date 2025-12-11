/**
 * Game Engine Template
 * 
 * This is a basic template for creating canvas-based games.
 * Copy and customize this for your game logic.
 */

export interface GameState {
  // Define your game state here
  score: number;
  isRunning: boolean;
  // Add more state as needed
}

export class GameEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animationId: number = 0;
  private state: GameState;
  private onScoreUpdate?: (score: number) => void;

  constructor(canvas: HTMLCanvasElement, onScoreUpdate?: (score: number) => void) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');
    this.ctx = ctx;
    this.onScoreUpdate = onScoreUpdate;
    
    // Initialize game state
    this.state = {
      score: 0,
      isRunning: false
    };

    // Set canvas size
    this.canvas.width = 800;
    this.canvas.height = 450;
  }

  /**
   * Start the game loop
   */
  start() {
    this.state.isRunning = true;
    this.gameLoop();
  }

  /**
   * Stop the game loop
   */
  stop() {
    this.state.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  /**
   * Main game loop
   */
  private gameLoop = () => {
    if (!this.state.isRunning) return;

    this.update();
    this.draw();

    this.animationId = requestAnimationFrame(this.gameLoop);
  };

  /**
   * Update game logic
   */
  private update() {
    // Add your game logic here
    // Example: move objects, check collisions, update score, etc.
  }

  /**
   * Draw everything on canvas
   */
  private draw() {
    // Clear canvas
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Add your drawing code here
    // Example: draw player, enemies, background, etc.

    // Example: Draw a centered text
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '20px "Press Start 2P"';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Game Engine Template', this.canvas.width / 2, this.canvas.height / 2);
  }

  /**
   * Update score and notify parent component
   */
  private updateScore(newScore: number) {
    this.state.score = newScore;
    if (this.onScoreUpdate) {
      this.onScoreUpdate(newScore);
    }
  }

  /**
   * Handle keyboard input
   */
  handleKeyDown(key: string) {
    // Add keyboard controls here
    // Example: if (key === 'ArrowUp') movePlayer('up');
  }

  handleKeyUp(key: string) {
    // Handle key release
  }

  /**
   * Clean up resources
   */
  destroy() {
    this.stop();
  }
}

