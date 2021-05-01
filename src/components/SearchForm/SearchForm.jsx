import React, { useRef } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Search = () => {
  const searchInput = useRef(null);
  const router = useRouter();
  const { filterGenre, sortBy } = useSelector((state) => state.movies);

  const handleSearch = () => {
    router.push({
      pathname: "/search/[category]/[sortBy]/[search]",
      query: {
        category: filterGenre,
        sortBy,
        search: searchInput.current.value,
      },
    });
    searchInput.current.value = " ";
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

export default Search;
