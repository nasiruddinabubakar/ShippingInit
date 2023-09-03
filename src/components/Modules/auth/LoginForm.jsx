import { useState } from "react";
import styles from "./SignUp.module.css";
import { InputWithLabel } from "../../Molecules/InputWithLabel";

export function LoginForm() {
  const [mail, setMail] = useState("");
  function onhandleEmail(e) {
    console.log(e.target.value);
  }
  function onhandlePassword(e) {
    console.log(e.target.value);
  }
  return (
    <form className={styles.login}>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Email Address"}
          type={"email"}
          placeholder={"jack99@gmail.com"}
          onChangeInput={onhandleEmail}
        />
      </div>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Password"}
          type={"password"}
          placeholder={"***"}
          onChangeInput={onhandlePassword}
        />
      </div>
      <button>Login</button>
    </form>
  );
}
