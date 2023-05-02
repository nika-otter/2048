import classes from "./GamePage.module.scss";
import ScoreTable from "../ScoreTable/ScoreTable";
import BoardView from "../Game/Board";
import { observer } from "mobx-react-lite";

function GamePage() {
  return (
    <main className={classes.main}>
      <div className={classes.gamepage}>
        <BoardView />
        <ScoreTable />
      </div>
    </main>
  );
}

export default observer(GamePage);
