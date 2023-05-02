import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/Login/LoginForm";
import { Context } from "../..";
import UserService from "../../services/UserService";
import { observer } from "mobx-react-lite";
import Footer from "../../components/Footer/Footer";

function Login() {
  const { store } = useContext(Context);
  const [users, setUsers] = useState([]);
  const [scores, setScores] = useState([]);
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
  // async function getUsers() {
  //   try {
  //     const response = await UserService.fetchUsers();
  //     // setUsers(response.data);
  //     console.log(response);
  //     setUsers(response.data);
  //   } catch (e) {
  //     console.log(e, "Error");
  //   }
  // }

  // async function getScores(email) {
  //   console.log(email, "email from getScores");
  //   try {
  //     const response = await UserService.getScores(email);
  //     // setUsers(response.data);
  //     console.log(response, "response from getScores");
  //     // console.log(response.data.data.user.scores, "response.data.user.scores");
  //     setScores(response.data.scores);
  //   } catch (e) {
  //     console.log(e, "Error");
  //   }
  // }
  return (
    <>
      <Header />
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

      {/* <button onClick={getUsers}>Get users</button> */}
      {/* {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))} */}

      {/* <button onClick={() => getScores(store.user.email)}>Get scores</button>
      {scores.map((score) => (
        <div key={score}>{score}</div>
      ))} */}
      <Footer />
    </>
  );
}

export default observer(Login);
