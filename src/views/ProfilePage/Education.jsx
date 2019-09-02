import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/education2.png";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  componentDidMount = () => {};
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="REDFOOT - Your Own-Shore Team"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/education.webp")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div className={classes.name}>
                      <h3 className={classes.title}>
                        {this.props.match.params.title}
                      </h3>
                      <h2>REDFOOT - EDUCATION RECRUITMENT SERVICES</h2>
                      <h3><a href="tel:+44-16-2237-0288">+44 (0) 16 2237 0288</a></h3>
                      <a href="https://www.facebook.com/Redfoot-Education-Recruitment-Services-116175283085848/">
                        <Button justIcon link className={classes.margin5}>
                          <i className={"fab fa-facebook"} />
                        </Button>
                      </a>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                If you have ambitious plans to meet the 
                recruitment demands for your school, 
                Redfoot Education Recruitment is able to help.{" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Schools",
                        tabContent: (
                          <p>The education service starts with a visit to your school to understand the needs of the children and the School. This allows us to learn about your school and your needs to ensure we can provide the most suitable candidate.

                          Redfoot Personalised Service
                          The selection process is tailored to the individual school and is backed up by all the safeguards you’d expect in a leading Redfoot recruitment consultancy in line with the conduct regulations and DFE guidelines.
                          
                          Clients put their trust in us and strong relationships develop. As a result, the Redfoot Recruitment process has been designed in consultation with, and approved by our clients sharing the focus being the children and meeting their needs.
                          
                          This is what clients have to say about Redfoot Recruitment: “Our partnership is immensely successful because of the time and thought the team at Redfoot gives to understanding the needs of our children.”
                          
                          We recruit candidates who specialise in working with children with a range of special needs including SPLD, ASC, ESBD, ADHD, MLD, Dyspraxia, Dyslexia, Medical Needs and Mental Health.
                          
                          We have a range of roles and opportunities including full-time, part-time, day-to-day cover, long-term, short-term, temporary contract or permanent. Candidates are sourced from various jobs boards and word of mouth within the RedfootD sector and our bespoke recruitment process ensures that we have assessed them as being a good fit for the role.
                          
                          12 week ‘temp to perm packages’ are free from any perm fee. You can trial a candidate before offering employment. Many employees stay in their roles for 2, 3 years and longer.
                          
                          Would you like to discuss your recruitment needs? Please contact us today to find out more</p>
                        )
                      },
                      {
                        tabButton: "Candidates",
                        tabContent: (
                          <p>Are you skilled and experienced in teaching and supporting children with special educational needs?

                          We are recruiting for Teachers and Teaching Assistants and have a number of roles in both mainstream and special needs schools across the north west.
                          
                          Redfoot Recruitment operates a fair pay policy – please ask about the rates we pay for specific roles.
                          
                          Temporary and Permanant roles available with immediate starts. Each role is an excellent opportunity for a skilled, experienced and caring candidate who wants to feel rewarded for helping children move forward with their education.
                          
                          To comply with our ‘safer recruitment’ and DFE guidelines, we take up references and require all candidates to have a full enhanced DBS check and a face to face interview.
                          
                          We support all candidates through the recruitment process and help you settle into your new role once recruited.
                          
                          Does this sound of interest to you? It is easy to register with Redfoot Recruitment.</p>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
