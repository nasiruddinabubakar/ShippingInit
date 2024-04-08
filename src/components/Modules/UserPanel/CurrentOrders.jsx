import React, { useState, useEffect } from 'react';
import Spinner from '../../UI/Spinner';
import styles from './Layout.module.css';
import { useOrders } from '../../../libs/react-query/queriesAndMutations';
import { Link } from 'react-router-dom';

export const CurrentOrders = () => {
    // const [orders, setOrders] = useState([]);
   
  
    const {data:orders,isPending:isLoading} = useOrders();
   try{
  return (
    
    <div className={styles.orderWindow}>
      <ul className={styles.orders}>
        {isLoading ? (
          <Spinner />
        ) : (
          orders?.map((item) => {
            return (  !item.delivered) 
            ? (
              <Link to={`/${item.booking_id}`}>
              <li onClick={() =>{}}>
                <h4
                  style={{
                    display: 'flex',
                    width: '20rem ',
                    fontSize: '1.8rem',
                    // border: '1px solid red',
                  }}
                >
                  {item.consignee_name}
                </h4>
                <div
                  style={{
                    display: 'flex',
                    width: '23rem ',
                    justifyContent: 'center',
                  }}
                >
                  <p
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      font: '20px',
                      alignItems: 'center',
                    }}
                    className={styles.route}
                  >
                    {item.pickup}{' '}
                    <img
                      src="/back.png"
                      style={{ width: '30px', height: '30px' }}
                    />
                    {item.dropoff}
                  </p>
                </div>
                <div style={{ display: 'flex', width: '10rem' }}>
                  <p className={styles.route}>
                    {new Date(item.booking_date).toLocaleDateString()}
                  </p>
                </div>
              </li>
            </Link>
            ) : (
              <></>
            );
          })
        )}
      </ul>
    </div>);
}catch(err){
  console.error(err);
  // return <div>Something went wrong</div>;
}
};
