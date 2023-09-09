import { Ship } from "lucide-react";
import styles from "./Layout.module.css";
import { Header } from "../../UI/Header";

export const Layout = () => {
  // const [setColor]
  return (
    
    <div className={`Main ${styles.main}`}>
      <Header/>
      <div className={styles.container}>
        <div className={styles.box}>
          <ul className={styles.list}>
            <li>
              
              <h3>ID 2233</h3>
              <div>
                <p>Hermes Titanic</p>
              </div>
            </li>
            <li>
             
              <h3>ID 2233</h3>
              <div>
                <p>Karachi, Dubai, SiriLanka, SouthAfric</p>
              </div>
            </li>
            <li>
             
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Dubai, SiriLanka, SouthAfric</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Dubai, SiriLanka, SouthAfric</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Dubai, SiriLanka, SouthAfric</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Dubai, SiriLanka, SouthAfric</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Dubai, SiriLanka, SouthAfric</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Dubai, SiriLanka, SouthAfric</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Dubai, SiriLanka, SouthAfric</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Dubai, SiriLanka, SouthAfric</p>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.box}><ul className={styles.list}>
            <li>
              
              <h3>ID 2233</h3>
              <div>
                <p>Hermes Titanic</p>
              </div>
            </li></ul></div>
      </div>
      <div className={styles.btn_div}>
        <button onMouseOver={()=>{}}>Ship New Order <Ship size={20} /></button>
        </div>
    </div>
  );
};
