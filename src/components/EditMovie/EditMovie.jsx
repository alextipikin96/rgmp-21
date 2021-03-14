import React from 'react';
import "./EditMovie.scss";

export default ({ closeEditModal }) => {
  return (
    <div className="EditMovie">
      <div
        className="EditMovie-btn-close"
        onClick={closeEditModal}
      >
        &#10006;
      </div>
      <div className="EditMovie-title">EDIT MOVIE</div>
      <div>
        <form className="EditMovie-form">
          <label htmlFor="title">MOVIE ID</label>
          <input id="id" placeholder="MO3282T2" disabled/>

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
  );
};
