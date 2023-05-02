import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/how-to-play">How to play</Link>
      <Link to="/">Game</Link>
      <Link to="/account">Account</Link>
      <Link to="/login">Login</Link>
    </header>
  );
}

export default Header;
