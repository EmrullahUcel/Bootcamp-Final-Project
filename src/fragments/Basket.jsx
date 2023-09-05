import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTicket } from "/src/features/DataSlice";
import { TiTicket } from "react-icons/ti";

const Basket = () => {
  const tickets = useSelector((state) => state.data.tickets);
  const dispatch = useDispatch();

  return (
    <div className="w-full mt-36 flex flex-wrap  justify-center gap-12 px-16 bg-[#f1f1f177] ">
      {tickets.map((ticket) => {
        return (
          <div
            className="w-[70%] flex justify-between rounded-xl bg-emerald-100 border-blue-300 border mb-5 p-10 gap-10 sm:block sm:h-full sm:w-full"
            key={ticket.id}
          >
            <div>
              <p>Etkinlik : {ticket.artist ? ticket.artist : ticket.title} </p>
              <p>Tarih : {ticket.date}</p>
              <p>Saat : {ticket.time}</p>
              <p>Koltuk : {ticket?.seat}</p>
              <p>Koltuk : {ticket?.locationName}</p>
              <p>Fiyat : {ticket?.price} ₺</p>
            </div>
            <div className="h-full flex flex-col justify-center items-center sm:mt-10 gap-5">
              <TiTicket className="text-5xl text-green-500" />
              <button
                className="w-full border p-2 border-rwhite bg-white rounded-6xl text-red-500"
                onClick={() => dispatch(deleteTicket(ticket))}
              >
                Bileti iptal et
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Basket;
