import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategorySelector from "../MovieContainer/CategorySelector";
import Modal from "../common/Modal";
import DateInput from "../MovieContainer/DateInput";
import crossIcon from "../../assets/icons/crossIcon.svg";
import { addMovie, editMovie } from "../../redux/actions";
import "./ModalForm.scss";

export default ({ isEdit, closeModalForm }) => {
  const newMovie = {
    release_date: null,
    poster_path: "",
    title: "",
    overview: "",
    runtime: 0,
    genres: [],
  };
  const processingMovie = isEdit ? useSelector((state) => state.movies.processingMovie) : newMovie;
  const [movie, setMovie] = useState(processingMovie);
  const dispatch = useDispatch();
  const {
    id,
    title,
    release_date,
    poster_path,
    genres,
    overview,
    runtime,
  } = movie;
  

  const handleSubmit = (e) => {
    e.preventDefault();
    isEdit ? dispatch(editMovie(movie)) : dispatch(addMovie(movie));
    closeModalForm();
  };

  const handleReset = () => {
    setMovie(processingMovie);
  };

  const handleChangeCategoryList = (category) => {
    if (movie.genres.includes(category)) {
      setMovie((prevState) => {
        prevState.genres = prevState.genres.filter(
          (genre) => genre !== category
        );
        return prevState;
      });
    } else {
      setMovie((prevState) => {
        prevState.genres.push(category);
        return prevState;
      });
    }
  };

  const handleOnValueChange = ({ target: { name, value } }) => {
    setMovie((prevState) => ({
      ...prevState,
      ...{ [name]: value },
    }));
  };

  const inputHandler = (key, value) => {
    setMovie((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <Modal>
      <div className="ModalForm">
        <button className="ModalForm-btn-close" onClick={closeModalForm}>
          <img src={crossIcon} alt="closeIcon" />
        </button>
        <div className="ModalForm-title">
          {isEdit ? "edit movie" : "add movie"}
        </div>
        <div>
          <form onSubmit={handleSubmit} className="ModalForm-form">
            {isEdit && (
              <>
                <label htmlFor="id">movie id</label>
                <input
                  disabled
                  style={{ backgroundColor: "#232323" }}
                  id="id"
                  name="id"
                  placeholder={id}
                  value={id}
                  onChange={handleOnValueChange}
                />
              </>
            )}

            <label htmlFor="title">title</label>
            <input
              id="title"
              name="title"
              placeholder="Title here"
              value={title}
              onChange={handleOnValueChange}
            />

            <DateInput startDate={release_date} dateHandler={inputHandler} />

            <label htmlFor="movieUrl">movie url</label>
            <input
              id="movieUrl"
              name="movieUrl"
              placeholder="Movie URL here"
              value={poster_path}
              onChange={handleOnValueChange}
            />

            <CategorySelector
              selectedCategories={genres}
              chooseCategoryHandler={handleChangeCategoryList}
            />

            <label htmlFor="overview">overview</label>
            <input
              id="overview"
              name="overview"
              placeholder="Overview here"
              value={overview}
              onChange={handleOnValueChange}
            />

            <label htmlFor="runtime">runtime</label>
            <input
              id="runtime"
              name="runtime"
              placeholder="Runtime here"
              value={runtime}
              onChange={handleOnValueChange}
            />

            <div className="ModalForm-btns-group">
              <button className="btn btn-reset" onClick={handleReset}>
                reset
              </button>
              <button className="btn btn-submit" onClick={handleSubmit}>
                {isEdit ? "SAVE" : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
