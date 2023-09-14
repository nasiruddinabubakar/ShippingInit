import { motion } from "framer-motion";

const TopDown = ({children}) => {
  return (
    <motion.div
      initial={{ marginTop: "0rem" }}
      animate={{ marginTop: "5rem" }}
      transition={{ duration: 0.5 }}
    >{children}</motion.div>
  );
};
export default TopDown;