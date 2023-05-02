import { useContext, useEffect, useState } from "react";
import classes from "./ScoreTable.module.scss";
import { Context } from "../..";
import UserService from "../../services/UserService";

function ScoreTable() {
  const { store } = useContext(Context);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"), "token from login index.jsx");
      store.checkAuth();
    }
    //console.log(store.user.email, "store.user.email in ScoreTable.jsx");
    getScores(store.user.email);
  }, []);

  const getScores = async (email) => {
    console.log(email, "email in ScoreTable.jsx");
    try {
      const response = await UserService.getScores(email);
      setScores(response.data.scores, "response from getScores ScoreTable.jsx");
      console.log(response);
    } catch {
      console.log("Error");
    }
  };
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
