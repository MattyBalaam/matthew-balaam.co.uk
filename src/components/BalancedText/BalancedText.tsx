import React from "react";
import classes from "../../utility/classes";

export interface BalancedTextProps {
  children: React.ReactNode;
  className?: string;
}

export default class BalancedText extends React.Component<BalancedTextProps> {
  render() {
    const { children, className } = this.props;
    return <p className={classes([className, "balance-text"])}> {children}</p>;
  }
}
