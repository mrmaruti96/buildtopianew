export interface GameMode {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
}

export interface Rank {
  id: string;
  name: string;
  price: number;
  color: string;
  perks: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface ServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
  version: string;
}

export interface Crate {
  id: string;
  name: string;
  price: number;
  color: string;
  image: string;
  rewards: string[];
  description: string;
}
