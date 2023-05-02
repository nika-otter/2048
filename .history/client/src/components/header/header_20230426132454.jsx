import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <Link to="/how-to-play">How to play</Link>
      <Link to="/">Game</Link>
      <Link to="/account">Account</Link>
      <Link to="/login">Login</Link>
    </header>
  );
}

export default Header;
