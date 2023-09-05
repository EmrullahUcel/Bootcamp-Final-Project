import React from "react";
import { useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import cartVariants from "/src/components/variants/cartVariants.js";
import SearchedEvents from "./SearchedEvents";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import Ticket from "./modals/Ticket";
import Map from "./modals/Map";

const Standups = () => {
  const standups = useSelector((state) => state.data.standups);
  const searchTerm = useSelector((state) => state.data.searchTerm);
  const [currentPage, setCurrentPage] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [event, setEvent] = useState({});
  const itemsPerPage = 15;
  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };
  const pageCount = Math.ceil(standups.length / itemsPerPage);
  const currentItems = standups.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const openModal = () => {
    setIsOpen(true);
  };
  function closeModal() {
    setIsOpen(false);
  }
  const handleEvent = (event) => {
    setEvent(event);
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
          <div className="w-full mt-36 flex flex-wrap gap-12 justify-center px-16 ">
            {currentItems.map((standup) => {
              return (
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6 }}
                  variants={cartVariants}
                  key={standup.id}
                  className="flex flex-col w-[280px] h-[400px] bg-white rounded-3xl relative  items-center text-left leading-10 "
                >
                  <img
                    className="w-full h-44 rounded-t-3xl "
                    src={standup.image}
                  />

                  <div className="flex justify-center w-full text-center hover:text-red-400 cursor-pointer">
                    <h1 className="w-56 truncate font-bold text-xl ">
                      {standup.artist}
                    </h1>
                  </div>
                  <div className="flex leading-10 gap-1 justify-center items-center mt-3">
                    <CiLocationOn className="text-2xl text-blue-600 ml-3 " />
                    <p
                      onClick={() => {
                        openMap();
                        handleEvent(standup);
                      }}
                      className="w-56 truncate mr-4 cursor-pointer text-gray-500 text-lg"
                    >
                      {standup.locationName}
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="w-56 truncate mr-4 text-gray-500 text-sm">
                      Tarih : {standup.date}
                    </p>
                    <p className="w-56 truncate mr-4 text-gray-500 text-sm">
                      Saat : {standup.time}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      openModal();
                      handleEvent(standup);
                    }}
                    className="absolute bottom-0 mb-3 flex justify-center gap-3 items-center w-full rounded-3xl bg-blue-600 text-white"
                  >
                    Bilet al
                    <AiOutlineShoppingCart className="text-white" />
                  </button>
                  <Map
                    mapIsOpen={mapIsOpen}
                    closeMap={closeMap}
                    event={event}
                  />
                  <Ticket
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    event={event}
                  />
                </motion.div>
              );
            })}
            <div>
              <ReactPaginate
                className="w-screen h-16 gap-5 mt-32 items-center flex justify-center sm:gap-3 bg-blue-500 text-white"
                previousLabel={"Önceki"}
                nextLabel={"Sonraki"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                activeClassName={"active2"}
              />
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Standups;
