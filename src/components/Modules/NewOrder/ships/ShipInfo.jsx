import styles from "./ShipInfo.module.css";
import { Header } from "../../../UI/Header";

import Opacity from "../../../framer/Opacity";
import { Check } from "lucide-react";
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addShip } from "../../../../features/orders/orderSlice";
import SpinnerFullPage from "../../../UI/SpinnerFullPage";


export default () => {
  const [imageData, setImageData] = useState([]);
  const [shipDetails, setShipDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const id = params.id;
  console.log(id);
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
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const days = useSelector((state) => state.order.days);
  const weight = useSelector((state) => state.order.order.orderWeight);
  const price = Math.round(shipDetails.price_per_tonne * weight * (0.2 * days));
  const { pickup, dropoff } = useSelector((State) => State.order.route);
  function onConfirmShip() {
    console.log(shipDetails);

    dispacth(addShip({ shipId: shipDetails.ship_id,price:price }));

    navigate("/neworder/checkout");
  }

  return (
    <>
      {isLoading ? (
        <SpinnerFullPage />
      ) : (
        <div className={styles.container}>
          <Header />
          <div className={styles.innercontainer}>
            <div className={styles.shipdetails}>
              <div className={styles.box}>
                <div className={styles.image}>
                  <Opacity time={1}>
                    <img src={imageData} alt="Uploaded" />
                  </Opacity>
                </div>
              </div>

              <div className={styles.box}>
                <Opacity time={2}>
                  <div style={{ borderRadius: "1.5rem" }}>
                    {" "}
                    <h2 className={styles.bar}>Ship Information</h2>
                  </div>
                  <div class="flx flex2">
                    <table class="aparams">
                      <div className="outer-table">
                        <div className="table-div">
                          <div className="">Ship Name : </div>
                          <div className="">{shipDetails.name}</div>
                        </div>
                        <div className="table-div">
                          <div className="">Gross tonnage : </div>
                          <div className="">{shipDetails.capacity}</div>
                        </div>
                        <div className="table-div">
                          <div className="">Price per tonne : </div>
                          <div className="">{shipDetails.price_per_tonne}</div>
                        </div>
                        <div className="table-div">
                          <div className="">Current tonnage : </div>
                          <div className="">{shipDetails.currentWeight}</div>
                        </div>
                        <div className="table-div">
                          <div className="">Build Year : </div>
                          <div className="">{shipDetails.build_year}</div>
                        </div>
                        <div className="table-div">
                          <div className="">Home Port : </div>
                          <div className="">{shipDetails.start_country}</div>
                        </div>
                      </div>
                    </table>
                  </div>
                </Opacity>
              </div>
            </div>
            <div className={styles.shipdetails}>
              <div className={styles.box}>
                <Opacity time={2}>
                  <div>
                    {" "}
                    <h2 className={styles.bar}>Company Information</h2>
                  </div>
                  <div class="flx flex2">
                    <table class="aparams">
                    <div className="outer-table">
                        <div className="table-div">
                          <div className="n3">Company Name : </div>
                          <div className="v3">{shipDetails.Company_Name}</div>
                        </div>
                        <div className="table-div">
                          <div className="n3">Company Email : </div>
                          <div className="v3">{shipDetails.email}</div>
                        </div>
                        <div className="table-div">
                          <div className="n3">Company Phone : </div>
                          <div className="v3">0{shipDetails.phone_number}</div>
                        </div>
                        <div className="table-div">
                          <div className="n3">Company Country : </div>
                          <div className="v3">{shipDetails.country}</div>
                        </div>
                      </div>
                    </table>
                  </div>
                </Opacity>
              </div>
              <div className={styles.box}>
                <Opacity time={2}>
                  <div>
                    {" "}
                    <h2 className={styles.bar}>Route Information</h2>
                  </div>
                  <div className="flx flex2">
                    <table className="aparams">
                      <div className="outer-table">
                        <div className="table-div">
                          <div className="">Pickup Country : </div>
                          <div className="">{pickup} </div>
                        </div>
                        <div className="table-div">
                          <div className="">Dropoff Country : </div>
                          <div className="">{dropoff} </div>
                        </div>
                        <div className="table-div">
                          <div className="">Predicted ETA : </div>
                          <div className="">{days} days</div>
                        </div>
                        <div className="table-div">
                          <div className="">Price : </div>
                          <div className="">{price} Pkr</div>
                        </div>
                      </div>
                    </table>
                  </div>
                </Opacity>
              </div>
            </div>

            <button className={styles.butt} onClick={onConfirmShip}>
              Confirm Ship <Check size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const VoyageDetails = () => {
  return (
    <div className="flx flex2">
      <table className="aparams">
        <tbody>
          <tr>
            <td className="n3">Predicted ETA</td>
            <td className="v3">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
