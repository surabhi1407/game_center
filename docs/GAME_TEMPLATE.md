# Game Development Guide

Complete workflow for adding new games to Game Hub, including Pygame to Canvas conversion.

## Overview

This guide covers:
1. Using the game template
2. Converting Pygame games to Canvas API
3. Integrating games into the platform
4. Testing and deployment

## Quick Start Checklist

- [ ] Copy game template
- [ ] Implement game logic
- [ ] Add game metadata
- [ ] Create game page
- [ ] Add route to App.tsx
- [ ] Test thoroughly
- [ ] Verify design consistency

## Step-by-Step Process

### Step 1: Copy the Template

```bash
# Copy the template to create your new game
cp -r templates/game-template src/games/your-game-name
```

**Template Structure:**
```
src/games/your-game-name/
├── GameEngine.tsx      # Core game logic
├── types.ts            # TypeScript types
└── README.md           # Game-specific notes
```

### Step 2: Implement Game Logic

Edit `src/games/your-game-name/GameEngine.tsx`:

**Required Implementation:**
```typescript
interface YourGameProps {
  onScoreUpdate: (score: number) => void;
  isPlaying: boolean;
  gameStarted: boolean;
  setGameStarted: (started: boolean) => void;
  gameOver: boolean;
  setGameOver: (over: boolean) => void;
}

export const YourGameEngine: React.FC<YourGameProps> = ({
  onScoreUpdate,
  isPlaying,
  gameStarted,
  setGameStarted,
  gameOver,
  setGameOver
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize game state
    const state = {
      // Your game state here
    };

    // Update function - game logic
    const update = () => {
      if (!isPlaying || !gameStarted || gameOver) return;
      
      // Update game objects
      // Check collisions
      // Update score
      // Check win/lose conditions
    };

    // Draw function - rendering
    const draw = () => {
      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw game objects
      // Draw UI elements
    };

    // Game loop
    let animationId: number;
    const gameLoop = () => {
      update();
      draw();
      animationId = requestAnimationFrame(gameLoop);
    };
    gameLoop();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying, gameStarted, gameOver]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={450}
      className="w-full rounded-lg border-2 border-arcade-cyan"
    />
  );
};
```

**Canvas Dimensions:**
- Standard size: 800x450px (16:9 aspect ratio)
- Responsive: Use `className="w-full"` for mobile scaling

### Step 3: Add Game Metadata

Edit `src/data/games.ts`:

```typescript
{
  id: 'unique-game-id',
  title: 'Your Game Name',
  slug: 'your-game-name',
  creator: 'creator-id', // Must match creator ID in creators.ts
  thumbnail: 'https://image-url.com/thumbnail.jpg',
  glowColor: 'cyan', // cyan, pink, yellow, purple
  category: 'action', // action, puzzle, arcade, strategy
  difficulty: 'medium', // easy, medium, hard
  description: 'Brief description of your game (1-2 sentences)',
  controls: [
    { key: 'W/S', action: 'Move paddle' },
    { key: 'Space', action: 'Start game' }
  ],
  features: [
    'Single player',
    'High score tracking',
    'Progressive difficulty'
  ]
}
```

**Thumbnail Requirements:**
- Aspect ratio: 3:4 (portrait)
- Recommended size: 300x400px
- Format: JPG or PNG
- Style: Match retro arcade aesthetic

### Step 4: Create Game Page

Create `src/pages/games/YourGame.tsx`:

```typescript
import React, { useState } from 'react';
import { YourGameEngine } from '../../games/your-game-name/GameEngine';
import { Leaderboard } from '../../components/game/Leaderboard';

const YourGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [playerName, setPlayerName] = useState('Player');

  const handleScoreUpdate = (newScore: number) => {
    setScore(newScore);
  };

  const handlePlayAgain = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <div className="px-4">
        <div
          className="flex h-[350px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 text-center sm:gap-8"
          style={{
            backgroundImage:
              'linear-gradient(rgba(16, 25, 34, 0.6) 0%, rgba(16, 25, 34, 0.9) 100%), url("YOUR_HERO_IMAGE_URL")',
          }}
        >
          <div className="flex max-w-2xl flex-col gap-4">
            <h1 className="font-arcade text-4xl leading-tight text-white sm:text-6xl text-shadow">
              YOUR GAME NAME
            </h1>
            <h2 className="text-base font-normal leading-relaxed text-white/80 sm:text-lg">
              Game description and tagline
            </h2>
          </div>
        </div>
      </div>

      {/* Game Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar (optional) */}
        <div className="w-full lg:w-1/4 flex flex-col gap-8">
          {/* Player name, instructions, leaderboard, etc. */}
        </div>

        {/* Main Game Area */}
        <div className="flex-1 min-w-0">
          {/* Score Display */}
          <div className="mb-4 flex justify-center gap-8">
            <div className="text-center">
              <p className="font-arcade text-retro-yellow text-sm">SCORE</p>
              <p className="font-arcade text-white text-3xl">{score}</p>
            </div>
          </div>

          {/* Game Canvas */}
          <YourGameEngine
            onScoreUpdate={handleScoreUpdate}
            isPlaying={true}
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
            gameOver={gameOver}
            setGameOver={setGameOver}
          />

          {/* Game Over Overlay */}
          {gameOver && (
            <div className="mt-8 flex flex-col items-center gap-4">
              <h2 className="font-arcade text-4xl text-arcade-pink">
                GAME OVER
              </h2>
              <p className="font-display text-xl text-white">
                Final Score: {score}
              </p>
              <button
                onClick={handlePlayAgain}
                className="flex h-12 items-center justify-center gap-2 rounded-lg bg-arcade-cyan px-8 font-arcade text-sm text-white transition-all hover:scale-105"
              >
                PLAY AGAIN
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourGame;
```

