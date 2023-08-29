import { useState } from 'react';
import styles from './SignUp.module.css'
export function SignUp() {

  const [isLogin,setIsLogin] = useState(true);

  function onHandleLogin(){

    setIsLogin(isLogin=>!isLogin);

  }
  return <>
  {isLogin?<Login/>:<Register />
  }
  <ToggleLoginSignup onHandleLogin={onHandleLogin} isLogin={isLogin}/>
  </>;
}
export function ToggleLoginSignup({onHandleLogin,isLogin}) {

  return <section>
   {isLogin? <><p>
      New Account?

    </p>
    <a href='#' onClick={onHandleLogin}>Register Now</a></>:<> <p>
    Already a User?

  </p>
  <a href='#' onClick={onHandleLogin}>Login Now</a></>}
  </section>;
}
export function Register(){
  return <form className={styles.login}>

  <div className={styles.emailinput}>
  <label>Enter Your Name</label>
    <input type='text' placeholder="Jack Reacher"></input>
    </div>
    <div className={styles.emailinput}>
    <label>Email address</label>
    <input type='email' placeholder="jack99@gmail.com"></input>
  </div>
  <div className={styles.passwordinput}>
    <label>Password</label>
    <input type='password' placeholder="****"></input>
  </div>
  <div className={styles.passwordinput}>
    <label>Confirm Password</label>
    <input type='password' placeholder="****"></input>
  </div>
  <button>Register</button>
</form>
}
export function Login(){

  return <form className={styles.login}>

  <div className={styles.emailinput}>
    <label>Email address</label>
    <input type='email' placeholder="jack99@gmail.com"></input>
  </div>
  <div className={styles.passwordinput}>
    <label>Password</label>
    <input type='password' placeholder="****"></input>
  </div>
  
  <button>Login</button>
</form>

}