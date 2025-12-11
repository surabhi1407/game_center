# Quick Start Guide

## Run Locally

```bash
cd /Users/surabhi/cursor_projects/game_center
npm install
npm run dev
```

Visit: `http://localhost:3000`

## Build

```bash
npm run build
```

Output: `dist/` folder

## Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Game Hub ready for deployment"
git push origin main
```

2. **Deploy on Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Click "Deploy" (auto-detects Vite)

3. **Done!** Your site is live at `https://your-project.vercel.app`

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## Add New Game

1. **Copy template:**
```bash
cp -r templates/game-template src/games/my-game
```

2. **Edit game logic:**
- `src/games/my-game/GameEngine.ts`

3. **Add metadata:**
- Edit `src/data/games.ts`

4. **Create page:**
- `src/pages/games/MyGame.tsx`

5. **Add route:**
- Edit `App.tsx`

6. **Test:**
```bash
npm run dev
```

## Project Structure

```
game-hub/
├── src/
│   ├── components/    # Reusable UI
│   ├── pages/         # Route pages
│   ├── games/         # Game engines
│   ├── data/          # Games & creators
│   └── types/         # TypeScript types
├── docs/              # Guides
├── templates/         # Game template
└── DEPLOYMENT.md      # Deploy guide
```

## Key Files

- `App.tsx` - Routing
- `src/data/games.ts` - Game metadata
- `src/data/creators.ts` - Creator profiles
- `docs/STYLE_GUIDE.md` - Design system
- `docs/ADDING_GAMES.md` - Add game guide

## Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Need Help?

- **Style Guide:** `docs/STYLE_GUIDE.md`
- **Add Games:** `docs/ADDING_GAMES.md`
- **Pygame Conversion:** `docs/PYGAME_CONVERSION.md`
- **Deployment:** `DEPLOYMENT.md`
- **Summary:** `PROJECT_SUMMARY.md`

## Current Status

✅ All 3 projects merged
✅ 11 games + 4 creators
✅ Routing working
✅ Build successful
✅ Ready to deploy

## Next Steps

1. Deploy to Vercel
2. Add more games
3. Share with kids!

