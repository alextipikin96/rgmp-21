import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

const MovieCard = ({
  title,
  releaseDate,
  description,
  picture,
  showEditModal,
  showDeleteModal
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="MovieCard">
      <button
        className="btn-more"
        onClick={showModal}
      ></button>

      {isOpen && (
        <div className="modal">
          <div className="modal-btn">
            <div
              className="modal-btn-close"
              onClick={hideModal}
            >&#10006;</div>
            <div
              className="modal-btn-edit"
              onClick={showEditModal}
              >Edit</div>
            <div 
              className="modal-btn-delete"
              onClick={showDeleteModal}
              >Delete</div>
          </div>
        </div>
      )}

      <img 
        src={picture} alt="movie picture" />
      <div className="MovieCard-info">
        <span className="MovieCard-info-title">{title}</span>
        <span className="MovieCard-info-release">{releaseDate}</span>
      </div>
      <span>{description}</span>
    </div>
  )
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

export default MovieCard;
