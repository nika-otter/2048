import React from "react";

const GameOverlay = ({ onRestart, board }) => {
  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    return (
      <button className="lost" onClick={onRestart}>
        Try again
      </button>
    );
  }

  return null;
};

export default GameOverlay;
