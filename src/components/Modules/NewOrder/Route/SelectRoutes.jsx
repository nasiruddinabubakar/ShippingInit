import styles from "./SelectRoutes.module.css";
import styles2 from "../../auth/SignUp.module.css";
import { InputWithLabel } from "../../../Molecules/InputWithLabel";
import { useEffect, useState } from "react";
import TopDown from "../../../framer/TopDown";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Label } from "../../../Atoms/Label";
import { Link } from "react-router-dom";

export const SelectRoutes = ({
  dropOff,
  handleCoordinates,
  pickUpOrDropOff,
  setPickupOrDropOff,
  dispatchPickUp
}) => {
  const headings = ["Flip it", "Ship it", "Sell it"];

  const notify = () => {
    toast.info('Routes Selected', {
      position: toast.POSITION.TOP_RIGHT,
      className: 'toast-message'
  });
  };

  function onhandleEmail() {}
  return (
    <div className={styles.sidebar}>
      <div className={styles.headings}>
        <AnimatePresence>
          {headings.map((heading, index) => (
            <motion.h1
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.7 }} // 0.2s delay between each heading
            >
              {heading}
            </motion.h1>
          ))}
        </AnimatePresence>
      </div>
      <h3 className={styles.head}>Select Routes</h3>
      <TopDown>
        <form className={styles2.login}>
          <div className={styles2.emailinput}>
            {/* <InputWithLabel
              text={"DropOff"}
              type={"text"}
              placeholder={"London"}
              onChangeInput={handleCoordinates}
            /> */}
            <Label text={'DropOff '}/>
            <input type="text" placeholder="London" onChange={handleCoordinates} disabled={pickUpOrDropOff?true:false}/>
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
                {/* <Link to ='/neworder/routes/ships'> */}
                <button type="button" onClick={dispatchPickUp}>
                  Confirm
                </button>
              {/* /  </Link> */}
                <ToastContainer />
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
      </TopDown>
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyrights ShippingInit Inc.</p>
      </footer>
    </div>
  );
};
