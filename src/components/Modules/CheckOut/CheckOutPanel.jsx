import { useSelector } from "react-redux";
import { Header } from "../../UI/Header";
import OpacityDiv from "../../framer/OpacityDiv";
import styles from "./CheckOutPanel.module.css";
import { CheckoutBox } from "./CheckoutBox";

export const CheckoutPanel = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerGrid}>
        <OpacityDiv>
          <RouteAndShipDetails />
        </OpacityDiv>
        <OpacityDiv>
          <OrderDetails />
        </OpacityDiv>
        <OpacityDiv>
          <CheckoutBox />
        </OpacityDiv>
      </div>
    </div>
  );
};

const RouteAndShipDetails = () => {
  return (
    <div className={styles.routeDetails}>
      {/* <h1 className={styles.headingg}>Ship And Route</h1> */}
      <div>
        <img src="/1.jpg" />
      </div>

      <div>
        <h1 className={styles.headingg}>Ship Detail</h1>
        <div className={styles.attributess}>
          <h3 className={styles.first_attr}>Ship Name : </h3>{" "}
          <h3 className={styles.second}>EverAcne</h3>
        </div>
        <div className={styles.attributess}>
          <h3 className={styles.first_attr}>Price/tonn : </h3>{" "}
          <h3 className={styles.second}>25000 PKR</h3>
        </div>
        <div className={styles.attributess}>
          <h3 className={styles.first_attr}>Voyage Time : </h3>{" "}
          <h3 className={styles.second}>10-14 days</h3>
        </div>
      </div>
    </div>
  );
};

const OrderDetails = () => {
  const order = useSelector((state) => state.order);
  const keys = [
    "Consignee Name",
    "Order Weight In Tonns",
    "Order Type",
    "Fragile",
    "Order Description",
  ];
  const values = Object.values(order);

  console.log(keys);
  return (
    <div className={styles.order}>
      <h1 className={styles.headingg}>Order Details</h1>

      <div
        style={{ borderBottom: "1px solid grey", paddingBottom: "3rem" }}
        className={styles.orderDetails}
      >
        {keys.map((item, i) => (
          <div className={styles.attributes} key={i}>
            <h3 className={styles.first_attr}>{item} : </h3>{" "}
            <h3 className={styles.second}>{values[i]}</h3>
          </div>
        ))}
      </div>

      <h1 style={{ marginTop: "3rem" }} className={styles.headingg}>
        Company Details
      </h1>

      <div className={styles.orderDetails}>
        <div className={styles.attributes}>
          <h3 className={styles.first_attr}>Company Name : </h3>{" "}
          <h3 className={styles.second}>ForexShippers</h3>
        </div>
        <div className={styles.attributes}>
          <h3 className={styles.first_attr}>Company Mail : </h3>{" "}
          <h3 className={styles.second}>alinaqi@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className={styles.attributes}>
<h3 className={styles.first_attr}>Cargo Weight : </h3>{" "}
<h3 className={styles.second}>50 tonn</h3>
</div>
<div className={styles.attributes}>
<h3 className={styles.first_attr}>Fragile : </h3>{" "}
<h3 className={styles.second}>Yes</h3>
</div>
<div className={styles.attributes}>
<h3 className={styles.first_attr}>Cargo Type : </h3>{" "}
<h3 className={styles.second}>Furniture</h3>
</div>
<div className={styles.attributes}>
<h3 className={styles.first_attr}>Cargo Description : </h3>{" "}
<h3 className={styles.second}>Corporate Office equipments</h3>
</div> */
}
