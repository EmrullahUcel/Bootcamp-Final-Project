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
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const handleClick = (favorite) => {
    alert(favorite.artist ? favorite.artist : favorite.title);
  };
  return (
    <AnimatePresence>
      <motion.div className="w-full h-72 overflow-hidden relative z-9">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, transform: 3 }}
          variants={slideVariants}
          key={currentIndex}
          src={favorites[currentIndex].image}
          alt=""
          className="w-full h-full "
          onClick={() => handleClick(favorites[currentIndex])}
        >
          <motion.img
            className="w-full h-full cursor-pointer"
            src={favorites[currentIndex].image}
            alt=""
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FavEvents;
