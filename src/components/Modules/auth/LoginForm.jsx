import { useState } from "react";
import styles from "./SignUp.module.css";
import { InputWithLabel } from "../../Molecules/InputWithLabel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TopDown from "../../framer/TopDown";

export function LoginForm() {
  const [mail, setMail] = useState("");
  function onhandleEmail(e) {
    console.log(e.target.value);
  }
  function onhandlePassword(e) {
    console.log(e.target.value);
  }
  return (
 <TopDown>
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
      <Link to='/user/dashboard'>
      <button>Login</button>
      </Link>
    </form>
    </TopDown>
   
  );
}
