import { GameMode } from '../types';

export const gameModes: GameMode[] = [
  {
    id: 'survival',
    name: 'Survival',
    description: 'Experience Minecraft\'s core gameplay in our enhanced survival world with custom features and a friendly community.',
    features: [
      'Economy system with player shops',
      'Land claiming and protection',
      'Custom crafting recipes',
      'Regular events and challenges',
      'Player-driven towns and nations'
    ],
    image: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'parkour',
    name: 'Parkour',
    description: 'Test your jumping skills across increasingly difficult courses designed to challenge even the most experienced players.',
    features: [
      'Over 20 unique parkour maps',
      'Progressive difficulty levels',
      'Checkpoint system',
      'Personal best tracking',
      'Weekly competitions with prizes'
    ],
    image: 'https://images.unsplash.com/photo-1640079421264-61f50d3fb120?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'ffa',
    name: 'Free For All',
    description: 'Battle against other players in our action-packed PvP arenas with custom kits and special abilities.',
    features: [
      'Multiple combat arenas',
      'Custom weapon abilities',
      'Class-based gameplay',
      'Leaderboard system',
      'Special weekend tournaments'
    ],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop'
  }
];
