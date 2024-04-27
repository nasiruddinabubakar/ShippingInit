import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles.imgg}>
          <Link to={'/'}>
          <img src="/back.png" alt="shiplogo" />
          </Link>
        </div>
        <div className={styles.headingg}>
          <h1>Shipping</h1>
          <h1>Init</h1>
        </div>
      </nav>
    </header>
  );
};
