import React from "react";
import { Route, Routes as Router, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import { AnimatePresence } from "framer-motion";
function Routess() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Router location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path=":name" element={<NotFound />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Router>
      </AnimatePresence>
    </>
  );
}

export default Routess;
