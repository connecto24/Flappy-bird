export interface Player {
  firstName: string;
  lastName: string;
  highScore: number;
}

export interface GameState {
  isPlaying: boolean;
  score: number;
  difficulty: 'easy' | 'medium' | 'hard';
  volume: number;
  player: Player | null;
}