import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const withTransition = (OriginalComponent) => {
  return () => (
    <>
      <OriginalComponent />
      <AnimatePresence>
         <motion.div
        className="fade-in bg-white"
        initial={{opacity:1}}
        animate={{ opacity:0 , transitionEnd:{
            display:"none"
        }}}
        exit={{ opacity:1 }}
        transition={{ delay:0.2,duration: 0.5}}
      /> 
      </AnimatePresence>
      
      
    </>
  );
};

export default withTransition;