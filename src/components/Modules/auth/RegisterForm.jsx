import TopDown from "../../framer/TopDown";
import { InputWithLabel, PhoneWithLabel } from "../../Molecules/InputWithLabel";
import styles from "./SignUp.module.css";
import { ToastContainer } from "react-toastify";


export default ({
  handleRegister, onHandleName, onHandleMail, onsetTemp, onHandlePassword,onHandlePhone,onHandleAddress
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
        <div className={styles.emailinput}> 
          <PhoneWithLabel 
          text={"Enter Phone Number"}
          type={"tel"}
          pattern={"\+92-[0-9]{3}-[0-9]{7}"}
          placeholder={"+92-XXX-XXXXXXX"}
          onChangeInput={onHandlePhone}/>
        </div>
        <div className={styles.emailinput}> 
          <PhoneWithLabel 
          text={"Enter Your Address"}
          type={"text"}
          placeholder={"27/2 street 1"}
          onChangeInput={onHandleAddress}/>
        </div>
        <button>Register</button>
      </form>
    </TopDown>
  );
};
