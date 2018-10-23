import React from "react";
import PropTypes from "prop-types";

import classes from "js/utility/classes";

export default class Grid extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    Component: PropTypes.node,
    tightBottom: PropTypes.bool
  };
  static defaultProps = {
    Component: "section",
    tightBottom: false
  };
  render() {
    const { children, className, tightBottom, Component } = this.props;
    const classNames = classes([
      "grid",
      tightBottom ? "grid--tight-bottom" : null,
      className
    ]);

    return <Component className={classNames}>{children}</Component>;
  }
}
