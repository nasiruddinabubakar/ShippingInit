import { Anchor, Check, Container, Sailboat, Ship } from "lucide-react";
import styles from "./Layout.module.css";
import { HeaderLogout } from "../../UI/HeaderLogout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../UI/Spinner";
export const Layout = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
                  return (
                    <li>
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

          <div className={styles.box}>
            <ul className={styles.list}>
              <li>
                <h3>ID 2233</h3>
                <div>
                  <p>Hermes Titanic</p>
                </div>
              </li>
            </ul>
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
