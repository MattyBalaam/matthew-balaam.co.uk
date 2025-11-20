import type { ElementType, ReactNode } from "react";
import { classes } from "~/utility/classes";

import * as styles from "./grid.css";

interface GridChildProps {
  children: ReactNode;
  Component?: ElementType;
  className?: string;
  variant: keyof typeof styles.gridChildVariant;
  divider?: boolean;
}

export function GridChild({
  children,
  Component = "section",
  variant,
  divider = false,
  className,
}: GridChildProps) {
  return (
    <Component
      className={classes([
        styles.gridChildVariant[variant],
        divider && styles.divider,
        className,
      ])}
    >
      {children}
    </Component>
  );
}

interface GridProps {
  children: ReactNode;
  className?: string;
  Component?: ElementType;
  tightBottom?: boolean;
}

export function Grid({
  children,
  className,
  Component = "section",
}: GridProps) {
  return (
    <Component className={classes([styles.grid, className])}>
      {children}
    </Component>
  );
}

Grid.Child = GridChild;
