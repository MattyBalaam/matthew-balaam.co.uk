import React from "react";
import PropTypes from "prop-types";

export default class Grid extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    tightBottom: PropTypes.bool
  };
  static defaultProps = {
    tightBottom: false
  };
  render() {
    const { children, className, tightBottom } = this.props;
    const classNames = [
      "grid",
      tightBottom && "grid--tight-bottom",
      className
    ].join(" ");

    return <section className={classNames}>{children}</section>;
  }
}
