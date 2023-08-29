import React from 'react';
import '../styles/Scoreboard.css'

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div>
      <p className='title'>Scoreboard</p>
      <p className='score'>Current Score: {currentScore}</p>
      <p className='score'>Best Score: {bestScore}</p>
    </div>
  );
};

export default Scoreboard;