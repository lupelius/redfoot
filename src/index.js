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
import Education from "./views/ProfilePage/Education";
import Jobs from "./views/ProfilePage/Jobs";
import Jobs2 from "./views/ProfilePage/Jobs2";
import Jobs3 from "./views/ProfilePage/Jobs3";
import Jobs4 from "./views/LandingPage/Sections/Job1";
import Jobs5 from "./views/LandingPage/Sections/Job2";
//import Jobs6 from "./views/LandingPage/Sections/Job3";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={Components} />
      <Route path="/profile-page" component={LoginPage} /> */}
      <Route path="/blog/:title" component={ProfilePage} />
      <Route path="/blog" component={Blog} />
      <Route path="/education" component={Education} />
      <Route
        path="/sen-teacher-se-london-32k-45k-mps-ups-perm"
        component={Jobs}
      />
      <Route
        path="/sen-teaching-assistant-north-london-19k-20k-special-needs-school-permanent"
        component={Jobs2}
      />
      <Route
        path="/sen-teaching-assistant-se-london-70-85-pd-asap-start-special-needs-school-long-term"
        component={Jobs3}
      />
      <Route
        path="/react-react-native-fullstack-developer-perm"
        component={Jobs4}
      />
      <Route path="/node-devops-backend-developer-perm" component={Jobs5} />
      <Route exact path="/" component={LandingPage} />
      <Route component={NoMatch} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
