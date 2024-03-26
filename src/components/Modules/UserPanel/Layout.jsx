import { ArrowRightLeft, Check, Ship, User, LogOut } from 'lucide-react';
import styles from './Layout.module.css';
import { Header } from '../../UI/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../../UI/Spinner';
import React from 'react';

import { toast } from 'react-toastify';
import { SingleOrder } from './SingleOrder';
// import "reactjs-popup/dist/index.css";
export const Layout = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [singleOrder, setSingleOrder] = useState(null);
  const [transitOrDelivered, setTransitOrDelivered] = useState(false);
 
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate('/');
  }

  const onClickList = (e) => {
    e.preventDefault();
    if (e.target.value === 1) {
      setTransitOrDelivered(false);
    } else {
      setTransitOrDelivered(true);
    }
    console.log(e.target.value);
  };

  useEffect(() => {
    async function getOrders() {
      try {
        setIsLoading(true);
        const res = await fetch('http://127.0.0.1:5000/api/orders/history', {
          headers: {
            authorization: `${localStorage.getItem('user')}`,
          },
        });
        const response = await res.json();

        console.log(response);
        setOrders(response.orders);
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    }
    getOrders();
  }, []);

  async function onclickdel(booking_id) {
    console.log('hello transit');
    const res = await fetch(`http://127.0.0.1:5000/api/orders/${booking_id}`, {
      method: 'DELETE',
      headers: {
        authorization: `${localStorage.getItem('user')}`,
      },
    });
    await res.json();
  }

  return (
    <div className={`Main ${styles.main}`}>
      <Header />
      <div className={styles.window}>
        <div className={styles.navli}>
          <>
            <ul>
              <li onClick={(e) => onClickList(e)} value={1}>
                <ArrowRightLeft size={24} color="#ffb545" />
                Ongoing Orders{' '}
              </li>
              <li onClick={(e) => onClickList(e)} value={2}>
                {' '}
                <Check strokeWidth={2.9} color="#00c46a" />
                FullFilled Orders{' '}
              </li>
              <li>
                <User color="WHITE" />
                Account Info
              </li>
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
        <div className={styles.orderWindow}>
          {!singleOrder ?(
            console.log(orders),
          <ul className={styles.orders}>
            {isLoading ? (
              <Spinner />
            ) : (
              orders.map((item) => {
                return (!transitOrDelivered && !item.delivered) ||
                  (transitOrDelivered && item.delivered) ? (
                  <li onClick={() => setSingleOrder((nullval) => item)}>
                    <h4>{item.consignee_name}</h4>
                    <div>
                      <p style={{ display: 'flex', gap: '3rem' }}>
                        {item.pickup} -- {item.dropoff}
                      </p>
                    </div>
                  </li>
                ) : (
                 <></>
                );
              })
            )}
          </ul>
          ):(<SingleOrder order={singleOrder} setSingleOrder={setSingleOrder}/> ) }
        </div>
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

const OrderPopup = ({ item }) => {
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getOrderDetails() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://127.0.0.1:5000/api/orders/${item.booking_id}`,
          {
            headers: {
              authorization: `${localStorage.getItem('user')}`,
            },
          }
        );
        const response = await res.json();
        console.log(response);
        setOrder(response.booking);
        setIsLoading(false);
      } catch (err) {
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast_message',
        });
        setIsLoading(false);
      }
    }
    getOrderDetails();
  });

  return (
    <>
      {' '}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h3> Consignee Name : {item.consignee_name}</h3>
          <p>
            Route : {item.pickup} -- {item.dropoff}
          </p>
          <p>Weight : {order.weight_in_tonne} Tonnes</p>
          <p>Ship : {order.name}</p>
          <p>Company mail : {order.email}</p>
          {/* Add other order details as needed */}
        </>
      )}
    </>
  );
};

{
  /* <div className={styles.heading}>
          <h1>
            Delivered
            <Check strokeWidth={2.9} />
          </h1>
          <h1 style={{color:"#ffb545"}}>
            In Transit <Anchor color="#ffb545" />
          </h1>
        </div>
        <div className={styles.container}>
          <div className={styles.box}>
            <ul className={styles.list}>
              {isLoading ? (
                <Spinner />
              ) : (
                orders.map((item) => {
                  return item.delivered && item.isdeleted!==1 ? (
                    <li onClick={() => handleListItemClick(item)}>
                      <h3>{item.consignee_name}</h3>
                      <div>
                        <p>
                          {item.pickup} -- {item.dropoff}
                        </p>
                      </div>
                    </li>
                  ) : (
                    <></>
                  );
                })
              )}
            </ul>
            <Popup
              className="popup"
              open={isPopupOpen}
              onClose={handlePopupClose}
            >
              <div>
                {selectedOrder && (
                  <div className="papa">
                    <OrderPopup item={selectedOrder} />
                    <button className="delete-order" onClick={()=>onclickdel(selectedOrder.booking_id)}>Delete Order</button>
                  </div>
                )}
              </div>
            </Popup>
          </div>

          <div className={styles.box}>
            <ul className={styles.list}>
              {isLoading ? (
                <Spinner />
              ) : (
                orders.map((item) => {
                  return item.delivered && item.isdeleted!==1 ? (
                    <></>
                  ) : (
                    <li onClick={() => handleListItemClick(item)}>
                      <h3>{item.consignee_name}</h3>
                      <div>
                        <p>
                          {item.pickup} -- {item.dropoff}
                        </p>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
            
          </div>
        </div>
      </div>
      <div className={styles.btn_div}>
        <Link to="/user/neworder">
          <button onMouseOver={() => {}}>
            Ship New Order <Ship size={20} />
          </button>
        </Link> */
}
