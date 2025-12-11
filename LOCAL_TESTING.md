# Local Testing Guide

## ✅ Dev Server is Running!

The development server is currently running at:

**URL:** http://127.0.0.1:3000/

## How to Test

### 1. Open in Browser

Visit: **http://127.0.0.1:3000/**

### 2. Test All Pages

**Home Page** (`/`)
- ✅ Hero section displays
- ✅ Featured games grid (5 games)
- ✅ Featured creators (2 creators)
- ✅ Navigation links work

**Games Page** (`/games`)
- ✅ All games gallery
- ✅ Games grouped by creator
- ✅ Marshal's Picks section (5 games)
- ✅ Hridya's Picks section (5 games)
- ✅ Game cards clickable

**Pong Game** (`/games/pong`)
- ✅ Game canvas loads
- ✅ Press to start overlay
- ✅ W/S keys control paddle
- ✅ Score updates
- ✅ Leaderboard displays
- ✅ Back to Games button works

**Creators Page** (`/creators`)
- ✅ Hero section
- ✅ All 4 creator cards
- ✅ Creator profile images
- ✅ "See [Name]'s Picks" buttons

### 3. Test Navigation

- ✅ Header navigation (Home, Games, Creators)
- ✅ Active page highlighting
- ✅ Mobile menu (resize browser)
- ✅ Footer displays

### 4. Test Responsiveness

**Desktop (1200px+)**
- Open browser normally
- Check all pages look good

**Tablet (768px - 1199px)**
- Resize browser window
- Check grid layouts adjust

**Mobile (< 768px)**
- Resize to phone size
- Check mobile menu appears
- Check games stack vertically

### 5. Test Game Functionality

**Pong Game:**
1. Go to http://127.0.0.1:3000/games/pong
2. Click "PRESS START" overlay
3. Use W key to move paddle up
4. Use S key to move paddle down
5. Try to score against AI
6. Check score updates in real-time

### 6. Check Console

Open browser DevTools (F12 or Cmd+Option+I):
- ✅ No errors in Console tab
- ✅ No 404s in Network tab

## Testing Checklist

### Visual Tests
- [ ] All images load
- [ ] Fonts render correctly (Press Start 2P, Space Grotesk)
- [ ] Colors match design (arcade theme, neon glows, retro purple)
- [ ] Hover effects work on cards/buttons
- [ ] Text shadows display correctly

### Functional Tests
- [ ] All navigation links work
- [ ] Game cards link to correct pages
- [ ] Pong game is playable
- [ ] Keyboard controls work (W/S)
- [ ] Scores update correctly
- [ ] Back buttons work

### Responsive Tests
- [ ] Mobile menu toggles
- [ ] Grids adjust to screen size
- [ ] Text is readable on all sizes
- [ ] Buttons are tappable on mobile
- [ ] No horizontal scrolling

### Performance Tests
- [ ] Pages load quickly
- [ ] No lag when navigating
- [ ] Pong game runs smoothly (60fps)
- [ ] Images load without delay

## Common Issues & Fixes

### Issue: Server won't start
```bash
# Stop any running servers
pkill -f "vite"

# Restart with explicit host
npm run dev -- --host 127.0.0.1 --port 3000
```

### Issue: Port 3000 already in use
```bash
# Use different port
npm run dev -- --host 127.0.0.1 --port 3001
```

### Issue: Changes not reflecting
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear cache and reload

### Issue: Pong game not responding
- Click on the canvas first to focus
- Check browser console for errors
- Try refreshing the page

## Stop the Server

When done testing:

**Option 1: In Terminal**
- Press `Ctrl+C`

**Option 2: Kill Process**
```bash
pkill -f "vite"
```

## Build for Production Test

Test the production build locally:

```bash
# Build
npm run build

# Preview production build
npm run preview -- --host 127.0.0.1 --port 4173
```

Then visit: http://127.0.0.1:4173/

## Browser Testing

Test in multiple browsers:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (Mac)

## Mobile Device Testing

### Option 1: Browser DevTools
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select device (iPhone, iPad, etc.)

### Option 2: Real Device
1. Find your local IP: `ifconfig | grep inet`
2. On phone, visit: `http://YOUR_IP:3000`
3. Make sure phone is on same WiFi

## Performance Check

In browser DevTools:
1. Go to Lighthouse tab
2. Click "Generate report"
3. Check scores:
   - Performance: Should be 90+
   - Accessibility: Should be 90+
   - Best Practices: Should be 90+

## What to Look For

### ✅ Good Signs
- Fast page loads (< 1 second)
- Smooth animations
- No console errors
- All images load
- Navigation works instantly
- Game runs at 60fps

### ⚠️ Warning Signs
- Console errors
- Slow page loads
- Broken images
- Navigation delays
- Game lag/stuttering

## Ready to Deploy?

Once all tests pass:
1. Stop dev server (Ctrl+C)
2. Commit changes
3. Push to GitHub
4. Deploy to Vercel

See `DEPLOYMENT.md` for deployment steps.

## Current Server Status

**Status:** ✅ RUNNING
**URL:** http://127.0.0.1:3000/
**Port:** 3000
**Host:** 127.0.0.1

---

**Happy Testing! 🎮**

