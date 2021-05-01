import React from "react";

const MovieDetails = ({ movie }) => {
  const {
    id,
    title,
    genres,
    release_date,
    poster_path,
    vote_average,
    overview,
    runtime,
  } = movie;
  return id == undefined ? (
    <div className="withoutMovie">Movie wasn't found, choose another</div>
  ) : (
    <section className="MovieDetails">
      <img className="MovieDetails-image" src={poster_path} alt={title} />
      <article className="MovieDetails-info">
        <div className="MovieDetails-info-header">
          <span className="MovieDetails-info-header-title">{title}</span>
          <span className="MovieDetails-info-header-rating">
            {vote_average}
          </span>
        </div>
        <span className="MovieDetails-info-genre">{genres.join(", ")}</span>
        <div className="MovieDetails-info-subtitle">
          <span className="MovieDetails-info-subtitle-year">
            {release_date.getFullYear()}
          </span>
          <span className="MovieDetails-info-subtitle-runtime">
            {runtime} min
          </span>
        </div>
        <span className="MovieDetails-info-description">{overview}</span>
      </article>
    </section>
  );
};

export default MovieDetails;
