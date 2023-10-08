import styles from "../../Modules/auth/SignUp.module.css";
import { Link } from "react-router-dom";
import { Header } from "../../UI/Header";
import { InputWithLabel } from "../../Molecules/InputWithLabel";
import TopDown from "../../framer/TopDown";

export default function () {
  return (
    <div className="Main">
      <Header />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ gap:'1rem',margin:'1rem', display: "flex" ,justifyContent:'center'}}>
          <h1
            style={{
              display: "flex",
              color:'white'
            }}
          >
            With Us, 
          </h1>
          <h1 style={{color:'#00c46a'}}>  Its Easy !</h1>
        </div>
        <NewOrderForm />
      </div>
    </div>
  );
}
export function NewOrderForm() {
  function onhandleEmail() {}
  function onhandlePassword() {}
  return (
    <TopDown>
    <form className={styles.login}>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Consignee Name"}
          type={"text"}
          placeholder={"Nasiruddin Abubakar"}
          onChangeInput={onhandleEmail}
        />
      </div>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Weight in Tonns"}
          type={"number"}
          placeholder={"50"}
          onChangeInput={onhandlePassword}
        />
      </div>
      <Link to="/neworder/routes">
        <button>Next </button>
      </Link>
    </form>
    </TopDown>
  );
}
