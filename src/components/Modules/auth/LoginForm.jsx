import { useState } from "react";
import styles from "./SignUp.module.css";
import { InputWithLabel } from "../../Molecules/InputWithLabel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TopDown from "../../framer/TopDown";

export function LoginData() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  function onhandleEmail(e) {
    setMail(e.target.value);
  }
  function onhandlePassword(e) {
    setPassword(e.target.value);
  }
  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json(); // Return the parsed response JSON
  }
  const handleLogin = (e) => {
    e.preventDefault();

    try {
      const response = postData("/api/v1/users", {
        email: mail,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LoginForm
      onhandleEmail={onhandleEmail}
      onhandlePassword={onhandlePassword}
      handleLogin={handleLogin}
    />
  );
}

export const LoginForm = ({ onhandleEmail, onhandlePassword, handleLogin }) => {
  return (
    <TopDown>
      <form className={styles.login} onSubmit={handleLogin}>
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
        <Link to="/user/dashboard">
        <button>Login</button>
        </Link>
      </form>
    </TopDown>
  );
};
