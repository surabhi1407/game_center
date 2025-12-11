# Game Hub

Arcade gaming platform for kids aged 7-15. Play games created by young developers.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Adding a Game

See [docs/ADDING_GAMES.md](docs/ADDING_GAMES.md)

## Style Guide

See [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md)

## Converting Pygame Games

See [docs/PYGAME_CONVERSION.md](docs/PYGAME_CONVERSION.md)

## Structure

```
src/
├── components/   # Reusable UI components
├── pages/        # Route pages
├── games/        # Game engines
├── data/         # Game/creator data
└── types/        # TypeScript types
```

## Deploy

Push to main branch → auto-deploys via Vercel

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Canvas API

## Contributing

1. Create game in `src/games/`
2. Add metadata to `src/data/games.ts`
3. Create page in `src/pages/games/`
4. Add route in `App.tsx`
5. Test locally
6. Submit for review

## Support

Help keep the arcade running! [Buy us a coffee](#)
