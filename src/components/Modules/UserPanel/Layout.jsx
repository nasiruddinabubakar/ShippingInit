import {  Anchor, Check, Container, Sailboat, Ship } from "lucide-react";
import styles from "./Layout.module.css";
import { HeaderLogout } from "../../UI/HeaderLogout";
import { Link } from "react-router-dom";
export const Layout = () => {
  // const [setColor]
  return (
    
    <div className={`Main ${styles.main}`}>
      <HeaderLogout/>
      <div className={styles.papa}>
      <div className={styles.heading}>
      <h1>Delivered<Check strokeWidth={2.9} /></h1>
      <h1>In Transit <Anchor color="#ffb545"/></h1>
      </div>
      <div className={styles.container}>
       
        <div className={styles.box}>
          <ul className={styles.list}>
           
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Dubai,</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, SriLanka</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Dubai, </p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Washingtons</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Washingtons</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Washingtons</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Washingtons</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Washingtons</p>
              </div>
            </li>
            <li>
              
              <h3>ID 2233</h3>
              <div>
              <p>Karachi, Washingtons</p>
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
      </div>
      <div className={styles.btn_div}>
       <Link to='/user/neworder'>
        <button onMouseOver={()=>{}}>Ship New Order <Ship size={20} /></button>
        </Link>
        </div>
    </div>
  );
};
