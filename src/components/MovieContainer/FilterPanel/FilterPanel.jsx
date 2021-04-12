import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../redux/actions";
import { useToggle } from "../../common/hooks/useToggle";
import "./FilterPanel.scss";

export default () => {
  const sortOptions = ["release date", "rating"];
  const filterGenre = useSelector(state => state.movies.filterGenre);
  const [optionsVisibility, setOptionsVisibility] = useToggle(false);
  const [currentOption, setCurrentOption] = useState(sortOptions[0]);
  const dispatch = useDispatch();

  const showAllOptions = () => {
    setOptionsVisibility(true);
  };

  const changeCurrentOption = option => {
    setCurrentOption(option);
    option = option === "release date" ? "release_date" : "vote_average";
    dispatch(fetchMovies(filterGenre, option));
  };

  return (
    <div onClick={() => showAllOptions()} className="FilterPanel">
      <span className="FilterPanel-sortby">sort by</span>
      <ul className="FilterPanel-release">
        {sortOptions.map((option) => (
          <li
            hidden={!optionsVisibility && option !== currentOption}
            onClick={() => changeCurrentOption(option)}
            className="FilterPanel-item"
            key={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
