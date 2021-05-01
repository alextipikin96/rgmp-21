import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../common/Modal";
import { deleteMovie } from "../../redux/actions";

const DeleteMovie = ({ closeDeleteModal }) => {
  const dispatch = useDispatch();
  const processingMovie = useSelector((state) => state.movies.processingMovie);
  const handleDeleteMovie = () => dispatch(deleteMovie(processingMovie.id));

  return (
    <Modal>
      <div className="DeleteMovie">
        <button className="DeleteMovie-btn-close" onClick={closeDeleteModal}>
          <span>X</span>
        </button>
        <div className="DeleteMovie-title">DELETE MOVIE</div>
        <div className="DeleteMovie-message">
          Are you sure you want to delete this movie?
        </div>
        <button className="DeleteMovie-btn-confirm" onClick={handleDeleteMovie}>
          confirm
        </button>
      </div>
    </Modal>
  );
};

export default DeleteMovie;
