import BoardView from "../../components/Game/Board";
import Header from "../../components/Header/Header";
import "../../main.scss";
import "../../styles.scss";

function Game() {
  return (
    <div>
      <Header />
      <BoardView />
    </div>
  );
}

export default Game;
