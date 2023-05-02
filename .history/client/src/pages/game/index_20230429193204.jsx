import BoardView from "../../components/Game/Board";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScoreTable from "../../components/ScoreTable/ScoreTable";
import GamePage from "../../components/GamePage/GamePage";
// import "../../main.scss";
// import "../../styles.scss";

function Game() {
  return (
    <>
      <Header />
      <GamePage />
      <Footer />
    </>
  );
}

export default Game;
