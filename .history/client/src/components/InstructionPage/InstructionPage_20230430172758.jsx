import { Link } from "react-router-dom";
import classes from "./InstructionPage.module.scss";
import ScoreTable from "../ScoreTable/ScoreTable";
import BoardView from "../Game/Board";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../..";
import Howtoplay from "../HowToPlay/howtoplay";

function InstructionPage() {
  return (
    <main className={classes.main}>
      <Howtoplay />
    </main>
  );
}

export default InstructionPage;
