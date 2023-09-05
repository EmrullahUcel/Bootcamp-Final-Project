import React from "react";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";

Modal.setAppElement("#root");

function Map({ mapIsOpen, closeMap, event }) {
  return (
    <Modal
      isOpen={mapIsOpen}
      onRequestClose={closeMap}
      className="w-[38rem] h-[28rem] flex justify-center items-center mx-auto my-auto top-[50%] border left-[50%] sm:w-80 sm:h-96 overflow-auto sm:bg-white"
    >
      <div className="relative sm:w-54">
        <button className="absolute right-0" onClick={closeMap}>
          <IoIosCloseCircleOutline />
        </button>
        <div className="flex gap-3">
          <iframe
            src={event.location}
            className="w-80 h-80 sm:w-50 sm:h-50"
          ></iframe>
          <div>
            <p>{event.artist ? event.artist : event.title} </p>
            <h3 className="text-blue-400">Detaylar</h3>
            <p>{event.description} </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Map;
