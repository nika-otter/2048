import classes from "./InstructionPage.module.scss";
import Howtoplay from "../HowToPlay/howtoplay";

function InstructionPage() {
  return (
    <main className={classes.main}>
      <Howtoplay />
    </main>
  );
}

export default InstructionPage;
