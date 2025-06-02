import { Crate } from '../types';

export const crates: Crate[] = [
  {
    id: 'common',
    name: 'Vote Crate',
    price: 0,
    color: '#55FF55', // Green
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1470&auto=format&fit=crop',
    rewards: [
      'Common Key (1.3% chance)',
      'Food Items (25% chance)',
      'Basic Resources (20% chance)',
      'Small XP Boost (5% chance)'
    ],
    description: 'A free crate with basic items to help you get started.'
  },
  {
    id: 'rare',
    name: 'Common Crate',
    price: 150,
    color: '#00AAFF', // Blue
    image: 'https://images.unsplash.com/photo-1627843240167-b1f9d70d978a?q=80&w=1470&auto=format&fit=crop',
    rewards: [
      'Iron Armor Pieces (45% chance)',
      'Enchanted Iron Tools (25% chance)',
      'Common Cosmetic Items (20% chance)',
      'XP Boosters (10% chance)'
    ],
    description: 'A solid choice for players looking for useful gear and items.'
  },
  {
    id: 'epic',
    name: 'Mythic Crate',
    price: 300,
    color: '#AA00FF', // Purple
    image: 'https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?q=80&w=1374&auto=format&fit=crop',
    rewards: [
      'Iron/Diamond Mixed Armor (40% chance)',
      'Enchanted Diamond Tool (20% chance)',
      'Uncommon Cosmetic Items (25% chance)',
      'Small Currency Package (15% chance)'
    ],
    description: 'A high-tier crate with excellent rewards and valuable items.'
  },
  {
    id: 'legendary',
    name: 'Maruti Crate',
    price: 500,
    color: '#FFD700', // Gold
    image: 'https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?q=80&w=1374&auto=format&fit=crop',
    rewards: [
      'Diamond Armor Set (30% chance)',
      'Enchanted Netherite Tool (15% chance)',
      'Rare Cosmetic Items (25% chance)',
      'Server Currency Booster (20% chance)',
      'Exclusive Legendary Pet (10% chance)'
    ],
    description: 'The ultimate crate containing the most valuable and rare items in the server.'
  },
  {
    id: 'battlepass',
    name: 'BattlePass Premihm',
    price: 399,
    color: '#FFD700', // Gold
    image: 'https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?q=80&w=1374&auto=format&fit=crop',
    rewards: [
      'Diamond Armor Set (30% chance)',
      'Enchanted Netherite Tool (15% chance)',
      'Rare Cosmetic Items (25% chance)',
      'Server Currency Booster (20% chance)',
      'Exclusive Legendary Pet (10% chance)'
    ],
    description: 'The ultimate crate containing the most valuable and rare items in the server.'
  }
];
