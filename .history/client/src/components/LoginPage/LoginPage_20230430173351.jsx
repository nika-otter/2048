import classes from "./LoginPage.module.scss";
import LoginForm from "../Login/LoginForm";
import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { observer } from "mobx-react-lite";
import LoginInfo from "../Login/LoginInfo";

function LoginPage() {
  //   const { store } = useContext(Context);
  //   //  const [users, setUsers] = useState([]);
  //   //  const [scores, setScores] = useState([]);
  //   // console.log(store.user.scores, "store.user from login index.jsx");

  //   useEffect(() => {
  //     if (localStorage.getItem("token")) {
  //       console.log(localStorage.getItem("token"), "token from login index.jsx");
  //       store.checkAuth();
  //     }
  //   }, []);

  //   if (store.isLoading) {
  //     return <div>Loading...</div>;
  //   }
  return (
    <>
      <Header />
      <main className={classes.main}>
        {/* <LoginForm /> */}
        <LoginInfo />
      </main>
      <Footer />
    </>
  );
}

export default observer(LoginPage);
