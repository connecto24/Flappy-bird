import React, { useEffect, useRef, useState } from 'react';
import { useGameStore } from '../store';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Settings } from 'lucide-react';

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { player, difficulty, volume, score } = useGameStore();
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Game settings panel
  const [showSettings, setShowSettings] = useState(false);

  const difficultySettings = {
    easy: { gravity: 0.3, gap: 150 },
    medium: { gravity: 0.4, gap: 130 },
    hard: { gravity: 0.5, gap: 110 }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Game HUD */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <div className="flex items-center space-x-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2">
            <h2 className="text-white font-medium">
              {player?.firstName} {player?.lastName}
            </h2>
            <p className="text-purple-300">Score: {score}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-lg bg-white/10 backdrop-blur-lg hover:bg-white/20"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-white" />
            ) : (
              <Volume2 className="w-6 h-6 text-white" />
            )}
          </button>
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-lg bg-white/10 backdrop-blur-lg hover:bg-white/20"
          >
            <Settings className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Game Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-screen"
        onClick={() => {
          if (!isPaused) {
            // Jump logic here
          }
        }}
      />

      {/* Settings Panel */}
      {showSettings && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Paramètres</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Difficulté
              </label>
              <select
                value={difficulty}
                onChange={(e) => useGameStore.setState({ difficulty: e.target.value as any })}
                className="w-full px-4 py-2 bg-white/5 border border-purple-400/30 rounded-lg text-white"
              >
                <option value="easy">Facile</option>
                <option value="medium">Moyen</option>
                <option value="hard">Difficile</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Volume
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => useGameStore.setState({ volume: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>
          </div>

          <button
            onClick={() => setShowSettings(false)}
            className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg"
          >
            Fermer
          </button>
        </motion.div>
      )}
    </div>
  );
}