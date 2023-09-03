import React from "react";
import { useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import cartVariants from "/src/components/variants/cartVariants.js";
import SearchedEvents from "./SearchedEvents";
import ReactPaginate from "react-paginate";
import { useState } from "react";
const Standups = () => {
  const standups = useSelector((state) => state.data.standups);
  const searchTerm = useSelector((state) => state.data.searchTerm);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;
  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };
  const pageCount = Math.ceil(standups.length / itemsPerPage);
  const currentItems = standups.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
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

                  <div className="flex justify-center w-full text-center">
                    <h1 className="w-56 truncate font-bold text-xl ">
                      {standup.artist}
                    </h1>
                  </div>
                  <div className="flex leading-10 gap-1 justify-center items-center mt-3">
                    <CiLocationOn className="text-2xl text-blue-600 ml-3 " />
                    <p className="w-56 truncate mr-4 text-gray-500 cursor-pointer text-lg">
                      {standup.location}
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
                  <button className="absolute bottom-0 mb-3 flex justify-around items-center w-full rounded-3xl bg-gray-300">
                    Bilet al
                    <AiOutlineShoppingCart className="text-blue-600" />
                  </button>
                </motion.div>
              );
            })}
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

export default Standups;
