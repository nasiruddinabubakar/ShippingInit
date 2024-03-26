import { motion ,easeIn} from "framer-motion";

const OpacityDiv= ({ children }) => {
  return (
    <motion.div 
      style={{width:"100%",height:"100%",borderRadius:"1.5rem"}}
      initial={{ opacity: 0 ,}}
      animate={{ opacity: 1 }}
      transition={{duration:0.32,easeIn}}
    >
      {children}
    </motion.div>
  );
};

export default OpacityDiv;