import React, { useState } from "react";
import PropTypes from "prop-types";
import crossIcon from "../../../assets/icons/crossIcon.svg";
import dotsIcon from "../../../assets/icons/dotsIcon.svg";
import EditMovie from "../../ModalEditMovie";
import DeleteMovie from "../../ModalDeleteMovie";
import { useToggle } from "../../common/hooks/useToggle";
import "./MovieCard.scss";

const MovieCard = ({
  title,
  releaseDate,
  genre,
  picture,
  deleteMovie,
  selectMovie,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isDeleteModalOpened, setIsDeleteModalOpened] = useToggle(false);
  const [isEditModalOpened, setIsEditModalOpened] = useToggle(false);

  const handleOpenDeleteModal = () => setIsDeleteModalOpened(true);
  const handleCloseDeleteModal = () => setIsDeleteModalOpened(false);

  const handleOpenEditModal = () => setIsEditModalOpened(true);
  const handleCloseEditModal = () => setIsEditModalOpened(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="MovieCard">
        <button
          className="btn-more"
          onClick={showModal}
        >
          <img src={dotsIcon} alt="more" />
        </button>

        {isOpen && (
          <div className="MovieCard__modal">
            <div className="MovieCard__modal-btn">
              <button
                className="MovieCard__modal-btn-close"
                onClick={hideModal}
              >
                <img src={crossIcon} alt="crossIcon" />
              </button>

              <button
                className="MovieCard__modal-btn-edit"
                onClick={handleOpenEditModal}
              >
                Edit
            </button>

              <button
                className="MovieCard__modal-btn-delete"
                onClick={handleOpenDeleteModal}
              >
                Delete
            </button>
            </div>
          </div>
        )}

        <img
          onClick={selectMovie}
          className="MovieCard__picture"
          src={picture} alt="movie-image" />
        <div className="MovieCard__info">
          <span className="MovieCard__info-title">{title}</span>
          <span className="MovieCard__info-release">{releaseDate}</span>
        </div>
        <span>{genre}</span>
      </div>
      {isEditModalOpened && <EditMovie closeEditModal={handleCloseEditModal} />}
      {isDeleteModalOpened && <DeleteMovie deleteMovie={deleteMovie} closeDeleteModal={handleCloseDeleteModal} />}
    </>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

export default MovieCard;
