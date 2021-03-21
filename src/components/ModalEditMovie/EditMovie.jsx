import React from 'react';
import Modal from '../common/Modal';
import "./EditMovie.scss";
import crossIcon from "../../assets/icons/crossIcon.svg";

export default ({ closeEditModal }) => {
  return (
    <Modal>
      <div className="EditMovie">
        <button
          className="EditMovie-btn-close"
          onClick={closeEditModal}
        >
          <img src={crossIcon} alt="closeIcon" />
        </button>
        <div className="EditMovie-title">EDIT MOVIE</div>
        <div>
          <form className="EditMovie-form">
            <label htmlFor="title">MOVIE ID</label>
            <input id="id" placeholder="MO3282T2" disabled />

            <label htmlFor="title">title</label>
            <input id="title" placeholder="Title here" />

            <label htmlFor="release">release date</label>
            <input id="release" placeholder="Movie URL here" />

            <label htmlFor="movieUrl">movie urlL</label>
            <input id="movieUrl" placeholder="Movie here" />

            <label htmlFor="genre">genre</label>
            <input id="genre" placeholder="Genre here" />

            <label htmlFor="overview">overview</label>
            <input id="overview" placeholder="Overview here" />

            <label htmlFor="runtime">runtime</label>
            <input id="runtime" placeholder="Runtime here" />

            <div className="EditMovie-btns-group">
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
