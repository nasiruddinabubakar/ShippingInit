import TopDown from "../../framer/TopDown";
import { InputWithLabel } from "../../Molecules/InputWithLabel";
import styles from "./SignUp.module.css";

export const RegisterForm = () => {
  function onHandleName(e) {}
  return (
    <TopDown>
    <form className={styles.login}>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Enter Your Name"}
          type={"text"}
          placeholder={"Jack Reacher"}
          onChangeInput={onHandleName}
        />
      </div>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Email Address"}
          type={"email"}
          placeholder={"jack99@gmail.com"}
          onChangeInput={onHandleName}
        />
      </div>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Password"}
          type={"password"}
          placeholder={"*****"}
          onChangeInput={onHandleName}
        />
      </div>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Confirm Password"}
          type={"password"}
          placeholder={"*****"}
          onChangeInput={onHandleName}
        />
      </div>
      <button>Register</button>
    </form>
    </TopDown>
  );
};
