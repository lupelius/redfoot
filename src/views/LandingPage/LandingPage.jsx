import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  state = {};
  updateBody = evt => {
    this.setState({
      bodyValue: evt.target.value
    });
  }
  updateEmail = evt => {
    this.setState({
      emailValue: evt.target.value
    });
  }
  updateName = evt => {
    this.setState({
      nameValue: evt.target.value
    });
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="REDFOOT - Your Own-Shore Team"
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
                <h1 className={classes.title}>REDFOOT AGENCY</h1>
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
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection
              updateName={this.updateName}
              updateEmail={this.updateEmail}
              updateBody={this.updateBody}
              nameValue={this.state.nameValue}
              emailValue={this.state.emailValue}
              bodyValue={this.state.bodyValue}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
