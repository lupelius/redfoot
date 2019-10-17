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
            <h2>NodeJS and DevOps Backend Developer - Permanent</h2>
            <div id="contents"><h2 class="c12" id="h.h3mv3soqrfen"><span class="c9">About Savvy:</span></h2><p class="c4"><span class="c10"><a class="c8" href="https://www.google.com/url?q=https://www.wearesavvy.com/&amp;sa=D&amp;ust=1571310227511000">https://www.wearesavvy.com/</a></span></p><p class="c4 c2"><span class="c5"></span></p><p class="c4"><span class="c16">Savvy</span><span class="c1">&nbsp;is the result of two cups of tea and a question: how can Asset Managers and Landlords better compete with the changing London property market and the rise of co-working spaces? The answer, our co-founders concluded, was to build an app that gives greater control to Asset Managers, allowing them to offer space as a service and respond to the needs of their tenants.</span></p><p class="c4 c2"><span class="c1"></span></p><p class="c4"><span class="c1">After months of painstaking research and the introduction of our passionate backers, Savvy was born.</span></p><p class="c0 c2"><span class="c1"></span></p><p class="c0"><span class="c6">Savvy</span><span class="c3">&nbsp;are looking for a motivated self-starter to help develop a property technology web</span></p><p class="c0"><span class="c3">application in an Agile delivery model.</span></p><p class="c0"><span class="c3">● From a personal point of view, we're looking for someone who is innovative,</span></p><p class="c0"><span class="c3">collaborative and has a passion for what they do. You'll be expected to roll up your</span></p><p class="c0"><span class="c3">sleeves and get stuck in from day one.</span></p><p class="c0"><span class="c3">● You'll be joining a highly talented, focussed and energetic team. We work in an agile way</span></p><p class="c0"><span class="c3">with daily stand-ups and biweekly sprints. Design, development, and stakeholders work</span></p><p class="c0"><span class="c3">closely and collaboratively together.</span></p><p class="c0"><span class="c3">● Our London office is based in Old Street district (London's tech district) and provides an</span></p><p class="c0"><span class="c3">exciting, creative space around like-minded people.</span></p><p class="c0"><span class="c3">● To manage the platform infrastructure for Savvy Property Technologies Ltd that ensures</span></p><p class="c0"><span class="c3">the continued secure hosting of existing and new software. The successful candidate will</span></p><p class="c0"><span class="c3">have experience working with NodeJS, AWS and Kubernetes. A born problem-solver</span></p><p class="c0"><span class="c3">with a passion for technology and security. He or she will be used to engineering</span></p><p class="c0"><span class="c3">platforms that support web services in production and identifying areas for improvement</span></p><p class="c0"><span class="c3">and observation.</span></p><p class="c0 c2"><span class="c3"></span></p><p class="c0"><span class="c6 c13">Essential</span></p><p class="c0"><span class="c3">● Building and maintaining a scalable Kubernetes container infrastructure in AWS</span></p><p class="c0"><span class="c3">● Supporting Continuous Delivery pipelines for web and mobile</span></p><p class="c0"><span class="c3">● Managing Cloud networking for AWS and MongoDB</span></p><p class="c0"><span class="c3">● Demonstrable experience building and destroying infrastructure with Terraform</span></p><p class="c0"><span class="c3">● Experience managing a monitoring system</span></p><p class="c0"><span class="c3">● Implementation of container vulnerability testing software</span></p><p class="c0"><span class="c3">● Experience securely managing large volumes of data</span></p><p class="c0"><span class="c3">● Implementing a metrics and alerting strategy</span></p><p class="c0"><span class="c3">● Testing</span></p><p class="c0"><span class="c3">● CI/CD pipelines (we use Terraform, Code Pipeline for Back-end, AppCenter for mobile</span></p><p class="c0"><span class="c3">apps)</span></p><p class="c0"><span class="c3">● Node.js</span></p><p class="c0 c2"><span class="c3"></span></p><p class="c0"><span class="c6 c13">Desirable</span></p><p class="c0"><span class="c3">● AWS CodePipeline</span></p><p class="c0"><span class="c3">● AWS EKS</span></p><p class="c0"><span class="c3">● Microservices</span></p><p class="c0"><span class="c3">● AWS Lambda</span></p><p class="c0"><span class="c3">● Datadog</span></p><p class="c0"><span class="c3">● GraphQL</span></p><p class="c0"><span class="c7">● Atlas MongoDB</span></p></div>
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
