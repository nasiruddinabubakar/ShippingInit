import styles from "./ShipInfo.module.css";
import { Header } from "../../../UI/Header";
import { easeIn, motion } from "framer-motion";
import Opacity from "../../../framer/Opacity";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innercontainer}>
        <div className={styles.shipdetails}>
          <div className={styles.box}>
            <div className={styles.image}>
          <Opacity time={1}>
              <img src="/ship.jpeg" />
              </Opacity>
              </div>
          </div>
          
          <div className={styles.box}>
          <Opacity time={2}>
            <div style={{borderRadius:'1.5rem'}}>
              {" "}
               <h2 className={styles.bar}>Voyage Information</h2>
            </div>
          
            <VoyageDetails />
            </Opacity>
          </div>
        </div>
        <div className={styles.shipdetails}>
          <div className={styles.box}>
          <Opacity time={2}>
            <div>
              {" "}
              <h2 className={styles.bar}>Ship Information</h2>
            </div>
            <div class="flx flex2">
              <table class="aparams">
                <tbody>
                  <tr>
                    <td className="n3">IMO</td>
                    <td className="v3">9993433</td>
                  </tr>
                  <tr>
                    <td className="n3">Vessel Name</td>
                    <td className="v3">EVERACNE</td>
                  </tr>
                  <tr>
                    <td className="n3">Ship Type</td>
                    <td className="v3" id="spv0">
                      Container Ship
                    </td>
                  </tr>
                  <tr>
                    <td className="n3">Flag</td>
                    <td className="v3">Singapore</td>
                  </tr>
                  <tr>
                    <td className="n3">Home Port</td>
                    <td className="v3">
                      <span className="ttt0" data-title="At anchor">
                        India
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td class="n3">Gross Tonnage </td>
                    <td class="v3 v3np">236000</td>
                  </tr>
                  <tr>
                    <td class="n3">Length Overall</td>
                    <td class="v3">400m</td>
                  </tr>
                  <tr>
                    <td class="n3">Year of Build</td>
                    <td class="v3">2022</td>
                  </tr>
                  <tr>
                    <td class="n3">Company Name</td>
                    <td class="v3">Forex Shippers</td>
                  </tr>
                  <tr>
                    <td class="n3">Manager mail</td>
                    <td class="v3">alinaqi@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </Opacity >
          </div>
          <div className={styles.box}>
          <Opacity time={2}>

            <div>
              {" "}
              <h2 className={styles.bar}>Route Information</h2>
            </div>
            <VoyageDetails />
            </Opacity>
          </div>
        </div>
        <Link style={{margin:"1rem auto"}} to="/neworder/checkout">
        <button className={styles.butt}>Confirm Ship <Check size={20}/></button>
        </Link>
      </div>
    </div>
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
          <tr>
            <td className="n3">Distance / Time</td>
            <td className="v3">-</td>
          </tr>
          <tr>
            <td className="n3">Course / Speed</td>
            <td className="v3" id="spv0">
              76.5° / 0.0 kn
            </td>
          </tr>
          <tr>
            <td className="n3">Current draught</td>
            <td className="v3">13.6 m</td>
          </tr>
          <tr>
            <td className="n3">Navigation Status</td>
            <td className="v3">
              <span className="ttt0" data-title="At anchor">
                At anchor
              </span>
            </td>
          </tr>

          <tr>
            <td className="n3">IMO / MMSI</td>
            <td className="v3 v3np">9943267 / 563176600</td>
          </tr>
          <tr>
            <td className="n3">Callsign</td>
            <td className="v3">9V7305</td>
          </tr>
          <tr>
            <td className="n3">Flag</td>
            <td className="v3">Singapore</td>
          </tr>
          <tr>
            <td className="n3">Length / Beam</td>
            <td className="v3">400 / 62 m</td>
          </tr>
          <tr>
            <td className="n3">Current Port</td>
            <td className="v3">India</td>
          </tr>
          <tr>
            <td className="n3">Next Port</td>
            <td className="v3">Iran</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
