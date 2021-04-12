import React from "react";
import "./MovieDetails.scss";

export default ({ currentMovie }) => {
  const {
    title,
    genres,
    release_date,
    poster_path,
    vote_average,
    overview,
    runtime,
  } = currentMovie;
  
  return (
    <div className="MovieDetails">
      <div className="MovieDetails__content">
        <img className="MovieDetails__content-image" src={poster_path} alt={title} />
        <div className="MovieDetails__content-info">
          <div className="MovieDetails__content-info-header">
            <div className="MovieDetails__content-info-header-title">{title}</div>
            <div className="MovieDetails__content-info-header-rating">{vote_average}</div>
          </div>
          <div className="MovieDetails__content-info-genre">{genres.join(", ")}</div>
          <div className="MovieDetails__content-info-subtitle">
            <div className="MovieDetails__content-info-subtitle-year">{release_date.slice(0, 4)}</div>
            <div className="MovieDetails__content-info-subtitle-runtime">{runtime} min</div>
          </div>
          <div className="MovieDetails__content-info-description">{overview}</div>
        </div>
      </div>
    </div>
  );
}
