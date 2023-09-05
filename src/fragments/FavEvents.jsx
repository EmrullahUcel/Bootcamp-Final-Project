import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import favorites from "/src/components/favevents/favorites.js";
import slideVariants from "/src/components/variants/slideVariants.js";

const FavEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === favorites.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div className="w-full h-72 overflow-hidden relative mt-5">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.9, transform: 3 }}
          variants={slideVariants}
          key={currentIndex}
          src={favorites[currentIndex].image}
          alt=""
          className="w-full h-full flex"
        >
          <motion.img
            className="w-[59%] h-full cursor-pointer rounded-3xl ml-[1%]"
            src={favorites[currentIndex].image}
            alt=""
          />
          <motion.div className="w-[40%] flex flex-col items-center h-full  p-5">
            <motion.p className="font-semibold text-2xl  text-blue-600">
              {favorites[currentIndex].artist
                ? favorites[currentIndex].artist
                : favorites[currentIndex].title}
            </motion.p>
            <motion.p className="font-semibold w-full overflow-auto h-[10rem] ">
              {favorites[currentIndex].description}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FavEvents;
