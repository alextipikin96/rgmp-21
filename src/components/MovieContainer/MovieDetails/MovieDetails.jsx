import React from "react";
import "./MovieDetails.scss";

export default ({ currentMovie }) => {
  const {
    title,
    genre,
    picture,
    releaseDate,
    description,
    rating,
    runtime,
  } = currentMovie;

  return (
    <div className="MovieDetails">
      <div className="MovieDetails__content">
        <img className="MovieDetails__content-image" src={picture} alt={title} />
        <div className="MovieDetails__content-info">
          <div className="MovieDetails__content-info-header">
            <div className="MovieDetails__content-info-header-title">{title}</div>
            <div className="MovieDetails__content-info-header-rating">{rating}</div>
          </div>
          <div className="MovieDetails__content-info-genre">{genre}</div>
          <div className="MovieDetails__content-info-subtitle">
            <div className="MovieDetails__content-info-subtitle-year">{releaseDate}</div>
            <div className="MovieDetails__content-info-subtitle-runtime">{runtime} min</div>
          </div>
          <div className="MovieDetails__content-info-description">{description}</div>
        </div>
      </div>
    </div>
  );
}