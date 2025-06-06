import { Crate } from '../types';

export const crates: Crate[] = [
  {
    id: 'common',
    name: 'Common Crate',
    price: 149,
    color: '#FFD700',
    image: 'https://iili.io/FdrZmF9.md.png?q=80&w=1470&auto=format&fit=crop',
    rewards: [
      '🛡️ Enchanted Iron Armor Set',
      '⚒️ Enchanted Iron Tools',
      '🗝️ 2x Vote Keys',
      '💎 4x Diamond Blocks',
      '🪨 8x Iron Blocks',
      '👨‍🌾 2x Villager Spawn Eggs',
      '📖 1x Tunnel I Enchantment Book',
      '🎨 4x Dune Trims',
      '🍏 1x Enchanted Golden Apple',
      '🧪 1x Strength Potion',
      '🌪️ 64x Breeze Rods',
      '☠️ 3x Ominous Potions',
      '🥕 64x Golden Carrot',
      '🍎 32x Golden Apples',
      '🐢 Turtle Helmet'
    ],
    description: 'A solid crate 📦 packed with gear, resources, and rare utility items.'
  },
  {
    id: 'mythic',
    name: 'Mythic Crate',
    price: 299,
    color: '#00FEFC',
    image: 'https://iili.io/FdrZsj4.md.png?q=80&w=1374&auto=format&fit=crop',
    rewards: [
      '🛡️ Maxed Out Custom Enchanted Armor and Tools',
      '🔱 Custom Trident',
      '🏹 Ender Bow',
      '📚 Tunnel III & Bunny Hop III Enchanted Books',
      '🍏 5x Enchanted Golden Apples',
      '🍎 64x Golden Apples',
      '🥕 128x Golden Carrot',
      '🎨 4x Silence Armor Trims',
      '🧿 5x Totems of Undying',
      '🪓 1x Netherite Ingot',
      '🗝️ 4x Vote Keys',
      '🗝️ 2x Common Keys',
      '👨‍🌾 2x Villager Spawn Eggs'
    ],
    description: 'A powerful crate 🟣 filled with high-tier equipment and rare enchanted loot.'
  },
  {
    id: 'maruti',
    name: 'Maruti Crate',
    price: 399,
    color: '#AA00FF',
    image: 'https://iili.io/FdrZiuf.md.png?q=80&w=1374&auto=format&fit=crop',
    rewards: [
      '🛡️ Maxed Out Custom Enchanted Netherite Armor and Tools',
      '🪓 Maxed Out Mace',
      '🧿 16x Ender Pearls',
      '💨 192x Wind Charges',
      '🍏 20x Enchanted Golden Apples',
      '🍎 128x Golden Apples',
      '🥕 128x Golden Carrot',
      '🪵 10x Netherite Ingots',
      '👨‍🌾 4x Villager Spawn Eggs',
      '🗝️ 4x Mythic Keys',
      '🗝️ 8x Common Keys',
      '🗝️ 16x Vote Keys'
    ],
    description: 'The ultimate 🏆 crate with legendary gear, pets, and exclusive rewards.'
  },
  {
    id: 'battlepass',
    name: 'BattlePass Premium Monthly',
    price: 399,
    color: '#FFA500',
    image: 'https://iili.io/Fd4g7AN.md.png?q=80&w=1374&auto=format&fit=crop',
    rewards: [
      '🪓 Many Crate Keys',
      '🧿 In game items including Netherite'
    ],
    description: '💎 A premium monthly reward crate for BattlePass users — packed with top-tier loot!'
  }
];
