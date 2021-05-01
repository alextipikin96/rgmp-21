import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import CategorySelector from "../MovieContainer/CategorySelector";
import Modal from "../common/Modal";
import DateInput from "../MovieContainer/DateInput";

const ModalForm = ({ formType, initialMovie, submitHandler, closeModalForm }) => {
  const isEdit = formType === "edit";

  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    overview: yup.string().required("Overview is required"),
    runtime: yup.number().min(1, "Must be a positive number"),
    poster_path: yup.string().url().required("Movie URL is required"),
    release_date: yup.date(),
    genres: yup
      .array()
      .of(yup.string())
      .min(1, "1 genre should be selected")
      .required("required"),
  });

  const formik = useFormik({
    initialValues: initialMovie,
    validationSchema: validationSchema,
    onSubmit: submitHandler,
  });

  return (
    <Modal>
      <div className="ModalForm">
        <button data-testid="closeForm" className="ModalForm-btn-close" onClick={closeModalForm}>
          <span>X</span>
        </button>
        <div className="ModalForm-title">
          {isEdit ? "edit movie" : "add movie"}
        </div>
        <form
          className="ModalForm-form"
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
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
          {formik.touched.release_date && formik.errors.release_date && (
            <p className="errorText">{formik.errors.release_date}</p>
          )}

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
            type="number"
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

export default ModalForm;
