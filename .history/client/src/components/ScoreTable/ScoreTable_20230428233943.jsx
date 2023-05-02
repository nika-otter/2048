import { useContext, useEffect, useState } from "react";
import classes from "./ScoreTable.module.scss";
import { Context } from "../..";
import UserService from "../../services/UserService";

function ScoreTable() {
  const { store } = useContext(Context);
  const [scores, setScores] = useState([]);
  useEffect(() => {
    getScores(store.user.email);
  }, []);
  async function getScores(email) {
    try {
      const response = await UserService.getScores(email);
      setScores(response.data, "response from getScores ScoreTable.jsx");
      console.log(response);
    } catch {
      console.log("Error");
    }
  }
  console.log(scores, "store.user in ScoreTable.jsx");
  return (
    <div className={classes.footer}>
      <h2>Score table</h2>
      <ul>
        {scores
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
