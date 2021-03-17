import React from 'react';

import "./AddMovie.scss";

export default ({ closeAddModal }) => {
  return (
    <div className="AddMovie">
      <div
        className="AddMovie-btn-close"
        onClick={closeAddModal}
      >
        &#10006;
      </div>
      <div className="AddMovie-title">ADD MOVIE</div>
      <div>
        <form className="AddMovie-form">
          <label htmlFor="title">TITLE</label>
          <input id="title" placeholder="Title here" />

          <label htmlFor="release">RELEASE DATE</label>
          <input id="release" placeholder="Movie URL here" />

          <label htmlFor="movieUrl">MOVIE URL</label>
          <input id="movieUrl" placeholder="Movie here" />

          <label htmlFor="genre">GENRE</label>
          <input id="genre" placeholder="Genre here" />

          <label htmlFor="overview">OVERVIEW</label>
          <input id="overview" placeholder="Overview here" />

          <label htmlFor="runtime">RUNTIME</label>
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
  );
};
