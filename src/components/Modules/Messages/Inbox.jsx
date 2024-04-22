import { MoveLeft } from 'lucide-react';
import { Header } from '../../UI/Header';
import styles from './Inbox.module.css';
import { Link, Outlet } from 'react-router-dom';
import OpacityDiv from '../../framer/OpacityDiv';
import { Padding } from '@mui/icons-material';
export const Inbox = () => {
  return (
    <div className={`Main ${styles.main} `}>
      <Header />
      <OpacityDiv>
        <div className={styles.window}>
          <div className={styles.backArr}>
            <Link to="/">
              <button>
                <MoveLeft />
              </button>
            </Link>
          </div>
          <div className={styles.navli}>
            <div className={styles.chatHead}>Chats</div>
            <ul className={styles.chatList}>
              <li>
                <Link to="/user/inbox/msg">
                  <div className={styles.chat}>
                    <div className={styles.chatAvatar}><h4>FT</h4></div>
                    <div className={styles.chatDetails}>
                      <div className={styles.unreadDiv}>
                    <h4>Forex Traders</h4>
                      <h4 id={styles.number}>3</h4>
                      </div>
                    <p>Hi, thanks for contacting us, we will reach out shortly</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/user/inbox/msg">
                  <div className={styles.chat}>
                    <div className={styles.chatAvatar}><h4>FT</h4></div>
                    <div className={styles.chatDetails}>
                    <h4>Forex Traders</h4>
                    <p>Hi, thanks for contacting us, we will reach out shortly</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/user/inbox/msg">
                  <div className={styles.chat}>
                    <div className={styles.chatAvatar}><h4>FT</h4></div>
                    <div className={styles.chatDetails}>
                    <h4>Forex Traders</h4>
                    <p>Hi, thanks for contacting us, we will reach out shortly</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/user/inbox/msg">
                  <div className={styles.chat}>
                    <div className={styles.chatAvatar}><h4>FT</h4></div>
                    <div className={styles.chatDetails}>
                    <h4>Forex Traders</h4>
                    <p>Hi, thanks for contacting us, we will reach out shortly</p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <Outlet/>
        </div>
      </OpacityDiv>
    </div>
  );
};
