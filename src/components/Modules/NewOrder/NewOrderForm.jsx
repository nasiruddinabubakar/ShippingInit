import styles from "../../Modules/auth/SignUp.module.css";
import { Link } from "react-router-dom";
import { InputWithLabel } from "../../Molecules/InputWithLabel";
import { motion } from "framer-motion";

export function NewOrderForm({
  onsetCons, onHandleWeight, onHandleType, onHandleFragile, onHandleDesc,onSubmitOrder
}) {
  return (
    <motion.div
      initial={{ marginTop: "0rem" }}
      animate={{ marginTop: "2rem" }}
      transition={{ duration: 0.5 }}
    >
      <form style={{ marginTop: "0rem" }} className={styles.login} onSubmit={onSubmitOrder}>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={"Consignee Name"}
            type={"text"}
            placeholder={"Nasiruddin Abubakar"}
            onChangeInput={onsetCons} />
        </div>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={"Weight in Tonns"}
            type={"number"}
            placeholder={"50"}
            onChangeInput={onHandleWeight} />
        </div>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={"Cargo Type"}
            type={"text"}
            placeholder={"furniture"}
            onChangeInput={onHandleType} />
        </div>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={"Cargo Description"}
            type={"text"}
            placeholder={"Company furniture for renevation"}
            onChangeInput={onHandleFragile} />
        </div>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={"Fragile"}
            type={"text"}
            placeholder={"Yes/No"}
            onChangeInput={onHandleDesc} />
        </div>
      
          <button>Next </button>
       
      </form>
    </motion.div>
  );
}
