import { useEffect, useState } from "react";
import { RegisterData } from "./RegisterData";
import { LoginData, LoginForm } from "./LoginData";

import { Header } from "../../UI/Header";
import { useNavigate } from "react-router-dom";
import SpinnerFullPage from "../../UI/SpinnerFullPage";

export const Login = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const LoginRegister = isLogin ? LoginData : RegisterData;
  const navigate = useNavigate();
  useEffect(() => {
    async function verifyToken() {
      const authToken = localStorage.getItem("user");
      if (authToken) {
        const res = await fetch(
          "http://127.0.0.1:5000/api/users/authorization",
          {
            headers: {
              authorization: authToken,
            },
          }
        );
        const response = await res.json();
          console.log(response);
        if (response.status === "failed") {
          setIsLoading((isloading) => false);
        } else {
          setTimeout(() => {
            navigate("/user/dashboard");
          }, 300);
        }
      } else {
        setTimeout(() => {
          setIsLoading((isloading) => false);
        }, 500);
      }
    }
    verifyToken();
  }, []);

  function onHandleLogin() {
    setIsLogin((isLogin) => !isLogin);
  }
  return (
    <>
      <div className="Main">
        <Header />

        {isloading ? <SpinnerFullPage /> : <LoginRegister />}
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
