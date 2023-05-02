import { Routes, Route } from "react-router-dom";
import Account from "../pages/Account";
import Game from "../pages/Game";
import Instruction from "../pages/Instruction";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/game" element={<Game />} /> */}
      {/* <Route path="/account" element={<Account />} /> */}
      <Route path="/how-to-play" element={<Instruction />} />
      <Route path="/" element={<Game />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
