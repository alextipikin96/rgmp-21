import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../Footer";
import Logo from "../Logo";
import pic from "../../../assets/img";
import "./ErrorPage.scss";

export default () => {
  const history = useHistory();

  return (
    <>
      <div className="errorWrapper">
        <Logo />
        <div className="errorCenter">
          <h3>page not found</h3>
          <img src={pic.error404} width="600" height="440" />
          <button className="errorGoBack" onClick={() => history.push("/")}>
            go back to home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
