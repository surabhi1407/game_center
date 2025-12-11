# Pygame to JavaScript Conversion

Guide for converting Pygame games to Canvas API.

## Core Concepts

| Pygame | Canvas API |
|--------|------------|
| `pygame.init()` | `canvas.getContext('2d')` |
| `screen = pygame.display.set_mode()` | `canvas.width/height` |
| `pygame.draw.rect()` | `ctx.fillRect()` |
| `pygame.draw.circle()` | `ctx.arc()` |
| `clock.tick(60)` | `requestAnimationFrame()` |

## Display

**Pygame:**
```python
screen = pygame.display.set_mode((800, 450))
screen.fill((0, 0, 0))
```

**Canvas:**
```typescript
canvas.width = 800;
canvas.height = 450;
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

## Drawing Shapes

**Rectangle:**
```python
# Pygame
pygame.draw.rect(screen, (255, 0, 0), (x, y, w, h))
```
```typescript
// Canvas
ctx.fillStyle = '#ff0000';
ctx.fillRect(x, y, w, h);
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

## Input Handling

**Pygame:**
```python
keys = pygame.key.get_pressed()
if keys[pygame.K_w]:
    player_y -= speed
```

**Canvas:**
```typescript
const keys = { w: false };
window.addEventListener('keydown', (e) => {
  if (e.key === 'w') keys.w = true;
});
if (keys.w) player_y -= speed;
```

## Game Loop

**Pygame:**
```python
clock = pygame.time.Clock()
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # Update
    update_game()
    
    # Draw
    screen.fill((0, 0, 0))
    draw_game()
    pygame.display.flip()
    clock.tick(60)
```

**Canvas:**
```typescript
function gameLoop() {
  // Update
  update();
  
  // Draw
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  draw();
  
  requestAnimationFrame(gameLoop);
}
gameLoop();
```

## Sprites

**Pygame:**
```python
class Player(pygame.sprite.Sprite):
    def __init__(self):
        self.rect = pygame.Rect(x, y, w, h)
```

**Canvas:**
```typescript
class Player {
  x: number; y: number;
  width: number; height: number;
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
```

## Collision Detection

**Pygame:**
```python
if sprite1.rect.colliderect(sprite2.rect):
    # Collision!
```

**Canvas:**
```typescript
function checkCollision(a, b) {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}
```

## Text

**Pygame:**
```python
font = pygame.font.Font(None, 36)
text = font.render("Score: 0", True, (255, 255, 255))
screen.blit(text, (10, 10))
```

**Canvas:**
```typescript
ctx.font = '20px "Press Start 2P"';
ctx.fillStyle = '#ffffff';
ctx.fillText('Score: 0', 10, 30);
```

## Common Patterns

**Moving Objects:**
```typescript
// Update position
obj.x += obj.dx;
obj.y += obj.dy;

// Bounce off walls
if (obj.x < 0 || obj.x > canvas.width) obj.dx *= -1;
if (obj.y < 0 || obj.y > canvas.height) obj.dy *= -1;
```

**Simple AI:**
```typescript
// Follow player
if (enemy.x < player.x) enemy.x += speed;
if (enemy.x > player.x) enemy.x -= speed;
```

## Tips

- Use `requestAnimationFrame` not `setInterval`
- Store game state in refs for React
- Keep physics simple (no libraries needed)
- Use pixel art rendering: `image-rendering: pixelated`
- Test performance (aim for 60fps)

