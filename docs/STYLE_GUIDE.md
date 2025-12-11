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

## Characters

### Character Design Guidelines

**Style:** Pixel art / retro aesthetic with modern polish

**Age Range:** Characters represent kids aged 7-15 years old

**Diversity:** 
- Various ethnicities and skin tones
- Different genders and presentations
- Inclusive representation

**Accessories:**
- Space helmets and visors
- Futuristic headsets
- Retro gaming headphones
- Neon-colored clothing
- Tech-inspired elements

**Color Palette:**
- Neon/arcade colors (cyan, pink, yellow, purple)
- High contrast for visibility
- Glow effects around edges
- Dark backgrounds to make characters pop

**Avatar Style:**
- 128px circular format
- 4px colored border matching theme
- Clean, simple designs
- Easily recognizable silhouettes
- Friendly, approachable expressions

### Character Usage

**Creator Cards:**
- Use circular avatars (128px)
- Border color matches creator's theme color
- Hover effect: border glow + subtle scale
- Background: semi-transparent with theme tint

**Game Master:**
- Larger avatar (128px or 160px)
- Distinctive styling (futuristic headset)
- Cyan theme color (retro-cyan)
- Professional yet approachable

## Theme Consistency

### Overall Aesthetic
**Space/Arcade Fusion:**
- Retro arcade gaming meets sci-fi space exploration
- Neon glow effects throughout
- Dark backgrounds with vibrant accents
- Pixel art rendering for game assets
- Smooth gradients for modern polish

### Background Patterns
**Hero Sections:**
- Nebula/space background image
- Dark gradient overlay (rgba(16, 25, 34, 0.6) to rgba(16, 25, 34, 0.9))
- Fixed height: 350px on all pages
- Centered text with arcade fonts
- Consistent across Home, Games, Creators, Submit pages

**Page Backgrounds:**
- Primary: `#101922` (dark blue-gray)
- Accent areas: black/30 with backdrop blur
- Card backgrounds: semi-transparent with borders

### Visual Effects

**Glow Effects:**
```css
/* Cyan glow */
box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);

/* Pink glow */
box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);

/* Yellow glow */
box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);

/* Purple glow */
box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
```

**Text Shadows:**
```css
/* Arcade title shadow */
text-shadow: 2px 2px 0px #A855F7;

/* Neon glow text */
text-shadow: 0 0 10px currentColor;
```

**Hover Animations:**
- Scale: `transform: scale(1.05)`
- Transition: `transition: all 0.3s ease`
- Glow intensity increase
- Smooth, not jarring

### Consistency Rules

**Navigation:**
- Text size: `text-base` (16px)
- Active state: arcade-pink color + bold
- Hover: subtle glow effect
- Uniform spacing between links

**Hero Sections (Critical):**
- **Height:** Exactly 350px (`h-[350px]`)
- **Background:** Same nebula image across all pages
- **Gradient:** Same overlay gradient
- **Text:** Centered, max-width 2xl
- **Title:** font-arcade, 4xl on mobile, 6xl on desktop
- **Subtitle:** font-display, base on mobile, lg on desktop

**Cards:**
- Border radius: `rounded-xl` (12px)
- Border width: 2px
- Padding: 1.5rem (p-6)
- Hover scale: 1.05
- Transition: 300ms ease

**Buttons:**
- Border radius: `rounded-lg` (8px)
- Height: 48px (h-12)
- Padding: 1.5rem horizontal (px-6)
- Font: font-arcade
- Hover: scale(1.05)
- Active state: slight scale down (0.95)

**Spacing:**
- Section gaps: 2rem (gap-8)
- Card gaps: 1.5rem (gap-6)
- Content padding: 1rem mobile, 2rem desktop
- Max content width: 1200px

### Color Usage by Context

**Home Page:**
- Primary accent: arcade-yellow
- Secondary: arcade-cyan
- CTA buttons: arcade-pink

**Games Page:**
- Game cards: theme-based glow colors
- Section titles: accent-cyan with purple shadow
- Carousels: gradient overlays

**Creators Page:**
- Creator cards: individual theme colors
- Young creators: various arcade colors
- Game Master: retro-cyan theme

**Game Detail Pages:**
- Primary: game's theme color
- Scoreboard: retro-yellow
- UI elements: retro-cyan and retro-pink
- Leaderboard: gradient backgrounds

**Submit Page:**
- Form inputs: white/10 background
- Submit button: arcade-pink
- Focus states: arcade-cyan

## Best Practices

### Code Quality
- Keep components under 200 lines
- Extract reusable logic
- Use TypeScript types consistently
- Add comments for complex logic
- Follow existing patterns

### Design Consistency
- Always use colors from the defined palette
- Match existing component styles
- Maintain 350px hero height across all pages
- Use arcade fonts for titles, display fonts for body
- Keep hover effects consistent (scale 1.05, 300ms)

### Responsive Design
- Mobile-first approach
- Test on 320px, 768px, 1024px, 1920px
- Use Tailwind responsive prefixes (sm:, md:, lg:)
- Ensure touch targets are 44px minimum
- Stack layouts vertically on mobile

### Performance
- Optimize images (WebP when possible)
- Use `image-rendering: pixelated` for pixel art
- Lazy load images below the fold
- Minimize re-renders
- Clean up event listeners

### Accessibility
- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Provide alt text for images

### Theme Preservation
- Each page section maintains its original character
- Creators page: vibrant arcade aesthetic
- Games page: neon gallery feel
- Game detail pages: immersive retro gaming
- Standardize only layout dimensions, not color schemes

