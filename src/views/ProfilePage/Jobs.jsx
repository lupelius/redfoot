import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";


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
                      <h2>SEN Teacher - SE London - ASD School - £32k - £45k per annum- MPS / UPS + SEN </h2>
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
                <strong>***SEN Teacher to start in January 2020</strong>
                <strong>***SEN Teacher, £32k - £45k per annum, depending on experience</strong>
                <strong>***SEN Teacher with QTS/QTLS to teach children who have ASD/Complex needs</strong>
                <p>Are you a SEN Teacher looking for a new exciting role to further develop your career?
                </p><p>
                Do you consider yourself an experienced SEN Teacher who has experience of working with a wide range of different SEN with Primary/Secondary aged pupils?
                </p><p>
                If you answered yes to all of the above then this SEN Teacher role is for you!
                </p>
                <h3>The Role - SEN Teacher</h3>
                <p>We are looking for an experienced SEN Teacher to join this popular and well-established SEN School in SE London. For this SEN Teacher role, you will be teaching pupils with ASD and Complex Needs. This SEN Teacher role is full time, long-term and you will be teaching pupils who have ASD and complex needs. To be a successful SEN Teacher, you must be hard-working and committed to helping all of the students you are teaching. To be a successful SEN Teacher you will have a good understanding of all the pupils' needs you are teaching and able to create engaging lessons catering to each child's needs.</p>
                <h3>The School - SEN Teacher</h3>
                <p>This Outstanding SEN School is located in SE London and is easily accessible from most points of London. This SEN school caters for 200 pupils between the ages of 5-18. The pupils have a wide range of SEN needs including ASD and Complex Needs. The school is dedicated to enforcing positive language with their students to boost progression. They have a solid team who work together to ensure that students are receiving a high standard of education. They are looking for an ambitious and positive SEN Teacher to stay with them permanently.</p>
                <p><strong>If this sounds like you and you're ready for a new challenge, then HIT the APPLY button below and attach your CV or contact Anna on <a href="tel:+44-20-8638-6306">+44 (0) 20 8638 6306</a> or <a href="mailto:hello@theredfoot.co.uk">anna@theredfoot.co.uk</a></strong></p>
                <Button
                  color="danger"
                  size="lg"
                  href={"https://docs.google.com/forms/d/e/1FAIpQLSfobgqE3nmmsoaXJlt3nzcJldHSwrEz-kPLjsk5EteH1j1OXg/viewform?usp=sf_link"}
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
