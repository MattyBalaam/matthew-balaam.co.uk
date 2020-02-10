import React, { ReactNode } from "react";
import classes from "../../utility/classes";

type Props = {
  children: ReactNode;
  className?: string;
  Component?: React.ReactType;
  tightBottom?: boolean;
};

const Grid = ({
  children,
  className,
  tightBottom = false,
  Component = "section"
}: Props) => (
  <Component
    className={classes([
      "grid",
      tightBottom ? "grid--tight-bottom" : undefined,
      className
    ])}
  >
    {children}
  </Component>
);

export default Grid;
