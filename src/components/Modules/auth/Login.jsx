import { useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const LoginRegister = isLogin ? LoginForm : RegisterForm;

  function onHandleLogin() {
    setIsLogin((isLogin) => !isLogin);
  }
  return (
    <>
    
      <div className="Main">
      <header></header>
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

