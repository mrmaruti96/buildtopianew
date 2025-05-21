import { GameMode } from '../types';

export const gameModes: GameMode[] = [
  {
    id: 'survival',
    name: 'Survival',
    description: 'Experience Minecraft\'s core gameplay in our enhanced survival world with custom features and a friendly community.',
    features: [
      'Economy system with player shops',
      'Land claiming and protection',
      'Epic world generation',
      'Regular events and challenges',
      'Player-driven towns and nations'
    ],
    image: 'https://i.ibb.co/C3XJ6qnC/Screenshot-2025-05-14-165122.png?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'parkour',
    name: 'Parkour',
    description: 'Test your jumping skills across increasingly difficult courses designed to challenge even the most experienced players.',
    features: [
      'Over 5 unique parkour maps',
      'Progressive difficulty levels',
      'Checkpoint system',
      'Personal best tracking',
      'Weekly competitions with prizes'
    ],
    image: 'https://i.ibb.co/0vhDkNm/Screenshot-2025-05-14-165541.png?q=80&w=1470&auto=format&fit=crop'
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
    image: 'https://i.ibb.co/KxFMQ0DP/Screenshot-2025-05-14-165656.png?q=80&w=1470&auto=format&fit=crop'
  }
];
