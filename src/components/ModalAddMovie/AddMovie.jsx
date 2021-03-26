import React from 'react';
import Modal from '../common/Modal/Modal';
import crossIcon from "../../assets/icons/crossIcon.svg";
import "./AddMovie.scss";

export default ({ closeAddModal }) => {
  return (
    <Modal>
      <div className="AddMovie">
        <button
          className="AddMovie-btn-close"
          onClick={closeAddModal}
        >
          <img src={crossIcon} alt="closeIcon" />
        </button>
        <div className="AddMovie-title">add movie</div>
        <div>
          <form className="AddMovie-form">
            <label htmlFor="title">title</label>
            <input id="title" placeholder="Title here" />

            <label htmlFor="release">release date</label>
            <input id="release" placeholder="Movie URL here" />

            <label htmlFor="movieUrl">movie url</label>
            <input id="movieUrl" placeholder="Movie here" />

            <label htmlFor="genre">genre</label>
            <input id="genre" placeholder="Genre here" />

            <label htmlFor="overview">overview</label>
            <input id="overview" placeholder="Overview here" />

            <label htmlFor="runtime">runtime</label>
            <input id="runtime" placeholder="Runtime here" />

            <div className="AddMovie-btns-group">
              <button className="btn btn-reset">
                Reset
            </button>
              <button
                className="btn btn-submit"
                onClick={(e) => e.preventDefault()}
              >
                Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
