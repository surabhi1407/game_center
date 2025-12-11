# Game Template

Quick start for adding new games to Game Hub.

## Steps

1. **Copy Template**
   ```bash
   cp -r templates/game-template src/games/your-game-name
   ```

2. **Update metadata.json**
   - Set id, title, slug, creator
   - Add thumbnail URL
   - Set category and difficulty
   - Define controls

3. **Implement Game**
   - Edit `GameEngine.ts` with game logic
   - Use canvas API for rendering
   - Handle keyboard/mouse input

4. **Add to Data**
   ```typescript
   // src/data/games.ts
   import metadata from '../games/your-game-name/metadata.json';
   export const games = [...games, metadata];
   ```

5. **Create Route**
   ```typescript
   // App.tsx
   import YourGame from './src/pages/games/YourGame';
   <Route path="/games/your-slug" element={<YourGame />} />
   ```

6. **Test**
   ```bash
   npm run dev
   ```

## Game Engine Basics

- `update()` - Game logic (60fps)
- `draw()` - Render graphics
- `handleKeyDown/Up()` - Input handling
- Canvas size: 800x450px

## Style Guide

Use retro colors:
- Cyan: `#00f0ff`
- Pink: `#f43f8e`
- Yellow: `#fffc40`
- Purple: `#2d0b4d`

Font: Press Start 2P (arcade style)

