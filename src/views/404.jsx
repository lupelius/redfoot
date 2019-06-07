import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.jsx";
import HeaderParallax from "./LandingPage/HeaderParallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

class NoMatch extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <HeaderParallax
          header="404 - Page not found"
          brand="404 - Page not found"
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container} align="center">
            <iframe
              src="https://giphy.com/embed/VwoJkTfZAUBSU"
              title="404"
              width="332"
              height="480"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(NoMatch);
