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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:3000/concerts/").then((res) => {
      dispatch(setConcerts(res.data));
    });

    axios.get("http://localhost:3000/theaters/").then((res) => {
      dispatch(setTheaters(res.data));
    });

    axios.get("http://localhost:3000/festivals/").then((res) => {
      dispatch(setFestivals(res.data));
    });

    axios.get("http://localhost:3000/standups/").then((res) => {
      dispatch(setStandups(res.data));
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
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
