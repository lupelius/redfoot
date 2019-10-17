import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
            <h2 className={classes.title}>Software Engineering Jobs</h2>
            <div align="left">
              <div style={{ padding:30, border:'1px solid grey', borderRadius: 10 }}>
                <h3 style={{ color: "black" }}>
                  Savvy - React / React Native Fullstack Developer - Permanent
                </h3>
                <Button
                  color="danger"
                  size="lg"
                  href={`/react-react-native-fullstack-developer-perm`}
                >
                  See Details
                </Button>
              </div>
              <div style={{ padding:30, border:'1px solid grey', borderRadius: 10,marginTop: 20 }}>
                <h3 style={{ color: "black" }}>Savvy - NodeJS and DevOps Backend Developer - Permanent</h3>
                <Button
                  color="danger"
                  size="lg"
                  href={`/node-devops-backend-developer-perm`}
                >
                  See Details
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center" style={{marginTop: 100}}>
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              Write a few lines about your requirements and contact us about
              collaboration. We will try and get back to you as soon as
              possible.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                      onChange: evt => this.props.updateName(evt)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                      onChange: evt => this.props.updateEmail(evt)
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea,
                    onChange: evt => this.props.updateBody(evt)
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button
                      color="primary"
                      onClick={() =>
                        (window.location.href = `mailto:hello@theredfoot.co.uk?subject=Help%20with%20Own-Shore%20Team&body=Hello%20Redfoot!,%20%0A%0A${encodeURIComponent(
                          this.props.bodyValue
                        )}%0A%0A${encodeURIComponent(
                          this.props.nameValue
                        )}%0A${encodeURIComponent(this.props.emailValue)}`)
                      }
                    >
                      Send Message
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
