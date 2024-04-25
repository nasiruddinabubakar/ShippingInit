import { MoveLeft } from 'lucide-react';
import { Header } from '../../UI/Header';
import styles from './Inbox.module.css';
import { Link, Outlet } from 'react-router-dom';
import OpacityDiv from '../../framer/OpacityDiv';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { fetchCompanies } from '../../../libs/react-query/api';
import io from 'socket.io-client';

export const Inbox = () => {
  const [onlines, setOnlines] = useState([]);
  const user_id = useSelector((state) => state.user?.user_id);

  const { data: companiesData } = useQuery({
    queryKey: ['companies'],
    queryFn: () => fetchCompanies(user_id),
    staleTime: Infinity,
  });

  useEffect(() => {
    const socket = io('http://127.0.0.1:5000', {
      auth: {
        token: user_id,
      },
    }); // Replace with your server URL

    // Add event listeners
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    socket.on('onlineUsers', (data) => {
      setOnlines(data);
    });

    // Remove event listeners
    return () => {
      socket.emit('bye', user_id);
      socket.disconnect();
    };
  }, []);
  // Make sure to include user_id in the dependency array

  return (
    <div className={`Main ${styles.main}`}>
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
              {companiesData?.map((company) => (
                <li key={company.user_id}>
                  <Link to="/user/inbox/msg">
                    <div className={styles.chat}>
                      <div className={styles.chatAvatar}>
                        <h4>
                          {company.name
                            ?.split(' ')
                            .map((word) => word[0].toUpperCase())
                            .join('')}
                        </h4>
                      </div>
                      <div className={styles.chatDetails}>
                        <div className={styles.unreadDiv}>
                          <h4>{company.name}</h4>
                          <h4 id={styles.number}>
                            {onlines?.includes(company.user_id) ? '.' : ''}
                          </h4>
                        </div>
                        <p>
                          Hi, thanks for contacting us, we will reach out
                          shortly
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Outlet />
        </div>
      </OpacityDiv>
    </div>
  );
};
