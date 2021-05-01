import React from "react";
import Router from "next/router";

const Logo = () => {
  const backHome = () => Router.push("/");
  return (
    <div onClick={backHome} className="logo">
      <span className="logo-netfilx">netflix</span>roulette
    </div>
  );
};

export default Logo;
