import { useState } from "react";
import styles from "./SignUp.module.css";
import { InputWithLabel } from "../../Molecules/InputWithLabel";
import {  useNavigate } from "react-router-dom";

import TopDown from "../../framer/TopDown";
import { toast, ToastContainer } from "react-toastify";
import SpinnerFullPage from "../../UI/SpinnerFullPage";
import { postData } from "../../../utils/postData";
import { useDispatch } from "react-redux";
import { addUser } from "../../../features/user/userSlice";


export function LoginData() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onhandleEmail(e) {
    setMail(e.target.value);
  }

  function onhandlePassword(e) {
    console.log(e);
    setPassword(e.target.value);
  }
  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return regex.test(email);
  };
  const notify = (text) => {
    toast.error(text, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast_message",
    });
  };

  async function handleLogin(e) {
    e.preventDefault();
    if (validateEmail(mail) === false) {
      notify("Email is not valid");
      return;
    } else {
    }
    if (password.length < 4) {
      notify("Enter Valid Password");
      return;
    }
//https://ship-backend-qmsc.onrender.com/api/users/login
    try {
      setIsLoading((isloading) => true);
      const response = await postData("http://127.0.0.1:5000/api/users/login", {
        mail: mail,
        password: password,
      });
      setIsLoading((isloading) => false);
      console.log(response);
      dispatch(addUser(response.user?.user_id));
      if (response.status === "success") {
        localStorage.setItem("user", response.auth);
        moveToNext();
      } else {
        throw new Error("Invalid Email Or Password");
      }
      // Handle the response here if needed.
    } catch (error) {
      if (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        });
      }
    } finally {
      setTimeout(() => {
        setIsLoading((isloading) => false);
      }, 200);
    }

    function moveToNext() {
      setIsLoading((isloading) => true);
      setTimeout(() => {
        setIsLoading((isloading) => false);
        navigate("/");
      }, 100);
    }
  }

  return isloading ? (
    <SpinnerFullPage />
  ) : (
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
      <form className={styles.login} onSubmit={(e) => handleLogin(e)}>
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
        {/* <Link to="/user/dashboard"> */}
        <button type="submit">Login</button>
        {/* </Link> */}
        <ToastContainer />
      </form>
    </TopDown>
  );
};

