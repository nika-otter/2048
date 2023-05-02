import "./App.css";

import AppRouter from "./router/AppRouter";

import { observer } from "mobx-react-lite";
function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default observer(App);
