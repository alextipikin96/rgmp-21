import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../../redux/actions";
import "./MovieCategories.scss";
//rename MovieCategories to MovieCategories
export default () => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const handleFilter = category => {
    dispatch(fetchMovies(category))
    setFilter(category);
  }

  const categories = [
    "all",
    "documentary",
    "comedy",
    "horror",
    "crime",
  ];

  return (
    <div className="MovieCategories">
      {categories.map(category => {
        const isActive = filter === category;
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
