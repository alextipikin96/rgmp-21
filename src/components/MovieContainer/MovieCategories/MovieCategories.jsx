import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const MovieCategories = () => {
  const categories = ["all", "documentary", "comedy", "horror", "crime"];
  const { sortBy, search } = useSelector((state) => state.movies);
  const router = useRouter();
    const { category: currentCategory } = useRouter().query;

  const handleFilter = (category) => {
    router.push({
      pathname: "/search/[category]/[sortBy]/[search]",
      query: { category, sortBy, search },
    });
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

export default MovieCategories;
