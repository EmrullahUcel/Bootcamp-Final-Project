import React from "react";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Map({ mapIsOpen, closeMap, event }) {
  return (
    <Modal
      isOpen={mapIsOpen}
      onRequestClose={closeMap}
      className="fixed top-1/2 left-1/2 bg-white transform  -translate-x-1/2 -translate-y-1/2 overflow-auto w-[38rem] sm:w-[18rem] sm:h-[30rem] sm:flex
      sm:flex-col "
    >
      <div className="relative w-full h-full sm:w-54 sm:flex sm:flex-col ">
        <div>
          <button className="absolute right-5 top-5" onClick={closeMap}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="flex gap-3">
          <iframe
            src={event.location}
            className="w-full h-96  sm:w-50 sm:h-38"
          ></iframe>
          <div className="w-auto h-auto flex flex-col justify-center pr-10 pt-10 items-center">
            <p className="font-bold ">
              {event.artist ? event.artist : event.title}
            </p>
            <h3 className="text-blue-400">Detaylar</h3>
            <p>{event.description} </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Map;
