import React from "react";
import "./DeleteMovie.scss";

export default ({ closeDeleteModal }) => {
  return (
    <div className="DeleteMovie">
      <div
        className="DeleteMovie-btn-close"
        onClick={closeDeleteModal}
      >
        &#10006;
      </div>
      <div className="DeleteMovie-title">DELETE MOVIE</div>
      <div className="DeleteMovie-message">Are you sure you want to delete this movie?</div>
      <button
        className="DeleteMovie-btn-confirm"
        onClick={closeDeleteModal}>confirm</button>
    </div>
  );
};
