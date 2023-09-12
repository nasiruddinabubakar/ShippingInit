import styles from "./SelectRoutes.module.css";
import styles2 from "../../auth/SignUp.module.css";
import { InputWithLabel } from "../../../Molecules/InputWithLabel";
import { useEffect, useState } from "react";

export const SelectRoutes = ({ dropOff, handleCoordinates ,pickUpOrDropOff,setPickupOrDropOff}) => {

  function onhandleEmail() {}
  return (
    <div className={styles.sidebar}>
      <div className={styles.headings}>
        <h1>Flip it</h1>
        <h1> Ship it</h1>
        <h1> Sell it.</h1>
      </div>
      <h3>Select Routes</h3>

      <form className={styles2.login}>
        <div className={styles2.emailinput}>
          <InputWithLabel
            text={"DropOff"}
            type={"text"}
            placeholder={"London"}
            onChangeInput={handleCoordinates}
          />
        </div>

        <>
          {pickUpOrDropOff ? (
            <>
              <div className={styles2.emailinput}>
                <InputWithLabel
                  text={"Pickup"}
                  type={"text"}
                  placeholder={"Karachi"}
                  onChangeInput={handleCoordinates}
                />
              </div>
              <button type="button">Confirm</button>
            </>
          ) : (
            <>
              {" "}
              <button type="button" onClick={setPickupOrDropOff}>
                Confirm
              </button>
            </>
          )}
        </>
      </form>

      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyrights ShippingInit Inc.</p>
      </footer>
    </div>
  );
};
