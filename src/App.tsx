import React from 'react';
import { useGameStore } from './store';
import Login from './components/Login';
import Game from './components/Game';

function App() {
  const player = useGameStore((state) => state.player);

  return (
    <div className="min-h-screen">
      {!player ? <Login /> : <Game />}
    </div>
  );
}

export default App;