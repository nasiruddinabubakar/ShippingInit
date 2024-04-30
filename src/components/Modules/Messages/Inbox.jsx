import { MoveLeft } from 'lucide-react';
import { Header } from '../../shared/Header';
import styles from './Inbox.module.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import OpacityDiv from '../../framer/OpacityDiv';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../../../libs/react-query/api';
import io from 'socket.io-client';
import { addNewNotification, addSocket } from '../../../features/chat/socketSlice';

export const Inbox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [onlines, setOnlines] = useState([]);
  const user_id = localStorage.getItem('user_id')
  const newMessage = useSelector((state) => state.socket?.newNotification);
  const companiesData = useSelector((state) => state.socket?.companyChats);

  console.log(companiesData);

  function navigateToChat(company) {
    const { name, user_id } = company;
    dispatch(addSocket(name));
    if (user_id === newMessage.sender_id) {
      dispatch(addNewNotification({}));
    }
    navigate(`/user/inbox/${user_id}`);
  }

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
      console.log(data);
      setOnlines(data);
    });

    socket.on('notification', ({ sender_id, message }) => {
      console.log(sender_id, message);
    });

    // Remove event listeners
    return () => {
      // socket.emit('bye', user_id);
      socket.disconnect();
    };
  }, [user_id]);
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
                <li
                  key={company.user_id}
                  onClick={() => navigateToChat(company)}
                >
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
                      <p
                        style={{
                          color:
                            newMessage.sender_id === company.user_id
                              ? '#00c46a'
                              : '#aaa',
                          fontSize: '1.2rem',
                          fontFamily: 'inherit',
                        }}
                      >
                        {newMessage.sender_id === company.user_id
                          ? newMessage.message
                          : company.last_message}
                      </p>
                    </div>
                  </div>
                  
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
