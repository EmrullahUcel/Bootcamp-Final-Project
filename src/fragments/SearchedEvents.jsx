import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import cartVariants from "/src/components/variants/cartVariants.js";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import theaterNoImage from "/public/theaterNoImage.jpg";
import { useState } from "react";
import Map from "./modals/Map";

const SearchedEvents = () => {
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [event, setEvent] = useState({});
  const searhedItems = useSelector((state) => state.data.searhedItems);
  const openMap = () => {
    setMapIsOpen(true);
  };
  const closeMap = () => {
    setMapIsOpen(false);
  };
  const handleEvent = (event) => {
    setEvent(event);
  };

  return (
    <>
      <AnimatePresence>
        <div className="w-full mt-36 flex flex-wrap gap-12 justify-center px-16 ">
          {searhedItems.map((event) => {
            return (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6 }}
                variants={cartVariants}
                key={event.id}
                className="flex flex-col w-[280px] h-[400px] bg-white rounded-3xl relative  items-center text-left leading-10 "
              >
                <img
                  className="w-full h-44 rounded-t-3xl "
                  src={event.image ? event.image : theaterNoImage}
                />

                <div className="flex justify-center w-full text-center">
                  <h1 className="w-56 truncate font-bold text-xl hover:text-red-500 cursor-pointer ">
                    {event.artist}
                  </h1>
                </div>
                <div className="flex leading-10 gap-1 justify-center items-center mt-3">
                  <CiLocationOn className="text-2xl text-blue-600 ml-3 " />
                  <p
                    onClick={() => {
                      openMap();
                      handleEvent(event);
                    }}
                    className="w-56 truncate cursor-pointer mr-4 text-gray-500 text-lg"
                  >
                    {event.locationName}
                  </p>
                </div>
                <div className="mt-3">
                  <p className="w-56 truncate mr-4 text-gray-500 text-sm">
                    Tarih : {event.date}
                  </p>
                  <p className="w-56 truncate mr-4 text-gray-500 text-sm">
                    Saat : {event.time}
                  </p>
                </div>
                <button className="absolute bottom-0 mb-3 flex justify-center gap-3 items-center w-full rounded-3xl bg-blue-600 text-white">
                  Bilet al
                  <AiOutlineShoppingCart className="text-white" />
                </button>
              </motion.div>
            );
          })}
          <Map mapIsOpen={mapIsOpen} closeMap={closeMap} event={event} />
        </div>
      </AnimatePresence>
    </>
  );
};

export default SearchedEvents;
