export interface Game {
  id: string;
  name: string;
  description: string;
  minBet: number;
  maxBet: number;
  timing: string;
  isActive: boolean;
  category: string;
}

export interface GameResult {
  id: string;
  gameName: string;
  result: string;
  time: string;
  status: 'live' | 'completed';
  category: string;
}

export const games: Game[] = [
  {
    id: '1',
    name: 'Kalyan Matka',
    description: 'Classic Kalyan matka game with daily results',
    minBet: 10,
    maxBet: 10000,
    timing: '9:00 AM - 10:00 PM',
    isActive: true,
    category: 'classic'
  },
  {
    id: '2',
    name: 'Milan Day',
    description: 'Milan day matka game with morning results',
    minBet: 20,
    maxBet: 15000,
    timing: '9:00 AM - 2:00 PM',
    isActive: true,
    category: 'day'
  },
  {
    id: '3',
    name: 'Milan Night',
    description: 'Milan night matka game with evening results',
    minBet: 15,
    maxBet: 12000,
    timing: '6:00 PM - 10:00 PM',
    isActive: true,
    category: 'night'
  },
  {
    id: '4',
    name: 'Rajdhani Day',
    description: 'Rajdhani day matka game',
    minBet: 25,
    maxBet: 20000,
    timing: '10:00 AM - 3:00 PM',
    isActive: false,
    category: 'day'
  },
  {
    id: '5',
    name: 'Rajdhani Night',
    description: 'Rajdhani night matka game',
    minBet: 30,
    maxBet: 25000,
    timing: '7:00 PM - 11:00 PM',
    isActive: true,
    category: 'night'
  },
  {
    id: '6',
    name: 'Madhur Day',
    description: 'Madhur day matka game',
    minBet: 10,
    maxBet: 8000,
    timing: '9:30 AM - 2:30 PM',
    isActive: true,
    category: 'day'
  }
];

export const gameResults: GameResult[] = [
  {
    id: '1',
    gameName: 'Kalyan Matka',
    result: '123',
    time: '10:00 AM',
    status: 'completed',
    category: 'classic'
  },
  {
    id: '2',
    gameName: 'Milan Day',
    result: '456',
    time: '2:00 PM',
    status: 'completed',
    category: 'day'
  },
  {
    id: '3',
    gameName: 'Milan Night',
    result: '789',
    time: '10:00 PM',
    status: 'live',
    category: 'night'
  },
  {
    id: '4',
    gameName: 'Rajdhani Night',
    result: '234',
    time: '11:00 PM',
    status: 'live',
    category: 'night'
  }
];

export const categories = [
  { id: 'all', name: 'All Games' },
  { id: 'classic', name: 'Classic Games' },
  { id: 'day', name: 'Day Games' },
  { id: 'night', name: 'Night Games' }
];

export const userStats = {
  totalGames: 150,
  wins: 89,
  losses: 61,
  winRate: 59.3,
  totalWinnings: 25000
}; 