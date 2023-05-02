import classes from "./LoginPage.module.scss";
import LoginForm from "../Login/LoginForm";
import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function LoginPage() {
  const { store } = useContext(Context);
  //  const [users, setUsers] = useState([]);
  //  const [scores, setScores] = useState([]);
  // console.log(store.user.scores, "store.user from login index.jsx");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"), "token from login index.jsx");
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <main className={classes.main}>
        <LoginForm />
        {store.isAuth ? <> </> : <LoginForm />}

        <h1>{store.isAuth ? `User: ${store.user.email}` : "Not Auth"}</h1>
        <h1>
          {" "}
          {store.user.isActivated ? `Activated` : "Go and activate your email"}
        </h1>
        {store.isAuth ? (
          <button onClick={() => store.logout()}>Logout</button>
        ) : (
          <> </>
        )}
        {/* <ScoreTable /> */}
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;
