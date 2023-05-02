import React from "react";

const GameOverlay = ({ onRestart, board }) => {
  if (board.hasWon()) {
    return <button className="won">You won!!! Try again</button>;
  } else if (board.hasLost()) {
    return (
      <button className="lost" onClick={onRestart}>
        You lost! Try again
      </button>
    );
  }

  return null;
};

export default GameOverlay;
