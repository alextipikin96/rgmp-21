import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import MovieContainer from "../MovieContainer";
import HeaderContainer from "../HeaderContainer";
import SearchForm from "../SearchForm/SearchForm";

export default () => {
  return (
    <>
      <HeaderContainer>
        <Header />
        <SearchForm />
      </HeaderContainer>
      <MovieContainer />
      <Footer />
    </>
  );
};
