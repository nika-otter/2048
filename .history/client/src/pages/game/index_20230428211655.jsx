import BoardView from "../../components/Game/Board";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScoreTable from "../../components/ScoreTable/ScoreTable";
// import "../../main.scss";
// import "../../styles.scss";

function Game() {
  return (
    <div>
      <Header />
      <BoardView />
      <ScoreTable />
      <Footer />
    </div>
  );
}

export default Game;
