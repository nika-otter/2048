import { useContext } from "react";
import classes from "./ScoreTable.module.scss";
import { Context } from "../..";

function ScoreTable() {
  const { store } = useContext(Context);

  return (
    <div className={classes.footer}>
      <h2>Score table</h2>
      <ul>
        {store.scores
          .map((score) => ({
            score,
            id: Math.random(),
          }))
          .sort((a, b) => b.score - a.score)
          .map((item) => (
            <li key={item.id}>{item.score}</li>
          ))}
      </ul>
    </div>
  );
}

export default ScoreTable;
