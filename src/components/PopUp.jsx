import React from "react";
import "./components.css";
import { motion } from "framer-motion";




function PopUp({ children, cls }) {
     const animationVariant = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };
    return (
      <>

          <div className="overturn"></div> 
      <motion.div
        className={`popup ${cls}`}
        variants={animationVariant}
        initial="hidden"
        animate="visible"
        id="popup"
      >
        {children}
                </motion.div>
                </>
   
  );
}

export default PopUp;
