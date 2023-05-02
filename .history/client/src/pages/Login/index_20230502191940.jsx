import { observer } from "mobx-react-lite";
import LoginPage from "../../components/LoginPage/LoginPage";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Login() {
  return (
    <>
      <Header />
      <LoginPage />
      <Footer />
    </>
  );
}

export default observer(Login);
