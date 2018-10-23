import React from "react";
import PropTypes from "prop-types";
import classes from "js/utility/classes";

export default class BalancedText extends React.Component {
  static PropTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children, className } = this.props;
    return <p className={classes([className, "balance-text"])}> {children}</p>;
  }
}
