import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import CardActionsMenu from "../CardActionsMenu";
import DeleteMovie from "../../ModalDeleteMovie";
import ModalForm from "../../ModalForm";
import { useToggle } from "../../common/hooks/useToggle";
import dotsIcon from "../../../assets/icons/dotsIcon.svg";
import { getMovieById } from "../../../redux/actions";
import "./MovieCard.scss";

const MovieCard = ({ movie, deleteMovie }) => {
  const { id, title, release_date, poster_path, genres } = movie;
  const [isOpen, toggleOpen] = useToggle(false);
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useToggle(false);
  const [isEditModalOpened, setIsEditModalOpened] = useToggle(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const toggleContextMenu = () => {
    dispatch(getMovieById(id));
    toggleOpen(!isOpen);
  };

  const handleSelectMovie = () => {
    history.push(`/movie/${movie.id}`);
  };

  const toggleDelete = () => setIsDeleteModalOpened(!isDeleteModalOpened);
  const toggleEdit = () => setIsEditModalOpened(!isEditModalOpened);

  return (
    <>
      <div className="MovieCard">
        <button className="btn-more" onClick={toggleContextMenu}>
          <img src={dotsIcon} alt="more" />
        </button>

        {isOpen && (
          <CardActionsMenu
            toggleDelete={toggleDelete}
            toggleEdit={toggleEdit}
            toggleContextMenu={toggleContextMenu}
          />
        )}

        <img
          onClick={handleSelectMovie}
          className="MovieCard__picture"
          src={poster_path}
          alt={title}
        />
        <div className="MovieCard__info">
          <span className="MovieCard__info-title">{title}</span>
          <span className="MovieCard__info-release">
            {release_date.slice(0, 4)}
          </span>
        </div>
        <span>{genres.join(", ")}</span>
      </div>
      {isEditModalOpened && (
        <ModalForm isEdit movie={movie} closeModalForm={toggleEdit} />
      )}
      {isDeleteModalOpened && (
        <DeleteMovie
          deleteMovie={deleteMovie}
          closeDeleteModal={toggleDelete}
        />
      )}
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
