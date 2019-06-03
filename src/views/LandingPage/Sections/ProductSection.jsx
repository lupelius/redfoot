import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk about Own-Shore Teams</h2>
            <h5 className={classes.description}>
              We are two founders, Cem and Sed. We both have exactly the same
              story, needed to scale our software development teams, tried to
              work with many other off shore agencies, including Germany, UK,
              Turkey, Ukraine, South Africa, India, Pakistan, and most common
              problems were high costs, risk of losing product specific
              knowledge and lack of good CVs or poor levels of English and other
              soft skills.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Why Own-shore?"
                description="Create a team that is truly yours (even put up your logo on the wall!), Use our network of people in Bucharest that is proven to deliver, Transparent pricing: opportunity fee + fixed fees (desk, admin, accounting etc) all visible from day one."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Why Romania?"
                description="Security of EU legislation, Good infrastructure (internet, network etc), Price comparison: Romania vs Ukraine, High English knowledge of locals, Strong technical education / good unis → Engineering skills, Big corporate presence: EA, Microsoft etc"
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Our Differentiator"
                description="Ownership and Control - The team is hired, project managed and fully dedicated by you and low costs allow you keep them forever, Transparency - Completely transparent costs structure, Know-how - We have done this before, a lot of times."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
