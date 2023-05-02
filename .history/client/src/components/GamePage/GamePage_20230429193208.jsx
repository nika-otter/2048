import { Link } from "react-router-dom";
import classes from "./GamePage.module.scss";
import ScoreTable from "../ScoreTable/ScoreTable";
import BoardView from "../Game/Board";

function GamePage() {
  return (
    <div className={classes.gamepage}>
      <BoardView />
      <ScoreTable />
    </div>
  );
}

export default GamePage;
