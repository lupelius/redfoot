/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.facebook.com/Redfoot-Your-Own-Shore-Team-677857789338047"
                className={classes.block}
                target="_blank"
              >
                Facebook
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://twitter.com/OwnTeams"
                className={classes.block}
                target="_blank"
              >
                Twitter
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/company/14782769"
                className={classes.block}
                target="_blank"
              >
                LinkedIn
              </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="/blog"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem> */}
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , {" "}
          <a
            href="https://beta.companieshouse.gov.uk/company/11944765"
            className={aClasses}
            target="_blank"
          >
            Redfoot Limited
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
