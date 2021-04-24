import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./MovieCategories.scss";

export default () => {
  const categories = ["all", "documentary", "comedy", "horror", "crime"];
  const { sortBy, search } = useSelector((state) => state.movies);
  const history = useHistory();
  const { category: currentCategory } = useParams();
  const handleFilter = (category) => {
    history.push(
      `/search/${category ? category : "all"}/${sortBy ? sortBy : " "}/${
        search ? search : " /"
      }`
    );
  };

  return (
    <div className="MovieCategories">
      {categories.map((category) => {
        const isActive = currentCategory === category;
        const clazz = isActive ? "active" : "";
        return (
          <button
            key={category}
            type="button"
            className={`MovieCategories__btn ${clazz}`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
