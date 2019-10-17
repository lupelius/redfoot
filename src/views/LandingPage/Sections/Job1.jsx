import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
// @material-ui/icons

// core components
import HeaderParallax from "../HeaderParallax.jsx";
import Footer from "../../../components/Footer/Footer.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

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
          <div style={{color: 'black !important', padding:50,}}>
            <h2>React / React Native Fullstack Developer - Permanent</h2>
            <div id="contents"><p class="c8 c13"><span class="c2 c15"></span></p><h2 class="c18" id="h.pldnvz21t83t"><span class="c5">About Savvy:</span></h2><p class="c4"><span class="c11"><a class="c0" href="https://www.google.com/url?q=https://www.wearesavvy.com/&amp;sa=D&amp;ust=1571309204051000">https://www.wearesavvy.com/</a></span></p><p class="c4 c8"><span class="c3"></span></p><p class="c4"><span class="c3">Savvy is the result of two cups of tea and a question: how can Asset Managers and Landlords better compete with the changing London property market and the rise of co-working spaces? The answer, our co-founders concluded, was to build an app that gives greater control to Asset Managers, allowing them to offer space as a service and respond to the needs of their tenants.</span></p><p class="c4 c8"><span class="c3"></span></p><p class="c4"><span class="c3">After months of painstaking research and the introduction of our passionate backers, Savvy was born.</span></p><p class="c4 c8"><span class="c3"></span></p><h2 class="c16" id="h.4wr3iradz1h8"><span class="c5">What we’re looking for:</span></h2><p class="c4 c8"><span class="c3"></span></p><p class="c4"><span class="c3">Savvy are looking for a motivated self-starter to help develop a property technology application in an Agile delivery model.</span></p><p class="c4 c8"><span class="c3"></span></p><p class="c4"><span class="c3">From a personal point of view, we're looking for someone who is innovative, collaborative and has a passion for what they do. You'll be expected to roll up your sleeves and get stuck in from day one.</span></p><p class="c4 c8"><span class="c3"></span></p><p class="c4"><span class="c3">You'll be joining a highly talented, focussed and energetic team. We work in an agile way with daily stand-ups and bi-weekly sprints. Design, development, and stakeholders work closely and collaboratively together.</span></p><p class="c4 c8"><span class="c3"></span></p><p class="c4"><span class="c3">Our London office is based in Old Street district (London's tech district).</span></p><p class="c4"><span class="c3">You will be based in Romania, Bucharest.</span></p><p class="c4"><span class="c10">Office address: Blv. Dacia No.56, Corp B, Parter, Sector 2, Bucharest</span></p><h2 class="c16" id="h.au915t8ig1zv"><span class="c5">The successful applicant will be someone with:</span></h2><p class="c4 c8"><span class="c3"></span></p><ul class="c7 lst-kix_oqe5egc3jjoh-0 start"><li class="c9"><span>You have experience building full-cycle products in </span><span class="c2">React Native, </span><span class="c3">bonus points for apps launched in stores.</span></li><li class="c9"><span class="c15 c2">Node.JS</span></li><li class="c9"><span>Excellent english </span><span class="c2">communication</span><span class="c3">&nbsp;skills</span></li><li class="c9"><span>Seasoned in </span><span class="c15 c2">JavaScript ES6</span></li><li class="c9"><span>Must be used to employing </span><span class="c2">TDD</span><span class="c3">&nbsp;to accomplish reproducible results that can be executed in a Continuous Integration pipeline</span></li><li class="c9"><span>Experience with general tooling including </span><span class="c2">Github</span><span>, </span><span class="c2">Yarn</span><span>, and </span><span class="c15 c2">Fastlane</span></li></ul><p class="c4 c8"><span class="c3"></span></p><h2 class="c6" id="h.4zm4bazcltx7"><span class="c5">Highly regarded but not a prerequisite:</span></h2><ul class="c7 lst-kix_k1zv7qy9am2-0 start"><li class="c9"><span>Ideally the candidate will have experience with </span><span class="c2">GraphQL</span><span>&nbsp;and preferably with </span><span class="c2">Apollo</span><span>&nbsp;or be a fast learner and prepared to learn</span></li><li class="c9"><span>Native iOS and/or Android</span></li><li class="c9"><span>Any experience with </span><span class="c2">AWS</span><span>, </span><span class="c2">Docker Kubernetes</span><span>&nbsp;and </span><span class="c2">MongoDB</span><span class="c3">&nbsp;will be looked upon favourably.</span></li></ul><p class="c13 c8"><span class="c3"></span></p></div>
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
              href={'/'}
            >
              Back
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
