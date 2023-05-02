import { observer } from "mobx-react-lite";
import LoginPage from "../../components/LoginPage/LoginPage";

function Login() {
  return (
    <>
      <LoginPage />
    </>
  );
}

export default observer(Login);
