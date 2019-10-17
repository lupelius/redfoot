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
                      <h2>SEN Teaching Assistant - Based in North London - £19k - £20k per annum - Special Needs School – ASAP Start - Permanent role</h2>
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
                <strong>*** SEN Teaching Assistant for Primary and Secondary setting (4-16 year olds) </strong>
                <strong>*** Outstanding SEN School based in North London</strong>
                <strong>*** £19k - £20k per annum, depending on experience</strong>
                <strong>*** PECS, MAKATON, Team Teach, Manual Handling, ASD experience is preferred</strong>
                
                <p>Are you an ambitious SEN Teaching Assistant looking for a new opportunity to start ASAP?


                </p><p>
                Do you have experience supporting children who have SEN?
                </p><p>
                Are you a confident SEN Teaching Assistant or have a background in Drama/ Sports/ Music/ Coaching/ Acting with desire to work in SEN Schools? 
                </p>
                <p>If yes and you are looking to start ASAP as a SEN Teaching Assistant, please continue reading below.</p>
                <h3>The Role – SEN Teaching Assistant </h3>
                <p>Duties include working closely with pupils of SEN in groups or 1:1, maintaining and improving the social, emotional, physical and learning needs for pupils. Carrying out programmes of work under the supervision of the class teacher, to support SEN pupil/s learning e.g. breaking down learning tasks into smaller steps, using approaches that match individual pupil’s SEN with the use of signs and symbols as appropriate. Responsibility for taking an active part in supervising and supporting SEN pupils at all times. This could include collecting SEN pupils from their transport each morning and putting them on transport at the end of the day. Supervising and supporting on all educational activities, including educational visits, independent travel programmes and mainstream reintegration placements, reporting on SEN pupils’ progress and assisting in developing pupil independence and confidence. Carrying out necessary physical tasks for the care of the pupil, e.g. toileting, changing, eating/ drinking, giving prescribed medication (under supervision and with training), and to assist in the development of self-help and independence skills. Working collaboratively with specialist professionals (e.g. physiotherapists, occupational and speech and language therapists, specialist teachers of the deaf/ visually impaired) to assist in meeting identified SEN pupil needs. This may require appropriate training, actively undertaking responsibility for provision of the agreed programmes and/or equipment and reporting on outcomes. </p>
                <p>Ability to work effectively with children with autism and severe learning difficulties some of whom may show challenging behaviours.</p>
                <h3>The School – SEN Teaching Assistant </h3>
                <p>Outstanding Special Needs Schools based in North London, offering education for 4-16 year-olds with autism.</p>
                <p>The school is dedicated to enforcing positive language with their students to boost progression. They have a solid team who work together to ensure that students are receiving a high standard of education. It's a family orientated SEN School with fantastic facilities, top of the range equipment. Through the mentorship of a Class Teacher, who has ample experience both as a teacher and mentor, you will receive all the support you could need. You will be assisting the teachers to support SEN students learning, progression and independency. </p>
                <p>The school are looking for a positive and passionate SEN Teaching Assistant to stay with them permanently. </p>
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
