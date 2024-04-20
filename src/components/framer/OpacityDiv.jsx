import { motion ,easeIn} from "framer-motion";

const OpacityDiv= ({ children }) => {
  return (
    <motion.div 
      style={{borderRadius:'1.5rem',overflow:'hidden'}}
      initial={{ opacity: 0 ,}}
      animate={{ opacity: 1 }}
      transition={{duration:0.32,easeIn}}
    >
      {children}
    </motion.div>
  );
};

export default OpacityDiv;