import React from "react";
import { useHistory } from "react-router-dom";
import "./Logo.scss";

export default () => {
  const history = useHistory();
  return (
    <div onClick={() => history.push("/")} className="logo">
      <span className="logo-netfilx">netflix</span>roulette
    </div>
  );
};
