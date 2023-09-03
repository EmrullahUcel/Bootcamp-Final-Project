import React from "react";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";

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

Modal.setAppElement("#root");

function Map({ mapIsOpen, closeMap, event }) {
  return (
    <Modal isOpen={mapIsOpen} onRequestClose={closeMap} style={customStyles}>
      <button className="absolute right-5 top-5" onClick={closeMap}>
        <IoIosCloseCircleOutline />
      </button>
      <div className="flex gap-3">
        <iframe src={event.location} width="300" height="400"></iframe>
        <div>
          <p>{event.artist ? event.artist : event.title} </p>
          <h3 className="text-blue-400">Detaylar</h3>
          <p>{event.description} </p>
        </div>
      </div>
      
    </Modal>
  );
}

export default Map;
