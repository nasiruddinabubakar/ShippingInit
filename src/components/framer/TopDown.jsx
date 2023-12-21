import { motion } from "framer-motion";

const TopDown = ({children}) => {
  return (
    <motion.div
      initial={{ marginTop: "0rem" }}
      animate={{ marginTop: "7rem", width:"100%"}}
      transition={{ duration: 0.5 }}
    >{children}</motion.div>
  );
};
export default TopDown;