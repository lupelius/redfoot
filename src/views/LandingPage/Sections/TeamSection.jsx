import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/cem.jpeg";
import team2 from "assets/img/faces/serdar.jpeg";
import team3 from "assets/img/faces/cosmin.jpeg";
import team4 from "assets/img/faces/anna.jpeg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    width="100"
                    src={team1}
                    alt="..."
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Cem Temur
                  <br />
                  <small className={classes.smallTitle}>Co founder</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Cem has built and grew <a href="https://www.rocabee.com">
                    Rocabee</a> to a team of 60 people strong
                    , where he tried having his software development team
                    in Germany, UK, Ukraine and hit the jackpot when he setup in
                    Bucharest, Romania. Helping Sed scale his team at the time
                    he was the CTO of Rota, this is how they formed the idea for
                    Redfoot.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    onClick={() =>
                      (window.location.href = `https://www.linkedin.com/in/temur/`)
                    }
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    width="100"
                    src={team2}
                    alt="..."
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Serdar (Sed) Senay
                  <br />
                  <small className={classes.smallTitle}>Co founder</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Serdar has software engineering background and has been
                    hiring and managing engineering teams for over 10 years in
                    CTO positions at various firms such as
                    {" "}<a href="https://rota.com/">Rota</a> where he scaled a (cost
                    and delivery wise) highly effective team
                    in Bucharest, Romania, coming up with the idea for Redfoot.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    onClick={() =>
                      (window.location.href = `https://twitter.com/srdrsny`)
                    }
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    onClick={() =>
                      (window.location.href = `https://www.linkedin.com/in/sserdar/`)
                    }
                  >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    width="100"
                    src={team4}
                    alt="..."
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Anna Szabo
                  <br />
                  <small className={classes.smallTitle}>Head of Talent Acquisition</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Anna has a very impressive career in recruitment and sales,
                    where she quickly went up the corporate ladder wherever she
                    worked due to her tenaciousness and determination combined with
                    her intelligence and caring nature she had with all her clients and talent,
                    she is a great hire for Redfoot due to her experience.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    onClick={() =>
                      (window.location.href = `https://linkedin.com/in/anna-szabo-b65856187/`)
                    }
                  >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img width="100" src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Cosmin Pachiu
                  <br />
                  <small className={classes.smallTitle}>Head of Bucharest</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Cosmin is our partner in Bucharest, managing the offices as
                    well as line managing teams overall (so you only have to
                    worry about product management). With his years of
                    experience in technology startups and his vast network,
                    in Bucharest, he helps us scale the teams with ease and
                    precision.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    onClick={() =>
                      (window.location.href = `https://www.linkedin.com/in/cosmin-pachiu-721a498/`)
                    }
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    onClick={() =>
                      (window.location.href = `https://www.facebook.com/Redfoot-Your-Own-Shore-Team-677857789338047/`)
                    }
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
