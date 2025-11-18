import { type ReactNode } from "react";

import styles from "./cube.module.css";

export interface CubeProps {
  className?: string;
  children: ReactNode;
}

export function Cube({ children, className }: CubeProps) {
  return (
    <main className={`${className} ${styles.cube}`}>
      <div style={{ viewTransitionName: "cube" }}>{children}</div>
    </main>
  );
}
