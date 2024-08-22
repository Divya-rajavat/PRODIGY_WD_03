import React, { useState, useEffect } from 'react';
import Board from './Board';
import { calculateWinner, aiMove } from '../utils';

const Game = ({ gameMode, difficulty, addGameRecord, onGoBack }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [recordAdded, setRecordAdded] = useState(false);

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      setWinner(winner);
      setIsGameOver(true);
    } else if (board.every(square => square !== null)) {
      setWinner('Draw');
      setIsGameOver(true);
    }
  }, [board]);

  useEffect(() => {
    if (isGameOver && !recordAdded) {
      addGameRecord({ mode: gameMode, difficulty, winner });
      setRecordAdded(true);
    }
  }, [isGameOver, recordAdded, winner, gameMode, difficulty, addGameRecord]);

  useEffect(() => {
    if (gameMode === 'computer' && !isXNext && !isGameOver) {
      const timer = setTimeout(() => {
        const aiIndex = aiMove(board, difficulty);
        const newBoard = board.slice();
        newBoard[aiIndex] = 'O';
        setBoard(newBoard);
        setIsXNext(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isXNext, gameMode, difficulty, board, isGameOver]);

  const handleClick = (i) => {
    if (isGameOver || board[i]) return;
    const newBoard = board.slice();
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const startNewGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setIsGameOver(false);
    setWinner(null);
    setRecordAdded(false);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={board} onClick={handleClick} />
      </div>
      <div className="game-info">
        {winner && <div>{winner === 'Draw' ? 'Game Draw!' : `Winner: ${winner}`}</div>}
        <button className="new-game" onClick={startNewGame}>New Game</button>
        <button className="go-back" onClick={onGoBack}>Go Back Home</button>
      </div>
    </div>
  );
};

export default Game;
