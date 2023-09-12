import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from './SideBar.module.css';
export default function SideBar(){

    return <div className={styles.sidebar}>
        <Logo />
        <AppNav />
        <Outlet />
        {/* <p>list of cities</p> */}
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; CopyWrite Worldwise Inc.
            </p>
        </footer>
    </div>
}
