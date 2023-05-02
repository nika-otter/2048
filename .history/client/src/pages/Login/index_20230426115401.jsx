import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/Login/LoginForm";
import { Context } from "../..";
import UserService from "../../services/UserService";

function Login() {
  const { store } = useContext(Context);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // console.log(localStorage.getItem("token"));
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <div>Loading...</div>;
  }
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
      console.log(response);
      setUsers(response.data);
    } catch {}
  }
  return (
    <div>
      <Header />
      <LoginForm />

      <h1>{store.isAuth ? `User: ${store.user.email}` : "Not Auth"}</h1>
      <h1>
        {" "}
        {store.user.isActivated ? `Activated` : "Go and activate your email"}
      </h1>
      <button onClick={() => store.logout()}>Logout</button>
      <button onClick={getUsers}>Get users</button>
      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
}

export default Login;
