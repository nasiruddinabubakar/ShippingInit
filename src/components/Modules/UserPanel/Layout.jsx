import { ArrowRightLeft, Check, Ship, User, LogOut, Mail } from 'lucide-react';
import styles from './Layout.module.css';
import { Header } from '../../UI/Header';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../../UI/Spinner';
import React from 'react';

import { toast } from 'react-toastify';
import { SingleOrder } from './SingleOrder';
// import "reactjs-popup/dist/index.css";
export const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState(true);
  useEffect(() => {
    async function verifyToken() {
      const authToken = localStorage.getItem("user");
      if (authToken) {
        setIsLoading(true);
        const res = await fetch(
          "http://127.0.0.1:5000/api/users/authorization",
          {
            headers: {
              authorization: authToken,
             
            },
          }
        );
        const response = await res.json();
          console.log(response);
          setIsLoading(false);
        if (response.status === "failed") {
          navigate("/login/");
        } else {
          
        }
      } else {
        navigate("/login/");
      }
    }
    verifyToken();
  }, [login])

  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    console.log('logout');
    localStorage.clear();
    setLogin(false);
    navigate('/');
  }


 

  return (
    <div className={`Main ${styles.main}`}>
      <Header />
      <div className={styles.window}>
        <div className={styles.navli}>
          <>
            <ul>
              <Link to="/">
              <li  value={1}>
                <ArrowRightLeft size={24} color="#ffb545" />
                Ongoing Orders{' '}
              </li>
              </Link>
              <Link to="/previous-orders">
              <li  value={2}>
                {' '}
                <Check strokeWidth={2.9} color="#00c46a" />
                FullFilled Orders{' '}
              </li>
              </Link>
              <Link to="/inbox">
              <li >
              <Mail color="#1ee6be" />
                My Inbox 
              </li>
              </Link>
              <Link to="/account">
              <li >
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

