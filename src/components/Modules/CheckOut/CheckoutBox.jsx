import styles from './CheckoutBox.module.css';

export const CheckoutBox = () => {
    return (
      <div className={styles.summary_section}>
        <div id={styles.sum}>
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
  
            <div>
              <button className={styles.proceed}>Proceed to CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    );
  };