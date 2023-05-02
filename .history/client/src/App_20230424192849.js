import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <LoginForm />
    </div>
  );
}

export default App;
