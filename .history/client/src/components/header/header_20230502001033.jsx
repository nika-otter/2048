import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes.link} to="/how-to-play">
        How to play
      </Link>
      <Link className={classes.link} to="/">
        Game
      </Link>
      <Link className={classes.link} to="/login">
        Login
      </Link>
    </header>
  );
}

export default Header;
