# Documentation Index

Complete guide to Game Hub documentation.

## For AI Agents

Start here: **[AGENTS.md](../AGENTS.md)**

The master guide for AI-driven development containing:
- Development principles (readable, modular, reusable, consistent)
- Design consistency rules
- File structure and naming conventions
- Workflow for new features
- Quick reference for common tasks

## Core Documentation

### 1. [AGENTS.md](../AGENTS.md)
**Purpose:** Primary guide for AI agents

**Contents:**
- Mission and architecture overview
- Development principles
- Design consistency rules
- Workflow for new features
- Common tasks and patterns
- Links to specialized docs

**When to use:** Start of any development work

---

### 2. [README.md](../README.md)
**Purpose:** Human-readable project overview

**Contents:**
- Project motivation
- Architecture diagrams (Mermaid)
- Tech stack with rationale
- Project structure
- Deployment information
- Quick links to other docs

**When to use:** Understanding the project, onboarding

---

### 3. [GAME_TEMPLATE.md](GAME_TEMPLATE.md)
**Purpose:** Complete game development workflow

**Contents:**
- Step-by-step game creation process
- Template usage instructions
- Pygame to Canvas conversion guide
- Code examples and patterns
- Game-specific testing checklist
- Integration steps

**When to use:** Adding new games, converting Pygame games

---

### 4. [TESTING.md](TESTING.md)
**Purpose:** Comprehensive QA standards

**Contents:**
- Pre-commit checklist
- Component testing
- Page testing
- Game-specific testing
- Visual testing
- Performance benchmarks
- Accessibility standards
- Browser compatibility
- Deployment checklist

**When to use:** Before committing any code, during development

---

### 5. [STYLE_GUIDE.md](STYLE_GUIDE.md)
**Purpose:** Design system reference

**Contents:**
- Color palette (arcade, neon, retro themes)
- Typography system
- Component patterns (GameCard, CreatorCard, Buttons)
- Layout standards
- Character design guidelines
- Theme consistency rules
- Visual effects (glows, shadows)
- Best practices

**When to use:** Implementing UI, styling components, maintaining consistency

---

## Quick Navigation

### I want to...

**Add a new game**
1. Read [GAME_TEMPLATE.md](GAME_TEMPLATE.md)
2. Copy template from `templates/game-template/`
3. Follow step-by-step instructions
4. Test with [TESTING.md](TESTING.md) checklist

**Understand the project**
1. Read [README.md](../README.md)
2. Review architecture diagrams
3. Check [AGENTS.md](../AGENTS.md) for development rules

**Style a component**
1. Check [STYLE_GUIDE.md](STYLE_GUIDE.md)
2. Use defined colors and fonts
3. Follow component patterns
4. Verify with [TESTING.md](TESTING.md)

**Fix a bug**
1. Review [AGENTS.md](../AGENTS.md) for patterns
2. Check [STYLE_GUIDE.md](STYLE_GUIDE.md) for design rules
3. Test with [TESTING.md](TESTING.md)
4. Verify no regressions

**Convert a Pygame game**
1. See Pygame conversion section in [GAME_TEMPLATE.md](GAME_TEMPLATE.md)
2. Use concept mapping table
3. Follow code examples
4. Test thoroughly

**Deploy changes**
1. Run through [TESTING.md](TESTING.md) deployment checklist
2. Verify build succeeds
3. Push to main branch (auto-deploys via Vercel)

## Document Relationships

```
AGENTS.md (Master Guide)
  ├─ References: README.md (architecture)
  ├─ References: STYLE_GUIDE.md (design)
  ├─ References: GAME_TEMPLATE.md (games)
  └─ References: TESTING.md (QA)

README.md (Human Overview)
  ├─ Links to: AGENTS.md
  ├─ Links to: GAME_TEMPLATE.md
  ├─ Links to: STYLE_GUIDE.md
  └─ Links to: TESTING.md

GAME_TEMPLATE.md (Game Development)
  ├─ References: STYLE_GUIDE.md
  ├─ References: TESTING.md
  └─ References: AGENTS.md

TESTING.md (QA Standards)
  └─ Referenced by: All other docs

STYLE_GUIDE.md (Design System)
  └─ Referenced by: AGENTS.md, GAME_TEMPLATE.md
```

## File Locations

```
game_center/
├── AGENTS.md                    # AI agent master guide
├── README.md                    # Human-readable overview
├── docs/
│   ├── INDEX.md                 # This file
│   ├── GAME_TEMPLATE.md         # Game development guide
│   ├── TESTING.md               # QA standards
│   └── STYLE_GUIDE.md           # Design system
└── templates/
    └── game-template/
        └── README.md            # Quick template reference
```

## Documentation Principles

### For AI Agents
- **Single source of truth:** AGENTS.md is the starting point
- **Cross-referenced:** All docs link to related content
- **Actionable:** Clear steps and checklists
- **Consistent:** Follow established patterns
- **Minimal:** Only essential information

### For Humans
- **Visual:** Diagrams and examples
- **Narrative:** Explains the "why" not just "how"
- **Accessible:** Easy to navigate and understand
- **Complete:** All necessary information in one place

## Maintenance

### When to Update Docs

**AGENTS.md:**
- New development patterns emerge
- Design rules change
- File structure changes
- New workflows added

**README.md:**
- Architecture changes
- Tech stack updates
- Deployment process changes
- Project goals evolve

**GAME_TEMPLATE.md:**
- New game patterns discovered
- Template structure changes
- Pygame conversion tips added
- Testing requirements change

**TESTING.md:**
- New testing requirements
- Performance benchmarks change
- Browser support updates
- Accessibility standards evolve

**STYLE_GUIDE.md:**
- New colors added
- Component patterns change
- Design system evolves
- New visual effects added

### How to Update

1. Make changes to relevant doc
2. Update cross-references in other docs
3. Test that all links work
4. Verify examples are accurate
5. Keep language concise and clear

## Success Metrics

Documentation is successful when:
- ✅ AI agents can complete tasks using docs alone
- ✅ Humans understand the project in < 5 minutes
- ✅ All cross-references work
- ✅ Examples are accurate and helpful
- ✅ Docs stay under 6 core files
- ✅ Information is easy to find
- ✅ Docs are kept up to date

---

**Need help?** Start with [AGENTS.md](../AGENTS.md) for development or [README.md](../README.md) for project overview.

