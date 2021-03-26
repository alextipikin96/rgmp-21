import React from "react";
import Modal from "../common/Modal";
import "./DeleteMovie.scss";
import crossIcon from "../../assets/icons/crossIcon.svg";

export default ({ deleteMovie, closeDeleteModal }) => {
  return (
    <Modal>
      <div className="DeleteMovie">
        <button
          className="DeleteMovie-btn-close"
          onClick={closeDeleteModal}
        >
          <img src={crossIcon} alt="closeIcon" />
        </button>
        <div className="DeleteMovie-title">DELETE MOVIE</div>
        <div className="DeleteMovie-message">
          Are you sure you want to delete this movie?
        </div>
        <button
          className="DeleteMovie-btn-confirm"
          onClick={deleteMovie}
        >
          confirm
        </button>
      </div>
    </Modal>
  );
};
