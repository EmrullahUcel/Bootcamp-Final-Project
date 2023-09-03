import React from "react";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { deleteTicket } from "/src/features/DataSlice";
import { useDispatch } from "react-redux";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    height: "30rem",
  },
};

const ConcertTicket = ({ modalIsOpen, closeModal }) => {
  const ticket = useSelector((state) => state.data.ticket);
  const dispatch = useDispatch();
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <button className="absolute right-5 top-5" onClick={closeModal}>
          <IoIosCloseCircleOutline />
        </button>
        <div className="w-full  h-auto flex flex-wrap gap-12 justify-center px-16 bg-[#f1f1f177] ">
          {ticket.map((concert) => {
            return (
              <div
                key={concert.id}
                className="flex flex-col w-[280px] h-[400px] bg-white rounded-3xl relative  items-center text-left leading-10 "
              >
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
                  <p className="w-56 mr-4 text-gray-500 text-sm">
                    {}{" "}
                  </p>
                </div>
                <button
                  onClick={() => dispatch(deleteTicket(concert))}
                  className="absolute bottom-0 mb-3 flex justify-around items-center w-full rounded-3xl bg-gray-300"
                >
                  bileti sil
                  <AiOutlineShoppingCart className="text-blue-600" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ConcertTicket;
