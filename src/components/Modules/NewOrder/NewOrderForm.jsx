import styles from '../../Modules/auth/SignUp.module.css';
import { Link } from 'react-router-dom';
import { InputWithLabel } from '../../Molecules/InputWithLabel';
import { motion } from 'framer-motion';
import { Label } from '../../Atoms/Label';

export function NewOrderForm({
  onsetCons,
  onHandleWeight,
  onHandleType,
  onHandleFragile,
  onHandleDesc,
  onSubmitOrder,
}) {
  return (
    <motion.div
      initial={{ marginTop: '0rem' }}
      animate={{ marginTop: '2rem' }}
      transition={{ duration: 0.5 }}
    >
      <form
        style={{ marginTop: '0rem' }}
        className={styles.login}
        onSubmit={onSubmitOrder}
      >
        <div className={styles.emailinput}>
          <InputWithLabel
            text={'Consignee Name'}
            type={'text'}
            placeholder={'Nasiruddin Abubakar'}
            onChangeInput={onsetCons}
          />
        </div>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={'Weight in Tonns'}
            type={'number'}
            placeholder={'50'}
            onChangeInput={onHandleWeight}
          />
        </div>
        <div className={styles.emailinput}>
          <Label text={'Cargo Type'} />
          <div className={styles.dropdown}>
            <select id="" onChange={onHandleType}>
              <option value="Furniture">Furniture</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothes">Clothes</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className={styles.emailinput}>
          <InputWithLabel
            text={'Cargo Description'}
            type={'text'}
            placeholder={'Company furniture for renevation'}
            onChangeInput={onHandleDesc}
          />
        </div>
        <div className={styles.emailinput}>
          <Label text={'Fragile'} />
          <div className={styles.dropdown}>
            <select id="" onChange={onHandleFragile}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>  
        <button>Next </button>
      </form>
    </motion.div>
  );
}
