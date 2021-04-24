import React from "react";
import { useDispatch } from "react-redux";
import Logo from "../common/Logo";
import { useToggle } from "../common/hooks/useToggle";
import ModalForm from "../ModalForm";
import { addMovie } from "../../redux/actions";
import "./Header.scss";

export default () => {
  const [isAddModalOpened, setIsAddModalOpened] = useToggle(false);

  const handleOpenAddModal = () => setIsAddModalOpened(true);
  const handleCloseAddModal = () => setIsAddModalOpened(false);
  const dispatch = useDispatch();

  const newMovie = {
    release_date: null,
    poster_path: "",
    title: "",
    overview: "",
    runtime: 0,
    genres: [],
  };

  const submitForm = movie => {
    dispatch(addMovie(movie));
    handleCloseAddModal();
  };

  return (
    <>
      <div className="top-panel">
        <Logo />
        <button className="btn-add-movie" onClick={handleOpenAddModal}>
          +add movie
        </button>
      </div>
      {isAddModalOpened && (
        <ModalForm
          initialMovie={newMovie}
          formType="add"
          submitHandler={submitForm}
          closeModalForm={handleCloseAddModal}
        />
      )}
    </>
  );
};
