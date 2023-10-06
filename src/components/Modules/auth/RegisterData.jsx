import { useReducer, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterForm from "./RegisterForm";

const registerReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload };
    case "SET_MAIL":
      return { ...state, mail: payload };

    case "SET_PASSWORD":
      return { ...state, password: payload };

    default:
      return state;
  }
};

export const RegisterData = () => {
  const [registerUser, dispatch] = useReducer(registerReducer, {
    name: "",
    mail: "",
    password: "",
  });
  const [temp, setTemp] = useState("");

  function onsetTemp(e){
    setTemp(e.target.value);
  }
  
  function onHandleName(e) {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  }
  function onHandleMail(e) {
    dispatch({ type: "SET_MAIL", payload: e.target.value });
  }
  function onHandlePassword(e) {
    if (temp === e.target.value)
      dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  }
  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return regex.test(email);
  };

  function handleRegister (e)  {
    e.preventDefault();
    const notify = (text) => {
      toast.error(text, {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast_message",
      });
    };
    console.log(validateEmail(registerUser.mail));
    if (validateEmail(registerUser.mail) === false) {
      notify("Email is not valid");
    } else {
    }
    if (registerUser.password === "") {
      notify("Password Doesnt match");
    }

    console.log(registerUser);
  };
  return (
    <RegisterForm
      handleRegister={handleRegister}
      onHandleName={onHandleName}
      onHandleMail={onHandleMail}
      onsetTemp={onsetTemp}
      onHandlePassword={onHandlePassword}
    />
  );
};


