import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useToggle } from "../../common/hooks/useToggle";

const FilterPanel = () => {
  const sortOptions = ["release date", "rating"];
  const router = useRouter();
  const { filterGenre, search } = useSelector((state) => state.movies);
  const [optionsVisibility, setOptionsVisibility] = useToggle(false);
  const [currentOption, setCurrentOption] = useState(sortOptions[0]);

  const showAllOptions = () => {
    setOptionsVisibility(true);
  };

  const changeCurrentOption = option => {
    setCurrentOption(option);
    option = option === "release date" ? "release_date" : "vote_average";
    router.push({
      pathname: "/search/[category]/[sortBy]/[search]",
      query: { category: filterGenre, sortBy: option, search },
    });
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

export default FilterPanel;
