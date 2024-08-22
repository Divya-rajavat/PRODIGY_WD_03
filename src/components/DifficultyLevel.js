// src/components/DifficultyLevel.js
import React from 'react';

const DifficultyLevel = ({ setDifficulty }) => {
  return (
    <div className="difficulty-level">
      <h2>Choose Difficulty Level</h2>
      <button onClick={() => setDifficulty('easy')}>Easy</button>
      <button onClick={() => setDifficulty('medium')}>Medium</button>
      <button onClick={() => setDifficulty('hard')}>Hard</button>
    </div>
  );
};

export default DifficultyLevel;
