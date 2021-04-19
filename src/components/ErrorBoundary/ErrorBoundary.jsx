import React from "react";

export default ({ isEverythingOk, children }) => {
  const ErrorMessage = () => (
    <div>
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
