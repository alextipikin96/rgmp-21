import React from "react";

const ResultCount = ({ movies }) => {
  return <div className="ResultCount">{movies.length} movies found</div>;
};

export default ResultCount;
