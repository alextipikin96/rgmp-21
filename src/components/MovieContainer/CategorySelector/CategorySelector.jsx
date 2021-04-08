import React, { useState } from "react";
import "./CategorySelector.scss";

export default ({ selectedCategories, chooseCategoryHandler }) => {
  const allCategories = [
    "all",
    "documentary",
    "comedy",
    "horror",
    "crime",
    "Adventure",
    "Science Fiction",
    "Action",
    "Family",
    "Animation",
    "Fantasy",
    "Drama",
    "Romance",
  ];

  const categories = allCategories
    .filter(category => category !== "all")
    .sort();

  const [isVisible, setVisibility] = useState(false);

  const showAllCategories = () => setVisibility(prevState => !prevState);

  return (
    <>
      <label>genre</label>
      <div className="inputWrapper" onClick={showAllCategories}>
        <div className="selectorIcon" />
        <input
          id="genre"
          value={selectedCategories.join(", ")}
          placeholder="select genre"
          disabled
        />
      </div>
      <ul className="categoryList" hidden={!isVisible}>
        {categories.map((category) => {
          return (
            <li className="categoryItem" key={category}>
              <label className="container">
                <span>{category}</span>
                <input
                  className="checkbox"
                  type="checkbox"
                  onClick={() => chooseCategoryHandler(category)}
                  defaultChecked={!!selectedCategories.includes(category)}
                />
                <span className="checkmark" />
              </label>
            </li>
          );
        })}  
      </ul>
    </>
  );
};
