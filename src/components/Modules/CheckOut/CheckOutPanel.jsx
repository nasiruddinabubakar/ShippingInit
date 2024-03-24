import { useSelector } from "react-redux";
import { Header } from "../../UI/Header";
import OpacityDiv from "../../framer/OpacityDiv";
import styles from "./CheckOutPanel.module.css";
import { CheckoutBox } from "./CheckoutBox";
import { useEffect, useState } from "react";
import Spinner from "../../UI/Spinner";

export const CheckoutPanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageData, setImageData] = useState([]);
  const [shipDetails, setShipDetails] = useState({});
  const days = useSelector((state) => state.days);
  const id = useSelector((state) => state.route.shipId);
  useEffect(() => {
    async function getShips() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/api/ships/getships",
          {
            cache: "no-store", // Disable caching
            mode: "cors", // Enable cross-origin resource sharing
            headers: {
              shipID: id,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        const { image } = data;
        setShipDetails((state) => data);

        const uint8Array = new Uint8Array(image.data);

        const blob = new Blob([uint8Array], { type: "image/jpg" }); // or 'image/jpeg'

        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          setImageData(base64Data);
        };
        reader.readAsDataURL(blob);
        setIsLoading(false);
      } catch (Err) {
        console.error("error occured ", Err.message);
      }
    }

    getShips();
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerGrid}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <OpacityDiv>
              <RouteAndShipDetails
                imageData={imageData}
                name={shipDetails.name}
                price_per_tonne={shipDetails.price_per_tonne}
                days={days}
              />
            </OpacityDiv>
            <OpacityDiv>
              <OrderDetails
                mail={shipDetails.email}
                companyName={shipDetails.Company_Name}
              />
            </OpacityDiv>
            <OpacityDiv>
              <CheckoutBox />
            </OpacityDiv>
          </>
        )}
      </div>
    </div>
  );
};

const RouteAndShipDetails = ({ imageData, name, price_per_tonne, days }) => {
  return (
    <div className={styles.routeDetails}>
      {/* <h1 className={styles.headingg}>Ship And Route</h1> */}

      <>
        <div>
          <img src={imageData} alt="shipimg"/>
        </div>

        <div>
          <h1 className={styles.headingg}>Ship Detail</h1>
          <div className={styles.attributess}>
            <h3 className={styles.first_attr}>Ship Name : </h3>{" "}
            <h3 className={styles.second}>{name}</h3>
          </div>
          <div className={styles.attributess}>
            <h3 className={styles.first_attr}>Price/tonn : </h3>{" "}
            <h3 className={styles.second}> {price_per_tonne} PKR</h3>
          </div>
          <div className={styles.attributess}>
            <h3 className={styles.first_attr}>Voyage Time : </h3>{" "}
            <h3 className={styles.second}>{days} days</h3>
          </div>
        </div>
      </>
    </div>
  );
};

const OrderDetails = ({mail,companyName}) => {
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
          <h3 className={styles.second}>{companyName}</h3>
        </div>
        <div className={styles.attributes}>
          <h3 className={styles.first_attr}>Company Mail : </h3>{" "}
          <h3 className={styles.second}>{mail}</h3>
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
