import TopDown from "../../framer/TopDown";
import { InputWithLabel } from "../../Molecules/InputWithLabel";
import styles from "./SignUp.module.css";
import { ToastContainer } from "react-toastify";


export default ({
  handleRegister, onHandleName, onHandleMail, onsetTemp, onHandlePassword,
}) => {
  return (
    <TopDown>
      <form className={styles.login} onSubmit={handleRegister}>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={"Enter Your Name"}
            type={"text"}
            placeholder={"Jack Reacher"}
            onChangeInput={onHandleName} />
        </div>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={"Email Address"}
            type={"email"}
            placeholder={"jack99@gmail.com"}
            onChangeInput={onHandleMail} />
        </div>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={"Password"}
            type={"password"}
            placeholder={"*****"}
            onChangeInput={onsetTemp} />
        </div>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={"Confirm Password"}
            type={"password"}
            placeholder={"*****"}
            onChangeInput={onHandlePassword} />
          <ToastContainer />
        </div>
        <button>Register</button>
      </form>
    </TopDown>
  );
};
