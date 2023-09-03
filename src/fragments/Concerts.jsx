import React from "react";
import { useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import cartVariants from "/src/components/variants/cartVariants.js";
import SearchedEvents from "./SearchedEvents";
import ConcertTicket from "./modals/ConcertTicket";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setTicket  } from "/src/features/DataSlice";

const Concerts = () => {
  const searchTerm = useSelector((state) => state.data.searchTerm);
  const concerts = useSelector((state) => state.data.concerts);
 
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;
  const dispatch = useDispatch();
  

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };
  const pageCount = Math.ceil(concerts.length / itemsPerPage);
  const currentItems = concerts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const openModal = (concert) => {
    setIsOpen(true);
    dispatch(setTicket(concert));
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      {searchTerm ? (
        <SearchedEvents />
      ) : (
        <AnimatePresence>
          <div className="w-full mt-36 flex flex-wrap gap-12 justify-center px-16 bg-[#f1f1f177] ">
            {currentItems.map((concert) => {
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
                  <img
                    className="w-full h-44 rounded-t-3xl "
                    src={concert.image}
                  />

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
                  <button
                    onClick={() => openModal(concert)}
                    className="absolute bottom-0 mb-3 flex justify-around items-center w-full rounded-3xl bg-gray-300"
                  >
                    Bilet al
                    <AiOutlineShoppingCart className="text-blue-600" />
                  </button>
                </motion.div>
              );
            })}
            <ConcertTicket modalIsOpen={modalIsOpen} closeModal={closeModal} />
          </div>
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

export default Concerts;
