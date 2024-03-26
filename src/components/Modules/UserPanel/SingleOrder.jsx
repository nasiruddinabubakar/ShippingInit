import { useEffect, useState } from 'react';
import styles from './SingleOrder.module.css';
import { toast } from 'react-toastify';
import { MessageCircle, MoveLeft, Send, SendHorizonal } from 'lucide-react';
import OpacityDiv from '../../framer/OpacityDiv';

export const SingleOrder = ({ order, setSingleOrder }) => {
  const [orderSingle, setOrder] = useState({});
  const[ImageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getOrderDetails() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://127.0.0.1:5000/api/orders/${order.booking_id}`,
          {
            headers: {
              authorization: `${localStorage.getItem('user')}`,
            },
          }
        );
        const response = await res.json();
        console.log(response);
        setOrder(response.booking);
        const { image } = response.booking;
        const uint8Array = new Uint8Array(image.data);

        const blob = new Blob([uint8Array], { type: "image/jpg" }); // or 'image/jpeg'

        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          setImageData(base64Data);
        };
        reader.readAsDataURL(blob);
        setIsLoading(false);
        console.log(orderSingle);
      } catch (err) {
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast_message',
        });
        setIsLoading(false);
      }
    }
    getOrderDetails();
  }, []);

  return (
    <OpacityDiv>
    <div className={styles.order}>
      <div className={styles.backArr}>
        <button onClick={() => setSingleOrder((item) => null)}>
          <MoveLeft />
        </button>
      </div>
      <div className={styles.details}>
        <div className={styles.imageDiv}>
          <img src={ImageData} width={100} height={100} alt="order" />
        </div>
        <div className={styles.detailDiv}>
          <h3
            style={{ marginTop: '1rem', fontSize: '2.3rem', color: '#00c46a' }}
          >
            Order Details
          </h3>
          <h4 style={{ marginTop: '3rem' }}>
            Consignee : {order.consignee_name}
          </h4>
          <h4 style={{ marginTop: '1.85rem' }}>
            Ship Name : {orderSingle.shipName}
          </h4>
          <h4 style={{ marginTop: '1.85rem' }}>
            Company Name : {orderSingle.name}
          </h4>
          <h4 style={{ marginTop: '1.85rem' }}>
            Weight In Ton: {orderSingle.weight_in_tonne}
          </h4>
          <h4 style={{ marginTop: '1.85rem' }}>
            Pickup Country : {order.pickup}
          </h4>
          <h4 style={{ marginTop: '1.85rem' }}>
            Dropoff Country : {order.dropoff}
          </h4>
          {/* <h4>Ship Name : {orderSingle.name}</h4> */}
        </div>
      </div>

      <div className={styles.company}>
        <div className={styles.headingg}>
          <h3
            style={{ marginTop: '1rem', fontSize: '2.3rem', color: '#00c46a' }}
          >
            Company Details
          </h3>
        </div>
        <div className={styles.companyDiv}>
          <div>
            <h4 style={{ marginTop: '3rem' }}>
              Company Name : {orderSingle.name}
            </h4>
            <h4>Company Email : {orderSingle.email}</h4>
            <h4>Company Phone : {orderSingle.phone}</h4>
            <h4>Company Address : {orderSingle.address}</h4>
          </div>

          <div className={styles.btnDiv}>
            <button className={styles.btn}>
              Message <MessageCircle size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* <h3>{order.consignee_name}</h3>
        <div>
            <p>
                {order.pickup} -- {order.dropoff}
            </p>
        </div> */}
    </div>
    </OpacityDiv>
  );
};
