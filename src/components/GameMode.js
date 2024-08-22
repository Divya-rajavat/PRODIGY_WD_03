// src/components/GameMode.js
import React from 'react';

const GameMode = ({ setGameMode }) => {
  return (
    <div className="game-mode">
      <h2>Choose Game Mode</h2>
      <button onClick={() => setGameMode('human')}>Play with Human</button>
      <button onClick={() => setGameMode('computer')}>Play with Computer</button>
    </div>
  );
};

export default GameMode;
