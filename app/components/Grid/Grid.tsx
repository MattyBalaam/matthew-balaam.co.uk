import type { ElementType, ReactNode } from "react";
import { classes } from "~/utility/classes";

import styles from "./grid.module.css";

interface GridChildProps {
  children: ReactNode;
  Component?: ElementType;
  className?: string;
  variant?: "start" | "main" | "sub" | "main-sub";
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
        styles.gridChild,
        variant === "start" && styles.start,
        variant === "main" && styles.main,
        variant === "sub" && styles.sub,
        variant === "main-sub" && styles["main-to-sub"],
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
  tightBottom = false,
  Component = "section",
}: GridProps) {
  return (
    <Component
      className={classes([
        styles.grid,
        tightBottom ? styles.tightBottom : undefined,
        className && styles[className],
      ])}
    >
      {children}
    </Component>
  );
}

Grid.Child = GridChild;

export { styles as gridStyles };
