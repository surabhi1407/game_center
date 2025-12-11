// Game Types
export type GlowColor = 'primary' | 'cyan' | 'yellow' | 'purple' | 'pink';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameControl {
  key: string;
  action: string;
}

export interface Game {
  id: string;
  title: string;
  slug: string;
  creator: string;
  description?: string;
  thumbnail: string;
  category?: string;
  difficulty?: Difficulty;
  glowColor: GlowColor;
  isNew?: boolean;
  controls?: GameControl[];
  tags?: string[];
}

// Creator Types
export type ArcadeColor = 'arcade-purple' | 'arcade-pink' | 'arcade-yellow' | 'arcade-cyan';

export interface Creator {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  altText: string;
  themeColor: ArcadeColor;
}

export interface GameMaster {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  skills: string[];
}

// Navigation Types
export interface NavItem {
  icon: string;
  label: string;
  color: GlowColor;
  path: string;
}

