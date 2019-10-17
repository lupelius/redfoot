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
                      <h1 style={{fontSize: 20,fontWeight:'bold'}}>REDFOOT - EDUCATION JOBS</h1>
                      <h2>SEN Teaching Assistant - Based in SE London - £70 - £85 per day - ASAP Start - Special
Needs School – Long Term</h2>
                      <h3><a href="tel:+44-20-8638-6306">+44 (0) 20 8638 6306</a></h3>
                      <a href="https://www.facebook.com/Redfoot-Education-Recruitment-Services-116175283085848/">
                        <Button justIcon link className={classes.margin5}>
                          <i className={"fab fa-facebook"} />
                        </Button>
                      </a>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description} style={{ paddingBottom: 30 }} align="left">
                <p><strong>** SEN Teaching Assistant for Primary and Secondary setting (7-19-year olds)
                ** SEN School based in SE London
                ** £70 - £85 per day, depending on experience
                ** Manual Handling, ASD experience is preferred</strong></p>
                <p>Are you an ambitious SEN Teaching Assistant looking for a new opportunity to start ASAP?

                Do you have experience supporting children who have SEN?
                Are you a confident SEN Teaching Assistant or have a background in Drama/ Sports/ Music/
                Coaching/ Acting with desire to work in SEN Schools?</p>
                <p>If yes and you are looking to start ASAP as a SEN Teaching Assistant, please continue reading below.</p>
                <h3>The Role – SEN Teaching Assistant </h3>
                <p>Duties include working closely with pupils of SEN in groups or 1:1, maintaining and improving the social, emotional, physical and learning needs for pupils. The ideal SEN Teaching Assistant will be able to tailor their approach in regard to communication, engagement, and distraction techniques to optimise learning and maximise comfort. If you have some experience in challenging behaviour or Autism, please feel free to apply. </p>
                <h3>The School – SEN Teaching Assistant </h3>
                <p>Outstanding Special Needs Schools based in SE London, with pupils aged years 7-19 of the ASD spectrum. The school is dedicated to enforcing positive language with their students to boost progression. They have a solid team who work together to ensure that students are receiving a high standard of education. Through the mentorship of a Class Teacher, who has ample experience both as a teacher and mentor, you will receive all the support you could need. You will be assisting the teachers to support students learning, progression and independency. The school are looking for a positive and passionate SEN Teaching Assistant with the desire to work with pupils of SEN. </p>
                <p><strong>If this sounds like you and you're ready for a new challenge, then HIT the APPLY button below or contact Anna on <a href="tel:+44-20-8638-6306">+44 (0) 20 8638 6306</a> or <a href="mailto:hello@theredfoot.co.uk">anna@theredfoot.co.uk</a></strong></p>
                <Button
                  color="danger"
                  size="lg"
                  href={`https://docs.google.com/forms/d/e/1FAIpQLSfobgqE3nmmsoaXJlt3nzcJldHSwrEz-kPLjsk5EteH1j1OXg/viewform?usp=sf_link`}
                  target="_blank"
                >
                  Apply
                </Button>
                <Button
                  size="lg"
                  href={'/education'}
                >
                  Back to education
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
