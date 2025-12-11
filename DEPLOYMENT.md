# Deployment Guide

Deploy Game Hub to Vercel in minutes.

## Prerequisites

- GitHub account
- Vercel account (free)

## Steps

### 1. Initialize Git

```bash
cd /Users/surabhi/cursor_projects/game_center
git init
git add .
git commit -m "Initial commit: Game Hub"
```

### 2. Create GitHub Repository

1. Go to github.com
2. Click "New repository"
3. Name: `game-hub`
4. Don't initialize with README
5. Click "Create repository"

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/game-hub.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Vercel

**Option A: Via Website**
1. Go to vercel.com
2. Click "Add New Project"
3. Import your GitHub repo
4. Framework: Vite (auto-detected)
5. Click "Deploy"

**Option B: Via CLI**
```bash
npm install -g vercel
vercel login
vercel
```

### 5. Configure Domain (Optional)

1. In Vercel dashboard
2. Go to project settings
3. Add custom domain
4. Follow DNS instructions

## Auto-Deploy

Every push to `main` branch auto-deploys.

## Environment Variables

None required for basic setup.

## Build Settings

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Troubleshooting

**Build fails:**
- Check `npm run build` works locally
- Verify all dependencies in package.json

**Routes don't work:**
- Ensure `vercel.json` exists
- Check rewrites configuration

**Images don't load:**
- Use absolute URLs
- Check CORS settings

## Custom Domain

1. Buy domain (Namecheap, Google Domains)
2. Add to Vercel project
3. Update DNS records:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

## Support

- Vercel Docs: vercel.com/docs
- GitHub Issues: github.com/YOUR_USERNAME/game-hub/issues

