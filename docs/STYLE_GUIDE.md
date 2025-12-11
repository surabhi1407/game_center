# Style Guide

Design system for Game Hub. Keep it consistent.

## Colors

**Arcade Theme (Creators Page)**
- Purple: `#4F46E5`
- Pink: `#EC4899`
- Yellow: `#FBBF24`
- Cyan: `#22D3EE`

**Neon Theme (Games Gallery)**
- Cyan: `#00E0FF`
- Yellow: `#FFE600`
- Purple: `#A855F7`
- Pink: `#f43f8e`

**Retro Theme (Game Pages)**
- Purple: `#2d0b4d`
- Pink: `#f43f8e`
- Cyan: `#00f0ff`
- Yellow: `#fffc40`

**Common**
- Primary: `#258cf4`
- Background: `#101922`

## Typography

- Display: Space Grotesk (body text)
- Arcade: Press Start 2P (headings, game titles)
- Mono: VT323 (optional, retro feel)

## Components

**GameCard**
- Aspect ratio: 3:4
- Border: 2px transparent
- Hover: scale(1.05) + glow effect
- Title bar: black/70 overlay

**CreatorCard**
- Avatar: 128px circle, 4px border
- Theme colors for borders/buttons
- Hover: border glow + bg tint

**Buttons**
- Arcade style: rounded-lg, uppercase
- Primary action: arcade-pink
- Secondary: arcade-cyan
- Hover: scale(1.05)

## Layout

- Max width: 1200px (main content)
- Padding: 1rem mobile, 2rem desktop
- Gap: 1.5rem (6 in Tailwind)

## File Structure

```
src/
├── components/
│   ├── layout/    # Header, Footer
│   ├── game/      # GameCard, Leaderboard
│   ├── creator/   # CreatorCard
│   └── ui/        # Reusable UI
├── pages/         # Route pages
├── games/         # Game engines
└── data/          # Static data
```

## Naming

- Components: PascalCase
- Files: PascalCase.tsx
- Functions: camelCase
- Constants: UPPER_SNAKE_CASE

## Best Practices

- Keep components under 200 lines
- Extract reusable logic
- Use TypeScript types
- Preserve existing styles per section
- Mobile-first responsive design

