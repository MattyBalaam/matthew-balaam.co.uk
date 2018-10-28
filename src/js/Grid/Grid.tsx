import React from "react";
import classes from "js/utility/classes";
type GridProps = {
  className?: string;
  Component: React.ReactType;
  tightBottom: boolean;
};
export default class Grid extends React.Component<GridProps, {}> {
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
