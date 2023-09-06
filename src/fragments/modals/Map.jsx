import React from "react";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Map({ mapIsOpen, closeMap, event }) {
  return (
    <Modal
      isOpen={mapIsOpen}
      onRequestClose={closeMap}
      className="w-[80%] h-[80%] mt-5 mx-auto my-auto top-[50%] left-[50%] bg-white  overflow-auto"
    >
      <div className="relative sm:w-54 sm:flex sm:flex-col ">
        <div>
          <button className="absolute right-5 top-5" onClick={closeMap}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="flex gap-3">
          <iframe
            src={event.location}
            className="w-full h-80 mt-20 sm:w-50 sm:h-50"
          ></iframe>
          <div className="w-full h-full flex flex-col justify-center pr-10 pt-10 items-center">
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
