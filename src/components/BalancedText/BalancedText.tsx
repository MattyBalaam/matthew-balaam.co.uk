import React from "react";
import classes from "../../utility/classes";

export interface Props {
  children: React.ReactNode;
  className?: string;
}

const BalancedText = ({ children, className }: Props) => (
  <p className={classes([className, "balance-text"])}> {children}</p>
);

export default BalancedText;
