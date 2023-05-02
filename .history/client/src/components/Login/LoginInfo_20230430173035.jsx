import classes from "./LoginPage.module.scss";
import LoginForm from "../Login/LoginForm";
import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { observer } from "mobx-react-lite";

function LoginInfo() {
  const { store } = useContext(Context);

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
    </>
  );
}

export default observer(LoginInfo);
