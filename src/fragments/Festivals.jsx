import React from "react";
import { useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import cartVariants from "/src/components/variants/cartVariants.js";
import SearchedEvents from "./SearchedEvents";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Ticket from "./modals/Ticket";
import Map from "./modals/Map";

const Festivals = () => {
  const searchTerm = useSelector((state) => state.data.searchTerm);
  const festivals = useSelector((state) => state.data.festivals);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [event, setEvent] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;
  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };
  const pageCount = Math.ceil(festivals.length / itemsPerPage);
  const currentItems = festivals.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const handleEvent = (festival) => {
    setEvent(festival);
  };
  function closeModal() {
    setIsOpen(false);
  }
  const openModal = () => {
    setIsOpen(true);
  };
  const openMap = () => {
    setMapIsOpen(true);
  };
  const closeMap = () => {
    setMapIsOpen(false);
  };
  return (
    <>
      {searchTerm ? (
        <SearchedEvents />
      ) : (
        <AnimatePresence>
          <div className="w-full mt-36  flex flex-wrap gap-12 justify-center px-16 ">
            {currentItems.map((festival) => {
              return (
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6 }}
                  variants={cartVariants}
                  key={festival.id}
                  className="flex flex-col w-[280px] h-[400px] bg-white rounded-3xl relative  items-center text-left leading-10 "
                >
                  <img
                    className="w-full h-44 rounded-t-3xl "
                    src={festival.image}
                  />

                  <div
                    onClick={() => {
                      openMap();
                      handleEvent(festival);
                    }}
                    className="flex justify-center w-full text-center"
                  >
                    <h1 className="w-56 truncate font-bold text-xl hover:text-red-400 cursor-pointer">
                      {festival.artist}
                    </h1>
                  </div>
                  <div className="flex leading-10 gap-1 justify-center items-center mt-3">
                    <CiLocationOn className="text-2xl text-blue-600 ml-3 " />
                    <p className="w-56 truncate mr-4 text-gray-500  text-lg">
                      {festival.locationName}
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="w-56 truncate mr-4 text-gray-500 text-sm">
                      Tarih : {festival.date}
                    </p>
                    <p className="w-56 truncate mr-4 text-gray-500 text-sm">
                      Saat : {festival.time ? festival.time : "20:30"}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      openModal();
                      handleEvent(festival);
                    }}
                    className="absolute bottom-0 mb-3 flex justify-around items-center w-full rounded-3xl bg-gray-300"
                  >
                    Bilet al
                    <AiOutlineShoppingCart className="text-blue-600" />
                  </button>
                  <Map
                    mapIsOpen={mapIsOpen}
                    closeMap={closeMap}
                    event={event}
                  />
                </motion.div>
              );
            })}
          </div>
          <Ticket
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            event={event}
          />
          <ReactPaginate
            className="w-full h-16 gap-5 mt-32 items-center flex justify-center bg-blue-500 text-white"
            previousLabel={"Önceki"}
            nextLabel={"Sonraki"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            activeClassName={"active2"}
          />
        </AnimatePresence>
      )}
    </>
  );
};

export default Festivals;
