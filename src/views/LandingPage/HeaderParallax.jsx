import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

const dashboardRoutes = [];

class LandingPage extends React.PureComponent {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={this.props.brand}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/happy-workplace.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>{this.props.header}</h1>
                <h4>
                  Your Own-Shore Team. High quality engineers. Transparent
                  costs. Fully dedicated and managed by you.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href={`mailto:hello@theredfoot.co.uk?subject=Help%20with%20Own-Shore%20Team&body=Hello%20Redfoot!,`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-reply" />
                  Say hello!
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
