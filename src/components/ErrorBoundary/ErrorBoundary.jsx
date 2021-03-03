import React from "react";
import "./ErrorBoundary.scss";

export default ({ isEverythingOk, children }) => {
  const ErrorMessage = () => (
    <div className="page-not-found wrapper">
      <img src="/images/404.svg" alt="404 error" />
      <button>Go back home</button>
    </div>
  );

  return (
    <>
      {isEverythingOk ? children : <ErrorMessage />}
    </>
  );
};
