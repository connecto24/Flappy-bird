import { create } from 'zustand';
import { GameState } from './types';

export const useGameStore = create<GameState>((set) => ({
  isPlaying: false,
  score: 0,
  difficulty: 'easy',
  volume: 0.5,
  player: null,
}));