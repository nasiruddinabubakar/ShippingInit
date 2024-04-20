import { motion ,easeIn} from "framer-motion";

const Opacity= ({ children,time }) => {
  return (
    <motion.div 
      style={{borderRadius:'1.5rem',overflow:'hidden', width:'100%',height:'100%'}}
      initial={{ opacity: 0 ,}}
      animate={{ opacity: 1 }}
      transition={{duration:0.32,easeIn}}
    >
      {children}
    </motion.div>
  
  );
};

export default Opacity;