### Step 5: Add Route

Edit `App.tsx`:

```typescript
import YourGame from './src/pages/games/YourGame';

// Inside <Routes>:
<Route path="/games/your-game-name" element={<YourGame />} />
```

### Step 6: Test Locally

```bash
# Start development server
npm run dev

# Visit your game
# http://localhost:5173/games/your-game-name
```

## Pygame to Canvas Conversion

### Core Concept Mapping

| Pygame | Canvas API | Notes |
|--------|------------|-------|
| `pygame.init()` | `canvas.getContext('2d')` | Initialize rendering context |
| `pygame.display.set_mode()` | `canvas.width/height` | Set canvas dimensions |
| `pygame.draw.rect()` | `ctx.fillRect()` | Draw rectangles |
| `pygame.draw.circle()` | `ctx.arc()` | Draw circles |
| `clock.tick(60)` | `requestAnimationFrame()` | Game loop timing |
| `pygame.key.get_pressed()` | `addEventListener('keydown')` | Input handling |
| `screen.fill()` | `ctx.fillRect()` | Clear screen |
| `pygame.display.flip()` | Automatic | Canvas updates automatically |

### Display Setup

**Pygame:**
```python
screen = pygame.display.set_mode((800, 450))
screen.fill((0, 0, 0))
pygame.display.set_caption("My Game")
```

**Canvas:**
```typescript
const canvas = canvasRef.current;
canvas.width = 800;
canvas.height = 450;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

### Drawing Shapes

**Rectangle:**
```python
# Pygame
pygame.draw.rect(screen, (255, 0, 0), (x, y, width, height))
```
```typescript
// Canvas
ctx.fillStyle = '#ff0000';
ctx.fillRect(x, y, width, height);
```

**Circle:**
```python
# Pygame
pygame.draw.circle(screen, (0, 255, 0), (x, y), radius)
```
```typescript
// Canvas
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2);
ctx.fillStyle = '#00ff00';
ctx.fill();
```

**Line:**
```python
# Pygame
pygame.draw.line(screen, (255, 255, 255), (x1, y1), (x2, y2), width)
```
```typescript
// Canvas
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = width;
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
```

### Input Handling

**Pygame:**
```python
keys = pygame.key.get_pressed()
if keys[pygame.K_w]:
    player_y -= speed
if keys[pygame.K_s]:
    player_y += speed
```

**Canvas:**
```typescript
const keys = { w: false, s: false };

window.addEventListener('keydown', (e) => {
  if (e.key === 'w' || e.key === 'W') keys.w = true;
  if (e.key === 's' || e.key === 'S') keys.s = true;
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'w' || e.key === 'W') keys.w = false;
  if (e.key === 's' || e.key === 'S') keys.s = false;
});

// In update function:
if (keys.w) player.y -= speed;
if (keys.s) player.y += speed;
```

### Game Loop

**Pygame:**
```python
clock = pygame.time.Clock()
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # Update game logic
    update_game()
    
    # Draw everything
    screen.fill((0, 0, 0))
    draw_game()
    pygame.display.flip()
    
    clock.tick(60)  # 60 FPS
```

**Canvas:**
```typescript
let animationId: number;

function gameLoop() {
  // Update game logic
  update();
  
  // Clear and draw
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  draw();
  
  // Continue loop
  animationId = requestAnimationFrame(gameLoop);
}

// Start loop
gameLoop();

// Cleanup when component unmounts
return () => {
  cancelAnimationFrame(animationId);
};
```

### Sprites and Objects

**Pygame:**
```python
class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.rect = pygame.Rect(100, 100, 50, 50)
        self.speed = 5
    
    def update(self):
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            self.rect.x -= self.speed
```

**Canvas:**
```typescript
class Player {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  
  constructor() {
    this.x = 100;
    this.y = 100;
    this.width = 50;
    this.height = 50;
    this.speed = 5;
  }
  
