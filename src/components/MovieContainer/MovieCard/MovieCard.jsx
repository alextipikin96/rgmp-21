import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardActionsMenu from "../CardActionsMenu";
import DeleteMovie from "../../ModalDeleteMovie";
import ModalForm from "../../ModalForm";
import { useToggle } from "../../common/hooks/useToggle";
import Context from "../../common/Context";
import dotsIcon from "../../../assets/icons/dotsIcon.svg";
import { getMovieById } from "../../../redux/actions";
import "./MovieCard.scss";

const MovieCard = ({ movie, deleteMovie }) => {
  let flag;
  const { id, title, release_date, poster_path, genres } = movie;
  const [isOpen, toggleOpen] = useToggle(flag);
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useToggle(flag);
  const [isEditModalOpened, setIsEditModalOpened] = useToggle(flag);
  const { setMovieId } = useContext(Context);
  const dispatch = useDispatch();

  const toggleContextMenu = () => {
    /* setMovieId(id); */
    dispatch(getMovieById(id));
    toggleOpen(!flag);
  };

  const handleSelectMovie = () => {
    setMovieId(id);
    dispatch(getMovieById(id));
  };

  const toggleDelete = () => setIsDeleteModalOpened(!flag);
  const toggleEdit = () => setIsEditModalOpened(!flag);

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
