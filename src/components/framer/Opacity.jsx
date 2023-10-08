import { motion ,easeIn} from "framer-motion";

const Opacity= ({ children,time }) => {
  return (
    <motion.div
      
      initial={{ opacity: 0 ,}}
      animate={{ opacity: 1 }}
      transition={{duration:time,easeIn}}
    >
      {children}
    </motion.div>
  );
};

export default Opacity;