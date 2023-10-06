import { useState } from "react";
import { RegisterData } from "./RegisterData";
import { LoginForm } from "./LoginForm";

import { Header } from "../../UI/Header";
export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const LoginRegister = isLogin ? LoginForm : RegisterData;

  function onHandleLogin() {
    setIsLogin((isLogin) => !isLogin);
  }
  return (
    <>
    
      <div className="Main">
     <Header/>
      {<LoginRegister />}
      <ToggleLoginSignup onHandleLogin={onHandleLogin} isLogin={isLogin} />
      </div>
    </>
  );
};
export function ToggleLoginSignup({ onHandleLogin, isLogin }) {
  return (
    <section>
      {isLogin ? (
        <>
          <p>New Account?</p>
          <a href="#" onClick={onHandleLogin}>
            Register Now
          </a>
        </>
      ) : (
        <>
          {" "}
          <p>Already a User?</p>
          <a href="#" onClick={onHandleLogin}>
            Login Now
          </a>
        </>
      )}
    </section>
  );
}

