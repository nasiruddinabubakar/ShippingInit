import { Anchor, Check, Container, Sailboat, Ship } from "lucide-react";
import styles from "./Layout.module.css";
import { HeaderLogout } from "../../UI/HeaderLogout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../UI/Spinner";
import React from "react";
import Popup from "reactjs-popup";
import { toast } from "react-toastify";
// import "reactjs-popup/dist/index.css";
export const Layout = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleListItemClick = (order) => {
    setSelectedOrder(order);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setSelectedOrder(null);
    setIsPopupOpen(false);
  };

  useEffect(() => {
    async function getOrders() {
      try {
        setIsLoading(true);
        const res = await fetch("http://127.0.0.1:5000/api/orders/history", {
          headers: {
            authorization: `${localStorage.getItem("user")}`,
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
  return (
    <div className={`Main ${styles.main}`}>
      <HeaderLogout />
      <div className={styles.papa}>
        <div className={styles.heading}>
          <h1>
            Delivered
            <Check strokeWidth={2.9} />
          </h1>
          <h1>
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
                  return item.delivered ? (
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
                    <button className="delete-order">Delete Order</button>
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
                  return item.delivered ? (
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
            <Popup
              className="popup"
              open={isPopupOpen}
              onClose={handlePopupClose}
            >
              <div>
                {selectedOrder && (
                  <div className="papa">
                    <OrderPopup item={selectedOrder} />
                    <button className="delete-order">Delete Order</button>
                  </div>
                )}
              </div>
            </Popup>
          </div>
        </div>
      </div>
      <div className={styles.btn_div}>
        <Link to="/user/neworder">
          <button onMouseOver={() => {}}>
            Ship New Order <Ship size={20} />
          </button>
        </Link>
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
              authorization: `${localStorage.getItem("user")}`,
            },
          }
        );
        const response = await res.json();
        setOrder(response.booking);
        setIsLoading(false);
      } catch (err) {
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        });
        setIsLoading(false);
      }
    }
    getOrderDetails();
  }, []);

  return (
    <>
      {" "}
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
