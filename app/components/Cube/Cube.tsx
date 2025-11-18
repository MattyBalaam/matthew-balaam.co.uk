import { type ReactNode } from "react";

import styles from "./cube.module.css";

export interface CubeProps {
  children: ReactNode;
}

export function Cube({ children }: CubeProps) {
  return (
    <main className={styles.cubeWrapper}>
      <div className={styles.cube}>{children}</div>
    </main>
  );
}
