import { useSelector } from 'react-redux';
import styles from './CheckoutBox.module.css';

import { ToastContainer, toast } from 'react-toastify';
import { QUERY_KEYS } from '../../../libs/react-query/queryKeys';
import { useQueryClient } from '@tanstack/react-query';

export const CheckoutBox = () => {
  const order = useSelector((state) => state.order.order);
  const route = useSelector((state) => state.order.route);
  const price = useSelector((State) => State.order.price);
  const days = useSelector((State) => State.order.days);
  const authToken = localStorage.getItem('user');
  const queryClient = useQueryClient();
  async function ConfirmOrder() {
    console.log({ order, route });
    try {
      const res = await fetch('http://127.0.0.1:5000/api/orders/neworder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`,
        },
        body: JSON.stringify({ order, route, days, price }),
      });
      const response = await res.json();
      if (response.status === 'failed') {
        toast.error(response.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast_message',
        });
      }
      if (response.status === 'success') {
        queryClient.invalidateQueries([QUERY_KEYS.ORDERS])
        toast.success('Order Confirmed', {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast_message',
        });
      }
    } catch (error) {
      if (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast_message',
        });
      }
    }
  }

  return (
    <div className={styles.summary_section}>
      <div className={styles.sum}>
        <div className={styles.summary_section_heading}>Order Summary</div>
        <div className={styles.checkout_summary}>
          <div className={styles.checkout_summary_label}>
            <div className={styles.coupon}>
              <input type="text" placeholder="Enter Voucher Here" />{' '}
              <button>Apply</button>
            </div>
          </div>
          <div className={styles.total__price}>
            <div>Total</div> <div>{price} PKR</div>
          </div>
          <ToastContainer />
          <div>
            <button className={styles.proceed} onClick={ConfirmOrder}>
              Confirm ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
