import classes from "./LoginPage.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { observer } from "mobx-react-lite";
import LoginInfo from "../Login/LoginInfo";

function LoginPage() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <LoginInfo />
      </main>
      <Footer />
    </>
  );
}

export default observer(LoginPage);
