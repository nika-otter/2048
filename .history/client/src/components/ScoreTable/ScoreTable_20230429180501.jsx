import { useContext, useEffect, useState } from "react";
import classes from "./ScoreTable.module.scss";
import { Context } from "../..";
import UserService from "../../services/UserService";
import { observer } from "mobx-react-lite";

function ScoreTable() {
  // const { store } = useContext(Context);
  // const [scores, setScores] = useState([]);

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     console.log(localStorage.getItem("token"), "token from login index.jsx");
  //     store.checkAuth();
  //     getScores(store.user.email);
  //   }
  //   console.log(store.user.email, "store.user.email in ScoreTable.jsx");
  // }, []);

  // const getScores = async (email) => {
  //   console.log(email, "email in ScoreTable.jsx");
  //   try {
  //     const response = await UserService.getScores(email);
  //     setScores(response.data.scores, "response from getScores ScoreTable.jsx");
  //     console.log(response);
  //   } catch {
  //     console.log("Error");
  //   }
  // };
  // console.log(scores, "store.user in ScoreTable.jsx");

  const { store } = useContext(Context);
  const [scores, setScores] = useState([]);
  // console.log(store.user.scores, "store.user from login index.jsx");
  useEffect(() => {
    const checkAuth = async () => {
      if (localStorage.getItem("token")) {
        console.log(
          localStorage.getItem("token"),
          "token from login index.jsx"
        );
        await store.checkAuth();
      }
    };
    checkAuth();
    console.log(store.user.email, "store.user.email in ScoreTable.jsx");
    getScores(store.user.email);
  }, []);

  async function getScores(email) {
    console.log(email, "email from getScores");
    try {
      const response = await UserService.getScores(email);
      // setUsers(response.data);
      console.log(response, "response from getScores");
      // console.log(response.data.data.user.scores, "response.data.user.scores");
      setScores(response.data.scores);
    } catch (e) {
      console.log(e, "Error");
    }
  }
  if (store.isLoading) {
    console.log(store.isLoading, "store.isLoading");
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.footer}>
      <h2>Score table</h2>
      <button onClick={() => getScores(store.user.email)}>Get scores</button>
      {/* {store.isAuth ? (
        scores.map((score) => <div key={score}>{score}</div>)
      ) : (
        <div>loading</div>
      )} */}
      <ul>
        {store.isAuth ? (
          store.user.scores
            .map((score) => ({
              score,
              id: Math.random(),
            }))
            .sort((a, b) => b.score - a.score)
            .map((item) => <li key={item.id}>{item.score}</li>)
        ) : (
          <div>not Auth</div>
        )}
      </ul>

      {/* <button onClick={getScores}>dddmdmd</button> */}

      {/* {scores.map((score) => (
        <div>{score}</div>
      ))} */}
    </div>
  );
}

export default observer(ScoreTable);
