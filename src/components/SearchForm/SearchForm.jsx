import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./SearchForm.scss";

export default () => {
  const searchInput = useRef(null);
  const history = useHistory();
  const { filterGenre, sortBy } = useSelector((state) => state.movies);

  const handleSearch = () => {
    history.push(
      `/search/${filterGenre ? filterGenre : "all"}/${sortBy ? sortBy : " "}/${
        searchInput.current.value ? searchInput.current.value : " /"
      }`
    );
    searchInput.current.value = "";
  };

  return (
    <div className="search-panel">
      <span className="search-panel-label">find your movie</span>
      <input
        ref={searchInput}
        className="search-panel-input"
        type="text"
        placeholder="What do you want to watch?"
      />
      <button onClick={handleSearch} className="search-panel-button">
        search
      </button>
    </div>
  );
};
