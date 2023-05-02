import React, { useContext, useEffect, useState } from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "../../helper";
import useEvent from "../../hooks/useEvent";
import GameOverlay from "./GameOverlay";
import "./Board.scss";
import { Context } from "../..";
import UserService from "../../services/UserService";
const BoardView = () => {
  const { store } = useContext(Context);
  const [board, setBoard] = useState(new Board());

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     if (localStorage.getItem("token")) {
  //       console.log(localStorage.getItem("token"), "token from login index.jsx");
  //       await store.checkAuth();
  //     }
  //   };
  //   checkAuth();
  //   console.log(store.user.email, "store.user.email in ScoreTable.jsx");
  //   // getScores(store.user.email);
  // }, [resetGame]);

  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    } //потім вернути треба

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(Object.create(board), board);
      // let boardClone = Object.assign(
      //   Object.create(Object.getPrototypeOf(board)),
      //   board
      // ); // теж саме що і вище
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  }); //робить клітинки нічого серйозного

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });

  const saveScore = async (email, score) => {
    try {
      const response = await UserService.updateScore(email, score);
      console.log(response, "response from saveScore ");
    } catch {
      console.log("Error");
    }
  };
  const resetGame = () => {
    console.log(
      store.user.email,
      board.score,
      "store.user.email board.score from BoardView.jsx"
    );
    saveScore(store.user.email, board.score);
    setBoard(new Board());
    store.checkAuth();
  };

  return (
    <div>
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>
          New Game
        </div>
        <div className="score-box">
          <div className="score-header">POINTS</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
    </div>
  );
};

export default BoardView;
