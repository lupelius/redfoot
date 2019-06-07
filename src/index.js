import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
// import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
// import LoginPage from "views/LoginPage/LoginPage.jsx";
import NoMatch from "views/404.jsx";
import Blog from "./views/ProfilePage/Blog";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={Components} />
      <Route path="/profile-page" component={LoginPage} /> */}
      <Route path="/blog/:title" component={ProfilePage} />
      <Route path="/blog" component={Blog} />
      <Route exact path="/" component={LandingPage} />
      <Route component={NoMatch} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
