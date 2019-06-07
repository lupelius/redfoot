import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import HeaderParallax from "./HeaderParallax.jsx";
import Footer from "components/Footer/Footer.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

class LandingPage extends React.Component {
  state = {};
  updateBody = evt => {
    this.setState({
      bodyValue: evt.target.value
    });
  };
  updateEmail = evt => {
    this.setState({
      emailValue: evt.target.value
    });
  };
  updateName = evt => {
    this.setState({
      nameValue: evt.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <HeaderParallax
          header="REDFOOT AGENCY"
          brand="REDFOOT - Your Own-Shore Team"
        />
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
