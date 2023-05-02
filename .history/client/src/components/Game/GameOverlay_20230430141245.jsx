import React from "react";
// import TryAgainLogo from "../assets/img/try-again.gif";
const GameOverlay = ({ onRestart, board }) => {
  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    return (
      // <>mdddddddddddddddddddddddddddddddddddddddsss</>
      <div className="" onClick={onRestart}>
        {/* <img
          // src={TryAgainLogo}
          alt="Inténtalo de nuevo!!"
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        /> */}
        ввввлвлвллвлвлвл
      </div>
    );
  }

  return null;
};

export default GameOverlay;
