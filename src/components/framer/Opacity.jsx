import { motion ,easeIn} from "framer-motion";

const Opacity= ({ children,time }) => {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "1.5rem",
      }}
      initial={{ opacity: 0 ,}}
      animate={{ opacity: 1 }}
      transition={{duration:time,easeIn}}
    >
      {children}
    </motion.div>
  );
};

export default Opacity;