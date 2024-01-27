import { motion } from "framer-motion";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../App";

function NotFound() {
    const containerVariant = {
      hidden: {
        x: "100vw",
        opacity: 0,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          //   delay: 0.5,
          mass: 0.4,
          damping: 8,
          when: "beforeChildren",
        },
      },
      exit: {
        x: "-100vw",
        transition: { ease: "easeInOut" },
      },
    };
    const {lightMode} = useContext(myContext)
 const navigate = useNavigate();
  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
className={!lightMode ? 'darkmode' : ''}
          id="nfound"
    >
      
      <h2>404 - PAGE NOT FOUND</h2>
      <p>
        The page you are looking for might have been removed <br />
        had its name changes or is temporary unavailable{" "}
      </p>
      <button
        className="hmbtn"
        onClick={() => {
          navigate(`/`);
        }}
      >
        <span className="button_top"> GO TO HOMEPAGE</span>
      </button>
    </motion.section>
  );
}

export default NotFound
