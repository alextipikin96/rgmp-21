import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import CategorySelector from "../MovieContainer/CategorySelector";
import Modal from "../common/Modal";
import DateInput from "../MovieContainer/DateInput";
import crossIcon from "../../assets/icons/crossIcon.svg";
import { addMovie, editMovie } from "../../redux/actions";
import "./ModalForm.scss";

export default ({ isEdit, closeModalForm }) => {
  const dispatch = useDispatch();
  const oldMovie = useSelector((state) => state.movies.processingMovie);
  const newMovie = {
    release_date: null,
    poster_path: "",
    title: "",
    overview: "",
    runtime: 0,
    genres: [],
  };

  const processingMovie = isEdit ? oldMovie : newMovie;

  const submitForm = (movie) => {
    isEdit ? dispatch(editMovie(movie)) : dispatch(addMovie(movie));
    closeModalForm();
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    overview: yup.string().required("Overview is required"),
    runtime: yup.number().required("Must be a positive number"),
    genres: yup
      .array()
      .of(yup.string())
      .min(1, "1 genre should be selected")
      .required("required"),
  });

  const formik = useFormik({
    initialValues: processingMovie,
    validationSchema: validationSchema,
    onSubmit: submitForm,
  });

  return (
    <Modal>
      <div className="ModalForm">
        <button className="ModalForm-btn-close" onClick={closeModalForm}>
          <img src={crossIcon} alt="closeIcon" />
        </button>
        <div className="ModalForm-title">
          {isEdit ? "edit movie" : "add movie"}
        </div>
        <form className="ModalForm-form" onSubmit={formik.handleSubmit}>
          {isEdit && (
            <>
              <label>movie id</label>
              <input
                disabled
                id="id"
                name="id"
                type="text"
                value={formik.values.id}
              />
            </>
          )}

          <label htmlFor="title">title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title here"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <p className="errorText">{formik.errors.title}</p>
          )}

          <DateInput
            startDate={formik.values.release_date}
            dateHandler={formik.setFieldValue}
          />

          <label htmlFor="poster_path">movie url</label>
          <input
            id="poster_path"
            type="text"
            name="poster_path"
            placeholder="Movie url here"
            onChange={formik.handleChange}
            value={formik.values.poster_path}
          />
          {formik.touched.poster_path && formik.errors.poster_path && (
            <p className="errorText">{formik.errors.poster_path}</p>
          )}

          <CategorySelector
            selectedCategories={formik.values.genres}
            chooseCategoryHandler={formik.setFieldValue}
          />
          {formik.touched.genres && formik.errors.genres && (
            <p className="errorText">{formik.errors.genres}</p>
          )}

          <label htmlFor="overview">overview</label>
          <input
            id="overview"
            name="overview"
            type="text"
            placeholder="Overview here"
            onChange={formik.handleChange}
            value={formik.values.overview}
          />
          {formik.touched.overview && formik.errors.overview && (
            <p className="errorText">{formik.errors.overview}</p>
          )}

          <label htmlFor="runtime">runtime</label>
          <input
            id="runtime"
            type="text"
            name="runtime"
            placeholder="Runtime here"
            onChange={formik.handleChange}
            value={formik.values.runtime}
          />
          {formik.touched.runtime && formik.errors.runtime && (
            <p className="errorText">{formik.errors.runtime}</p>
          )}

          <div className="ModalForm-btns-group">
            <button className="btn btn-reset" onClick={formik.handleReset}>
              reset
            </button>
            <button
              type="submit"
              className="btn btn-submit"
              disabled={!formik.isValid && !formik.dirty}
              onClick={formik.handleSubmit}
            >
              {isEdit ? "SAVE" : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
