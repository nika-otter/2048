import React from "react";

const GameOverlay = ({ onRestart, board }) => {
  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    return <div onClick={onRestart}>Try again</div>;
  }

  return null;
};

export default GameOverlay;
