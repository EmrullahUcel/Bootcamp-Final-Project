import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTicket } from "/src/features/DataSlice";

const Basket = () => {
  const tickets = useSelector((state) => state.data.tickets);
  const dispatch = useDispatch();

  return (
    <div className="w-full mt-36 flex flex-wrap gap-12 justify-center px-16 bg-[#f1f1f177]">
      {tickets.map((ticket) => {
        return (
          <div className="w-full" key={ticket.id}>
            <p>Etkinlik : {ticket.artist ? ticket.artist : ticket.title} </p>
            <p>Tarih : {ticket.date}</p>
            <p>Saat : {ticket.time}</p>
            <p>Koltuk : {ticket?.seat}</p>
            <p>Koltuk : {ticket?.locationName}</p>
            <p>Fiyat : {ticket?.price} ₺</p>
            <button onClick={() => dispatch(deleteTicket(ticket))}>
              Bileti iptal et
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Basket;
