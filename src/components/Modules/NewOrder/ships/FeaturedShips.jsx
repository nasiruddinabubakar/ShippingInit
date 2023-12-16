import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../../UI/Header";
import styles from "./FeaturedShips.module.css";
import OpacityDiv from "../../../framer/OpacityDiv";
import { CheckoutBox } from "../../CheckOut/CheckoutBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { postData } from "../../../../utils/postData";
import SpinnerFullPage from "../../../UI/SpinnerFullPage";

import { addDay } from "../../../../features/orders/orderSlice";
import { toast,ToastContainer } from "react-toastify";
const FeaturedShips = () => {
  const { pickup, dropoff } = useSelector((state) => state.route);
  const {currWeight} = useSelector((state)=>state.order.orderWeight);
  const [shipArr, setShipArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let shipsData = [];
  // console.log(route);
  useEffect(() => {
    async function getShips() {
      try {
        setIsLoading(true);
        const response = await postData(
          "https://ship-backend-qmsc.onrender.com/api/ships/route",
          {
            pickup,
            dropoff,
            currWeight
          }
        );
        const shipsData = response.ships;
          if(response.status==="failed"){
            setIsLoading(false)
            toast.error("No Ships Found", {
              position: toast.POSITION.TOP_RIGHT,
              className: "toast_message",
            });
          
          }
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
        setIsLoading(false);
        toast.error("Error Fetching Ships", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        });
      }
    }

    getShips();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function saveDay(id, day) {
    dispatch(addDay({ days: day }));
    navigate(`/neworder/routes/ships/${id}`);
  }

  console.log(shipsData);

  return (
    <div className={styles.container}>
      <ToastContainer/>
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
                <Details
                  day={item.timeTaken}
                  name={item.name}
                  id={item.ship_id}
                  saveDay={saveDay}
                />
              </div>
            ))}
  
            {/* <CheckoutBox/> */}
          </div>
        </div>
      )}
    </div>
  );
};

export const Details = ({ day, name, id ,saveDay}) => {
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

      <div className={styles.detailbtn}>
        <button onClick={() => saveDay(id, day)}>Details</button>
      </div>
    </div>
  );
};

export default FeaturedShips;
