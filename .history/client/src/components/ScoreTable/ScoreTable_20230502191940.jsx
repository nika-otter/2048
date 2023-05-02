import { useContext, useEffect } from "react";
import classes from "./ScoreTable.module.scss";
import { Context } from "../..";

import { observer } from "mobx-react-lite";

function ScoreTable() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);

  if (store.isLoading) {
    return <div className={classes.loading}>Loading...</div>;
  }
  return (
    <div className={classes.scoretable}>
      <h2>Score table</h2>
      <ul>
        {store.isAuth ? (
          store.user.scores
            .map((score) => ({
              score,
              id: Math.random(),
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 10)
            .map((item) => <li key={item.id}>{item.score}</li>)
        ) : (
          <div>not Auth</div>
        )}
      </ul>
    </div>
  );
}

export default observer(ScoreTable);
