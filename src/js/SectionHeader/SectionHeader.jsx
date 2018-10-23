import React from "react";
import PropTypes from "prop-types";

import styles from "./SectionHeader.module.css";

export default class SectionHeader extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    Component: PropTypes.node
  };

  static defaultProps = {
    Component: "h2"
  };
  render() {
    const { children, className, Component } = this.props;
    return (
      <Component className={`${styles.header} ${className ? className : ""}`}>
        {children}
      </Component>
    );
  }
}
