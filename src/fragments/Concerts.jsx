import { useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import cartVariants from "/src/components/variants/cartVariants.js";
import SearchedEvents from "./SearchedEvents";
import Ticket from "./modals/Ticket";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Map from "./modals/Map";

const Concerts = () => {
  const searchTerm = useSelector((state) => state.data.searchTerm);
  const concerts = useSelector((state) => state.data.concerts);
  const [currentPage, setCurrentPage] = useState(0);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [event, setEvent] = useState({});
  const itemsPerPage = 15;

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };
  const pageCount = Math.ceil(concerts.length / itemsPerPage);
  const currentItems = concerts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const openModal = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }
  const openMap = () => {
    setMapIsOpen(true);
  };
  const closeMap = () => {
    setMapIsOpen(false);
  };
  const handleEvent = (concert) => {
    setEvent(concert);
  };
  return (
    <>
      {searchTerm ? (
        <SearchedEvents />
      ) : (
        <AnimatePresence>
          <div className="w-full mt-36 flex flex-wrap gap-12 justify-center px-16 bg-[#f1f1f177] ">
            {currentItems.map((concert) => {
              return (
                <div key={concert.id}>
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

                    <div className="flex justify-center w-full text-center cursor-pointer">
                      <h1 className="w-56 truncate font-bold text-xl hover:text-red-500">
                        {concert.artist}
                      </h1>
                    </div>
                    <div className="flex leading-10 gap-1 justify-center items-center mt-3">
                      <CiLocationOn className="text-2xl text-blue-600 ml-3 " />
                      <p
                        onClick={() => {
                          openMap();
                          handleEvent(concert);
                        }}
                        className="w-56 truncate mr-4 text-gray-500 text-lg cursor-pointer"
                      >
                        {concert.locationName}
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
                      onClick={() => {
                        openModal();
                        handleEvent(concert);
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
                </div>
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

export default Concerts;
