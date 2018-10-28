import React from "react";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  children: React.ReactNode;
  className?: string;
  Component: React.ReactType;
};

export default class SectionHeader extends React.PureComponent<
  SectionHeaderProps,
  {}
  > {
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
