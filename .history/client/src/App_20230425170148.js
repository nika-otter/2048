import { useContext, useEffect } from "react";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import AppRouter from "./router/AppRouter";
import { Context } from "./index";

function App() {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);
  return (
    <div className="App">
      <AppRouter />
      <h1>{store.isAuth ? `User: ${store.user.email}` : "Not Auth"}</h1>
      <LoginForm />
    </div>
  );
}

export default App;