  update(keys: { [key: string]: boolean }) {
    if (keys.ArrowLeft) this.x -= this.speed;
    if (keys.ArrowRight) this.x += this.speed;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
```

### Collision Detection

**Pygame:**
```python
if sprite1.rect.colliderect(sprite2.rect):
    # Collision detected
    handle_collision()
```

**Canvas:**
```typescript
function checkCollision(a: GameObject, b: GameObject): boolean {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

if (checkCollision(player, enemy)) {
  // Collision detected
  handleCollision();
}
```

### Text Rendering

**Pygame:**
```python
font = pygame.font.Font(None, 36)
text_surface = font.render("Score: 100", True, (255, 255, 255))
screen.blit(text_surface, (10, 10))
```

**Canvas:**
```typescript
ctx.font = '20px "Press Start 2P"';
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'left';
ctx.fillText('Score: 100', 10, 30);
```

### Common Patterns

**Moving Objects:**
```typescript
// Update position
obj.x += obj.velocityX;
obj.y += obj.velocityY;

// Bounce off walls
if (obj.x < 0 || obj.x + obj.width > canvas.width) {
  obj.velocityX *= -1;
}
if (obj.y < 0 || obj.y + obj.height > canvas.height) {
  obj.velocityY *= -1;
}
```

**Simple AI (Follow Player):**
```typescript
const dx = player.x - enemy.x;
const dy = player.y - enemy.y;
const distance = Math.sqrt(dx * dx + dy * dy);

if (distance > 0) {
  enemy.x += (dx / distance) * enemy.speed;
  enemy.y += (dy / distance) * enemy.speed;
}
```

**Ball Physics:**
```typescript
// Update ball position
ball.x += ball.velocityX;
ball.y += ball.velocityY;

// Paddle collision
if (checkCollision(ball, paddle)) {
  ball.velocityX *= -1;
  // Add spin based on where ball hit paddle
  const hitPos = (ball.y - paddle.y) / paddle.height;
  ball.velocityY = (hitPos - 0.5) * 10;
}
```

## Testing Checklist

### Pre-Deployment
- [ ] Game starts without errors
- [ ] All controls work as expected
- [ ] Score updates correctly
- [ ] Game ends properly (win/lose conditions)
- [ ] "Play Again" button resets game
- [ ] No console errors or warnings
- [ ] TypeScript compiles without errors

### Performance
- [ ] Game runs at 60fps
- [ ] No memory leaks (check DevTools)
- [ ] Canvas clears properly each frame
- [ ] Event listeners are cleaned up

### Responsive Design
- [ ] Game scales on mobile devices
- [ ] Touch controls work (if applicable)
- [ ] UI elements are readable on small screens
- [ ] Layout doesn't break on different aspect ratios

### Visual Consistency
- [ ] Colors match style guide
- [ ] Fonts load correctly (Press Start 2P, Space Grotesk)
- [ ] Hero section is 350px height
- [ ] Glow effects match game's theme color
- [ ] Animations are smooth

### Gameplay
- [ ] Controls are intuitive
- [ ] Difficulty is appropriate for age group (7-15)
- [ ] Game is fun and engaging
- [ ] Instructions are clear
- [ ] Scoring system makes sense

### Integration
- [ ] Game appears in Games gallery
- [ ] Thumbnail displays correctly
- [ ] Creator attribution is correct
- [ ] Route works (`/games/your-slug`)
- [ ] Navigation links work

## Tips and Best Practices

### Performance
- Use `requestAnimationFrame` for game loop (never `setInterval`)
- Clear canvas efficiently: `ctx.fillRect(0, 0, width, height)`
- Avoid creating objects in the game loop
- Use object pooling for particles/bullets
- Profile with Chrome DevTools

### Code Organization
- Keep game state in a single object
- Separate update and draw logic
- Use classes for game objects
- Extract constants (speeds, sizes, colors)
- Comment complex algorithms

### Design
- Use retro arcade colors from style guide
- Keep controls simple (WASD, Arrow keys, Space)
- Add visual feedback (particles, screen shake)
- Use pixel art rendering: `image-rendering: pixelated`
- Test on actual mobile devices

### Accessibility
- Provide keyboard controls
- Add clear instructions
- Use high contrast colors
- Include pause functionality
- Support different input methods

## Deliverables

When your game is complete, ensure:

1. **Code Files:**
   - Game engine in `src/games/your-game/`
   - Game page in `src/pages/games/`
   - Types in appropriate files

2. **Data:**
   - Metadata in `src/data/games.ts`
   - Thumbnail image (hosted)
   - Creator attribution

3. **Documentation:**
   - Controls documented in metadata
   - README in game folder (if needed)
   - Comments in complex code sections

4. **Testing:**
   - All checklist items passed
   - No console errors
   - Tested on multiple devices

5. **Integration:**
   - Route added to `App.tsx`
   - Game appears in gallery
   - Navigation works

## Resources

- **Canvas API:** [MDN Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- **requestAnimationFrame:** [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- **Style Guide:** [docs/STYLE_GUIDE.md](STYLE_GUIDE.md)
- **Testing Standards:** [docs/TESTING.md](TESTING.md)
- **Pong Example:** See `src/games/pong/` for reference implementation

## Getting Help

- Review existing game implementations in `src/games/`
- Check [AGENTS.md](../AGENTS.md) for development principles
- Refer to [STYLE_GUIDE.md](STYLE_GUIDE.md) for design rules
- See [TESTING.md](TESTING.md) for QA standards

---

**Remember:** Keep it simple, fun, and consistent with the arcade aesthetic!

