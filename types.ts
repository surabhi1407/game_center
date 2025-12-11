export type ArcadeColor = 'arcade-purple' | 'arcade-pink' | 'arcade-yellow' | 'arcade-cyan';

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  altText: string;
  themeColor: ArcadeColor;
}