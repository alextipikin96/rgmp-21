import React, { useState } from "react";
import "./CategorySelector.scss";

export default ({ selectedCategories, chooseCategoryHandler }) => {
  const categories = [
    "Documentary",
    "Comedy",
    "Horror",
    "Crime",
    "Adventure",
    "Science Fiction",
    "Action",
    "Family",
    "Animation",
    "Fantasy",
    "Drama",
    "Romance",
  ];

  const [isVisible, setVisibility] = useState(false);

  const showAllCategories = () => {
    setVisibility((prevState) => !prevState);
  };

  return (
    <>
      <label form="genre">genre</label>
      <div className="inputWrapper" onClick={showAllCategories}>
        <div className="selectorIcon" />
        <input
          id="genre"
          value={selectedCategories.join(", ")}
          placeholder="Select genre"
          disabled
        />
      </div>
      <ul className="categoryList" hidden={!isVisible}>
        {categories.map((category) => (
          <li className="categoryItem" key={category}>
            <div className="categoryItem__wrapper">
              <input
                id="genres"
                name="genres"
                type="checkbox"
                onChange={() =>
                  chooseCategoryHandler(
                    "genres",
                    selectedCategories.includes(category)
                      ? selectedCategories.slice(0, selectedCategories.length - 1)
                      : selectedCategories.concat(category)
                  )
                }
              />
              <span className="">{category}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
