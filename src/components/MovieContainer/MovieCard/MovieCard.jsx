import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

const MovieCard = ({ title, releaseDate, description, picture }) => (
  <div className="MovieCard">
    <img src={picture} alt="movie picture" />
    <div className="MovieCard-info">
      <span className="MovieCard-info-title">{title}</span>
      <span className="MovieCard-info-release">{releaseDate}</span>
    </div>
    <span>{description}</span>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

export default MovieCard;
