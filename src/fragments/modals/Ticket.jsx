import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { emptyBasket, setTicket } from "/src/features/DataSlice";
import { useDispatch } from "react-redux";

const Ticket = ({ modalIsOpen, closeModal, event }) => {
  const seats = [];
  for (let i = 1; i <= 50; i++) {
    let price = 500;

    if (i >= 11 && i <= 20) {
      price = 400;
    } else if (i >= 21 && i <= 30) {
      price = 300;
    } else if (i >= 31) {
      price = 200;
    }

    seats.push({ seat: i, price });
  }

  const [selectedSeats, setSelectedSeats] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (storedSeats) {
      setSelectedSeats(storedSeats);
    }
  }, []);

  const handleSeatClick = (seat) => {
    const eventId = event.id;

    const existingSeat = selectedSeats.find(
      (selected) => selected.seat === seat.seat && selected.eventId === eventId
    );

    if (existingSeat) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter(
          (selected) =>
            !(selected.seat === seat.seat && selected.eventId === eventId)
        )
      );
    } else {
      setSelectedSeats((prevSelectedSeats) => [
        ...prevSelectedSeats,
        { seat: seat.seat, eventId: eventId, price: seat.price },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  const isSeatSelected = (seat) => {
    return selectedSeats.some(
      (selected) => selected.seat === seat.seat && selected.eventId === event.id
    );
  };

  const handleConfirm = () => {
    const tickets = selectedSeats.map((seat) => ({
      ...event,
      id: seat.eventId,
      seat: [seat.seat],
      price: seat.price,
    }));

    tickets.forEach((ticket) => {
      dispatch(setTicket(ticket));
    });
    closeModal();
  };
  const handleClean = () => {
    setSelectedSeats([]);
    dispatch(emptyBasket(seats));
  };

  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="w-[38rem] h-[30rem] mx-auto my-auto top-[50%] left-[50%] bg-white sm:w-80 sm:h-96 overflow-auto sm:bg-white"
    >
      <div>
        <button className="sticky " onClick={closeModal}>
          <IoIosCloseCircleOutline />
        </button>
      </div>
      <div>
      <ul className="text-black w-full flex flex-col justify-center items-center">
          <li>Fiyatlar</li>
          <li>1-10 : 500₺</li>
          <li>11-20 : 400₺</li>
          <li>21-30 : 300₺</li>
          <li>31-50 : 200₺</li>
        </ul>
        <div className="w-full bg-red-300 h-12 flex items-center justify-center">
          <h1 className="text-white">SAHNE</h1>
        </div>
        <div className="w-full flex justify-center items-center h-6 bg-blue-600 text-white">
          <h1>Koltuk Seçimi</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {seats.map((seat) => {
            const isSelected = isSeatSelected(seat);
            return (
              <button
                className={`border-blue-300 w-12 h-12 m-1 border ${
                  isSelected ? "bg-green-500" : ""
                }`}
                onClick={() => handleSeatClick(seat)}
                key={seat.seat}
                disabled={isSelected}
              >
                {seat.seat}
              </button>
            );
          })}
        </div>
        <div className="w-full flex h-auto justify-center items-center overflow-auto  bg-blue-600 text-white">
          <div className="w-full flex flex-col justify-center items-center h-20 ">
            <button
              className="border-white border mt-1 rounded-xl p-1"
              onClick={handleConfirm}
            >
              Bileti Onayla
            </button>
            <button
              className="border-white border mt-1 rounded-xl p-1"
              onClick={handleClean}
            >
              seçimleri kaldır
            </button>
          </div>
        </div>
       
      </div>
    </Modal>
  );
};

export default Ticket;
