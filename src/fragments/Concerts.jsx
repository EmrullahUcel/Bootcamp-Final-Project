import React from "react";
import { useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import cartVariants from "/src/components/variants/cartVariants.js";

const Concerts = () => {
  const concerts = useSelector((state) => state.data.concerts);
  return (
    <AnimatePresence mode="wait">
      <div className="w-full mt-14 flex flex-wrap gap-12 justify-center px-16 bg-[#f1f1f177] ">
        {concerts.map((concert) => {
          return (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
              variants={cartVariants}
              key={concert.id}
              className="flex flex-col w-[280px] h-[400px] bg-white rounded-3xl relative  items-center text-left leading-10 "
            >
              <img className="w-full h-44 rounded-t-3xl " src={concert.image} />

              <div className="flex justify-center w-full text-center">
                <h1 className="w-56 truncate font-bold text-xl ">
                  {concert.artist}
                </h1>
              </div>
              <div className="flex leading-10 gap-1 justify-center items-center mt-3">
                <CiLocationOn className="text-2xl text-blue-600 ml-3 " />
                <p className="w-56 truncate mr-4 text-gray-500 cursor-pointer text-lg">
                  {concert.location}
                </p>
              </div>
              <div className="mt-3">
                <p className="w-56 truncate mr-4 text-gray-500 text-sm">
                  Tarih : {concert.date}
                </p>
                <p className="w-56 truncate mr-4 text-gray-500 text-sm">
                  Saat : {concert.time}
                </p>
              </div>
              <button className="absolute bottom-0 mb-3 flex justify-around items-center w-full rounded-3xl bg-gray-300">
                Bilet al
                <AiOutlineShoppingCart className="text-blue-600" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </AnimatePresence>
  );
};

export default Concerts;
