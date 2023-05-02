import { useContext, useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import AppRouter from "./router/AppRouter";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import UserService from "./services/UserService";
function App() {
  const { store } = useContext(Context);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
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
    <div className="App">
      <AppRouter />
      <h1>{store.isAuth ? `User: ${store.user.email}` : "Not Auth"}</h1>
      <button onClick={() => store.logout()}>Logout</button>
      <button onClick={getUsers}></button>
      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
      <LoginForm />
    </div>
  );
}

export default observer(App);
