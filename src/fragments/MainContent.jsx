import { allData } from "/src/selector/allData.js";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import cartVariants from "/src/components/variants/cartVariants.js";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import SearchedEvents from "./SearchedEvents";

const MainContent = () => {
  const searchTerm = useSelector((state) => state.data.searchTerm);

  const all = useSelector(allData);
  const [currentPage, setCurrentPage] = useState(9);
  const itemsPerPage = 15;
  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };
  const pageCount = Math.ceil(all.length / itemsPerPage);
  const currentItems = all.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      {searchTerm ? (
        <SearchedEvents />
      ) : (
        <AnimatePresence>
          <div className="w-full mt-14 flex flex-wrap gap-12 justify-center px-16 bg-[#f1f1f177] ">
            {currentItems.map((item, index) => {
              return (
                <div key={item.id}>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                    variants={cartVariants}
                    className="flex flex-col w-[280px] h-[400px] bg-white rounded-3xl relative  items-center text-left leading-10 "
                  >
                    <img
                      className="w-full h-44 rounded-t-3xl "
                      src={item.image}
                    />

                    <div className="flex justify-center w-full text-center">
                      <h1 className="w-56 truncate font-bold text-xl ">
                        {item.artist}
                      </h1>
                    </div>
                    <div className="flex leading-10 gap-1 justify-center items-center mt-3">
                      <CiLocationOn className="text-2xl text-blue-600 ml-3 " />
                      <p className="w-56 truncate mr-4 text-gray-500 cursor-pointer text-lg">
                        {item.location}
                      </p>
                    </div>
                    <div className="mt-3">
                      <p className="w-56 truncate mr-4 text-gray-500 text-sm">
                        Tarih : {item.date}
                      </p>
                      <p className="w-56 truncate mr-4 text-gray-500 text-sm">
                        Saat : {item.time}
                      </p>
                    </div>
                    <button className="absolute bottom-0 mb-3 flex justify-around items-center w-full rounded-3xl bg-gray-300">
                      Bilet al
                      <AiOutlineShoppingCart className="text-blue-600" />
                    </button>
                  </motion.div>
                </div>
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

export default MainContent;
