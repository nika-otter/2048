import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/Login/LoginForm";
import { Context } from "../..";
import UserService from "../../services/UserService";
import { observer } from "mobx-react-lite";
import Footer from "../../components/Footer/Footer";
import LoginPage from "../../components/LoginPage/LoginPage";

function Login() {
  // const { store } = useContext(Context);
  // const [users, setUsers] = useState([]);
  // const [scores, setScores] = useState([]);
  // // console.log(store.user.scores, "store.user from login index.jsx");

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     console.log(localStorage.getItem("token"), "token from login index.jsx");
  //     store.checkAuth();
  //   }
  // }, []);

  // if (store.isLoading) {
  //   return <div>Loading...</div>;
  // }
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
      <LoginPage />
    </>
  );
}

export default observer(Login);
