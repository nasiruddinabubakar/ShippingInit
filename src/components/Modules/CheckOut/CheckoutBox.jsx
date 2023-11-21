import { useSelector } from "react-redux";
import styles from "./CheckoutBox.module.css";
import { postData } from "../../../utils/postData";
import { ToastContainer, toast } from "react-toastify";

export const CheckoutBox = () => {
  const order = useSelector((state) => state.order);
  const route = useSelector((state) => state.route);
  const authToken = localStorage.getItem("user");
  async function ConfirmOrder() {
    console.log({ order, route });
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/orders/neworder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${authToken}`,
          },
          body: JSON.stringify({ order, route }),
        }
      );
        console.log(response);
      if (response.status === "failed") {
        toast.error(response.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        });
      }
      if (response.status === "success") {
        toast.success("Order Confirmed", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        });
      }
    } catch (error) {
      if (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        });
      }
    }
  }

  return (
    <div className={styles.summary_section}>
      <div className={styles.sum}>
        <div className={styles.summary_section_heading}>Order Summary</div>
        <div className={styles.checkout_summary}>
          <div className={styles.checkout_summary_label}>
            <div className={styles.coupon}>
              <input type="text" placeholder="Enter Voucher Here" />{" "}
              <button>Apply</button>
            </div>
          </div>
          <div className={styles.total__price}>
            <div>Total</div> <div>0 PKR</div>
          </div>
          <ToastContainer />
          <div>
            <button className={styles.proceed} onClick={ConfirmOrder}>
              Proceed to CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
