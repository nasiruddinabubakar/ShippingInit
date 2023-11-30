import { Link } from "react-router-dom";
import { Header } from "../../../UI/Header";
import styles from "./FeaturedShips.module.css";
import OpacityDiv from "../../../framer/OpacityDiv";
import { CheckoutBox } from "../../CheckOut/CheckoutBox";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { postData } from "../../../../utils/postData";
import SpinnerFullPage from "../../../UI/SpinnerFullPage";
const FeaturedShips = () => {
  const { pickup, dropoff } = useSelector((state) => state.route);
  const [shipArr, setShipArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let shipsData = [];
  // console.log(route);
  useEffect(() => {
    async function getShips() {
      try {
        setIsLoading(true);
        const response = await postData(
          "http://127.0.0.1:5000/api/ships/route",
          {
            pickup,
            dropoff,
          }
        );
        const shipsData = response.ships;
        console.log(response);

        // Process the image data before setting the state
        const processedShipsData = shipsData.map((item) => {
          const { image } = item;
          const uint8Array = new Uint8Array(image.data);

          const blob = new Blob([uint8Array], { type: "image/jpg" }); // or 'image/jpeg'

          return {
            ...item,
            image: URL.createObjectURL(blob), // Use createObjectURL to set the image source
          };
        });

        setShipArr(processedShipsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching ships data:", error);
      }
    }

    getShips();
  }, []);

  console.log(shipsData);

  return (
    <div className={styles.container}>
      <Header />
      {isLoading ? (
        <SpinnerFullPage />
      ) : (
        <div className={styles.container}>
          <div className={styles.innercontainer}>
            {shipArr.map((item) => (
              <div className={styles.detailsbox}>
                <div className={styles.shipdiv}>
                  <img src={item.image} />
                </div>
                <Details day={item.timeTaken} name={item.name} />
              </div>
            ))}

            {/* <CheckoutBox/> */}
          </div>
        </div>
      )}
    </div>
  );
};

export const Details = ({ day ,name}) => {
  return (
    <div className={styles.sexy}>
      <div>
        <div className={styles.heading}>
          <h2>{name}</h2>
        </div>

        <div className={styles.dept}>
          <h3>Delivering in {day} days</h3>
        </div>
      </div>
      <Link to={"/neworder/routes/ships/ship"}>
        <div className={styles.detailbtn}>
          <button>Details</button>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedShips;
