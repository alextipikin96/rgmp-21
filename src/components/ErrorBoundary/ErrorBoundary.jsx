import React from "react";

const ErrorBoundary = ({ isEverythingOk, children }) => {
  const ErrorMessage = () => (
    <div>
      <img alt="404 error" />
      <button>Go back home</button>
    </div>
  );

  return <>{isEverythingOk ? children : <ErrorMessage />}</>;
};

export default ErrorBoundary;
