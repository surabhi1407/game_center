# Adding New Games

Quick guide for adding games to Game Hub.

## Process

### 1. Copy Template
```bash
cp -r templates/game-template src/games/your-game
```

### 2. Create Game Engine

Edit `src/games/your-game/GameEngine.tsx`:

```typescript
- Implement update() - game logic
- Implement draw() - rendering
- Add keyboard/mouse handlers
- Update score/state
```

Canvas size: 800x450px

### 3. Add Metadata

Edit `src/data/games.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Game Name',
  slug: 'game-name',
  creator: 'creator-id',
  thumbnail: 'image-url',
  glowColor: 'cyan',
  category: 'action',
  difficulty: 'medium',
  controls: [
    { key: 'W/S', action: 'Move' }
  ]
}
```

### 4. Create Page

Create `src/pages/games/YourGame.tsx`:

```typescript
import GameTemplate from '../../templates/game-template/GameTemplate';
import { YourGameEngine } from '../../games/your-game/GameEngine';

// Customize template or build custom page
```

### 5. Add Route

Edit `App.tsx`:

```typescript
import YourGame from './src/pages/games/YourGame';

<Route path="/games/your-slug" element={<YourGame />} />
```

### 6. Test

```bash
npm run dev
# Visit http://localhost:5173/games/your-slug
```

## Tips

- Use retro colors from style guide
- Keep controls simple (W/S/Arrow keys)
- Add sound effects (optional)
- Test on mobile
- Keep file size small
- Comment your code

## Checklist

- [ ] Game engine works
- [ ] Metadata added
- [ ] Route created
- [ ] Thumbnail image added
- [ ] Controls documented
- [ ] Tested on mobile
- [ ] No console errors

