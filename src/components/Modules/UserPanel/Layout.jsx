import { ArrowRightLeft, Check, Ship, User, LogOut, Mail } from 'lucide-react';
import styles from './Layout.module.css';
import { Header } from '../../shared/Header';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import React from 'react';


import OpacityDiv from '../../framer/OpacityDiv';
import {  useQuery, useQueryClient } from '@tanstack/react-query';

import { useDispatch, useSelector } from 'react-redux';
import { addChats, addNewNotification } from '../../../features/chat/socketSlice';
import { io } from 'socket.io-client';

import { ToastContainer, toast } from 'react-toastify';
import { fetchCompanies } from '../../../libs/react-query/api';
// import "reactjs-popup/dist/index.css";
export const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [onlines, setOnlines] = useState([]);
  const user_id = localStorage.getItem('user_id');
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { data: companiesData } = useQuery({
    queryKey: ['companies'],
    queryFn: () => fetchCompanies(user_id)
    
  });
  dispatch(addChats(companiesData));

  const [login, setLogin] = useState(true);
  useEffect(() => {
    async function verifyToken() {
      const authToken = localStorage.getItem('user');
      if (authToken) {
        setIsLoading(true);
        const res = await fetch(
          'https://ship-backend-qmsc.onrender.com/api/users/authorization',
          {
            headers: {
              authorization: authToken,
            },
          }
        );
        const response = await res.json();
        console.log(response);
        setIsLoading(false);
        if (response.status === 'failed') {
          navigate('/login');
        } else {
        }
      } else {
        navigate('/login');
      }
    }
    verifyToken();
 
      const socket = io('https://ship-backend-qmsc.onrender.com/', {
        auth: {
          token: user_id,
        },
      }); // Replace with your server URL
     
      // Add event listeners
      socket.on('connect', () => {
        console.log('Connected to server');
      });
      socket.on('onlineUsers', (data) => {
        console.log('onlineUsers', data); 
        setOnlines(data);
      });
      socket.on('newnotification', ({sender_id, receiver_id, message}) => {
      console.log('notification', {sender_id, receiver_id, message});
      const {name} = companiesData.find(company => company.user_id === sender_id);
      const audio = new Audio('/notification.mp3');
      audio.play();
      toast.info(`New Message from ${name}`, {
        position: 'top-right',
        autoClose: 5000,
        className:'toast_message',
        progress: undefined,
        closeOnClick: true,
      });
      dispatch(addNewNotification({sender_id, receiver_id, message}));
      })
      // Remove event listeners
      return () => {
        // socket.emit('bye', user_id);
        socket.disconnect();
      };
    
  }, [login]);
  
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    console.log('logout');
    localStorage.clear();
    
    queryClient.clear()
    setLogin(false);
    
    navigate('/');
  }

  return (
    <div className={`Main ${styles.main}`}>
      <Header />
      <OpacityDiv>
      <ToastContainer/>
        <div className={styles.window} data-testid='layout'>
          <div className={styles.navli}>
            <>
              <ul>
                <Link to="/">
                  <li value={1}>
                    {' '}
                    <Check strokeWidth={2.9} color="#00c46a" />
                    FullFilled Orders{' '}
                  </li>
                </Link>
                <Link to="/current-orders">
                  <li value={2}>
                    <ArrowRightLeft size={24} color="#ffb545" />
                    Ongoing Orders{' '}
                  </li>
                </Link>
                <Link to="/user/inbox">
                  <li>
                    <Mail color="#1ee6be" />
                    My Inbox
                  </li>
                </Link>
                <Link to="/account-info">
                  <li>
                    <User color="WHITE" />
                    Account Info
                  </li>
                </Link>
              </ul>

              <div
                style={{ display: 'flex', marginLeft: '0rem' }}
                className={styles.logout}
              >
                <button onClick={handleLogout}>
                  LogOut
                  <LogOut />{' '}
                </button>
              </div>
            </>
          </div>
          <Outlet />
        </div>
      </OpacityDiv>
      <div className={styles.btn_div}>
        <Link to="/user/neworder">
          <button onMouseOver={() => {}}>
            Ship New Order <Ship size={20} />
          </button>
        </Link>{' '}
        */
      </div>
    </div>
  );
};
