import React, { useState } from 'react';
import Game from './components/Game';
import GameRecords from './components/GameRecord';
import './App.css';

const App = () => {
  const [gameMode, setGameMode] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [startNewGame, setStartNewGame] = useState(false);
  const [showRecords, setShowRecords] = useState(false);
  const [gameRecords, setGameRecords] = useState([]);

  const handleGameModeSelect = (mode) => {
    setGameMode(mode);
    setDifficulty(null);
    setStartNewGame(true);
  };

  const handleDifficultySelect = (level) => {
    setDifficulty(level);
    setStartNewGame(true);
  };

  const resetGame = () => {
    setStartNewGame(false);
    setTimeout(() => setStartNewGame(true), 0);
  };

  const addGameRecord = (record) => {
    setGameRecords([...gameRecords, record]);
  };

  const goBackHome = () => {
    setGameMode(null);
    setStartNewGame(false);
    setDifficulty(null);
  };

  return (
    <div className="App">
      {showRecords ? (
        <GameRecords records={gameRecords} onBack={() => setShowRecords(false)} />
      ) : gameMode === null ? (
        <div className="intro-screen">
          <h1>Tic-Tac-Toe</h1>
          <div className="game-mode-selection">
            <button onClick={() => handleGameModeSelect('human')}>Play with Human</button>
            <button onClick={() => handleGameModeSelect('computer')}>Play with Computer</button>
          </div>
          <button className="view-records" onClick={() => setShowRecords(true)}>Track Game Records</button>
        </div>
      ) : gameMode === 'computer' && difficulty === null ? (
        <div className="difficulty-selection">
          <h2>Select Difficulty:</h2>
          <button onClick={() => handleDifficultySelect('easy')}>Easy</button>
          <button onClick={() => handleDifficultySelect('medium')}>Medium</button>
          <button onClick={() => handleDifficultySelect('hard')}>Hard</button>
        </div>
      ) : (
        startNewGame && (
          <Game
            gameMode={gameMode}
            difficulty={difficulty}
            addGameRecord={addGameRecord}
            onGoBack={goBackHome}
          />
        )
      )}
    </div>
  );
};

export default App;
