import React from 'react';
import { Link } from 'react-router-dom';
import { Creator } from '../../types';

interface CreatorCardProps {
  member: Creator;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ member }) => {
  // Mapping theme colors to specific Tailwind class names for borders, text, bg, etc.
  const getThemeClasses = (color: string) => {
    switch (color) {
      case 'arcade-purple':
        return {
          border: 'border-arcade-purple',
          hoverBorder: 'hover:border-arcade-purple/50',
          hoverBg: 'hover:bg-arcade-purple/10',
          btnBg: 'bg-arcade-purple',
          avatarBorder: 'border-arcade-purple'
        };
      case 'arcade-pink':
        return {
          border: 'border-arcade-pink',
          hoverBorder: 'hover:border-arcade-pink/50',
          hoverBg: 'hover:bg-arcade-pink/10',
          btnBg: 'bg-arcade-pink',
          avatarBorder: 'border-arcade-pink'
        };
      case 'arcade-yellow':
        return {
          border: 'border-arcade-yellow',
          hoverBorder: 'hover:border-arcade-yellow/50',
          hoverBg: 'hover:bg-arcade-yellow/10',
          btnBg: 'bg-arcade-yellow',
          avatarBorder: 'border-arcade-yellow'
        };
      case 'arcade-cyan':
        return {
          border: 'border-arcade-cyan',
          hoverBorder: 'hover:border-arcade-cyan/50',
          hoverBg: 'hover:bg-arcade-cyan/10',
          btnBg: 'bg-arcade-cyan',
          avatarBorder: 'border-arcade-cyan'
        };
      default:
        return {
          border: 'border-white',
          hoverBorder: 'hover:border-white/50',
          hoverBg: 'hover:bg-white/10',
          btnBg: 'bg-gray-600',
          avatarBorder: 'border-white'
        };
    }
  };

  const theme = getThemeClasses(member.themeColor);

  return (
    <div className={`flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all ${theme.hoverBorder} ${theme.hoverBg}`}>
      <div
        className={`h-32 w-32 rounded-full bg-cover bg-center border-4 ${theme.avatarBorder}`}
        role="img"
        aria-label={member.altText}
        style={{ backgroundImage: `url("${member.imageUrl}")` }}
      ></div>
      <div className="flex flex-col gap-1">
        <p className="font-arcade text-2xl text-white">{member.name}</p>
        <p className="text-base font-normal leading-normal text-white/70">
          {member.role}
        </p>
      </div>
      <Link 
        to={`/creators/${member.id}`}
        className={`mt-2 flex w-full max-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-lg ${theme.btnBg} text-sm font-bold leading-normal tracking-[0.015em] text-white transition-opacity h-10 px-4 hover:opacity-90`}
      >
        <span className="truncate">See {member.name}'s Picks</span>
      </Link>
    </div>
  );
};

export default CreatorCard;

