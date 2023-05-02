import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

function Footer() {
  return (
    <header className={classes.header}>
      <Link className={classes.link} to="/how-to-play">
        How to play
      </Link>
      <Link className={classes.link} to="/">
        Game
      </Link>
      <Link className={classes.link} to="/account">
        Account
      </Link>
      <Link className={classes.link} to="/login">
        Login
      </Link>
    </header>
  );
}

export default Footer;
