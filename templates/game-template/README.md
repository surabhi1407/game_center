# Game Template

Quick start template for adding new games to Game Hub.

## Quick Reference

1. Copy this template to `src/games/your-game-name`
2. Implement game logic in `GameEngine.tsx`
3. Add metadata to `src/data/games.ts`
4. Create page in `src/pages/games/YourGame.tsx`
5. Add route to `App.tsx`
6. Test locally with `npm run dev`

## Complete Documentation

For detailed instructions, see:

- **[GAME_TEMPLATE.md](../../docs/GAME_TEMPLATE.md)** - Complete game development guide
- **[STYLE_GUIDE.md](../../docs/STYLE_GUIDE.md)** - Design system and colors
- **[TESTING.md](../../docs/TESTING.md)** - QA checklist
- **[AGENTS.md](../../AGENTS.md)** - Development principles

## Game Engine Basics

- **Canvas size:** 800x450px (16:9 aspect ratio)
- **Frame rate:** 60fps using `requestAnimationFrame`
- **update()** - Game logic
- **draw()** - Rendering
- **Input handling** - Keyboard/mouse events

## Style Quick Reference

**Colors:**
- Cyan: `#00f0ff`
- Pink: `#f43f8e`
- Yellow: `#fffc40`
- Purple: `#2d0b4d`

**Fonts:**
- Arcade: Press Start 2P
- Body: Space Grotesk

**Hero Height:** 350px on all pages

## Need Help?

See the complete [GAME_TEMPLATE.md](../../docs/GAME_TEMPLATE.md) guide for:
- Pygame to Canvas conversion
- Step-by-step implementation
- Code examples
- Testing checklist
- Integration steps

