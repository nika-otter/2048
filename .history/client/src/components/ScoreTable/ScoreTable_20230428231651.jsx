import { useContext, useState } from "react";
import classes from "./ScoreTable.module.scss";
import { Context } from "../..";
import UserService from "../../services/UserService";

function ScoreTable() {
  const { store } = useContext(Context);
  const [scores, setScore] = useState([]);
  async function getScores() {
    try {
      const response = await UserService.getScores();
      setScore(response.data);
      console.log(response);
    } catch {
      console.log("Error");
    }
  }
  console.log(store.user.scores, "store.user in ScoreTable.jsx");
  return (
    <div className={classes.footer}>
      <h2>Score table</h2>
      <ul>
        {store.user.scores
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
