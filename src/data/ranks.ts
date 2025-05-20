import { Rank } from '../types';

export const ranks: Rank[] = [
  {
    id: 'vipplus',
    name: 'VIP+',
    price: 400,
    color: '#00FF00',
    perks: [
      'Everything in VIP rank',
      'Custom join/leave messages',
      '6 home locations',
      'Access to /nick command',
      '/heal command (10 min cooldown)',
      '3 additional claim blocks per hour'
    ]
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 300,
    color: '#55FF55',
    perks: [
      'Colored name in chat',
      'Access to /fly in hub',
      '5 home locations',
      'Ability to use colored text in chat',
      '2 additional claim blocks per hour'
    ]
  },
  {
    id: 'og',
    name: 'OG',
    price: 250,
    color: '#FFAA00',
    perks: [
      'Unique OG tag in chat',
      'Access to /fly in hub',
      '4 home locations',
      'Colored text in chat',
      'Access to exclusive OG cosmetics',
      '1.5 additional claim blocks per hour'
    ]
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: 200,
    color: '#55FFFF',
    perks: [
      'ELITE tag in chat',
      '3 home locations',
      'Priority server access',
      '/hat and /emote commands',
      '1 additional claim block per hour'
    ]
  },
  {
    id: 'pro',
    name: 'PRO',
    price: 100,
    color: '#FF55FF',
    perks: [
      'PRO tag in chat',
      '2 home locations',
      'Access to basic cosmetics',
      'Extended AFK time',
      'Basic priority on server join'
    ]
  },
  {
    id: 'noob',
    name: 'NOOB',
    price: 50,
    color: '#AAAAAA',
    perks: [
      'NOOB tag in chat',
      '1 home location',
      'Limited cosmetics access',
      'Starter kit upon joining',
      '0.5 additional claim blocks per hour'
    ]
  }
];
