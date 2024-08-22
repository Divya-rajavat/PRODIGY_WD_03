import React from 'react';

const GameRecords = ({ records, onBack }) => {
  return (
    <div className="game-records">
      <h2>Game Records</h2>
      <table>
        <thead>
          <tr>
            <th>Mode</th>
            <th>Difficulty</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.mode}</td>
              <td>{record.difficulty || '-'}</td>
              <td>{record.winner}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="back-button" onClick={onBack}>Back</button>
    </div>
  );
};

export default GameRecords;
