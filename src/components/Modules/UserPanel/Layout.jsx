import { Ship } from "lucide-react";
import styles from "./Layout.module.css";
import { Header } from "../../UI/Header";

export const Layout = () => {
  // const [setColor]
  return (
    
    <div className={`Main ${styles.main}`}>
      <Header/>
      <div className={styles.container}>
        <div className={styles.box}></div>

        <div className={styles.box}></div>
      </div>
      <div className={styles.btn_div}>
        <button onMouseOver={()=>{}}>Ship New Order <Ship size={20} /></button>
        </div>
    </div>
  );
};
