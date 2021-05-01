import React from "react";
import Router from "next/router";
import Footer from "../../Footer";
import Logo from "../Logo";

const ErrorPage = () => {
  const backHome = () => Router.push("/");

  return (
    <>
      <div className="errorWrapper">
        <Logo />
        <div className="errorCenter">
          <h3>page not found</h3>
          <img width="600" height="440" alt="404" />
          <button className="errorGoBack" onClick={backHome}>
            go back to home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
