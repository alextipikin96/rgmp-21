import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToggle } from "../../common/hooks/useToggle";
import "./FilterPanel.scss";

export default () => {
  const sortOptions = ["release date", "rating"];
  const history = useHistory();
  const { filterGenre, search } = useSelector((state) => state.movies);
  const [optionsVisibility, setOptionsVisibility] = useToggle(false);
  const [currentOption, setCurrentOption] = useState(sortOptions[0]);

  const showAllOptions = () => {
    setOptionsVisibility(true);
  };

  const changeCurrentOption = (option) => {
    setCurrentOption(option);
    option = option === "release date" ? "release_date" : "vote_average";
    history.push(
      `/search/${filterGenre ? filterGenre : "all"}/${option ? option : " "}/${
        search ? search : " /"
      }`
    );
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
