import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import MovieDetailsPage from "../MovieDetailsPage";
import ErrorPage from "../common/ErrorPage";
import "./App.scss";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search/:category/:sortBy/:search" component={HomePage} />
        <Route path="/movie/:id" component={MovieDetailsPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};
