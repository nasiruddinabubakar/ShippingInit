import { Link } from "react-router-dom";
import { Header } from "../../../UI/Header";
import styles from "./FeaturedShips.module.css";
import OpacityDiv from "../../../framer/OpacityDiv";
import {  CheckoutBox } from "../../CheckOut/CheckoutBox";
const FeaturedShips = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.container}>
        <div className={styles.innercontainer}>
         <OpacityDiv>
          <div className={styles.detailsbox}>
            <div className={styles.shipdiv}>
              <img src="/1.jpg" />
            </div>
            <Details />
          </div>
          </OpacityDiv>
         <OpacityDiv>
          <div className={styles.detailsbox}>
            <div className={styles.shipdiv}>
              <img src="/ship.jpeg" />
            </div>
            <Details />
          </div>
          </OpacityDiv>
         <OpacityDiv>
          <div className={styles.detailsbox}>
            <div className={styles.shipdiv}>
              <img src="/ship1.jpeg" />
            </div>
            <Details />
          </div>
          </OpacityDiv>
         <OpacityDiv>
          <div className={styles.detailsbox}>
            <div className={styles.shipdiv}>
              <img src="/ship2.jpg" />
            </div>
            <Details />
          </div>
          </OpacityDiv>
          <CheckoutBox/>
        </div>
        
      </div>
    </div>
  );
};

export const Details = () => {
  return (
    <div className={styles.sexy}>
      <div>
        <div className={styles.heading}>
          <h2>EverAcme</h2>
        </div>
        <div className={styles.dept}>
          <h3>Departing in 02 days</h3>
        </div>
        <div className={styles.arriv}>
          <h4>Arriving in 14-20 days</h4>
        </div>
      </div>
      <Link to={'/neworder/routes/ships/ship'}>
      <div className={styles.detailbtn}>
        <button>Details</button>
      </div>
      </Link>
    </div>
  );
};

export default FeaturedShips;
