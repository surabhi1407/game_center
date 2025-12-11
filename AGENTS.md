# AI Agent Development Guide

## Mission

Game Hub is an arcade gaming platform where kids aged 7-15 can submit game ideas and see them brought to life through AI-powered development. The platform showcases games created by young developers, making coding fun and accessible while maintaining a consistent retro-arcade aesthetic.

## Architecture

See [README.md](README.md) for visual architecture diagrams and system overview.

**Key Components:**
- React 19 + TypeScript frontend
- React Router for navigation
- Canvas API for game rendering
- Tailwind CSS for styling
- Vite for build tooling
- Vercel for deployment

## Development Principles

### 1. Readable
- Use clear, descriptive variable names
- Add comments for complex logic
- Keep functions focused and small
- Use TypeScript types consistently

### 2. Modular
- Single responsibility per component
- Extract reusable logic into utilities
- Keep components under 200 lines
- Separate concerns (UI, logic, data)

### 3. Reusable
- Follow DRY (Don't Repeat Yourself)
- Create shared components in `/src/components/`
- Use composition over duplication
- Leverage existing patterns

### 4. Consistent
- Follow existing code patterns
- Match current file structure
- Use established naming conventions
- Maintain design system rules

## Design Consistency Rules

### Layout Standards
- **Hero images:** Fixed `h-[350px]` height on all pages
- **Navigation:** `text-base` size, uniform across all links
- **Max width:** 1200px for main content areas
- **Padding:** 1rem mobile, 2rem desktop
- **Gaps:** 1.5rem (Tailwind `gap-6`)

### Color Palette
See [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md) for complete color system.

**Quick Reference:**
- Arcade Purple: `#4F46E5`
- Arcade Pink: `#EC4899`
- Arcade Yellow: `#FBBF24`
- Arcade Cyan: `#22D3EE`
- Retro Purple: `#2d0b4d`
- Background: `#101922`

### Typography
- **Body text:** Space Grotesk (`font-display`)
- **Headings/Titles:** Press Start 2P (`font-arcade`)
- **Monospace:** VT323 (`font-mono`)

### Component Patterns
- **GameCard:** 3:4 aspect ratio, hover scale(1.05), glow effects
- **CreatorCard:** 128px circle avatar, theme-colored borders
- **Buttons:** rounded-lg, hover scale(1.05), arcade colors
- **Hero sections:** Same nebula background across all pages

## File Structure

```
game_center/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── game/            # GameCard, Leaderboard
│   │   ├── creator/         # CreatorCard
│   │   └── ui/              # Reusable UI components
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Games.tsx
│   │   ├── Creators.tsx
│   │   ├── SubmitGame.tsx
│   │   └── games/           # Individual game pages
│   │       └── Pong.tsx
│   ├── games/               # Game engine implementations
│   │   └── pong/
│   │       └── PongEngine.tsx
│   ├── data/
│   │   ├── games.ts         # Game metadata
│   │   └── creators.ts      # Creator profiles
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   └── styles/
│       └── design-system.ts # Design tokens
├── docs/
│   ├── STYLE_GUIDE.md       # Design system reference
│   ├── GAME_TEMPLATE.md     # Game development guide
│   └── TESTING.md           # QA standards
├── templates/
│   └── game-template/       # Boilerplate for new games
├── AGENTS.md                # This file
└── README.md                # Human-readable overview
```

## Naming Conventions

- **Components:** PascalCase (`GameCard.tsx`, `CreatorCard.tsx`)
- **Files:** Match component name (`GameCard.tsx`)
- **Functions:** camelCase (`handleScoreUpdate`, `resetGame`)
- **Constants:** UPPER_SNAKE_CASE (`WINNING_SCORE`, `MAX_PLAYERS`)
- **Types/Interfaces:** PascalCase (`Game`, `Creator`, `GameMaster`)
- **Props interfaces:** ComponentNameProps (`GameCardProps`)

## Workflow for New Features

### Step 1: Read Relevant Documentation
- Review [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md) for design rules
- Check [docs/GAME_TEMPLATE.md](docs/GAME_TEMPLATE.md) if adding a game
- Read [docs/TESTING.md](docs/TESTING.md) for testing requirements

### Step 2: Check Existing Patterns
- Look at similar components in the codebase
- Match existing code structure
- Reuse existing utilities and types
- Follow established patterns

### Step 3: Implement Following Guidelines
- Write clean, readable code
- Use TypeScript types
- Follow design system
- Keep components modular
- Add comments for complex logic

### Step 4: Test Thoroughly
- Run through [docs/TESTING.md](docs/TESTING.md) checklist
- Test on multiple screen sizes
- Check browser console for errors
- Verify design consistency
- Test all user interactions

### Step 5: Update Documentation
- Update relevant docs if patterns change
- Add new components to style guide if reusable
- Document any new conventions
- Keep docs concise and accurate

## Adding Games

See [docs/GAME_TEMPLATE.md](docs/GAME_TEMPLATE.md) for complete game development workflow.

**Quick Steps:**
1. Copy template from `templates/game-template/`
2. Implement game logic in Canvas
3. Add metadata to `src/data/games.ts`
4. Create page in `src/pages/games/`
5. Add route to `App.tsx`
6. Test per game-specific checklist

## Testing Requirements

**Every change must pass the checklist in [docs/TESTING.md](docs/TESTING.md).**

**Critical checks:**
- ✅ No TypeScript errors
- ✅ No linter warnings
- ✅ Responsive on all screen sizes
- ✅ Colors match style guide
- ✅ No console errors
- ✅ Smooth animations (60fps for games)

## Common Tasks

### Adding a New Page
1. Create component in `src/pages/`
2. Add route to `App.tsx`
3. Add navigation link to `Header.tsx`
4. Use standard hero section (350px height)
5. Test navigation and responsiveness

### Adding a New Component
1. Create in appropriate `src/components/` subfolder
2. Export from component file
3. Import where needed
4. Follow existing component patterns
5. Add TypeScript props interface

### Updating Styles
1. Check if color exists in design system
2. Use Tailwind utility classes
3. Match existing spacing/sizing
4. Test hover/active states
5. Verify responsive behavior

### Fixing Bugs
1. Identify root cause
2. Check if fix affects other components
3. Maintain existing patterns
4. Test thoroughly
5. Verify no regressions

## Design System Quick Reference

### Hero Section Template
```tsx
<div className="px-4">
  <div
    className="flex h-[350px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 text-center sm:gap-8"
    style={{
      backgroundImage:
        'linear-gradient(rgba(16, 25, 34, 0.6) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/...")',
    }}
  >
    <div className="flex max-w-2xl flex-col gap-4">
      <h1 className="font-arcade text-4xl leading-tight text-white sm:text-6xl text-shadow">
        PAGE TITLE
      </h1>
      <h2 className="text-base font-normal leading-relaxed text-white/80 sm:text-lg">
        Page description
      </h2>
    </div>
  </div>
</div>
```

### Button Template
```tsx
<button className="flex h-12 items-center justify-center gap-2 rounded-lg bg-arcade-pink px-6 font-arcade text-sm text-white transition-all hover:scale-105">
  Button Text
</button>
```

### Card Template
```tsx
<div className="rounded-xl border-2 border-arcade-cyan bg-black/30 p-6 backdrop-blur-sm">
  {/* Card content */}
</div>
```

## Important Notes

### DO:
✅ Follow existing patterns
✅ Keep code clean and readable
✅ Test on multiple devices
✅ Use TypeScript types
✅ Maintain design consistency
✅ Check all documentation
✅ Run full test checklist

### DON'T:
❌ Create new color schemes
❌ Change hero image heights
❌ Skip testing checklist
❌ Leave console.log statements
❌ Ignore TypeScript errors
❌ Break existing patterns
❌ Add unnecessary dependencies

## Getting Help

1. **Design questions:** See [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md)
2. **Game development:** See [docs/GAME_TEMPLATE.md](docs/GAME_TEMPLATE.md)
3. **Testing questions:** See [docs/TESTING.md](docs/TESTING.md)
4. **Architecture questions:** See [README.md](README.md)
5. **Existing patterns:** Search codebase for similar implementations

## Success Criteria

Your implementation is successful when:
- ✅ All tests in TESTING.md pass
- ✅ Design matches existing pages
- ✅ Code follows established patterns
- ✅ TypeScript compiles without errors
- ✅ No console warnings or errors
- ✅ Responsive on all screen sizes
- ✅ Smooth performance (60fps for games)
- ✅ Documentation is updated if needed

---

**Remember:** Consistency is key. When in doubt, follow existing patterns in the codebase.

