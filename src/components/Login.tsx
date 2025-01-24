import React, { useState } from 'react';
import { useGameStore } from '../store';
import { motion } from 'framer-motion';
import { TowerControl as GameController, Volume2, User } from 'lucide-react';

export default function Login() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const setPlayer = useGameStore((state) => state.player);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    useGameStore.setState({ 
      player: { 
        firstName, 
        lastName, 
        highScore: 0 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-2xl"
      >
        <div className="flex justify-center mb-8">
          <GameController className="w-16 h-16 text-purple-400" />
        </div>
        
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Flappy Bird 3D
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Prénom
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Nom
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Commencer à jouer
          </button>
        </form>
      </motion.div>
    </div>
  );
}