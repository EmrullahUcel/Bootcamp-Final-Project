import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import axios from "axios";
import {
  setConcerts,
  setTheaters,
  setFestivals,
  setStandups,
} from "/src/features/DataSlice.jsx";
import Navbar from "./fragments/Navbar";
import Festivals from "./fragments/Festivals";
import Concerts from "./fragments/Concerts";
import Theaters from "./fragments/Theaters";
import Standups from "./fragments/Standups";
import FavEvents from "./fragments/FavEvents";
import MainContent from "./fragments/MainContent";
import Basket from "./fragments/Basket";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("/db.json").then((res) => {
      dispatch(setConcerts(res.data.concerts));
    });

    axios.get("/db.json").then((res) => {
      dispatch(setTheaters(res.data.theaters));
    });

    axios.get("/db.json").then((res) => {
      dispatch(setFestivals(res.data.festivals));
    });

    axios.get("/db.json").then((res) => {
      dispatch(setStandups(res.data.standups));
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div className="w-full h-screen">
        <Navbar />
        <FavEvents />
        <Routes>
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/theaters" element={<Theaters />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/standups" element={<Standups />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
