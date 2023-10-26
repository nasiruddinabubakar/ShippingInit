import { LogOut } from "lucide-react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
export const HeaderLogout = () => {
const navigate = useNavigate();
    function handleLogout(){

        localStorage.clear();
        navigate("/");

    }

  return (
    <header>
      <nav>
        <div className={styles.imgg}>
          <img src="/back.png" alt="shiplogo" />
        </div>
        <div style={{marginRight:"2rem"}}className={styles.headingg}>
          <h1>Shipping</h1>
          <h1>Init</h1>
          <div style={{display:"flex",marginLeft:"2rem"}}className={styles.logout}>
          <button onClick={handleLogout}>LogOut<LogOut /> </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
